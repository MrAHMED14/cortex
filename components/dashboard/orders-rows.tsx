"use client"

import { useState } from "react"
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
import { OrderWithUser } from "@/lib/types/order"
import { MoreHorizontal } from "lucide-react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { useEffect } from "react"
import { Badge } from "../ui/badge"

interface OrdersRowsProps {
  data: OrderWithUser[] | undefined
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
          <TableCell>{item.user.displayName}</TableCell>
          <TableCell>{"Payment"}</TableCell>
          <TableCell>
            {item.isCompleted ? (
              <Badge className="text-xs bg-green-500 hover:bg-green-400">
                Delivered
              </Badge>
            ) : (
              <Badge className="text-xs bg-yellow-400 hover:bg-yellow-300 text-primary">
                Pending
              </Badge>
            )}
          </TableCell>
          <TableCell>{item.createdAt.toLocaleDateString()}</TableCell>

          {/* Actions */}
          <TableCell className="text-end space-x-2">
            <Badge className="text-xs bg-blue-500">New</Badge>

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
