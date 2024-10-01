import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { buttonVariants } from "@/components/ui/button"
import { Suspense } from "react"

import FilterOptions from "@/components/filter/filter-options"
import { MainCategory, Subcategory } from "@prisma/client"

interface MobileFilterProps {
  categories?: MainCategory[]
  subCategories?: Subcategory[]
}

export function MobileFilter({ categories, subCategories }: MobileFilterProps) {
  return (
    <div className="flex lg:hidden">
      <Sheet>
        <SheetTrigger>
          <span className={buttonVariants({})}>Filter</span>
        </SheetTrigger>
        <SheetContent side="bottom">
          <SheetHeader>
            <SheetTitle className="text-left">Filters</SheetTitle>
            <SheetDescription>
              <span className="sr-only">this is the main filters</span>
            </SheetDescription>
            <Suspense>
              <FilterOptions
                categories={categories}
                subCategories={subCategories}
              />
            </Suspense>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </div>
  )
}
