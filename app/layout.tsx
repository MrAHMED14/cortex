import type { Metadata } from "next"
import { Toaster } from "@/components/ui/sonner"
import { inter } from "./styles/fonts"
import { cn } from "@/lib/utils"

import "./globals.css"

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL as string),
  title: {
    default: "Cortex Store",
    template: "%s - Cortex Store",
  },
  description:
    "The ultimate destination for high-quality tech products and the latest gadgets, offering exceptional prices and top-notch service.",

  twitter: {
    card: "summary_large_image",
  },
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
