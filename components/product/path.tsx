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
            className="hover:dark:text-white hover:text-stone-950 text-base"
          >
            Home
          </Link>
        </BreadcrumbItem>
        <BreadcrumbSeparator className="[&>svg]:size-4 sm:[&>svg]:size-5" />
        <BreadcrumbItem>
          <Link
            href={`/shop?category=${category.toLowerCase()}`}
            className="hover:dark:text-white hover:text-stone-950 text-base"
          >
            {capitalize(category)}
          </Link>
        </BreadcrumbItem>
        <BreadcrumbSeparator className="[&>svg]:size-4 sm:[&>svg]:size-5" />
        <BreadcrumbItem>
          <Link
            href={`/shop?category=${category.toLowerCase()}&subcategory=${subcategory.toLowerCase()}`}
            className="hover:dark:text-white hover:text-stone-950 text-base"
          >
            {capitalize(subcategory)}
          </Link>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  )
}
