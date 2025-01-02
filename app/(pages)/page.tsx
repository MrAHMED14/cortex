import MaxWidthWrapper from "@/components/global/max-width-wrapper"
import HomeSection from "@/components/product/home-section"
import ProductSkeleton from "@/components/product/skeleton"
import SlideReveal from "@/components/slider/slide-reveal"
import { Suspense } from "react"

export const dynamic = "force-dynamic"

export default function Home() {
  const imgURL = [
    { link: "#", url: "/slider/500.jpg" },
    { link: "#", url: "/slider/900.jpg" },
    { link: "#", url: "/slider/200-1.jpg" },
  ]

  return (
    <MaxWidthWrapper>
      <section className="mt-3">
        <SlideReveal imgURL={imgURL} />
      </section>

      <div className="space-y-28 mt-6">
        <Suspense
          fallback={
            <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 place-items-center gap-10">
              {Array(5)
                .fill(5)
                .map((_, index) => (
                  <ProductSkeleton key={index} />
                ))}
            </div>
          }
        >
          {/* Popular Products */}
          <HomeSection title="Popular Products" url="/shop" />

          {/* New Arrivals */}
          <HomeSection title="New Arrivals" url="/shop" />

          {/* Desktop & PC */}
          <HomeSection title="Desktop & PC" url="/shop?subcategory=laptops" />

          {/* Tablets */}
          <HomeSection title="Tablets" url="/shop?subcategory=tablets" />

          {/* Switches */}
          <HomeSection title="Switches" url="/shop?subcategory=switches" />

          {/* Microphones */}
          <HomeSection
            title="Microphones"
            url="/shop?subcategory=microphones"
          />
        </Suspense>
      </div>
    </MaxWidthWrapper>
  )
}
