import MaxWidthWrapper from "@/components/global/max-width-wrapper"
import HomeSection from "@/components/product/home-section"
import { ProductDetails } from "@/components/product/product-details/product-details"
import { ProductGallery } from "@/components/product/product-details/product-gallery"
import { getProductBySlug } from "@/lib/actions/product/action"
import { notFound } from "next/navigation"

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

  return (
    <MaxWidthWrapper>
      <div className="py-6">
        <main className="sm:container mx-auto sm:px-4 sm:py-8 mb-20">
          <div className="grid gap-8 md:grid-cols-2">
            <ProductGallery imgs={product.img} />
            <ProductDetails data={product} />
          </div>
        </main>

        <HomeSection
          title="Related Products"
          url="/shop"
          slug={product.slug}
          subcategoryId={product.subcategoryId}
        />
      </div>
    </MaxWidthWrapper>
  )
}
