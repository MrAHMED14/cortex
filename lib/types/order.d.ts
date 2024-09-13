import { Prisma } from "@prisma/client"
import { ShoppingCart } from "./cart"

export interface Address {
  street: string
  // city: string;
  // state: string;
  // postalCode: string;
  // country: string;
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

export type OrderProductWithQuantity = Prisma.OrderItemGetPayload<{
  include: {
    product: true
  }
}>

export type OrderHistory = OrderWithProduct & {
  size: number
}
