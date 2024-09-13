"use client"

import { buttonVariants } from "@/components/ui/button"
import { ArrowLeftIcon } from "lucide-react"

import MaxWidthWrapper from "@/components/global/max-width-wrapper"
import Title from "@/components/ui/title"
import Link from "next/link"

interface ErrorProps {}
export default function Error({}: ErrorProps) {
  return (
    <MaxWidthWrapper>
      <div className="py-24 flex flex-col items-center justify-center">
        <Title>Something went wrong.</Title>
        <p className="w-1/2 text-center text-muted-foreground">
          If you encounter any frequent problems, please don&rsquo;t hesitate to
          contact the developer. Your feedback is essential for our continuous
          improvement.
        </p>
        <Link
          href="/"
          className={buttonVariants({ className: "flex gap-2 mt-20" })}
        >
          <ArrowLeftIcon className="w-4 h-4" /> Return Home
        </Link>
      </div>
    </MaxWidthWrapper>
  )
}
