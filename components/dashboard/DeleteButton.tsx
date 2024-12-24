"use client"

import { Button } from "@/components/ui/button"
import { deleteProduct } from "@/lib/actions/product/action"
import { Loader2 } from "lucide-react"
import { useRouter } from "next/navigation"
import { useTransition } from "react"
import { toast } from "sonner"

interface DeleteButtonProps {
  productId: string
}
export function DeleteButton({ productId }: DeleteButtonProps) {
  const [isPending, startTransition] = useTransition()
  const router = useRouter()

  const handleDeleteProduct = () => {
    startTransition(async () => {
      await deleteProduct(productId)
      toast.success("Product Deleted Successfully")
      router.push("/dashboard/products")
    })
  }
  return (
    <Button
      onClick={handleDeleteProduct}
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
