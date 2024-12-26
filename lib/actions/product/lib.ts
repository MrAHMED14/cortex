import {
  CategoryFilterValues,
  ProductFilterValues,
  SubcategoryFilterValues,
} from "@/lib/types/product"
import { Prisma } from "@prisma/client"

export function prismaDynamicQuery({
  query,
  category,
  subCategory,
  selectedOrder,
  price,
  published,
  status,
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

  let pubStatus = undefined
  if (published && published === "true") {
    pubStatus = { isPublish: true }
  } else if (published && published === "false") {
    pubStatus = { isPublish: false }
  }

  const where: Prisma.ProductWhereInput | undefined = {
    AND: [
      searchFilter,

      pubStatus ? pubStatus : {},

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

export function categoryDynamicQuery({
  query,
  pagination,
}: CategoryFilterValues) {
  const searchString = query
    ?.replace(/&/g, "")
    .replace(/\|/g, "")
    .replace(/'/g, "")
    .split(" ")
    .filter((word) => word.length > 0)
    .join(" & ")

  const searchFilter: Prisma.MainCategoryWhereInput = searchString
    ? {
        OR: [
          { id: { search: searchString } },
          { name: { search: searchString } },
        ],
      }
    : {}

  const where: Prisma.MainCategoryWhereInput | undefined = {
    AND: [searchFilter],
  }

  return { where, pagination }
}

export function subcategoryDynamicQuery({
  query,
  category,
  pagination,
}: SubcategoryFilterValues) {
  const searchString = query
    ?.replace(/&/g, "")
    .replace(/\|/g, "")
    .replace(/'/g, "")
    .split(" ")
    .filter((word) => word.length > 0)
    .join(" & ")

  const searchFilter: Prisma.SubcategoryWhereInput = searchString
    ? {
        OR: [
          { id: { search: searchString } },
          { name: { search: searchString } },
          { mainCategory: { name: { search: searchString } } },
        ],
      }
    : {}

  const where: Prisma.SubcategoryWhereInput | undefined = {
    AND: [
      searchFilter,
      category && category.length > 0
        ? {
            mainCategory: { name: { equals: category, mode: "insensitive" } },
          }
        : {},
    ],
  }

  return { where, pagination }
}
