import ProductCard from "@/components/product/card"
import Title from "@/components/ui/title"
import Link from "next/link"

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel"

import { buttonVariants } from "@/components/ui/button"
import {
  getHomeProdcts,
  getNewArrivalsProdcts,
  getPopularProdcts,
  getRelatedProdcts,
} from "@/lib/actions/product/action"
import { Product } from "@prisma/client"
import { ArrowUpRightIcon } from "lucide-react"

interface HomeSectionProps {
  title: string
  url: string
  subcategoryId?: string
  slug?: string
}

export default async function HomeSection({
  title,
  url,
  slug,
  subcategoryId,
}: HomeSectionProps) {
  if (!title || !url) return null
  let prodPromise: Promise<Product[]> | null = null

  switch (title) {
    case "Popular Products":
      prodPromise = getPopularProdcts() as Promise<Product[]> | null
      break
    case "New Arrivals":
      prodPromise = getNewArrivalsProdcts() as Promise<Product[]> | null
      break
    case "Desktop & PC":
      prodPromise = getHomeProdcts("Laptops") as Promise<Product[]> | null
      break
    case "Tablets":
      prodPromise = getHomeProdcts("Tablets") as Promise<Product[]> | null
      break
    case "Switches":
      prodPromise = getHomeProdcts("Switches") as Promise<Product[]> | null
      break
    case "Microphones":
      prodPromise = getHomeProdcts("Microphones") as Promise<Product[]> | null
      break
    case "Related Products":
      if (subcategoryId && slug) {
        prodPromise = getRelatedProdcts(subcategoryId, slug) as Promise<
          Product[]
        > | null
      }
      break
    default:
      break
  }

  const products = await prodPromise

  return (
    <section className="w-full">
      {products && (
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
              {products.map((product) => (
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
