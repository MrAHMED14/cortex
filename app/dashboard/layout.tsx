import DashboardNavbar from "@/components/dashboard/dashboard-navbar"
import MaxWidthWrapper from "@/components/global/max-width-wrapper"

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <MaxWidthWrapper className="flex flex-col">
      <DashboardNavbar />
      <main className="my-5">{children}</main>
    </MaxWidthWrapper>
  )
}
