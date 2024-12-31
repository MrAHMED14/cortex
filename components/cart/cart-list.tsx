import Link from "next/link"
import CartItem from "./cart-item"
import { ArrowRightIcon } from "lucide-react"
import { getCart } from "@/lib/actions/cart/lib"
import EmptyCart from "./empty-cart"
import ResetCart from "./reset-cart"
import { formatFloatNumber, formatUSD } from "@/lib/utils"
import { buttonVariants } from "../ui/button"

export default async function CartList() {
  const cart = await getCart()
  const originalPrice = cart?.items.reduce(
    (acc, item) => acc + item.product.price * item.quantity,
    0
  )
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
            <div className="space-y-4 rounded-lg border border-neutral-200 p-4 bg-neutral-50 shadow-sm sm:p-6">
              <p className="text-xl font-semibold dark:text-white">Summary</p>

              <div className="space-y-4">
                <div className="space-y-2">
                  <dl className="flex items-center justify-between gap-4">
                    <dt className="text-neutral-500">Original price</dt>
                    <dd className="font-medium dark:text-white">
                      {formatUSD(formatFloatNumber(originalPrice ?? 0))}
                    </dd>
                  </dl>

                  <dl className="flex items-center justify-between gap-4">
                    <dt className="text-neutral-500">Savings</dt>
                    <dd className="font-medium text-green-600">
                      -
                      {formatUSD(
                        formatFloatNumber((originalPrice ?? 0) - cart.subtotal)
                      )}
                    </dd>
                  </dl>
                </div>

                <dl className="flex items-center justify-between gap-4 border-t border-gray-200 pt-2 dark:border-gray-700">
                  <dt className="font-bold dark:text-white">Total</dt>
                  <dd className="font-bold dark:text-white">
                    {formatUSD(formatFloatNumber(cart.subtotal))}
                  </dd>
                </dl>
              </div>

              <Link
                href="/checkout"
                className={buttonVariants({ className: "w-full" })}
              >
                Proceed to Checkout
              </Link>

              <div className="flex items-center justify-center gap-1">
                <span className="text-sm font-normal text-neutral-400">or</span>
                <Link
                  href="/shop"
                  className="inline-flex items-center gap-2 text-sm font-medium text-neutral-400 hover:text-neutral-500 hover:underline"
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
