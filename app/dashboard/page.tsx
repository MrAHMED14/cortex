import { Chart } from "@/components/dashboard/Chart"
import { DashboardStats } from "@/components/dashboard/DashboardStats"
import { RecentSales } from "@/components/dashboard/RecentSales"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export const dynamic = "force-dynamic"

export default async function Dashboard() {
  const data = [
    {
      date: new Date().toISOString(),
      revenue: 12,
    },
    {
      date: new Date(2).toISOString(),
      revenue: 50,
    },
    {
      date: new Date(3).toISOString(),
      revenue: 36,
    },
    {
      date: new Date(4).toISOString(),
      revenue: 40,
    },
    {
      date: new Date(5).toISOString(),
      revenue: 70,
    },
  ]
  return (
    <>
      <DashboardStats />

      <div className="grid gap-4 md:gp-8 lg:grid-cols-2 xl:grid-cols-3 mt-10">
        <Card className="xl:col-span-2 border border-neutral-200 bg-neutral-50 shadow-sm">
          <CardHeader>
            <CardTitle>Transactions</CardTitle>
            <CardDescription>
              Recent transactions from the last 7 days
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Chart data={data} />
          </CardContent>
        </Card>

        <RecentSales />
      </div>
    </>
  )
}
