import { cn } from "@/lib/utils"

interface MaxWidthWrapperProps {
  className?: string
  children: React.ReactNode
}

export default function MaxWidthWrapper({
  children,
  className,
}: MaxWidthWrapperProps) {
  return (
    <div
      className={cn("w-full max-w-screen-2xl mx-auto px-5 md:px-10", className)}
    >
      {children}
    </div>
  )
}
