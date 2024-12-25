"use server"

import prisma from "@/lib/db/prisma"
import { OrderRequest } from "@/lib/types/order"
import { revalidatePath } from "next/cache"
import { orderDynamicQuery } from "./lib"
import { OrderFilterValues, OrderWithUser } from "@/lib/types/order"

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
          commune: address.commune,
          firstName: address.firstName,
          lastName: address.lastName,
          phoneNumber: address.phoneNumber,
          wilaya: address.wilaya,

          userId: user.id,
        },
      })

      // Create the order
      const createdOrder = await tx.order.create({
        data: {
          userId: user.id,
          total: order.subtotal,
          addressId: addressRecord.id,
          items: {
            create: order.items.map((item) => ({
              productId: item.productId,
              quantity: item.quantity,
              price: item.product.discountPrice
                ? item.product.discountPrice
                : item.product.price,
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
          select: { stock: true, OrderThreshold: true },
        })

        if (!product) {
          throw new Error(`Product with ID ${item.productId} not found`)
        }

        // Check if stock is below the order threshold
        if (product.stock - item.quantity <= product.OrderThreshold) {
          throw new Error(
            `Stock for product ${item.product.title} cannot go below the order threshold`
          )
        }

        // Update the stock
        await tx.product.update({
          where: { id: item.productId },
          data: {
            stock: {
              decrement: item.quantity,
            },
          },
        })
      }

      // Delete the cart
      await tx.cart.delete({
        where: {
          id: order.id,
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

export async function deleteOrder(orderId: string) {
  try {
    if (!orderId) throw new Error("orderId not found.")

    await prisma.order.delete({
      where: { id: orderId },
    })

    revalidatePath("/dashboard/orders")
  } catch (error) {
    console.error(error)
    throw error
  }
}

export async function getAllOrders(filterValue: OrderFilterValues) {
  try {
    const { where, pagination } = orderDynamicQuery(filterValue)
    const orders: OrderWithUser[] = await prisma.order.findMany({
      where,
      include: {
        user: true,
        address: true,
      },
      orderBy: { createdAt: "desc" },
      skip: pagination?.skip,
      take: pagination?.take,
    })
    revalidatePath("/dashboard/orders")
    return orders
  } catch (error) {
    console.error(error)
    throw error
  }
}

export async function countOrders(filterValue: OrderFilterValues) {
  try {
    const { where } = orderDynamicQuery(filterValue)
    const totalItemCount = await prisma.order.count({
      where,
    })

    return totalItemCount
  } catch (error) {
    console.error(error)
    throw error
  }
}

export async function getOrderById(id: string) {
  try {
    const orders = await prisma.order.findUnique({
      where: { id },
      include: {
        user: true,
        address: true,
        items: {
          include: {
            product: true,
          },
        },
      },
    })
    revalidatePath("/dashboard/ordres/[id]", "page")
    return orders
  } catch (error) {
    console.error(error)
    throw error
  }
}
