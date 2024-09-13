import {
  Sheet,
  SheetContent,
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
            <SheetTitle className="text-left">Filter</SheetTitle>
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
