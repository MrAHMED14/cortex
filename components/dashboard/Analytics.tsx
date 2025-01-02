import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Chart } from "./chart1-v2"
import { Chart as Chart2 } from "./chart2-v2"

export default function Analytics() {
  return (
    <div className="grid gap-4 md:gp-8 lg:grid-cols-2 xl:grid-cols-3 mt-10">
      <Card className="xl:col-span-2 border border-neutral-200 bg-neutral-50 shadow-sm">
        <CardHeader>
          <CardTitle>Bar Chart - Interactive</CardTitle>
          <CardDescription>
            Showing total visitors for the last months
          </CardDescription>
        </CardHeader>
        <CardContent>
          {/*  */}
          <Chart />
        </CardContent>
      </Card>

      <Card className="border border-neutral-200 bg-neutral-50 shadow-sm">
        <CardHeader>
          <CardTitle>Bar Chart - Interactive</CardTitle>
          <CardDescription>
            Showing total visitors for the last months
          </CardDescription>
        </CardHeader>
        <CardContent>
          {/*  */}
          <Chart2 />
        </CardContent>
      </Card>
    </div>
  )
}
