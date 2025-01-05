"use server"

import prisma from "@/lib/db/prisma"
import { UserFilterValues } from "@/lib/types/user"
import { revalidatePath } from "next/cache"
import { prismaDynamicQuery } from "./lib"

export async function getAllUsers(filterValues: UserFilterValues) {
  try {
    const { where, pagination } = prismaDynamicQuery(filterValues)

    const users = await prisma.user.findMany({
      where,
      skip: pagination?.skip,
      take: pagination?.take,
    })

    revalidatePath("/dashboard/users")
    return users
  } catch (error) {
    console.error(error)
    throw error
  }
}

export async function getUserById(userId: string) {
  try {
    const user = await prisma.user.findUnique({
      where: {
        id: userId,
      },
    })
    return user
  } catch (error) {
    console.error(error)
    throw error
  }
}

export async function countUsers(filterValues: UserFilterValues) {
  try {
    const { where } = prismaDynamicQuery(filterValues)

    const totalItemCount = await prisma.user.count({
      where,
    })
    return totalItemCount
  } catch (error) {
    console.error(error)
    throw error
  }
}

export async function deleteUser(userId: string) {
  try {
    await prisma.user.delete({
      where: {
        id: userId,
      },
    })
    revalidatePath("/dashboard/users")
  } catch (error) {
    console.error(error)
    throw error
  }
}

export async function updateRole(userId: string, newRole: "ADMIN" | "USER") {
  try {
    const updatedUser = await prisma.user.update({
      where: {
        id: userId,
      },
      data: {
        role: newRole,
      },
    })
    revalidatePath("/dashboard/users")
    return updatedUser
  } catch (error) {
    console.error(error)
    throw error
  }
}

export async function updateProfile(
  userId: string,
  username: string,
  newRole: "ADMIN" | "USER"
) {
  if (!userId || !username || !newRole) {
    throw new Error(
      "Invalid input: userId, username, and newRole are required."
    )
  }
  try {
    const updatedUser = await prisma.user.update({
      where: {
        id: userId,
      },
      data: {
        role: newRole,
        displayName: username,
      },
    })
    revalidatePath("/dashboard/users")
    return updatedUser
  } catch (error) {
    console.error(error)
    throw error
  }
}

export async function updateUsername(userId: string, username: string) {
  if (!userId || !username) {
    throw new Error("Invalid input: userId, username are required.")
  }

  try {
    const updatedUser = await prisma.user.update({
      where: {
        id: userId,
      },
      data: {
        displayName: username,
      },
    })
    revalidatePath("/account")
    return updatedUser
  } catch (error) {
    console.error(error)
    throw error
  }
}
