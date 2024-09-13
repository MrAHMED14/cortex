import { validateRequest } from "@/lib/actions/auth/auth"
import { redirect } from "next/navigation"

export default async function Layout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const { user } = await validateRequest()

  if (user) return redirect("/")
  return <>{children}</>
}
