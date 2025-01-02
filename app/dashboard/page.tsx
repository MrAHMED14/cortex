import Analytics from "@/components/dashboard/Analytics"
import { DashboardStats } from "@/components/dashboard/DashboardStats"
import { getUser } from "@/lib/actions/auth/action"

export const dynamic = "force-dynamic"

export default async function Dashboard() {
  const user = await getUser()
  if (!user) {
    throw new Error("User not found")
  }

  if (user.role !== "ADMIN") {
    throw new Error("Unauthorized")
  }
  const username = user.displayName.split(" ")[0].toLowerCase()

  return (
    <div className="space-y-4">
      <div className="">
        <span className="font-bold text-2xl">
          Good morning, Mr. <span className="capitalize">{username}</span>!
        </span>
        <p className="text-muted-foreground">
          Here&apos;s a brief overview of the Cortex Store.
        </p>
      </div>
      <DashboardStats />
      <Analytics />
    </div>
  )
}
