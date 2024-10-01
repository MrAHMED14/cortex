import { cn } from "@/lib/utils"

interface MainNavbarProps {
  children: React.ReactNode
}

export default function MainNavbar({ children }: MainNavbarProps) {
  return (
    <nav className={cn("w-full bg-white dark:bg-stone-950 ")}>{children}</nav>
  )
}
