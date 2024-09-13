import { cn } from "@/lib/utils"
import { Button } from "./button"

interface SecondaryButtonProps {
  className?: string
  children: React.ReactNode
}
export default function SecondaryButton({
  className,
  children,
}: SecondaryButtonProps) {
  return (
    <Button
      className={cn(
        className,
        "flex w-full items-center gap-2 justify-center rounded-md bg-blue-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-blue-800 dark:bg-blue-600 dark:hover:bg-blue-700"
      )}
    >
      {children}
    </Button>
  )
}
