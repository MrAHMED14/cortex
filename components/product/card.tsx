import { Product } from "@prisma/client"
import { cn, formatFloatNumber, formatUSD } from "@/lib/utils"

import Image from "next/image"
import Link from "next/link"

interface ProductCardProps {
  product: Product
  className?: string
}

export default function ProductCard({
  className,
  product: { title, price, slug, img },
}: ProductCardProps) {
  return (
    <Link
      href={`/shop/${slug}`}
      className={cn(
        "flex flex-col items-center justify-center relative bg-gray-50 rounded-lg w-60 h-[300px] shadow-lg border sm:hover:scale-105 sm:duration-500",
        className
      )}
    >
      <div className="w-full h-full flex items-center justify-center">
        <div className="w-full h-full flex items-center justify-center pt-3">
          {/* Image */}
          <Image
            src={"/001.webp"}
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
            {/* Orginal price */}
            <p className="text-muted-foreground text-sm font-semibold line-through leading-none">
              {formatUSD(formatFloatNumber(price + 390))}
            </p>
            {/* Price after discount */}
            <p className="text-slate-950 font-bold">{formatUSD(price)}</p>
          </div>
        </div>
      </div>
    </Link>
  )
}
