import { DeleteUserButton } from "@/components/dashboard/DeleteUserButton"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import Link from "next/link"

export default function DeleteRoute({ params }: { params: { id: string } }) {
  return (
    <div className="h-[80vh] w-full flex items-center justify-center">
      <Card className="max-w-xl">
        <CardHeader>
          <CardTitle>Are you absolutely sure?</CardTitle>
          <CardDescription>
            This action cannot be undone. This will permanently delete this
            product and remove all data from our servers.
          </CardDescription>
        </CardHeader>
        <CardFooter className="w-full flex items-center justify-end space-x-4">
          <Button variant="ghost" asChild>
            <Link href="/dashboard/users">Cancel</Link>
          </Button>
          <DeleteUserButton userId={params.id} />
        </CardFooter>
      </Card>
    </div>
  )
}
