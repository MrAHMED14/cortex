import { Prisma } from "@prisma/client"

export type CartWithProducts = Prisma.CartGetPayload<{
  include: { items: { include: { product: true } } }
}>

export type CartItemWithProduct = Prisma.CartItemGetPayload<{
  include: { product: true }
}>

export type ShoppingCart = CartWithProducts & {
  size: number
  subtotal: number
}

export type CartItemWithProduct = Prisma.CartItemGetPayload<{
  include: { product: true }
}>
