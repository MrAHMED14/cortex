import { Button } from "@/components/ui/button"
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

import Search from "@/components/filter/search"
import ProductPagination from "@/components/product/pagination"
import { Badge } from "@/components/ui/badge"
import { countUsers, getAllUsers } from "@/lib/actions/users/action"
import { UserFilterValues } from "@/lib/types/user"
import { getUser } from "@/lib/actions/auth/action"

interface ProductsRouteProps {
  searchParams: { [key: string]: string | string[] | undefined }
}

export const dynamic = "force-dynamic"

export default async function UsersRoute({ searchParams }: ProductsRouteProps) {
  const search =
    typeof searchParams.search === "string" ? searchParams.search : undefined

  let filter: UserFilterValues = {
    query: search,
  }

  const totalItemCount = await countUsers(filter)

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

  const data = await getAllUsers(filter)
  const currentUser = await getUser()

  return (
    <>
      <div className="flex items-center justify-end gap-x-4">
        <Search path="/dashboard/users" name="users" />
      </div>
      <Card className="mt-5">
        <CardHeader>
          <CardTitle>Users</CardTitle>
          <CardDescription>Manage and view all users.</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Image</TableHead>
                <TableHead>Name</TableHead>
                <TableHead>Email</TableHead>
                <TableHead>Role</TableHead>
                <TableHead>Date</TableHead>
                <TableHead className="text-end">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {data.map((user) => (
                <TableRow key={user.id}>
                  <TableCell>
                    <div className="flex items-center gap-4">
                      <Image
                        src={user.avatarUrl ?? "/unknow.jpg"}
                        alt={user.email ?? "User avatar"}
                        width={40}
                        height={40}
                        className="rounded-full"
                      />
                    </div>
                  </TableCell>
                  <TableCell>
                    <span>{user.displayName}</span>
                  </TableCell>
                  <TableCell>{user.email}</TableCell>
                  <TableCell>
                    <Badge className="text-xs">{user.role}</Badge>
                  </TableCell>
                  <TableCell>
                    {new Date(user.createdAt).toDateString()}
                  </TableCell>

                  {/* Actions */}
                  <TableCell className="text-end space-x-2">
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
                          <Link href={`/dashboard/users/${user.id}`}>Edit</Link>
                        </DropdownMenuItem>
                        {currentUser?.id !== user.id && (
                          <DropdownMenuItem asChild className="cursor-pointer">
                            <Link href={`/dashboard/users/${user.id}/delete`}>
                              Delete
                            </Link>
                          </DropdownMenuItem>
                        )}
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
                  path="/dashboard/users"
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
