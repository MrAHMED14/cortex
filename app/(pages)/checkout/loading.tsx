import CartSkeleton from "@/components/cart/skeleton"
import SummarySkeleton from "@/components/cart/summary-skeleton"
import MaxWidthWrapper from "@/components/global/max-width-wrapper"
import Title from "@/components/ui/title"

interface LoadingProps {}
export default function Loading({}: LoadingProps) {
  return (
    <MaxWidthWrapper>
      <div className="py-24">
        <Title>Checkout</Title>
        <p className="text-sm text-muted-foreground">
          Check your order items, and provide your information to request the
          order.
        </p>

        <div className="lg:flex gap-6 mt-10">
          {/* Forms */}
          <div className="animate-pulse w-full border border-gray-200 shadow-sm bg-muted dark:border-stone-700 py-6 px-5 rounded-lg h-[575px]" />

          {/* Order Items & Summary */}
          <div className="w-full flex-col mt-6 lg:mt-0">
            <div className="space-y-6">
              {/* Cart Items */}
              {Array(3)
                .fill(3)
                .map((_, index) => (
                  <CartSkeleton key={index} />
                ))}
            </div>

            {/* Order summary */}
            <div className="mx-auto mt-6 lg:max-w-4xl flex-1 space-y-6 w-full">
              <SummarySkeleton />
            </div>
          </div>
        </div>
      </div>
    </MaxWidthWrapper>
  )
}
