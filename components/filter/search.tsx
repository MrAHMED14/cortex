"use client"

import { useCallback, useRef, useState, useTransition } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import { Loader2Icon, SearchIcon } from "lucide-react"
import { Button } from "../ui/button"
import { Input } from "../ui/input"
import { cn } from "@/lib/utils"

interface SearchProps {
  className?: string
}
export default function Search({ className }: SearchProps) {
  const [isSearching, startTransition] = useTransition()
  const inputRef = useRef<HTMLInputElement>(null)
  const router = useRouter()

  const searchParams = useSearchParams()!
  const defaultQuery = searchParams.get("search") || ""
  const page = searchParams.get("page") || ""

  const [query, setQuery] = useState<string>(defaultQuery)

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams)
      if (page && page !== "1") {
        params.delete("page")
      }
      if (!value.length) {
        params.delete(name)
      } else {
        params.set(name, value)
      }
      return params.toString()
    },
    [searchParams, page]
  )

  function search() {
    startTransition(() => {
      router.push(`/shop?${createQueryString("search", query.trim())}`)
    })
  }

  return (
    <div className={cn("flex items-center", className)}>
      <Input
        disabled={isSearching}
        type="text"
        placeholder="Search for products..."
        className="w-full focus-visible:ring-0 border-r-0 rounded-r-none rounded-l-full"
        ref={inputRef}
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            search()
          }

          if (e.key === "Escape") {
            inputRef?.current?.blur()
          }
        }}
      />
      <Button
        disabled={isSearching}
        onClick={search}
        variant={"ghost"}
        className="shadow-sm border border-l-0 rounded-l-none rounded-r-full text-muted-foreground/50 dark:text-muted hover:text-muted-foreground hover:dark:text-muted-foreground/50"
      >
        <h3 className="sr-only">search</h3>
        {isSearching ? (
          <Loader2Icon className="size-[17px] animate-spin" />
        ) : (
          <SearchIcon className="size-[17px]" />
        )}
      </Button>
    </div>
  )
}
