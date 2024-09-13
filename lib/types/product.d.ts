import { Prisma } from "@prisma/client"

export interface ProductFilterValues {
  query?: string
  category?: string
  subCategory?: string
  price?: {
    gte?: number
    lte?: number
  }
  selectedOrder?: {
    name?: string
    value?: Prisma.SortOrder
  }

  pagination?: {
    currentPage: number
    totalPages: number
    skip: number
    take: number
  }
}
