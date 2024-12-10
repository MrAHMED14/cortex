import MaxWidthWrapper from "@/components/global/max-width-wrapper"
import ProductCard from "@/components/product/card"
import SlideReveal from "@/components/slider/slide-reveal"
import Title from "@/components/ui/title"
import Link from "next/link"

import { buttonVariants } from "@/components/ui/button"
import { Product } from "@prisma/client"

const TEST = {
  id: "1",
  title: "Xiaomi Redmi Note 11 Pro",
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
        <section className="">
          <div className="w-full flex flex-col min-[430px]:flex-row min-[430px]:justify-between min-[430px]:items-center">
            <Title>Popular Products</Title>
            <Link
              href="#"
              className={buttonVariants({ className: "max-[430px]:hidden" })}
            >
              view more
            </Link>
          </div>

          <div className="mt-8 w-full grid grid-cols-1 sm:grid-cols-2 min-[890px]:grid-cols-3 min-[1190px]:grid-cols-4 min-[1360px]:grid-cols-5 place-items-center gap-10 max-[425px]:gap-20">
            {Array(5)
              .fill(5)
              .map((_, index) => (
                <ProductCard
                  key={index}
                  product={TEST}
                  className="max-[425px]:scale-110"
                />
              ))}
          </div>
          <Link
            href="#"
            className={buttonVariants({
              className: "min-[430px]:hidden w-full mt-10",
            })}
          >
            view more
          </Link>
        </section>

        {/* New Arrivals */}
        <section className="">
          <div className="w-full flex flex-col min-[430px]:flex-row min-[430px]:justify-between min-[430px]:items-center">
            <Title>New Arrivals</Title>
            <Link
              href="#"
              className={buttonVariants({ className: "max-[430px]:hidden" })}
            >
              view more
            </Link>
          </div>

          <div className="mt-8 w-full grid grid-cols-1 sm:grid-cols-2 min-[890px]:grid-cols-3 min-[1190px]:grid-cols-4 min-[1360px]:grid-cols-5 place-items-center gap-10 max-[425px]:gap-20">
            {Array(5)
              .fill(5)
              .map((_, index) => (
                <ProductCard
                  key={index}
                  product={TEST}
                  className="max-[425px]:scale-110"
                />
              ))}
          </div>
          <Link
            href="#"
            className={buttonVariants({
              className: "min-[430px]:hidden w-full mt-10",
            })}
          >
            view more
          </Link>
        </section>

        {/* Desktop & PC */}
        <section className="">
          <div className="w-full flex flex-col min-[430px]:flex-row min-[430px]:justify-between min-[430px]:items-center">
            <Title>Desktop & PC</Title>
            <Link
              href="#"
              className={buttonVariants({ className: "max-[430px]:hidden" })}
            >
              view more
            </Link>
          </div>

          <div className="mt-8 w-full grid grid-cols-1 sm:grid-cols-2 min-[890px]:grid-cols-3 min-[1190px]:grid-cols-4 min-[1360px]:grid-cols-5 place-items-center gap-10 max-[425px]:gap-20">
            {Array(5)
              .fill(5)
              .map((_, index) => (
                <ProductCard
                  key={index}
                  product={TEST}
                  className="max-[425px]:scale-110"
                />
              ))}
          </div>
          <Link
            href="#"
            className={buttonVariants({
              className: "min-[430px]:hidden w-full mt-10",
            })}
          >
            view more
          </Link>
        </section>

        {/* Clavier & Souris */}
        <section className="">
          <div className="w-full flex flex-col min-[430px]:flex-row min-[430px]:justify-between min-[430px]:items-center">
            <Title>Clavier & Souris</Title>
            <Link
              href="#"
              className={buttonVariants({ className: "max-[430px]:hidden" })}
            >
              view more
            </Link>
          </div>

          <div className="mt-8 w-full grid grid-cols-1 sm:grid-cols-2 min-[890px]:grid-cols-3 min-[1190px]:grid-cols-4 min-[1360px]:grid-cols-5 place-items-center gap-10 max-[425px]:gap-20">
            {Array(5)
              .fill(5)
              .map((_, index) => (
                <ProductCard
                  key={index}
                  product={TEST}
                  className="max-[425px]:scale-110"
                />
              ))}
          </div>
          <Link
            href="#"
            className={buttonVariants({
              className: "min-[430px]:hidden w-full mt-10",
            })}
          >
            view more
          </Link>
        </section>

        {/* Software */}
        <section className="">
          <div className="w-full flex flex-col min-[430px]:flex-row min-[430px]:justify-between min-[430px]:items-center">
            <Title>Software</Title>
            <Link
              href="#"
              className={buttonVariants({ className: "max-[430px]:hidden" })}
            >
              view more
            </Link>
          </div>

          <div className="mt-8 w-full grid grid-cols-1 sm:grid-cols-2 min-[890px]:grid-cols-3 min-[1190px]:grid-cols-4 min-[1360px]:grid-cols-5 place-items-center gap-10 max-[425px]:gap-20">
            {Array(5)
              .fill(5)
              .map((_, index) => (
                <ProductCard
                  key={index}
                  product={TEST}
                  className="max-[425px]:scale-110"
                />
              ))}
          </div>
          <Link
            href="#"
            className={buttonVariants({
              className: "min-[430px]:hidden w-full mt-10",
            })}
          >
            view more
          </Link>
        </section>
      </div>
    </MaxWidthWrapper>
  )
}
