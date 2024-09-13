import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { capitalize } from "@/lib/utils"
import Link from "next/link"

interface ProductPathProps {
  category: string
  subcategory: string
}

export default function ProductPath({
  category,
  subcategory,
}: ProductPathProps) {
  return (
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <Link
            href="/"
            className="text-lg sm:text-xl hover:dark:text-white hover:text-stone-950"
          >
            Home
          </Link>
        </BreadcrumbItem>
        <BreadcrumbSeparator className="[&>svg]:size-4 sm:[&>svg]:size-5" />
        <BreadcrumbItem>
          <Link
            href={`/shop?category=${category.toLowerCase()}`}
            className="text-lg sm:text-xl hover:dark:text-white hover:text-stone-950"
          >
            {capitalize(category)}
          </Link>
        </BreadcrumbItem>
        <BreadcrumbSeparator className="[&>svg]:size-4 sm:[&>svg]:size-5" />
        <BreadcrumbItem>
          <Link
            href={`/shop?category=${category.toLowerCase()}&subcategory=${subcategory.toLowerCase()}`}
            className="text-lg sm:text-xl hover:dark:text-white hover:text-stone-950"
          >
            {capitalize(subcategory)}
          </Link>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  )
}
