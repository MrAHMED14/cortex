import type { Metadata } from "next"
import { Toaster } from "@/components/ui/sonner"
import { inter } from "./styles/fonts"
import { cn } from "@/lib/utils"

import "./globals.css"

// TODO:
// Change the Metadata
export const metadata: Metadata = {
  title: "Cortex",
  description: "app",
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="h-full scroll-smooth" suppressHydrationWarning>
      <body
        style={inter.style}
        className={cn("h-full antialiased", inter.className)}
        suppressHydrationWarning
      >
        {children}
        <Toaster position="top-center" richColors />
      </body>
    </html>
  )
}
