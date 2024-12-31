"use client"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { TableCell, TableRow } from "@/components/ui/table"
import { createClient } from "@/lib/db/supabase/client"
import { OrderDetails } from "@/lib/types/order"
import { cn, formatUSD } from "@/lib/utils"
import { CheckCircle, MoreHorizontal } from "lucide-react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { useEffect } from "react"
import { Badge } from "../ui/badge"

interface OrdersRowsProps {
  data: OrderDetails[] | undefined
}

export default function OrdersRows({ data }: OrdersRowsProps) {
  const supabase = createClient()
  const router = useRouter()

  useEffect(() => {
    const channel = supabase
      .channel("realtime orders")
      .on(
        "postgres_changes",
        { event: "*", schema: "public", table: "orders" },
        (payload) => {
          router.refresh()
        }
      )
      .subscribe()
    return () => {
      supabase.removeChannel(channel)
    }
  }, [router, supabase])

  return (
    <>
      {data?.map((item) => (
        <TableRow key={item.id}>
          <TableCell className="font-semibold">
            <span className="uppercase">{item.address.firstName}</span>{" "}
            <span className="capitalize">{item.address.lastName}</span>
          </TableCell>
          <TableCell>{item.user.email}</TableCell>
          <TableCell>
            <Badge
              className={cn(
                item.status === "DELIVERED" &&
                  "bg-green-300 text-green-800 hover:bg-green-400",
                item.status === "PENDING" &&
                  "bg-yellow-200 text-yellow-800 hover:bg-yellow-300",
                item.status === "CANCELLED" &&
                  "bg-red-300 text-red-800 hover:bg-red-400"
              )}
            >
              {item.status === "DELIVERED" && (
                <CheckCircle className="mr-1 h-3 w-3" />
              )}
              {item.status}
            </Badge>
          </TableCell>
          <TableCell>
            {new Date(item.createdAt).toLocaleString("en-GB", {
              day: "2-digit",
              month: "2-digit",
              year: "numeric",
              hour: "2-digit",
              minute: "2-digit",
            })}
          </TableCell>
          <TableCell>{formatUSD(item.total)}</TableCell>

          {/* Actions */}
          <TableCell className="text-end">
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
                  <Link href={`/dashboard/orders/${item.id}`}>Edit</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild className="cursor-pointer">
                  <Link href={`/dashboard/orders/${item.id}/delete`}>
                    Delete
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </TableCell>
        </TableRow>
      ))}
    </>
  )
}
