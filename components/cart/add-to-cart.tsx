"use client"

import { setProductQuantity } from "@/lib/actions/cart/action"
import { Loader2Icon, ShoppingBagIcon } from "lucide-react"
import { JSX, useState, useTransition } from "react"
import { toast } from "sonner"
import Select from "../ui/select"

interface AddToCartProps {
  productId: string
  stock: number
}
export default function AddToCart({ productId, stock }: AddToCartProps) {
  const [isPending, startTransition] = useTransition()
  const [quantity, setQuantity] = useState(1)

  const handleAddToCart = () => {
    startTransition(async () => {
      if (stock < quantity) {
        toast.error("Insufficient stock")
        return
      }
      await setProductQuantity(productId, quantity, stock)
      toast.success("Added to cart")
    })
  }

  const quantityOptions: any[] = []
  for (let i = 1; i <= 10; i++) {
    quantityOptions.push(
      <option key={i} value={i}>
        {i}
      </option>
    )
  }

  return (
    <div className="flex items-center gap-1">
      <label htmlFor="quantityOptions" className="sr-only">
        quantity options
      </label>
      <Select
        id="quantityOptions"
        disabled={isPending}
        value={quantity}
        onChange={(e) => setQuantity(parseInt(e.currentTarget.value))}
      >
        {quantityOptions}
      </Select>
      <button
        disabled={isPending}
        onClick={handleAddToCart}
        className="max-w-xs flex-1 bg-[#ff0000] rounded-md py-2 px-8 flex items-center justify-center gap-2 text-base font-medium text-white hover:bg-red-600 sm:w-full"
      >
        <ShoppingBagIcon className="size-6" />
        Add to cart
        {isPending && <Loader2Icon className="size-4 animate-spin" />}
      </button>
    </div>
  )
}
