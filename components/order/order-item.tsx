import { CartItemWithProduct } from "@/lib/types/cart"
import { formatUSD } from "@/lib/utils"
import Image from "next/image"
import Link from "next/link"

interface OrderItemProps {
  cartItem: CartItemWithProduct
}

export default function OrderItem({
  cartItem: {
    quantity,
    product: { title, price, discountPrice, img, slug },
  },
}: OrderItemProps) {
  return (
    <div className="rounded-lg border border-neutral-200 bg-neutral-50 shadow-sm p-4 md:p-6">
      <div className="space-y-4 md:flex md:items-center md:justify-between md:gap-6 md:space-y-0">
        <Link href={`/shop/${slug}`} className="w-20 shrink-0 md:order-1 ">
          <Image
            width={100}
            height={100}
            className="h-20 w-20 aspect-square object-cover object-center rounded border"
            src={img[0]}
            alt={slug}
          />
        </Link>

        <div className="flex items-center justify-between md:order-3 md:justify-end">
          <span>x{quantity}</span>
          <div className="text-end md:order-4 md:w-32">
            {discountPrice ? (
              <>
                <p className="text-xs line-through text-gray-900 dark:text-white">
                  {formatUSD(price)}
                </p>
                <p className="text-base font-bold text-gray-900 dark:text-white">
                  {formatUSD(discountPrice)}
                </p>
              </>
            ) : (
              <>
                <p className="text-base font-bold text-gray-900 dark:text-white">
                  {formatUSD(price)}
                </p>
              </>
            )}
          </div>
        </div>

        <div className="w-full min-w-0 flex-1 space-y-4 md:order-2 md:max-w-md">
          <Link
            href={`/shop/${slug}`}
            className="line-clamp-2 text-base font-medium text-gray-900 hover:underline dark:text-white"
          >
            {title}
          </Link>
        </div>
      </div>
    </div>
  )
}
