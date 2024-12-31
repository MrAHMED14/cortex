import { Prisma } from "@prisma/client"
import { ShoppingCart } from "./cart"

export interface Address {
  street: string
  cardNumber: string
  cvv: string
  expiryDate: string
  cardName: string
  wilaya: string
  commune: string
  firstName: string
  lastName: string
  phoneNumber: string
}

export interface OrderRequest {
  userId: string
  order: ShoppingCart
  address: Address
}

export type OrderWithProduct = Prisma.OrderGetPayload<{
  include: {
    items: {
      include: {
        product: true
      }
    }
  }
}>

export type OrderDetails = Prisma.OrderGetPayload<{
  include: {
    user: true
    address: true
    items: {
      include: {
        product: true
      }
    }
  }
}>

export type OrderProductWithQuantity = Prisma.OrderItemGetPayload<{
  include: {
    product: true
  }
}>

export type OrderHistory = OrderWithProduct & {
  size: number
}

export interface OrderFilterValues {
  query?: string
  status?: string
  pagination?: {
    currentPage: number
    totalPages: number
    skip: number
    take: number
  }
}
