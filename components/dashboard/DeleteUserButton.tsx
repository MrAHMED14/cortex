"use client"

import { Button } from "@/components/ui/button"
import { deleteUser } from "@/lib/actions/users/action"
import { Loader2 } from "lucide-react"
import { useRouter } from "next/navigation"
import { useTransition } from "react"
import { toast } from "sonner"

interface DeleteButtonProps {
  userId: string
}
export function DeleteUserButton({ userId }: DeleteButtonProps) {
  const [isPending, startTransition] = useTransition()
  const router = useRouter()

  const handleDeleteUser = () => {
    startTransition(async () => {
      await deleteUser(userId)
      toast.success("User Deleted Successfully")
      router.refresh()
      router.back()
    })
  }
  return (
    <Button
      onClick={handleDeleteUser}
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
