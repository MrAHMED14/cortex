import CartList from "@/components/cart/cart-list"
import MaxWidthWrapper from "@/components/global/max-width-wrapper"
import Title from "@/components/ui/title"

export default function CartPage() {
  return (
    <MaxWidthWrapper>
      <div className="py-6 sm:py-24">
        <Title>Shopping Cart</Title>
        <p className="text-sm text-neutral-500">
          Change the quantity of products, remove products, reset your shopping
          cart, and proceed to checkout.
        </p>
        <CartList />
      </div>
    </MaxWidthWrapper>
  )
}
