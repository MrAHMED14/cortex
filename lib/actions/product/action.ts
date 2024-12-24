"use server"

import prisma from "@/lib/db/prisma"
import {
  ProductFilterValues,
  ProductRequest,
  SubcategoryFilterValues,
} from "@/lib/types/product"
import { MainCategory, Prisma, Subcategory } from "@prisma/client"
import { revalidatePath } from "next/cache"
import { prismaDynamicQuery, subcategoryDynamicQuery } from "./lib"

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

export async function getSubcategories2(filterValues: SubcategoryFilterValues) {
  try {
    const { where, pagination } = subcategoryDynamicQuery(filterValues)
    const subcategory = await prisma.subcategory.findMany({
      where,
      skip: pagination?.skip,
      take: pagination?.take,
    })
    if (!subcategory) return [] as Subcategory[]

    return subcategory
  } catch (error) {
    console.error(error)
    throw error
  }
}

export async function getProductBySlug(slug: string) {
  try {
    const productBySlug = await prisma.product.findUnique({
      where: { slug },
    })

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

export async function getSubcategoryById(id: string) {
  try {
    const productSubcategory = await prisma.subcategory.findUnique({
      where: { id },
    })

    return productSubcategory
  } catch (error) {
    console.error(error)
    throw error
  }
}

export async function createProduct({
  title,
  price,
  slug,
  stock,
  seuil,
  isPublish,
  subCategory,
  discountPrice,
  imgUrls,
}: ProductRequest) {
  try {
    const subCategoryRecord = await prisma.subcategory.findFirst({
      where: {
        name: subCategory,
      },
    })

    if (!subCategoryRecord || !subCategoryRecord.id) {
      throw new Error(`Subcategory with name '${subCategory}' not found.`)
    }

    if (stock < 0) throw new Error(`stock must be a positive numbre`)

    if (!slug) throw new Error(`slug not found`)

    if (discountPrice && discountPrice > price)
      throw new Error(`discount price > price`)

    await prisma.product.create({
      data: {
        title,
        slug,
        stock,
        OrderThreshold: seuil,
        price,
        isPublish,
        discountPrice,
        subcategoryId: subCategoryRecord.id,
        img: imgUrls,
      },
    })

    revalidatePath("/dashboard/products")
  } catch (error) {
    console.error(error, "\nError creating product...")
  }
}

export async function updateProduct(
  {
    title,
    price,
    stock,
    seuil,
    isPublish,
    subCategory,
    imgUrls,
    discountPrice,
  }: ProductRequest,
  id: string
) {
  try {
    const subCategoryRecord = await prisma.subcategory.findFirst({
      where: {
        name: subCategory,
      },
    })

    if (!subCategoryRecord || !subCategoryRecord.id) {
      throw new Error(`Subcategory with name '${subCategory}' not found.`)
    }

    if (stock < 0) throw new Error(`stock must be a positive numbre`)
    if (discountPrice && discountPrice > price)
      throw new Error(`discount price > price`)

    if (isPublish === false) {
      await prisma.cartItem.deleteMany({ where: { productId: id } })
    }

    await prisma.product.update({
      where: { id },
      data: {
        title,
        stock,
        price,
        OrderThreshold: seuil,
        isPublish,
        discountPrice,
        subcategoryId: subCategoryRecord.id,
        img: imgUrls,
      },
    })

    revalidatePath("/dashboard/products")
    revalidatePath("/dashboard/products/[id]", "page")
  } catch (error) {
    console.error(error, "\nError creating product...")
  }
}

export async function deleteProduct(id: string) {
  try {
    if (!id || id.length === 0) throw new Error("Id not found!")

    await prisma.product.delete({ where: { id } })

    revalidatePath("/dashboard/products")
  } catch (error) {
    console.error(error)
    throw error
  }
}
