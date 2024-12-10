import type { Metadata } from "next"
import { Toaster } from "@/components/ui/sonner"
import { Inter } from "next/font/google"
import { cn } from "@/lib/utils"

import ContactBar from "@/components/navbar/contact-bar"
import SearchBar from "@/components/navbar/search-bar"
import Navbar from "@/components/navbar/navbar"
import Footer from "@/components/footer/footer"
import Up from "@/components/ui/up"
import "./globals.css"

export const inter = Inter({ subsets: ["latin"], display: "swap" })

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
        <ContactBar />
        <SearchBar />
        <Navbar />
        <main className="flex flex-col h-full min-h-screen">
          <div className="flex-grow flex-1">{children}</div>
          <Footer />
        </main>
        <Toaster position="top-center" richColors />
        <Up />
      </body>
    </html>
  )
}
