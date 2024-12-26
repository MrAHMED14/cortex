import { Product } from "@prisma/client"
import { cn, formatFloatNumber, formatUSD } from "@/lib/utils"

import Image from "next/image"
import Link from "next/link"
import { Badge } from "../ui/badge"
import { FaCartPlus } from "react-icons/fa"
import { PiHeartFill } from "react-icons/pi"

interface ProductCardProps {
  product: Product
  className?: string
}

export default function ProductCard({
  className,
  product: {
    title,
    price,
    slug,
    img,
    stock,
    discountPrice,
    OrderThreshold,
    createdAt,
  },
}: ProductCardProps) {
  const isNew =
    new Date().getTime() - new Date(createdAt).getTime() <=
    7 * 24 * 60 * 60 * 1000
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
            src={img[0]}
            width={150}
            height={150}
            alt={title}
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

          <div className="w-full h-full flex justify-between px-4 pb-3 mt-2">
            <div className="w-full h-full flex flex-col justify-end">
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
            <div className="w-1/2 flex justify-end items-end mb-1">
              <div className="flex justify-end items-center gap-2">
                <FaCartPlus
                  size={25}
                  className="text-slate-950/80 hover:text-slate-950"
                />
                <PiHeartFill
                  size={25}
                  className="text-slate-950/80 hover:text-red-500"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute flex flex-wrap gap-2 items-center w-fit mx-3 my-3">
        {isNew && (
          <Badge className="uppercase bg-stone-900 hover:bg-emerald-400">
            NEW
          </Badge>
        )}
        {stock <= OrderThreshold && (
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
