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

interface ProductsRouteProps {
  searchParams: { [key: string]: string | string[] | undefined }
}

export const dynamic = "force-dynamic"

export default async function ProductsRoute({
  searchParams,
}: ProductsRouteProps) {
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

  const status =
    typeof searchParams.status === "string" ? searchParams.status : undefined

  const published =
    typeof searchParams.published === "string"
      ? searchParams.published
      : undefined

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
    status,
    published,
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

  const data = await getAllProducts(filter)
  function trimString(str: string) {
    return str.length > 60 ? str.substring(0, 30) + "..." : str
  }
  return (
    <>
      <div className="flex items-center justify-end gap-x-4">
        <Search path="/dashboard/products" name="products" />
        <MobileFilterDashboard />
        <div className="md:flex hidden items-center justify-end gap-x-4">
          <SortOptionDashboard />
          <IsPublishedFilter />
          <Button asChild className="md:flex hidden items-center gap-x-2 ">
            <Link href="/dashboard/products/create">
              <PlusCircle className="w-3.5 h-3.5" />
              <span>Add Category</span>
            </Link>
          </Button>

          <Button asChild className="md:flex hidden items-center gap-x-2 ">
            <Link href="/dashboard/products/create">
              <PlusCircle className="w-3.5 h-3.5" />
              <span>Add Product</span>
            </Link>
          </Button>
        </div>
      </div>
      <Card className="mt-5">
        <CardHeader>
          <CardTitle>Products</CardTitle>
          <CardDescription>
            Manage your products and view their sales performance
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Image</TableHead>
                <TableHead>Name</TableHead>
                <TableHead>Selling price</TableHead>
                <TableHead>Stock quantity</TableHead>
                <TableHead>Order threshold</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-end">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {data.map((item) => (
                <TableRow key={item.id}>
                  <TableCell>
                    <Image
                      alt={item.slug}
                      src={item.img[0]}
                      height={64}
                      width={64}
                      className="rounded-md object-cover h-9 w-9 sm:h-16 sm:w-16"
                    />
                  </TableCell>

                  <TableCell>{trimString(item.title)}</TableCell>

                  <TableCell>
                    {item.discountPrice ? (
                      <>
                        <span className="text-xs line-through">
                          {formatUSD(item.price)}
                        </span>
                        <br />
                        <span>
                          {formatUSD(formatFloatNumber(item.discountPrice))}
                        </span>
                      </>
                    ) : (
                      <span>{formatUSD(item.price)}</span>
                    )}
                  </TableCell>

                  <TableCell>{item.stock}</TableCell>

                  <TableCell>{item.OrderThreshold}</TableCell>

                  <TableCell>
                    {item.stock <= item.OrderThreshold ? (
                      <>
                        <Badge className="text-xs bg-red-600 hover:bg-red-500">
                          OUT OF STOCK
                        </Badge>
                      </>
                    ) : (
                      <>
                        <Badge className="text-xs bg-blue-600 hover:bg-blue-500">
                          IN STOCK
                        </Badge>
                      </>
                    )}
                  </TableCell>

                  <TableCell className="text-end space-x-2">
                    <span
                      className={buttonVariants({
                        variant: "ghost",
                        size: "icon",
                      })}
                    >
                      {item.isPublish ? (
                        <>
                          <CheckIcon className="h-4 w-4 text-green-500" />
                        </>
                      ) : (
                        <>
                          <XIcon className="h-4 w-4 text-red-500" />
                        </>
                      )}
                    </span>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button size="icon" variant="ghost">
                          <MoreHorizontal className="h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuLabel>Actions</DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem asChild className="cursor-pointer">
                          <Link href={`/dashboard/products/${item.slug}`}>
                            Edit
                          </Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem asChild className="cursor-pointer">
                          <Link href={`/dashboard/products/${item.id}/delete`}>
                            Delete
                          </Link>
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
          <div className="my-2">
            {data.length >= 1 &&
              filter &&
              filter.pagination &&
              filter.pagination.totalPages > 1 && (
                <ProductPagination
                  path="/dashboard/products"
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
