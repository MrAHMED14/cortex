import { getProductBySlug, getProductPath } from "@/lib/actions/product/action"
import { notFound } from "next/navigation"
import ProductImageGallery from "@/components/product/product-details/image-gallery"
import MaxWidthWrapper from "@/components/global/max-width-wrapper"
import ProductPath from "@/components/product/path"
import ProductInfo from "@/components/product/product-details/info"
import ProductCard from "@/components/product/card"
import Title from "@/components/ui/title"
import Link from "next/link"

const TEST = {
  id: "1",
  title: "Xiaomi Redmi Note 11 Pro",
  description: "string",
  price: 299,
  discountPrice: null,
  slug: "xiaomi-redmi-note-11-pro",
  img: ["string"],
  stock: 10,
  createdAt: new Date(),
  updatedAt: null,
  isPublish: true,
  subcategoryId: "string",
}

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

        <div className="w-full flex flex-col min-[430px]:flex-row min-[430px]:justify-between min-[430px]:items-center">
          <Title>Popular Products</Title>
          <Link
            href="#"
            className="px-4 py-2 bg-[#ff0000] text-white font-medium rounded-md text-center"
          >
            view more
          </Link>
        </div>

        <div className="w-full mt-11 flex items-center justify-center">
          <div className="w-full flex flex-col mb-20">
            <div className="w-full grid grid-cols-1 sm:grid-cols-2 min-[960px]:grid-cols-3 min-[1310px]:grid-cols-4 place-items-center gap-y-20">
              {Array(4)
                .fill(4)
                .map((_, index) => (
                  <ProductCard
                    key={index}
                    product={TEST}
                    className="scale-110 sm:hover:scale-[1.15]"
                  />
                ))}
            </div>
          </div>
        </div>
      </div>
    </MaxWidthWrapper>
  )
}
