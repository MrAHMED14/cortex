"use client"

import Link from "next/link"
import { useEffect } from "react"
import { Button } from "@/components/ui/button"

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-stone-50 to-stone-100 p-4 text-gray-800">
      <main className="sm:container mx-auto flex max-w-2xl flex-col items-center space-y-8 text-center">
        <h1 className="text-6xl font-bold text-gray-950">Oops!</h1>
        <h2 className="text-4xl font-semibold text-gray-900">
          Something went wrong
        </h2>
        <p className="text-xl text-muted-foreground max-w-lg">
          We apologize for the inconvenience. An unexpected error has occurred.
        </p>
        <p className="text-md text-muted-foreground max-w-lg border-l-4 border-stone-300 pl-4 italic">
          <span className="font-medium">Error:</span>{" "}
          {error.message || "Unknown error"}
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Button
            onClick={reset}
            className="bg-stone-950 text-white hover:bg-stone-900"
          >
            Try Again
          </Button>
          <Button variant="outline" asChild>
            <Link href="/">Return to Home</Link>
          </Button>
        </div>
      </main>
    </div>
  )
}
