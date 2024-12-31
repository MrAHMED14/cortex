"use client"

import { setProductQuantity } from "@/lib/actions/cart/action"
import { Loader2Icon, ShoppingBagIcon } from "lucide-react"
import { JSX, useState, useTransition } from "react"
import { toast } from "sonner"
import Select from "../ui/select"
import { Button } from "../ui/button"

interface AddToCartProps {
  productId: string
  stock: number
  orderThreshold: number
}
export default function AddToCart({
  productId,
  stock,
  orderThreshold,
}: AddToCartProps) {
  const [isPending, startTransition] = useTransition()

  const handleAddToCart = () => {
    startTransition(async () => {
      if (stock - 1 <= orderThreshold) {
        toast.error("Insufficient stock")
        return
      }
      await setProductQuantity(productId, 1)
      toast.success("Added to cart")
    })
  }

  return (
    <Button disabled={isPending} onClick={handleAddToCart} className="w-full">
      Add to cart
      {isPending && <Loader2Icon className="ml-2 size-4 animate-spin" />}
    </Button>
  )
}
