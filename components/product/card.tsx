import { Product } from "@prisma/client"
import { cn, formatFloatNumber, formatUSD } from "@/lib/utils"

import Image from "next/image"
import Link from "next/link"
import { Badge } from "../ui/badge"

interface ProductCardProps {
  product: Product
  className?: string
}

export default function ProductCard({
  className,
  product: { title, price, slug, img, stock, discountPrice },
}: ProductCardProps) {
  const discountPercentage = discountPrice
    ? ((price - discountPrice) / price) * 100
    : undefined
  return (
    <Link
      href={`/shop/${slug}`}
      className={cn(
        "flex flex-col relative rounded-lg border border-neutral-200/70 bg-neutral-50 shadow-sm w-60 h-[300px] sm:hover:scale-105 sm:duration-500",
        className
      )}
    >
      <div className="w-full h-full flex items-center justify-center">
        <div className="w-full h-full flex items-center justify-center pt-3">
          {/* Image */}
          <Image
            src={"/product-images/product-8.jpg"}
            width={150}
            height={150}
            alt={`img`}
            className="w-[160px] h-[160px] object-cover object-center rounded scale-[.97]"
          />
          {/* <div className="w-[160px] h-[160px] {w-[180px]} {h-40} bg-gray-300/80 rounded-lg animate-pulse" /> */}
        </div>
      </div>
      <div className="w-full h-full">
        <div className="w-full h-full flex flex-col items-center justify-center">
          <div className="w-full h-full px-4 mt-3">
            {/* Title */}
            <p className="text-stone-950 font-medium text-lg line-clamp-2 h-fit">
              {title}
            </p>
          </div>

          <div className="w-full h-full flex flex-col justify-end px-4 pb-3 mt-2">
            {discountPrice ? (
              <>
                {/* Orginal price */}
                <p className="text-muted-foreground text-sm font-semibold line-through leading-none">
                  {formatUSD(formatFloatNumber(price))}
                </p>
                {/* Price after discount */}
                <p className="text-slate-950 font-bold">
                  {formatUSD(discountPrice)}
                </p>
              </>
            ) : (
              <>
                <p className="text-slate-950 font-bold">{formatUSD(price)}</p>
              </>
            )}
          </div>
        </div>
      </div>

      <div className="absolute flex flex-wrap gap-2 items-center w-fit mx-3 my-3">
        {true && (
          <Badge className="uppercase bg-stone-900 hover:bg-emerald-400">
            NEW
          </Badge>
        )}
        {stock === 0 && (
          <Badge className="uppercase bg-red-500 hover:bg-red-400">
            out of stock
          </Badge>
        )}
        {discountPercentage && (
          <Badge className="uppercase bg-yellow-400 hover:bg-yellow-300 text-black">
            -{discountPercentage.toFixed(0)}%
          </Badge>
        )}
        {false && (
          <Badge className="uppercase bg-violet-500 hover:bg-violet-400">
            Hot deals
          </Badge>
        )}
      </div>
    </Link>
  )
}
