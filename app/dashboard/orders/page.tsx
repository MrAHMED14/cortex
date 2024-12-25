import { Button, buttonVariants } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import {
  CheckIcon,
  MoreHorizontal,
  PlusCircle,
  UserIcon,
  XIcon,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { countProducts, getAllProducts } from "@/lib/actions/product/action"

import { ProductFilterValues } from "@/lib/types/product"
import { Prisma } from "@prisma/client"
import { Badge } from "@/components/ui/badge"
import { formatFloatNumber, formatUSD } from "@/lib/utils"
import Search from "@/components/filter/search"
import IsPublishedFilter from "@/components/filter/published-filter"
import SortOptionDashboard from "@/components/filter/sort-option-dashboard"
import { MobileFilterDashboard } from "@/components/filter/mobile-flter-dashboard"
import ProductPagination from "@/components/product/pagination"
import { countOrders, getAllOrders } from "@/lib/actions/order/action"
import { OrderFilterValues } from "@/lib/types/order"
import OrdersRows from "@/components/dashboard/orders-rows"

interface ProductsRouteProps {
  searchParams: { [key: string]: string | string[] | undefined }
}

export const dynamic = "force-dynamic"

export default async function ProductsRoute({
  searchParams,
}: ProductsRouteProps) {
  const search =
    typeof searchParams.search === "string" ? searchParams.search : undefined

  const status =
    typeof searchParams.status === "string" ? searchParams.status : undefined

  let filter: OrderFilterValues = {
    query: search,
    status,
  }

  const totalItemCount = await countOrders(filter)

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

  const data = await getAllOrders(filter)
  return (
    <>
      <div className="flex items-center justify-end gap-x-4">
        <Search path="/dashboard/orders" name="users orders" />
      </div>
      <Card className="mt-5">
        <CardHeader>
          <CardTitle>Orders</CardTitle>
          <CardDescription>Recent orders from your store!</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Customer Name</TableHead>
                <TableHead>Email</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Date Placed</TableHead>
                <TableHead>Total Amount</TableHead>
                <TableHead className="text-end">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <OrdersRows data={data} />
            </TableBody>
          </Table>
          <div className="my-2">
            {data.length >= 1 &&
              filter &&
              filter.pagination &&
              filter.pagination.totalPages > 1 && (
                <ProductPagination
                  path="/dashboard/orders"
                  currentPage={filter.pagination.currentPage}
                  totalPages={filter.pagination.totalPages}
                />
              )}
          </div>
        </CardContent>
      </Card>
    </>
  )
}
