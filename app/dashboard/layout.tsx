import { SideNav } from "@/components/sidebar/sidebar-nav"

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <SideNav>
      <div className="flex flex-1">
        <div className="md:border-l border-neutral-200 bg-white flex flex-col gap-2 flex-1 w-full h-full">
          <div className="w-full h-full p-2 md:px-10 md:py-6 overflow-y-auto">
            {children}
          </div>
        </div>
      </div>
    </SideNav>
  )
}
