"use client"

import { Loader2Icon, MoonIcon, SunIcon } from "lucide-react"
import { useEffect, useState } from "react"
import { useTheme } from "next-themes"

interface ThemeSwitcherProps {}

export default function ThemeSwitcher({}: ThemeSwitcherProps) {
  const [mounted, setMounted] = useState(false)
  const { setTheme, resolvedTheme } = useTheme()

  useEffect(() => setMounted(true), [])

  if (!mounted) return <Loader2Icon className="animate-spin w-4 h-4" />

  if (resolvedTheme === "dark") {
    return (
      <div className="hover:bg-muted duration-100 p-1 rounded-full">
        <SunIcon
          size={20}
          className="cursor-pointer duration-300 text-yellow-400"
          onClick={() => setTheme("light")}
        />
      </div>
    )
  }

  if (resolvedTheme === "light") {
    return (
      <div className="hover:bg-muted-foreground/40 p-1 rounded-full">
        <MoonIcon
          size={20}
          className="cursor-pointer duration-300"
          onClick={() => setTheme("dark")}
        />
      </div>
    )
  }
}
