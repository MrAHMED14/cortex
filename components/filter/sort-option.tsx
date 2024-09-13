"use client"

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { useCallback, useState, useTransition } from "react"
import { ChevronDownIcon, Loader2Icon } from "lucide-react"
import { useRouter, useSearchParams } from "next/navigation"
import { Button, buttonVariants } from "../ui/button"
import { cn } from "@/lib/utils"

interface SortOptionProps {}

const SORT_OPTIONS = [
  { name: "None", value: "" },
  { name: "Price: Low to High", value: "price-asc" },
  { name: "Price: High to Low", value: "price-desc" },
] as const

export default function SortOption({}: SortOptionProps) {
  const router = useRouter()
  const searchParams = useSearchParams()!
  const [isPending, startTransition] = useTransition()

  const [filter, setFilter] = useState({
    sort: searchParams.get("sort") || "",
  })

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams)
      if (!value.length) {
        params.delete(name)
      } else {
        params.set(name, value)
      }
      return params.toString()
    },
    [searchParams]
  )

  return (
    <div className="flex items-center">
      <DropdownMenu>
        <DropdownMenuTrigger
          disabled={isPending}
          className={buttonVariants({
            className:
              "flex items-center justify-center text-sm font-medium hover:bg-muted-foreground/40",
            variant: "ghost",
          })}
        >
          Sort
          {!isPending && (
            <ChevronDownIcon className="-mr-1 ml-1 h-4 w-4 flex-shrink-0" />
          )}
          {isPending && (
            <Loader2Icon className="animate-spin -mr-1 ml-1 h-4 w-4 flex-shrink-0" />
          )}
        </DropdownMenuTrigger>

        <DropdownMenuContent align="end">
          {SORT_OPTIONS.map((option) => (
            <Button
              variant="ghost"
              key={option.name}
              className={cn("text-left w-full block px-4 py-2 text-sm", {
                "text-gray-900 bg-gray-100": option.value === filter.sort,
                "text-gray-500": option.value !== filter.sort,
              })}
              onClick={() => {
                setFilter((prev) => ({
                  ...prev,
                  sort: option.value,
                }))

                startTransition(() => {
                  router.push(
                    `/shop?${createQueryString("sort", option.value)}`
                  )
                })
              }}
            >
              {option.name}
            </Button>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  )
}
