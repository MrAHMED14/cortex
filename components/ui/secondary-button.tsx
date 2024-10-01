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
        "flex w-full items-center gap-2 justify-center rounded-md bg-[#ff0000] px-5 py-2.5 text-sm font-medium text-white hover:bg-red-800 dark:hover:bg-red-700"
      )}
    >
      {children}
    </Button>
  )
}
