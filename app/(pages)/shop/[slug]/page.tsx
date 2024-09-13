import { getProductBySlug, getProductPath } from "@/lib/actions/product/action"
import { notFound } from "next/navigation"
import ProductImageGallery from "@/components/product/product-details/image-gallery"
import MaxWidthWrapper from "@/components/global/max-width-wrapper"
import ProductPath from "@/components/product/path"
import ProductInfo from "@/components/product/product-details/info"

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
    <MaxWidthWrapper className="max-w-7xl">
      <div className="py-24">
        <ProductPath category={category} subcategory={subcategory} />

        <div className="max-w-2xl mx-auto py-16 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-x-8 lg:items-start">
            <ProductImageGallery product={product} />
            <ProductInfo product={product} />
          </div>
        </div>
      </div>
    </MaxWidthWrapper>
  )
}
