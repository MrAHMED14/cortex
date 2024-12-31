"use client"

import { Button } from "@/components/ui/button"
import { deleteOrder } from "@/lib/actions/order/action"
import { Loader2 } from "lucide-react"
import { useRouter } from "next/navigation"
import { useTransition } from "react"
import { toast } from "sonner"

interface DeleteButtonProps {
  orderId: string
}
export function DeleteOrderButton({ orderId }: DeleteButtonProps) {
  const [isPending, startTransition] = useTransition()
  const router = useRouter()

  const handleDeleteOrder = () => {
    startTransition(async () => {
      await deleteOrder(orderId)
      toast.success("Order Deleted Successfully")
      router.refresh()
      router.back()
    })
  }
  return (
    <Button
      onClick={handleDeleteOrder}
      disabled={isPending}
      variant="destructive"
    >
      {isPending ? (
        <>
          <span className="flex items-center justify-center space-x-2">
            Please Wait...
            <Loader2 className="h-4 w-4 animate-spin" />
          </span>
        </>
      ) : (
        <>Delete</>
      )}
    </Button>
  )
}
