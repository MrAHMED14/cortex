export interface UserFilterValues {
  query?: string
  role?: string
  pagination?: {
    currentPage: number
    totalPages: number
    skip: number
    take: number
  }
}
