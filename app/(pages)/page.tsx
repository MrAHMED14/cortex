import MaxWidthWrapper from "@/components/global/max-width-wrapper"
import SlideReveal from "@/components/slider/slide-reveal"
import HomeSection from "@/components/product/home-section"
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
        {/* Popular Products */}
        <Suspense fallback={<p>Loading...</p>}>
          <HomeSection title="Popular Products" url="/shop" />

          {/* New Arrivals */}
          <HomeSection title="New Arrivals" url="/shop" />

          {/* Desktop & PC */}
          <HomeSection title="Desktop & PC" url="/shop" />

          {/* Clavier & Souris */}
          <HomeSection title="Clavier & Souris" url="/shop" />

          {/* Software */}
          <HomeSection title="Software" url="/shop" />
        </Suspense>
      </div>
    </MaxWidthWrapper>
  )
}
