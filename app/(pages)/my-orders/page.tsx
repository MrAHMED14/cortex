import { getUserOrder } from "@/lib/actions/order/action"
import { redirect } from "next/navigation"

import EmptyOrderHistory from "@/components/order-history/empty-order-history"
import OrderHistoryList from "@/components/order-history/order-history-list"
import MaxWidthWrapper from "@/components/global/max-width-wrapper"
import Title from "@/components/ui/title"
import { getUser } from "@/lib/actions/auth/action"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Your Orders",
}

export default async function MyOrdersPage() {
  const user = await getUser()
  if (!user) {
    redirect("/login")
  }

  const userOrder = await getUserOrder(user.id)

  return (
    <MaxWidthWrapper>
      <div className="py-6 sm:py-24">
        <Title>Orders history</Title>
        <p className="text-sm text-neutral-500">
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
