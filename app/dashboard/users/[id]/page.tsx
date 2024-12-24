import Title from "@/components/ui/title"
import { getUserById } from "@/lib/actions/users/action"
import { notFound } from "next/navigation"

export default async function EditRoute({
  params,
}: {
  params: { id: string }
}) {
  const data = await getUserById(params.id)
  if (!data) {
    return notFound()
  }

  return (
    <div className="space-y-5 py-24">
      <Title>User details</Title>
    </div>
  )
}
