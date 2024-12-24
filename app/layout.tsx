import type { Metadata } from "next"
import { Toaster } from "@/components/ui/sonner"
import { Inter } from "next/font/google"
import { cn } from "@/lib/utils"

import "./globals.css"

const inter = Inter({ subsets: ["latin"], display: "swap" })

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
        className={cn("h-full antialiased", inter.className)}
        suppressHydrationWarning
      >
        {children}
        <Toaster position="top-center" richColors />
      </body>
    </html>
  )
}
