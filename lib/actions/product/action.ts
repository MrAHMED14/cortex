"use server"

import prisma from "@/lib/db/prisma"
import { ProductFilterValues } from "@/lib/types/product"
import { MainCategory, Prisma } from "@prisma/client"
import { revalidatePath } from "next/cache"
import { prismaDynamicQuery } from "./lib"

export async function getAllProducts(filterValues: ProductFilterValues) {
  try {
    const { where, orderBy, pagination } = prismaDynamicQuery(filterValues)

    const products = await prisma.product.findMany({
      where,
      orderBy,
      skip: pagination?.skip,
      take: pagination?.take,
    })

    revalidatePath("/shop")
    revalidatePath("/")
    return products
  } catch (error) {
    console.error(error)
    throw error
  }
}

export async function countProducts(filterValues: ProductFilterValues) {
  try {
    const { where } = prismaDynamicQuery(filterValues)

    const totalItemCount = await prisma.product.count({
      where,
    })
    return totalItemCount
  } catch (error) {
    console.error(error)
    throw error
  }
}

export async function getCategories() {
  try {
    const categories = await prisma.mainCategory.findMany({})
    if (!categories) return [] as MainCategory[]

    return categories
  } catch (error) {
    console.error(error)
    throw error
  }
}

export async function getsubCategories(categoryName?: string) {
  try {
    const where: Prisma.SubcategoryWhereInput | undefined =
      categoryName && categoryName.length > 0
        ? {
            mainCategory: {
              name: { equals: categoryName, mode: "insensitive" },
            },
          }
        : {}
    const subCategories = await prisma.subcategory.findMany({
      where,
    })
    if (!subCategories) return
    return subCategories
  } catch (error) {
    console.error(error)
    throw error
  }
}

export async function getProductBySlug(slug: string) {
  try {
    const productBySlug = await prisma.product.findUnique({ where: { slug } })

    revalidatePath("/shop/[slug]", "page")
    return productBySlug
  } catch (error) {
    console.error(error)
    throw error
  }
}

export async function getProductPath(id: string) {
  try {
    const categoryById = await prisma.subcategory.findUnique({
      where: { id },
      include: { mainCategory: true },
    })
    if (!categoryById) throw new Error("Product not found.")

    revalidatePath("/shop/[slug]", "page")
    return {
      category: categoryById.mainCategory.name,
      subcategory: categoryById.name,
    }
  } catch (error) {
    console.error(error)
    throw error
  }
}
