"use client"

import { incrementProductQuantity } from "@/lib/actions/cart/action"
import { Loader2Icon, ShoppingBagIcon } from "lucide-react"
import { useTransition } from "react"
import { toast } from "sonner"

interface AddToCartProps {
  productId: string
}
export default function AddToCart({ productId }: AddToCartProps) {
  const [isPending, startTransition] = useTransition()

  const handleAddToCart = () => {
    startTransition(async () => {
      await incrementProductQuantity(productId)
      toast.success("Added to Cart.")
    })
  }

  return (
    <button
      disabled={isPending}
      onClick={handleAddToCart}
      className="max-w-xs flex-1 bg-indigo-600 rounded-md py-3 px-8 flex items-center justify-center gap-2 text-base font-medium text-white hover:bg-indigo-700 sm:w-full"
    >
      <ShoppingBagIcon className="size-6" />
      Add to cart
      {isPending && <Loader2Icon className="size-4 animate-spin" />}
    </button>
  )
}
