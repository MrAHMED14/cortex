import MaxWidthWrapper from "@/components/global/max-width-wrapper"
import SlideReveal from "@/components/slider/slide-reveal"
import HomeSection from "@/components/product/home-section"
import { Product } from "@prisma/client"
import {
  getAllProducts,
  getHomePageProdcts,
} from "@/lib/actions/product/action"

const TEST = {
  id: "1",
  title: "Xiaomi Redmi Note 11 Pro updated",
  description: "string",
  price: 299,
  slug: "xiaomi-redmi-note-11-pro",
  img: ["string"],
  stock: 0,
  createdAt: new Date(),
  isPublish: true,
  discountPrice: 120,
  updatedAt: null,
  subcategoryId: "string",
} as Product

export default async function Home() {
  const imgURL = [
    { link: "#", url: "/slider/500.jpg" },
    { link: "#", url: "/slider/900.jpg" },
    { link: "#", url: "/slider/200-1.jpg" },
  ]

  const data: Product[] | null = await getHomePageProdcts()

  return (
    <MaxWidthWrapper>
      <section className="mt-3">
        <SlideReveal imgURL={imgURL} />
      </section>

      <div className="space-y-28 mt-6">
        {/* Popular Products */}
        <HomeSection produsts={data} title="Popular Products" url="/shop" />

        {/* New Arrivals */}
        <HomeSection produsts={data} title="New Arrivals" url="/shop" />

        {/* Desktop & PC */}
        <HomeSection produsts={data} title="Desktop & PC" url="/shop" />

        {/* Clavier & Souris */}
        <HomeSection produsts={data} title="Clavier & Souris" url="/shop" />

        {/* Software */}
        <HomeSection produsts={data} title="Software" url="/shop" />
      </div>
    </MaxWidthWrapper>
  )
}
