import {
  countProducts,
  getCategories,
  getsubCategories,
} from "@/lib/actions/product/action"
import { ProductFilterValues } from "@/lib/types/product"
import { MobileFilter } from "@/components/filter/mobile-flter"
import { Loader2Icon } from "lucide-react"
import { Suspense } from "react"
import { Prisma } from "@prisma/client"

import MaxWidthWrapper from "@/components/global/max-width-wrapper"
import ProductLoading from "@/components/product/loading"
import ProductReels from "@/components/product/first-list"
import SortOption from "@/components/filter/sort-option"
import Filter from "@/components/filter/filter"
import Title from "@/components/ui/title"

interface ShopPageProps {
  searchParams: { [key: string]: string | string[] | undefined }
}

export const dynamic = "force-dynamic"

export default async function ShopPage({ searchParams }: ShopPageProps) {
  const search =
    typeof searchParams.search === "string" ? searchParams.search : undefined

  const category =
    typeof searchParams.category === "string"
      ? searchParams.category
      : undefined

  const subCategory =
    typeof searchParams.subcategory === "string"
      ? searchParams.subcategory
      : undefined

  const min =
    typeof searchParams.min === "string" ? searchParams.min : undefined

  const max =
    typeof searchParams.max === "string" ? searchParams.max : undefined

  const sort =
    typeof searchParams.sort === "string" ? searchParams.sort : undefined

  const price = {
    gte: min ? parseInt(min) : undefined,
    lte: max ? parseInt(max) : undefined,
  }

  const selectedOrder = {
    name: typeof sort === "string" ? sort.split("-")[0] : undefined,
    value:
      typeof sort === "string"
        ? (sort.split("-")[1] as Prisma.SortOrder)
        : undefined,
  }

  let filter: ProductFilterValues = {
    query: search,
    category,
    subCategory,
    selectedOrder,
    price,
  }
  const totalItemCount = await countProducts(filter)

  const page = typeof searchParams.page === "string" ? searchParams.page : "1"
  const currentPage = parseInt(page)

  const pageSize = 20 as const

  const totalPages = Math.ceil(totalItemCount / pageSize)

  const pagination = {
    currentPage,
    totalPages,
    skip: (currentPage - 1) * pageSize,
    take: pageSize,
  }

  filter = {
    ...filter,
    pagination,
  }

  const categories = await getCategories()
  const subCategories = await getsubCategories(category)

  return (
    <MaxWidthWrapper>
      <div className="py-24">
        <Title>Our Products</Title>
        <p className="text-sm text-muted-foreground">
          Explore our wide selection of valuable products. Your satisfaction is
          our top priority.
        </p>
        <div className="w-full">
          <div className="block mt-8 min-[410px]:flex min-[410px]:flex-row justify-center md:justify-end items-center mb-3">
            <div className="flex items-center justify-center gap-3">
              <Suspense
                fallback={<Loader2Icon className="w-4 h-4 animate-spin" />}
              >
                <SortOption />
              </Suspense>
              <MobileFilter
                categories={categories}
                subCategories={subCategories}
              />
            </div>
          </div>

          <div className="flex gap-x-2 justify-center">
            <Filter categories={categories} subCategories={subCategories} />
            <Suspense
              key={
                subCategory || category || search || sort || min || max || page
              }
              fallback={<ProductLoading />}
            >
              <ProductReels filterValues={filter} />
            </Suspense>
          </div>
        </div>
      </div>
    </MaxWidthWrapper>
  )
}
