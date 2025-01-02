import { cn } from "@/lib/utils"
import SidebarMenu from "./sidebar-menu"
import { getUser } from "@/lib/actions/auth/action"

export async function SideNav({ children }: { children: React.ReactNode }) {
  const user = await getUser()
  if (!user) {
    throw new Error("User not found")
  }

  if (user.role !== "ADMIN") {
    throw new Error("Unauthorized")
  }

  return (
    <div
      className={cn(
        "md:fixed md:overflow-hidden rounded-md flex flex-col md:flex-row bg-gray-100 w-full flex-1 mx-auto",
        "h-screen"
      )}
    >
      <SidebarMenu username={user.displayName} avatarUrl={user.avatarUrl} />
      {children}
    </div>
  )
}
