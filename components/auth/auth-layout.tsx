import { ReactNode } from "react"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

interface AuthLayoutProps {
  children: ReactNode
  title: string
  description: string
  footerContent?: ReactNode
}

export function AuthLayout({
  children,
  title,
  description,
  footerContent,
}: AuthLayoutProps) {
  return (
    <div className="flex mt-10 items-center justify-center p-4">
      <Card className="w-full max-w-md border border-gray-200 shadow-sm">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl font-bold tracking-tight text-gray-950">
            {title}
          </CardTitle>
          <CardDescription className="text-gray-500">
            {description}
          </CardDescription>
        </CardHeader>
        <CardContent>{children}</CardContent>
        {footerContent && (
          <CardFooter className="flex justify-center">
            {footerContent}
          </CardFooter>
        )}
      </Card>
    </div>
  )
}
