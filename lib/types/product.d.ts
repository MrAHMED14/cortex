import { Prisma } from "@prisma/client"

export interface ProductFilterValues {
  query?: string
  status?: string
  published?: string
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

export interface CategoryFilterValues {
  query?: string
  pagination?: {
    currentPage: number
    totalPages: number
    skip: number
    take: number
  }
}

export interface SubcategoryFilterValues {
  query?: string
  category?: string
  pagination?: {
    currentPage: number
    totalPages: number
    skip: number
    take: number
  }
}

export type CategoryWithSub = Prisma.MainCategoryGetPayload<{
  include: {
    subcategories: true
  }
}>

interface ProductRequest {
  title: string
  slug?: string
  price: number
  stock: number
  description: string
  seuil: number
  isPublish: boolean
  subCategory: string
  discountPrice: number | null
  imgUrls: string[]
}
