import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export async function RecentSales() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent sales</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col gap-8"></CardContent>
    </Card>
  )
}
