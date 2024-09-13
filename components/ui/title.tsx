import { cn } from "@/lib/utils"

interface TitleProps {
  children: React.ReactNode
  className?: string
}

export default function Title({ children, className }: TitleProps) {
  return (
    <h1
      className={cn(
        className,
        (className =
          "text-2xl font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-3xl mb-2")
      )}
    >
      {children}
    </h1>
  )
}
