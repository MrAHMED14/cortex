import { MainCategory, Subcategory } from "@prisma/client"
import { Suspense } from "react"

import FilterOptions from "./filter-options"

interface FilterProps {
  categories?: MainCategory[]
  subCategories?: Subcategory[]
}

export default function Filter({ categories, subCategories }: FilterProps) {
  return (
    <div className="w-[240px] hidden lg:block">
      <div className="sticky top-16 border w-full flex-col p-4 rounded-md shadow-sm">
        <h1 className="font-bold text-lg">Filters</h1>
        <Suspense>
          <FilterOptions
            categories={categories}
            subCategories={subCategories}
          />
        </Suspense>
      </div>
    </div>
  )
}
