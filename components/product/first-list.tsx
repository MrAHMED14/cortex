import { ProductFilterValues } from "@/lib/types/product"
import { getAllProducts } from "@/lib/actions/product/action"

import ProductCard from "./card"
import ProductPagination from "./pagination"

interface ProductReelsProps {
  filterValues?: ProductFilterValues
}

export default async function ProductReels({
  filterValues,
}: ProductReelsProps) {
  const products = await getAllProducts(filterValues ? filterValues : {})

  return (
    <div className="w-full flex flex-col mb-20">
      {/* Products Reels */}
      {products && (
        <>
          <div className="w-full grid grid-cols-1 sm:grid-cols-2 min-[960px]:grid-cols-3 min-[1310px]:grid-cols-4 place-items-center lg:place-items-end gap-y-10">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          {products.length >= 1 &&
            filterValues &&
            filterValues.pagination &&
            filterValues.pagination.totalPages > 1 && (
              <ProductPagination
                currentPage={filterValues.pagination.currentPage}
                totalPages={filterValues.pagination.totalPages}
              />
            )}
        </>
      )}

      {/* Nothing to show message */}
      {products && !products.length && (
        <div className="w-full h-[calc(100vh-150px)] flex items-center justify-center">
          <h1 className="text-2xl sm:text-4xl font-bold text-center mb-14 dark:text-muted-foreground text-stone-950/50">
            Nothing to show
          </h1>
        </div>
      )}
    </div>
  )
}
