import type { Metadata } from "next"
import { Toaster } from "@/components/ui/sonner"
import { Inter } from "next/font/google"
import { cn } from "@/lib/utils"

import Providers from "@/components/global/providers"
import Footer from "@/components/footer/footer"
import Navbar from "@/components/navbar/navbar"

import "./globals.css"

export const inter = Inter({ subsets: ["latin"], display: "swap" })

// TODO:
// Change the Metadata
export const metadata: Metadata = {
  title: "App",
  description: "app",
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="h-full" suppressHydrationWarning>
      <body
        className={cn("h-full antialiased", inter.className)}
        suppressHydrationWarning
      >
        <Providers>
          <main className="flex flex-col h-full min-h-screen">
            <Navbar />
            <div className="flex-grow flex-1 mt-14">{children}</div>
            <Footer />
          </main>
          <Toaster position="top-center" richColors />
        </Providers>
      </body>
    </html>
  )
}
