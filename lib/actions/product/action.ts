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
  description,
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
        description,
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
    description,
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
        description,
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

export async function getHomePageProdcts() {
  try {
    const products = await prisma.product.findMany({
      where: { isPublish: true, discountPrice: { not: null } },
      take: 5,
    })

    revalidatePath("/")
    return products
  } catch (error) {
    console.error(error)
    throw error
  }
}

export async function getCategoriesWithSub() {
  try {
    const categories = await prisma.mainCategory.findMany({
      include: {
        subcategories: true,
      },
    })

    return categories
  } catch (error) {
    console.error(error)
    throw error
  }
}

export async function getPopularProdcts() {
  try {
    const products = await prisma.product.findMany({
      where: {
        isPublish: true,
        slug: {
          in: [
            "msi-mag-b650-tomahawk-wifi",
            "microsoft-surface-laptop-5",
            "hyperx-quadcast-s",
            "gigabyte-aorus-rtx-3070-master",
            "apple-ipad-pro-12-9",
          ],
        },
      },
      take: 5,
    })

    revalidatePath("/")
    return products
  } catch (error) {
    console.error(error)
    throw error
  }
}

export async function getNewArrivalsProdcts() {
  try {
    const products = await prisma.product.findMany({
      where: {
        isPublish: true,
        slug: {
          in: [
            "nvidia-geforce-rtx-3050",
            "netgear-nighthawk-rax200",
            "bequiet-pure-power-11-fm-750",
            "tp-link-sg3428x",
            "logitech-g502-x-plus",
          ],
        },
      },
      take: 5,
    })

    revalidatePath("/")
    return products
  } catch (error) {
    console.error(error)
    throw error
  }
}

export async function getHomeProdcts(subcategory: string) {
  try {
    const products = await prisma.product.findMany({
      where: {
        isPublish: true,
        subcategory: {
          name: subcategory,
        },
      },
      take: 5,
    })

    revalidatePath("/")
    return products
  } catch (error) {
    console.error(error)
    throw error
  }
}

export async function getRelatedProdcts(subcategoryId: string, slug: string) {
  try {
    const products = await prisma.product.findMany({
      where: {
        isPublish: true,
        subcategoryId: subcategoryId,
        slug: {
          not: slug,
        },
      },
      take: 5,
    })

    revalidatePath("/")
    return products
  } catch (error) {
    console.error(error)
    throw error
  }
}
