import MaxWidthWrapper from "@/components/global/max-width-wrapper"
import ProductSkeleton from "@/components/product/skeleton"
import ProductCard from "@/components/product/card"
import Slider from "@/components/slider/slider"
import Title from "@/components/ui/title"
import Link from "next/link"
import { buttonVariants } from "@/components/ui/button"
import SlideReveal from "@/components/slider/slide-reveal"
import { Product } from "@prisma/client"

const TEST = {
  id: "1",
  title: "Xiaomi Redmi Note 11 Pro",
  description: "string",
  price: 299,
  slug: "xiaomi-redmi-note-11-pro",
  img: ["string"],
  stock: 10,
  createdAt: new Date(),
  isPublish: true,
  discountPrice: 120,
  updatedAt: null,
  subcategoryId: "string",
} as Product

export default function Home() {
  const imgURL = [
    { link: "#", url: "/500.jpg" },
    { link: "#", url: "/900.jpg" },
    { link: "#", url: "/200-1.jpg" },
  ]

  return (
    <MaxWidthWrapper>
      <section className="mt-3">
        <SlideReveal imgURL={imgURL} />
      </section>

      <div className="space-y-28 mt-6">
        <section className="">
          <div className="w-full flex flex-col min-[430px]:flex-row min-[430px]:justify-between min-[430px]:items-center">
            <Title>Popular Products</Title>
            <Link href="#" className={buttonVariants({})}>
              view more
            </Link>
          </div>

          <div className="mt-8 w-full grid grid-cols-1 sm:grid-cols-2 min-[890px]:grid-cols-3 min-[1190px]:grid-cols-4 min-[1360px]:grid-cols-5 place-items-center gap-10">
            {Array(5)
              .fill(5)
              .map((_, index) => (
                <ProductCard
                  key={index}
                  product={TEST}
                  //className="scale-110 sm:hover:scale-[1.15]"
                />
              ))}
          </div>
        </section>

        <section className="">
          <div className="w-full flex flex-col min-[430px]:flex-row min-[430px]:justify-between min-[430px]:items-center">
            <Title>Popular Products</Title>
            <Link href="#" className={buttonVariants({})}>
              view more
            </Link>
          </div>

          <div className="mt-8 w-full grid grid-cols-1 sm:grid-cols-2 min-[890px]:grid-cols-3 min-[1190px]:grid-cols-4 min-[1360px]:grid-cols-5 place-items-center gap-10">
            {Array(5)
              .fill(5)
              .map((_, index) => (
                <ProductCard
                  key={index}
                  product={TEST}
                  //className="scale-110 sm:hover:scale-[1.15]"
                />
              ))}
          </div>
        </section>

        <section className="">
          <div className="w-full flex flex-col min-[430px]:flex-row min-[430px]:justify-between min-[430px]:items-center">
            <Title>Popular Products</Title>
            <Link href="#" className={buttonVariants({})}>
              view more
            </Link>
          </div>

          <div className="mt-8 w-full grid grid-cols-1 sm:grid-cols-2 min-[890px]:grid-cols-3 min-[1190px]:grid-cols-4 min-[1360px]:grid-cols-5 place-items-center gap-10">
            {Array(5)
              .fill(5)
              .map((_, index) => (
                <ProductCard
                  key={index}
                  product={TEST}
                  //className="scale-110 sm:hover:scale-[1.15]"
                />
              ))}
          </div>
        </section>

        <section className="">
          <div className="w-full flex flex-col min-[430px]:flex-row min-[430px]:justify-between min-[430px]:items-center">
            <Title>Popular Products</Title>
            <Link href="#" className={buttonVariants({})}>
              view more
            </Link>
          </div>

          <div className="mt-8 w-full grid grid-cols-1 sm:grid-cols-2 min-[890px]:grid-cols-3 min-[1190px]:grid-cols-4 min-[1360px]:grid-cols-5 place-items-center gap-10">
            {Array(5)
              .fill(5)
              .map((_, index) => (
                <ProductCard
                  key={index}
                  product={TEST}
                  //className="scale-110 sm:hover:scale-[1.15]"
                />
              ))}
          </div>
        </section>

        <section className="">
          <div className="w-full flex flex-col min-[430px]:flex-row min-[430px]:justify-between min-[430px]:items-center">
            <Title>Popular Products</Title>
            <Link href="#" className={buttonVariants({})}>
              view more
            </Link>
          </div>

          <div className="mt-8 w-full grid grid-cols-1 sm:grid-cols-2 min-[890px]:grid-cols-3 min-[1190px]:grid-cols-4 min-[1360px]:grid-cols-5 place-items-center gap-10">
            {Array(5)
              .fill(5)
              .map((_, index) => (
                <ProductCard
                  key={index}
                  product={TEST}
                  //className="scale-110 sm:hover:scale-[1.15]"
                />
              ))}
          </div>
        </section>

        <section className="">
          <div className="w-full flex flex-col min-[430px]:flex-row min-[430px]:justify-between min-[430px]:items-center">
            <Title>Popular Products</Title>
            <Link href="#" className={buttonVariants({})}>
              view more
            </Link>
          </div>

          <div className="mt-8 w-full grid grid-cols-1 sm:grid-cols-2 min-[890px]:grid-cols-3 min-[1190px]:grid-cols-4 min-[1360px]:grid-cols-5 place-items-center gap-10">
            {Array(5)
              .fill(5)
              .map((_, index) => (
                <ProductCard
                  key={index}
                  product={TEST}
                  //className="scale-110 sm:hover:scale-[1.15]"
                />
              ))}
          </div>
        </section>

        <section className="">
          <div className="w-full flex flex-col min-[430px]:flex-row min-[430px]:justify-between min-[430px]:items-center">
            <Title>Popular Products</Title>
            <Link href="#" className={buttonVariants({})}>
              view more
            </Link>
          </div>

          <div className="mt-8 w-full grid grid-cols-1 sm:grid-cols-2 min-[890px]:grid-cols-3 min-[1190px]:grid-cols-4 min-[1360px]:grid-cols-5 place-items-center gap-10">
            {Array(5)
              .fill(5)
              .map((_, index) => (
                <ProductCard
                  key={index}
                  product={TEST}
                  //className="scale-110 sm:hover:scale-[1.15]"
                />
              ))}
          </div>
        </section>

        <section className="">
          <div className="w-full flex flex-col min-[430px]:flex-row min-[430px]:justify-between min-[430px]:items-center">
            <Title>Popular Products</Title>
            <Link href="#" className={buttonVariants({})}>
              view more
            </Link>
          </div>

          <div className="mt-8 w-full grid grid-cols-1 sm:grid-cols-2 min-[890px]:grid-cols-3 min-[1190px]:grid-cols-4 min-[1360px]:grid-cols-5 place-items-center gap-10">
            {Array(5)
              .fill(5)
              .map((_, index) => (
                <ProductCard
                  key={index}
                  product={TEST}
                  //className="scale-110 sm:hover:scale-[1.15]"
                />
              ))}
          </div>
        </section>

        <section className="">
          <div className="w-full flex flex-col min-[430px]:flex-row min-[430px]:justify-between min-[430px]:items-center">
            <Title>Popular Products</Title>
            <Link href="#" className={buttonVariants({})}>
              view more
            </Link>
          </div>

          <div className="mt-8 w-full grid grid-cols-1 sm:grid-cols-2 min-[890px]:grid-cols-3 min-[1190px]:grid-cols-4 min-[1360px]:grid-cols-5 place-items-center gap-10">
            {Array(5)
              .fill(5)
              .map((_, index) => (
                <ProductCard
                  key={index}
                  product={TEST}
                  //className="scale-110 sm:hover:scale-[1.15]"
                />
              ))}
          </div>
        </section>
      </div>
    </MaxWidthWrapper>
  )
}
