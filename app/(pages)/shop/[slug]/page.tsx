import { getProductBySlug, getProductPath } from "@/lib/actions/product/action"
import { notFound } from "next/navigation"
import ProductImageGallery from "@/components/product/product-details/image-gallery"
import MaxWidthWrapper from "@/components/global/max-width-wrapper"
import ProductPath from "@/components/product/path"
import ProductInfo from "@/components/product/product-details/info"
import ProductCard from "@/components/product/card"
import Title from "@/components/ui/title"
import Link from "next/link"
import { buttonVariants } from "@/components/ui/button"
import { Product } from "@prisma/client"

const TEST = {
  id: "1",
  title: "Xiaomi Redmi Note 11 Pro",
  description: "string",
  price: 299,
  discountPrice: null,
  slug: "xiaomi-redmi-note-11-pro",
  img: ["string"],
  stock: 10,
  OrderThreshold: 5,
  createdAt: new Date(),
  updatedAt: null,
  isPublish: true,
  subcategoryId: "string",
} as Product

interface ProductDetailsPageProps {
  params: { slug: string }
}

export default async function ProductDetailsPage({
  params: { slug },
}: ProductDetailsPageProps) {
  const product = await getProductBySlug(slug)

  if (!product) {
    return notFound()
  }

  if (!product.isPublish) {
    return notFound()
  }

  const { category, subcategory } = await getProductPath(product.subcategoryId)
  return (
    <MaxWidthWrapper>
      <div className="py-6 sm:py-24">
        <ProductPath category={category} subcategory={subcategory} />

        <div className="max-w-2xl mx-auto py-16 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-x-8 lg:items-start">
            <ProductImageGallery product={product} />
            <ProductInfo product={product} />
          </div>
        </div>

        <section>
          <div className="w-full flex flex-col min-[430px]:flex-row min-[430px]:justify-between min-[430px]:items-center">
            <Title>Related Products</Title>
            <Link href="#" className={buttonVariants({})}>
              view more
            </Link>
          </div>

          <div className="mt-8 w-full grid grid-cols-1 sm:grid-cols-2 min-[890px]:grid-cols-3 min-[1190px]:grid-cols-4 min-[1360px]:grid-cols-5 place-items-center gap-10">
            {Array(5)
              .fill(5)
              .map((_, index) => (
                <ProductCard key={index} product={TEST} />
              ))}
          </div>
        </section>
      </div>
    </MaxWidthWrapper>
  )
}
