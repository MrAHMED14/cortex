import { cn } from "@/lib/utils"
import { Loader2 } from "lucide-react"
import { Button, ButtonProps } from "./button"

interface LoadingButtonProps extends ButtonProps {
  loading: boolean
}

export default function LoadingButton({
  loading,
  disabled,
  className,
  ...props
}: LoadingButtonProps) {
  return (
    <Button
      disabled={loading || disabled}
      className={cn("flex items-center gap-2", className)}
      {...props}
    >
      {loading && <Loader2 className="size-4 animate-spin" />}
      {props.children}
    </Button>
  )
}
