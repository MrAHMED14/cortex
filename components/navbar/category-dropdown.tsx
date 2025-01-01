import React, { memo } from "react"
import Link from "next/link"
import { BiSolidCategory } from "react-icons/bi"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { CategoryWithSub } from "@/lib/types/product"

interface CategoryDropdownProps {
  categories: CategoryWithSub[]
}

const stringToUrlSafe = (inputString: string) => {
  return encodeURIComponent(inputString.toLowerCase()).replace(/%20/g, "+")
}

const CategoryItem = memo(({ category }: { category: CategoryWithSub }) => {
  if (category && category.subcategories.length > 0) {
    return (
      <DropdownMenuSub>
        <DropdownMenuSubTrigger className="cursor-pointer">
          {category.name}
        </DropdownMenuSubTrigger>
        <DropdownMenuSubContent>
          {category.subcategories.map((subcategory) => (
            <DropdownMenuItem key={subcategory.id} className="cursor-pointer">
              <Link
                href={`/shop?category=${stringToUrlSafe(
                  category.name
                )}&subcategory=${stringToUrlSafe(subcategory.name)}`}
              >
                {subcategory.name}
              </Link>
            </DropdownMenuItem>
          ))}
        </DropdownMenuSubContent>
      </DropdownMenuSub>
    )
  } else {
    return (
      <DropdownMenuItem className="cursor-pointer">
        <Link href={`/shop?category=${stringToUrlSafe(category.name)}`}>
          {category.name}
        </Link>
      </DropdownMenuItem>
    )
  }
})

CategoryItem.displayName = "CategoryItem"

const CategoryDropdown = memo(function CategoryDropdown({
  categories,
}: CategoryDropdownProps) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="focus-visible:border-hidden focus-within:border-hidden focus:border-hidden border-hidden">
        <p className="hidden lg:flex items-center gap-1 text-base md:text-lg font-bold">
          <BiSolidCategory /> Browse Categories
        </p>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="pt-5 w-56">
        {categories.map((category, index) => (
          <React.Fragment key={category.id}>
            <CategoryItem category={category} />
            {index < categories.length - 1 && <DropdownMenuSeparator />}
          </React.Fragment>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
})

export default CategoryDropdown
