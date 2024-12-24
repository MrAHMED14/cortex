import Title from "@/components/ui/title"
import { getOrderById } from "@/lib/actions/order/action"
import { notFound } from "next/navigation"

export default async function EditRoute({
  params,
}: {
  params: { id: string }
}) {
  const data = await getOrderById(params.id)
  if (!data) {
    return notFound()
  }

  return (
    <div className="space-y-5 py-24">
      <Title>Order details</Title>
    </div>
  )
}
