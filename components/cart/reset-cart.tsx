"use client"

import { Loader2Icon, Trash2Icon } from "lucide-react"
import { Button } from "../ui/button"
import { useTransition } from "react"
import { resetCart } from "@/lib/actions/cart/action"

interface ResetCartProps {
  cartId: string
}
export default function ResetCart({ cartId }: ResetCartProps) {
  const [isPending, startTransition] = useTransition()
  const handleRestCart = () => {
    startTransition(async () => {
      await resetCart(cartId)
    })
  }

  return (
    <Button
      variant="ghost"
      onClick={handleRestCart}
      disabled={isPending}
      className="flex items-center gap-2 hover:bg-red-100 hover:text-red-500 text-red-500 transition-colors"
    >
      Reset cart
      {isPending ? (
        <Loader2Icon className="animate-spin size-3" />
      ) : (
        <Trash2Icon className="size-4" />
      )}
    </Button>
  )
}
