import ProductCard from "@/components/product/card"
import Title from "@/components/ui/title"
import Link from "next/link"

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel"

import { buttonVariants } from "@/components/ui/button"
import { Product } from "@prisma/client"
import { ArrowUpRightIcon } from "lucide-react"

interface HomeSectionProps {
  produsts: Product[] | null
  title: string
  url: string
}

export default function HomeSection({
  produsts,
  title,
  url,
}: HomeSectionProps) {
  return (
    <section className="w-full">
      {produsts && (
        <>
          <div className="w-full flex justify-between items-center">
            <Title className="mb-0">{title}</Title>
            <Link href={url} className={buttonVariants({})}>
              <ArrowUpRightIcon className="w-4 h-4 min-[400px]:hidden" />
              <span className="font-medium max-[400px]:hidden">view more</span>
            </Link>
          </div>

          <Carousel
            opts={{
              align: "center",
            }}
            className="w-full mt-8"
          >
            <CarouselContent className="">
              {produsts.map((product) => (
                <CarouselItem
                  key={product.id}
                  className="sm:basis-1/2 md:basis-1/3 lg:basis-1/4 xl:basis-1/5"
                >
                  <ProductCard product={product} />
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </>
      )}
    </section>
  )
}
