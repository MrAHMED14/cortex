import CartList from "@/components/cart/cart-list"
import MaxWidthWrapper from "@/components/global/max-width-wrapper"
import Title from "@/components/ui/title"

interface CartPageProps {}

export default function CartPage({}: CartPageProps) {
  return (
    <MaxWidthWrapper className="max-w-7xl">
      <div className="py-24">
        <Title>Shopping Cart</Title>
        <p className="text-sm text-muted-foreground">
          Change the quantity of products, remove products, reset your shopping
          cart, and proceed to checkout.
        </p>
        <CartList />
      </div>
    </MaxWidthWrapper>
  )
}
