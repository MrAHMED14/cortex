import EditAccountProfile from "@/components/dashboard/EditAccountProfile"
import { getUser } from "@/lib/actions/auth/action"
import { notFound } from "next/navigation"

export default async function EditRoute() {
  const user = await getUser()
  if (!user) notFound()

  return (
    <div className="space-y-5 mt-10">
      <EditAccountProfile data={user} />
    </div>
  )
}
