"use client"

import { ChangeEvent, JSX, useTransition } from "react"
import { setProductQuantity } from "@/lib/actions/cart/action"

import Select from "../ui/select"
import { toast } from "sonner"

interface QuantityControlProps {
  quantity: number
  productId: string
  stock: number
}

export default function QuantityControl({
  quantity,
  productId,
  stock,
}: QuantityControlProps) {
  const [isPending, startTransition] = useTransition()

  const handleSetQuantity = (e: ChangeEvent<HTMLSelectElement>) => {
    const value = parseInt(e.target.value)
    if (typeof value !== "number") throw new Error("Incompatible type.")

    startTransition(async () => {
      if (stock < value) {
        toast.error("Insufficient stock")
        return
      } else {
        await setProductQuantity(productId, value, stock)
      }
    })
  }

  const quantityOptions: JSX.Element[] = []
  for (let i = 1; i <= 10; i++) {
    quantityOptions.push(
      <option key={i} value={i}>
        {i}
      </option>
    )
  }

  return (
    <div className="flex items-center">
      <label htmlFor="quantityOptions" className="sr-only">
        quantity options
      </label>
      <Select
        id="quantityOptions"
        disabled={isPending}
        value={quantity}
        onChange={handleSetQuantity}
      >
        {quantityOptions}
      </Select>
    </div>
  )
}
