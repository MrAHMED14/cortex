import InvoiceDetails from "@/components/dashboard/InvoiceDetails"
import { getOrderById } from "@/lib/actions/order/action"
import { OrderDetails } from "@/lib/types/order"
import { notFound } from "next/navigation"

export default async function EditRoute({
  params,
}: {
  params: { id: string }
}) {
  const data: OrderDetails | null = await getOrderById(params.id)
  if (!data) {
    return notFound()
  }

  return (
    <div className="space-y-5 py-24">
      <InvoiceDetails data={data} />
    </div>
  )
}
