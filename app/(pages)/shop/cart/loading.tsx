import CartSkeleton from "@/components/cart/skeleton"
import SummarySkeleton from "@/components/cart/summary-skeleton"
import MaxWidthWrapper from "@/components/global/max-width-wrapper"
import Title from "@/components/ui/title"

interface LoadingProps {}

export default function Loading({}: LoadingProps) {
  return (
    <MaxWidthWrapper className="max-w-7xl">
      <div className="py-24">
        <Title>Shopping Cart</Title>
        <p className="text-sm text-muted-foreground">
          Change the quantity of products, remove products, reset your shopping
          cart, and proceed to checkout.
        </p>
        <div className="mt-6 sm:mt-8 md:gap-6 min-[1114px]:flex min-[1114px]:items-start xl:gap-8">
          {/* Left */}
          <div className="mx-auto w-full flex-none min-[1114px]:max-w-3xl">
            <div className="space-y-6">
              {/* Cart Items */}
              {Array(3)
                .fill(3)
                .map((_, index) => (
                  <CartSkeleton key={index} />
                ))}
            </div>
          </div>

          {/* Right */}
          <div className="mx-auto mt-6 min-[1114px]:max-w-4xl space-y-6 min-[1114px]:mt-0 w-full">
            {/* Order summary */}
            <SummarySkeleton />
          </div>
        </div>
      </div>
    </MaxWidthWrapper>
  )
}
