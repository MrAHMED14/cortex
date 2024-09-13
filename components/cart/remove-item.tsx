"use client"

import { HeartIcon, Loader2Icon, XIcon } from "lucide-react"
import { deleteCartItem } from "@/lib/actions/cart/action"
import { useTransition } from "react"

interface RemoveItemProps {
  productId: string
}

export default function RemoveItem({ productId }: RemoveItemProps) {
  const [isPending, startTransition] = useTransition()

  const handleDeleteCartItem = () => {
    startTransition(async () => {
      await deleteCartItem(productId)
    })
  }
  return (
    <div className="flex items-center gap-4">
      <button className="flex gap-1 items-center text-sm font-medium text-gray-500 hover:text-stone-950 dark:text-gray-400 dark:hover:text-white transition-colors">
        <HeartIcon className="size-5" />
        Add to Favorites
      </button>

      <button
        onClick={handleDeleteCartItem}
        className="flex gap-1 items-center text-sm font-medium text-destructive dark:text-red-500 hover:dark:text-red-300 hover:text-red-700 transition-colors"
      >
        {isPending ? (
          <Loader2Icon className="size-5 animate-spin" />
        ) : (
          <XIcon className="size-6" />
        )}
        Remove
      </button>
    </div>
  )
}
