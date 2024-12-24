"use client"

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { cn } from "@/lib/utils"
import { ChevronDownIcon, Loader2Icon } from "lucide-react"
import { useRouter, useSearchParams } from "next/navigation"
import { useCallback, useState, useTransition } from "react"
import { Button, buttonVariants } from "../ui/button"

const SORT_OPTIONS = [
  { name: "Published", value: "true" },
  { name: "Draft", value: "false" },
] as const

interface IsPublishedFilterProps {}

export default function IsPublishedFilter({}: IsPublishedFilterProps) {
  const router = useRouter()
  const searchParams = useSearchParams()!
  const [isPending, startTransition] = useTransition()

  const [filter, setFilter] = useState({
    sort: searchParams.get("published")?.toLowerCase() || "",
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
              "flex items-center justify-center text-sm font-medium w-full",
            variant: "default",
          })}
        >
          Visibility
          {!isPending && (
            <ChevronDownIcon className="-mr-1 ml-1 h-4 w-4 flex-shrink-0" />
          )}
          {isPending && (
            <Loader2Icon className="animate-spin -mr-1 ml-1 h-4 w-4 flex-shrink-0" />
          )}
        </DropdownMenuTrigger>

        <DropdownMenuContent align="end">
          <Button
            variant="ghost"
            className={cn("text-left w-full block px-4 py-2 text-sm", {
              "text-gray-900 bg-gray-100": "" === filter.sort,
              "text-gray-500": "" !== filter.sort,
            })}
            onClick={() => {
              setFilter((prev) => ({
                ...prev,
                sort: "",
              }))

              startTransition(() => {
                router.push(
                  `/dashboard/products?${createQueryString("published", "")}`
                )
              })
            }}
          >
            None
          </Button>

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
                    `/dashboard/products?${createQueryString(
                      "published",
                      option.value
                    )}`
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
