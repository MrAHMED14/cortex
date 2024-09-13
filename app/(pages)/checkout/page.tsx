import MaxWidthWrapper from "@/components/global/max-width-wrapper"
import OrderList from "@/components/order/order-list"
import Title from "@/components/ui/title"

interface CheckoutPageProps {}
export default function CheckoutPage({}: CheckoutPageProps) {
  return (
    <MaxWidthWrapper className="max-w-7xl">
      <div className="py-24">
        <Title>Checkout</Title>
        <p className="text-sm text-muted-foreground">
          Check your order items, and provide your information to request the
          order.
        </p>
        <OrderList />
      </div>
    </MaxWidthWrapper>
  )
}
