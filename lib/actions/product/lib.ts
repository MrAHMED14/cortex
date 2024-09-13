import { ProductFilterValues } from "@/lib/types/product"
import { Prisma } from "@prisma/client"

export function prismaDynamicQuery({
  query,
  category,
  subCategory,
  selectedOrder,
  price,
  pagination,
}: ProductFilterValues) {
  const searchString = query
    ?.replace(/&/g, "")
    .replace(/\|/g, "")
    .replace(/'/g, "")
    .split(" ")
    .filter((word) => word.length > 0)
    .join(" & ")

  const searchFilter: Prisma.ProductWhereInput = searchString
    ? {
        OR: [
          { title: { search: searchString } },
          { description: { search: searchString } },
          { subcategory: { name: { search: searchString } } },
          { subcategory: { mainCategory: { name: { search: searchString } } } },
        ],
      }
    : {}

  const where: Prisma.ProductWhereInput | undefined = {
    AND: [
      searchFilter,

      subCategory && subCategory.length > 0
        ? {
            subcategory: { name: { equals: subCategory, mode: "insensitive" } },
          }
        : {},

      category && category.length > 0
        ? {
            subcategory: {
              mainCategory: { name: { equals: category, mode: "insensitive" } },
            },
          }
        : {},

      price ? { price } : {},
    ],
  }

  const orderBy:
    | Prisma.ProductOrderByWithRelationInput
    | Prisma.ProductOrderByWithRelationInput[]
    | undefined =
    selectedOrder?.name === "price" ? { price: selectedOrder.value } : undefined

  return { where, orderBy, pagination }
}
