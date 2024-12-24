import { buttonVariants } from "@/components/ui/button"
import { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "404 | Cortex",
  description: "404: this page isn't working right now",
}

export default function NotFound() {
  return (
    <div className="h-screen w-full flex flex-col gap-10 items-center justify-center">
      <p className="font-medium text-lg">
        404 | Could not find requested resource
      </p>
      <Link href="/" className={buttonVariants({})}>
        Return Home
      </Link>
    </div>
  )
}
