import { UserFilterValues } from "@/lib/types/user"
import { Prisma } from "@prisma/client"

export function prismaDynamicQuery({
  query,
  role,
  pagination,
}: UserFilterValues) {
  const searchString = query
    ?.replace(/&/g, "")
    .replace(/\|/g, "")
    .replace(/'/g, "")
    .split(" ")
    .filter((word) => word.length > 0)
    .join(" & ")

  const searchFilter: Prisma.UserWhereInput = searchString
    ? {
        OR: [
          { email: { search: searchString } },
          { displayName: { search: searchString } },
          { id: { search: searchString } },
        ],
      }
    : {}

  const where: Prisma.UserWhereInput | undefined = {
    AND: [searchFilter],
  }
  return { where, pagination }
}
