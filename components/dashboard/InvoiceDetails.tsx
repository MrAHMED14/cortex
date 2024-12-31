"use client"
import wilayas from "@/lib/data/wilayas.json"

import { Button, buttonVariants } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { CheckCircle, Edit, MapPin, Phone, Printer, Trash2 } from "lucide-react"
import { useState, useTransition } from "react"
import { MdNumbers } from "react-icons/md"
import Select from "../ui/select"
import { OrderDetails } from "@/lib/types/order"
import { Badge } from "../ui/badge"
import { cn, formatUSD } from "@/lib/utils"
import Image from "next/image"
import { toast } from "sonner"
import { updateOrderStatus } from "@/lib/actions/order/action"
import Link from "next/link"

interface InvoiceDetailsProps {
  data: OrderDetails
}
export default function InvoiceDetailsPage({
  data: { id, user, address, items, total, createdAt, status, updatedAt },
}: InvoiceDetailsProps) {
  const [isPrinting, setIsPrinting] = useState(false)
  const [isPending, startTransition] = useTransition()
  const [statusOrder, setStatusOrder] = useState<
    "PENDING" | "DELIVERED" | "CANCELLED"
  >(status)

  const handlePrint = () => {
    setIsPrinting(true)
    window.print()
    setIsPrinting(false)
  }

  const handleStatusOrderChange: (
    e: React.ChangeEvent<HTMLSelectElement>
  ) => void = (e) => {
    const value = e.target.value as "PENDING" | "DELIVERED" | "CANCELLED"
    startTransition(async () => {
      await updateOrderStatus(id, value)
    })
    setStatusOrder(value)
    toast.success("Order status updated successfully")
  }
  const getWilayaCode = (wilaya: string) => {
    return wilayas.find((w) => w.name === wilaya)?.code
  }

  return (
    <div className="sm:container mx-auto md:p-8">
      <Card>
        <CardHeader className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <CardTitle className="text-2xl">Invoice Details</CardTitle>
            <CardDescription>Invoice #{id}</CardDescription>
          </div>
          <div className="flex flex-wrap gap-2">
            <Select
              disabled={isPending}
              value={statusOrder}
              onChange={handleStatusOrderChange}
            >
              <option value="PENDING">Pending</option>
              <option value="DELIVERED">Delivered</option>
              <option value="CANCELLED">Cancelled</option>
            </Select>
            <Button
              variant="outline"
              onClick={handlePrint}
              disabled={isPrinting}
            >
              <Printer className="mr-2 h-4 w-4" />
              {isPrinting ? "Printing..." : "Print"}
            </Button>
            <Link
              href={`/dashboard/orders/${id}/delete`}
              className={buttonVariants({
                variant: "destructive",
              })}
            >
              <Trash2 className="mr-2 h-4 w-4" />
              Delete
            </Link>
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div>
              <h3 className="font-semibold text-lg mb-2 flex items-center gap-2">
                <MdNumbers />
                <span>{`${getWilayaCode(address.wilaya)} ${
                  address.wilaya
                }, ${address.commune.toLowerCase()}`}</span>
              </h3>
              <div className="space-y-1">
                <p className="font-medium">
                  <span className="uppercase">{address.firstName}</span>{" "}
                  <span className="capitalize">{address.lastName}</span>
                </p>
                <p className="flex items-center">
                  <MapPin className="mr-2 h-4 w-4 text-muted-foreground" />
                  {address.street}
                </p>
                <p className="flex items-center">
                  <Phone className="mr-2 h-4 w-4 text-muted-foreground" />
                  {address.phoneNumber}
                </p>
                <p className="flex items-center">
                  <Edit className="mr-2 h-4 w-4 text-muted-foreground" />
                  {user.email}
                </p>
              </div>
            </div>
            <div className="text-right">
              <p>
                <span className="font-medium">Invoice Date:</span>{" "}
                {createdAt.toLocaleString("en-GB", {
                  day: "2-digit",
                  month: "2-digit",
                  year: "numeric",
                  hour: "2-digit",
                  minute: "2-digit",
                })}
              </p>
              <p>
                {updatedAt && (
                  <>
                    <span className="font-medium">Due Date:</span>{" "}
                    {updatedAt.toLocaleString("en-GB", {
                      day: "2-digit",
                      month: "2-digit",
                      year: "numeric",
                      hour: "2-digit",
                      minute: "2-digit",
                    })}
                  </>
                )}
              </p>
              <p className="mt-2 flex items-center justify-end gap-2">
                <span className="font-medium">Status:</span>
                <Badge
                  className={cn(
                    statusOrder === "DELIVERED" &&
                      "bg-green-300 text-green-800 hover:bg-green-400",
                    statusOrder === "PENDING" &&
                      "bg-yellow-200 text-yellow-800 hover:bg-yellow-300",
                    statusOrder === "CANCELLED" &&
                      "bg-red-300 text-red-800 hover:bg-red-400"
                  )}
                >
                  {statusOrder === "DELIVERED" && (
                    <CheckCircle className="mr-1 h-3 w-3" />
                  )}
                  {statusOrder}
                </Badge>
              </p>
            </div>
          </div>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Image</TableHead>
                <TableHead>Description</TableHead>
                <TableHead className="text-right">Quantity</TableHead>
                <TableHead className="text-right">Price</TableHead>
                <TableHead className="text-right">Amount</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {items.map((item, index) => (
                <TableRow key={index}>
                  <TableCell>
                    <Image
                      alt="Product Image"
                      src={item.product.img[0]}
                      height={64}
                      width={64}
                      className="rounded-md object-cover h-9 w-9 sm:h-16 sm:w-16"
                    />
                  </TableCell>
                  <TableCell>{item.product.title}</TableCell>
                  <TableCell className="text-right">{item.quantity}</TableCell>
                  <TableCell className="text-right">
                    {formatUSD(item.price)}
                  </TableCell>
                  <TableCell className="text-right">
                    {formatUSD(item.price * item.quantity)}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
        <CardFooter>
          <div className="w-full flex justify-end">
            <div className="w-64">
              <div className="flex justify-between font-semibold text-lg">
                <span>Total:</span>
                <span>{formatUSD(total)}</span>
              </div>
            </div>
          </div>
        </CardFooter>
      </Card>
    </div>
  )
}
