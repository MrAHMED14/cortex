"use client"

import {
  Pagination,
  PaginationItemType,
  PaginationItemRenderProps,
} from "@nextui-org/pagination"
import { ChevronLeftIcon, ChevronRightIcon, Loader2Icon } from "lucide-react"
import { useCallback, useTransition } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import { Button, buttonVariants } from "../ui/button"
import { cn } from "@/lib/utils"

interface ProductPaginationProps {
  currentPage: number
  totalPages: number
}

export default function ProductPagination({
  currentPage,
  totalPages,
}: ProductPaginationProps) {
  const [isPending, startTransition] = useTransition()
  const searchParams = useSearchParams()
  const router = useRouter()

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString())
      if (!value.length) {
        params.delete(name)
      } else {
        params.set(name, value)
      }
      return params.toString()
    },
    [searchParams]
  )

  const updateRoute = useCallback(
    (queryString: string) => {
      startTransition(() => {
        router.push(`/shop?${queryString}`, { scroll: true })
      })
    },
    [router]
  )

  const handlePageChange = useCallback(
    (page: number) => {
      updateRoute(createQueryString("page", page.toString()))
    },
    [createQueryString, updateRoute]
  )

  const renderItem = ({
    ref,
    key,
    value,
    isActive,
    setPage,
    className,
  }: PaginationItemRenderProps) => {
    if (value === PaginationItemType.DOTS) {
      return (
        <button key={key} className={className} disabled>
          ...
        </button>
      )
    }

    // cursor is the default item
    return (
      <Button
        ref={ref}
        key={key}
        variant={"ghost"}
        className={cn(
          className,
          isActive && "dark:bg-muted bg-muted-foreground/20 rounded",
          "dark:hover:bg-muted hover:bg-muted-foreground/20"
        )}
        onClick={() => setPage(value as number)}
      >
        {value}
      </Button>
    )
  }

  return (
    <div className="flex flex-col gap-y-2 items-center my-10">
      <div className="flex items-center justify-center gap-x-4">
        {currentPage > 1 && (
          <span
            onClick={() => handlePageChange(currentPage - 1)}
            className={cn(
              buttonVariants({ variant: "ghost" }),
              "hidden sm:flex items-center justify-center gap-2 cursor-pointer dark:hover:bg-muted hover:bg-muted-foreground/20"
            )}
          >
            <ChevronLeftIcon className="h-4 w-4" />
            <span>Previous</span>
          </span>
        )}
        <Pagination
          disableCursorAnimation
          total={totalPages}
          page={currentPage}
          initialPage={1}
          className="gap-2 rounded overflow-hidden"
          radius="md"
          renderItem={renderItem}
          onChange={handlePageChange}
        />
        {currentPage < totalPages && (
          <span
            onClick={() => handlePageChange(currentPage + 1)}
            className={cn(
              buttonVariants({ variant: "ghost" }),
              "hidden sm:flex items-center justify-center gap-2 cursor-pointer dark:hover:bg-muted hover:bg-muted-foreground/20"
            )}
          >
            <span>Next</span>
            <ChevronRightIcon className="h-4 w-4" />
          </span>
        )}
      </div>

      <div
        className={cn(
          buttonVariants({ variant: "outline" }),
          "hidden",
          isPending && "block"
        )}
      >
        {isPending && (
          <span className="flex items-center gap-2">
            Loading <Loader2Icon className="h-4 w-4 animate-spin" />
          </span>
        )}
      </div>
    </div>
  )
}
