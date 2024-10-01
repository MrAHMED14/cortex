"use server"

import prisma from "@/lib/db/prisma"
import { OrderRequest } from "@/lib/types/order"
import { revalidatePath } from "next/cache"

export async function createOrder(orderRequest: OrderRequest) {
  try {
    const { userId, order, address } = orderRequest

    // Fetch the user (validation step)
    const user = await prisma.user.findUnique({
      where: {
        id: userId,
      },
    })

    if (!user) {
      throw new Error("User not found")
    }

    if (!order) {
      throw new Error("Order not found")
    }

    if (!address) {
      throw new Error("Address not found")
    }

    await prisma.$transaction(async (tx) => {
      // Create the address
      const addressRecord = await tx.address.create({
        data: {
          street: address.street,
          userId: user.id,
        },
      })

      // Create the order
      const createdOrder = await tx.order.create({
        data: {
          userId: user.id,
          addressId: addressRecord.id,
          items: {
            create: order.items.map((item) => ({
              productId: item.productId,
              quantity: item.quantity,
              price: item.product.price,
              discountPrice: item.product.discountPrice ?? null,
            })),
          },
        },
        include: {
          items: {
            include: {
              product: true,
            },
          },
        },
      })

      // Update stock for each product
      for (const item of createdOrder.items) {
        const product = await tx.product.findUnique({
          where: { id: item.productId },
          select: { stock: true },
        })

        if (!product) {
          throw new Error(`Product with ID ${item.productId} not found`)
        }

        // Check if enough stock is available
        if (product.stock < item.quantity) {
          throw new Error(
            `Insufficient stock for product ID ${item.product.title}`
          )
        }

        // Update the stock
        await tx.product.update({
          where: { id: item.productId },
          data: {
            stock: {
              decrement: item.quantity, // Reduce stock by the quantity ordered
            },
          },
        })
      }

      // Delete the cart
      const cartId = order.id
      await tx.cartItem.deleteMany({
        where: {
          cartId,
        },
      })

      await tx.cart.delete({
        where: {
          id: cartId,
        },
      })
    })

    revalidatePath("/checkout")
    revalidatePath("/shop/cart")
  } catch (error) {
    console.error(error)
    throw error
  }
}

export async function getUserOrder(userId: string) {
  try {
    if (!userId) throw new Error("User not found.")
    const userOrder = await prisma.order.findMany({
      where: { userId },
      include: {
        items: {
          include: {
            product: true,
          },
        },
      },
      orderBy: { createdAt: "desc" },
    })

    if (!userOrder) return null

    revalidatePath("/my-orders")
    return userOrder
  } catch (error) {
    console.error(error)
    throw error
  }
}
