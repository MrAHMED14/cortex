import { CartItemWithProduct } from "@/lib/types/cart"
import Link from "next/link"
import QuantityControl from "./quantity-control"
import RemoveItem from "./remove-item"
import { formatUSD } from "@/lib/utils"

interface CartItemProps {
  cartItem: CartItemWithProduct
}

export default function CartItem({
  cartItem: {
    quantity,
    productId,
    product: { title, price, img, slug },
  },
}: CartItemProps) {
  return (
    <div className="rounded-lg border border-gray-200 p-4 shadow-sm bg-muted dark:border-stone-700 dark:bg-muted md:p-6">
      <div className="space-y-4 md:flex md:items-center md:justify-between md:gap-6 md:space-y-0">
        <Link href={`/shop/${slug}`} className="w-20 shrink-0 md:order-1 ">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            className="h-20 w-20 aspect-square object-cover object-center rounded border"
            src="/001.webp"
            alt="imac image"
          />
        </Link>

        <div className="flex items-center justify-between md:order-3 md:justify-end">
          <QuantityControl productId={productId} quantity={quantity} />

          <div className="text-end md:order-4 md:w-32">
            <p className="text-base font-bold text-gray-900 dark:text-white">
              {formatUSD(price)}
            </p>
          </div>
        </div>

        <div className="w-full min-w-0 flex-1 space-y-4 md:order-2 md:max-w-md">
          <Link
            href={`/shop/${slug}`}
            className="line-clamp-2 text-base font-medium text-gray-900 hover:underline dark:text-white"
          >
            {title}
          </Link>

          <RemoveItem productId={productId} />
        </div>
      </div>
    </div>
  )
}
