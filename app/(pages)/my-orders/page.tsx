import { getUserOrder } from "@/lib/actions/order/action"
import { redirect } from "next/navigation"

import EmptyOrderHistory from "@/components/order-history/empty-order-history"
import OrderHistoryList from "@/components/order-history/order-history-list"
import MaxWidthWrapper from "@/components/global/max-width-wrapper"
import Title from "@/components/ui/title"
import { getUser } from "@/lib/actions/auth/action"

interface MyOrdersPageProps {}

export default async function MyOrdersPage({}: MyOrdersPageProps) {
  const user = await getUser()
  if (!user) {
    redirect("/login")
  }

  const userOrder = await getUserOrder(user.id)

  return (
    <MaxWidthWrapper className="max-w-7xl">
      <div className="py-24">
        <Title>Order history</Title>
        <p className="text-sm text-muted-foreground">
          Check the status of recent orders, manage returns, and download
          invoices.
        </p>
        {userOrder && userOrder.length !== 0 ? (
          <OrderHistoryList orders={userOrder} />
        ) : (
          <EmptyOrderHistory />
        )}
      </div>
    </MaxWidthWrapper>
  )
}
