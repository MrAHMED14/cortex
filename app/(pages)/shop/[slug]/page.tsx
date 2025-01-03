import MaxWidthWrapper from "@/components/global/max-width-wrapper"
import HomeSection from "@/components/product/home-section"
import { ProductDetails } from "@/components/product/product-details/product-details"
import { ProductGallery } from "@/components/product/product-details/product-gallery"
import { getProductBySlug } from "@/lib/actions/product/action"
import { Metadata } from "next"
import { notFound } from "next/navigation"
import { cache } from "react"

interface ProductDetailsPageProps {
  params: { slug: string }
}

const getProduct = cache(async (slug: string) => {
  return await getProductBySlug(slug)
})

export async function generateMetadata({
  params: { slug },
}: ProductDetailsPageProps): Promise<Metadata> {
  const product = await getProduct(slug)
  if (!product) {
    notFound()
  }

  return {
    title: product.title,
    description: product.description,
  }
}

export default async function ProductDetailsPage({
  params: { slug },
}: ProductDetailsPageProps) {
  const product = await getProduct(slug)

  if (!product) {
    notFound()
  }

  if (!product.isPublish) {
    notFound()
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
