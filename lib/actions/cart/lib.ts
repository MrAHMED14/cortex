import { CartWithProducts, ShoppingCart } from "@/lib/types/cart"
import { Cart, CartItem } from "@prisma/client"
import { cookies } from "next/headers"

import prisma from "@/lib/db/prisma"
import { revalidatePath } from "next/cache"
import { getUser } from "../auth/action"

export async function getCart(): Promise<ShoppingCart | null> {
  const user = await getUser()

  let cart: CartWithProducts | null = null

  if (user && user.id) {
    cart = await prisma.cart.findFirst({
      where: { userId: user.id },
      include: { items: { include: { product: true } } },
    })
  } else {
    const localCartId = cookies().get("localCartId")?.value
    cart = localCartId
      ? await prisma.cart.findUnique({
          where: { id: localCartId },
          include: { items: { include: { product: true } } },
        })
      : null
  }

  if (!cart) {
    return null
  }

  revalidatePath("/shop/cart")
  return {
    ...cart,
    size: cart.items.reduce((acc, item) => acc + 1, 0),
    subtotal: cart.items.reduce(
      (acc, item) => acc + item.quantity * item.product.price,
      0
    ),
  }
}

export async function createCart(): Promise<ShoppingCart> {
  const user = await getUser()

  let newCart: Cart

  if (user && user.id) {
    newCart = await prisma.cart.create({
      data: { userId: user.id },
    })
  } else {
    newCart = await prisma.cart.create({
      data: {},
    })
    // Note: Needs encryption + secure settings in real production app
    cookies().set("localCartId", newCart.id)
  }

  return {
    ...newCart,
    items: [],
    size: 0,
    subtotal: 0,
  }
}

export async function mergeAnonymousCartIntoUserCart(userId: string) {
  const localCartId = cookies().get("localCartId")?.value

  const localCart = localCartId
    ? await prisma.cart.findUnique({
        where: { id: localCartId },
        include: { items: true },
      })
    : null

  if (!localCart) return

  const userCart = await prisma.cart.findFirst({
    where: { userId },
    include: { items: true },
  })

  await prisma.$transaction(async (tx) => {
    if (userCart) {
      const mergedCartItems = mergeCartItems(localCart.items, userCart.items)

      await tx.cartItem.deleteMany({
        where: { cartId: userCart.id },
      })

      await tx.cartItem.createMany({
        data: mergedCartItems.map((item) => ({
          cartId: userCart.id,
          productId: item.productId,
          quantity: item.quantity,
        })),
      })
    } else {
      await tx.cart.create({
        data: {
          userId,
          items: {
            createMany: {
              data: localCart.items.map((item) => ({
                productId: item.productId,
                quantity: item.quantity,
              })),
            },
          },
        },
      })
    }

    await tx.cart.delete({
      where: { id: localCart.id },
    })
    // throw Error("Transaction failed");
    cookies().set("localCartId", "")
  })
}

function mergeCartItems(...cartItems: CartItem[][]): CartItem[] {
  return cartItems.reduce((acc, items) => {
    items.forEach((item) => {
      const existingItem = acc.find((i) => i.productId === item.productId)
      if (existingItem) {
        existingItem.quantity += item.quantity
      } else {
        acc.push(item)
      }
    })
    return acc
  }, [] as CartItem[])
}
