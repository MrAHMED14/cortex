import Link from "next/link"
import CartItem from "./cart-item"
import { ArrowRightIcon } from "lucide-react"
import { getCart } from "@/lib/actions/cart/lib"
import EmptyCart from "./empty-cart"
import ResetCart from "./reset-cart"
import { formatFloatNumber, formatUSD } from "@/lib/utils"

interface CartListProps {}

export default async function CartList({}: CartListProps) {
  const cart = await getCart()

  return (
    <>
      {cart && cart.size > 0 && (
        <div className="mt-6 sm:mt-8 md:gap-6 min-[1114px]:flex min-[1114px]:items-start xl:gap-8">
          {/* Left */}
          <div className="mx-auto w-full flex-none min-[1114px]:max-w-3xl">
            <div className="space-y-6">
              {cart.items.map((item) => (
                <CartItem key={item.id} cartItem={item} />
              ))}
            </div>
            <div className="mt-2">
              <ResetCart cartId={cart.id} />
            </div>
          </div>

          {/* Right */}
          <div className="mx-auto mt-6 min-[1114px]:max-w-4xl space-y-6 min-[1114px]:mt-0 w-full">
            {/* Order summary */}
            <div className="space-y-4 rounded-lg border border-gray-200 p-4 shadow-sm bg-muted dark:border-stone-700 dark:bg-muted sm:p-6">
              <p className="text-xl font-semibold text-gray-900 dark:text-white">
                Summary
              </p>

              <div className="space-y-4">
                <div className="space-y-2">
                  <dl className="flex items-center justify-between gap-4">
                    <dt className="text-base font-normal text-gray-500 dark:text-gray-400">
                      Original price
                    </dt>
                    <dd className="text-base font-medium text-gray-900 dark:text-white">
                      {formatUSD(formatFloatNumber(cart.subtotal))}
                    </dd>
                  </dl>

                  <dl className="flex items-center justify-between gap-4">
                    <dt className="text-base font-normal text-gray-500 dark:text-gray-400">
                      Savings
                    </dt>
                    <dd className="text-base font-medium text-green-600">
                      -{formatUSD(formatFloatNumber(0.0))}
                    </dd>
                  </dl>
                </div>

                <dl className="flex items-center justify-between gap-4 border-t border-gray-200 pt-2 dark:border-gray-700">
                  <dt className="text-base font-bold text-gray-900 dark:text-white">
                    Total
                  </dt>
                  <dd className="text-base font-bold text-gray-900 dark:text-white">
                    {formatUSD(formatFloatNumber(cart.subtotal))}
                  </dd>
                </dl>
              </div>

              <Link
                href="/checkout"
                className="flex w-full items-center justify-center rounded-lg bg-blue-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-blue-800 dark:bg-blue-600 dark:hover:bg-blue-700"
              >
                Proceed to Checkout
              </Link>

              <div className="flex items-center justify-center gap-1">
                <span className="text-sm font-normal text-gray-500 dark:text-gray-400">
                  or
                </span>
                <Link
                  href="/shop"
                  className="inline-flex items-center gap-2 text-sm font-medium text-blue-600 hover:underline dark:text-blue-500"
                >
                  continue shopping
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
      <EmptyCart size={cart?.size ?? 0} />
    </>
  )
}
