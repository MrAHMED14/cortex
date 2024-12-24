import { Button, buttonVariants } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

import IsPublishedFilter from "@/components/filter/published-filter"
import SortOptionDashboard from "@/components/filter/sort-option-dashboard"
import { MoreHorizontal, PlusCircle } from "lucide-react"
import Link from "next/link"

export function MobileFilterDashboard() {
  return (
    <div className="flex md:hidden">
      <Sheet>
        <SheetTrigger>
          <h3 className="sr-only">more options</h3>
          <span className={buttonVariants({ size: "icon" })}>
            <MoreHorizontal className="h-4 w-4" />
          </span>
        </SheetTrigger>
        <SheetContent side="bottom">
          <SheetHeader>
            <SheetTitle className="text-left">Filters</SheetTitle>
            <SheetDescription>
              <span className="sr-only">this is the main filters</span>
            </SheetDescription>
          </SheetHeader>
          <div className="space-y-4">
            <Button asChild className="flex items-center gap-x-2">
              <Link href="/dashboard/products/create">
                <PlusCircle className="w-3.5 h-3.5" />
                <span>Add Product</span>
              </Link>
            </Button>

            <Button asChild className="flex items-center gap-x-2">
              <Link href="/dashboard/products/create">
                <PlusCircle className="w-3.5 h-3.5" />
                <span>Add Category</span>
              </Link>
            </Button>

            <div className="flex gap-4 w-full">
              <SortOptionDashboard />
              <IsPublishedFilter />
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  )
}
