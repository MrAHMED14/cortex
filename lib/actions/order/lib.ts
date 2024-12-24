import { OrderFilterValues } from "@/lib/types/order"
import { Prisma } from "@prisma/client"

export function orderDynamicQuery({
  query,
  status,
  pagination,
}: OrderFilterValues) {
  const searchString = query
    ?.replace(/&/g, "")
    .replace(/\|/g, "")
    .replace(/'/g, "")
    .split(" ")
    .filter((word) => word.length > 0)
    .join(" & ")

  const searchFilter: Prisma.OrderWhereInput = searchString
    ? {
        OR: [
          { id: { search: searchString } },
          { user: { email: { search: searchString } } },
          { user: { displayName: { search: searchString } } },
          { userId: { search: searchString } },
        ],
      }
    : {}

  const where: Prisma.OrderWhereInput | undefined = {
    AND: [searchFilter],
  }

  return { where, pagination }
}
