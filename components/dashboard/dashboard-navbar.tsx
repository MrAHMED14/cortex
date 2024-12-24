import { getUser } from "@/lib/actions/auth/action"
import Image from "next/image"
import Link from "next/link"
import { UserAvatar } from "../navbar/menu-items"
import { DashboardLinks } from "./dasboard-links"

export default async function DashboardNavbar() {
  const user = await getUser()
  if (!user) {
    throw new Error("User not found")
  }

  if (user.role !== "ADMIN") {
    throw new Error("Unauthorized")
  }

  return (
    <nav className="top-0 h-14 z-50">
      <div className="w-full flex items-center justify-between mx-auto my-2">
        {/* Left */}
        <div className="w-full flex items-center justify-start">
          <Link href="/dashboard">
            <span className="sr-only">cortex</span>

            <Image
              src="/cortex-black.svg"
              width={200}
              height={100}
              alt="cortex"
              className="h-5 w-fit"
              priority
            />
          </Link>
        </div>

        {/* Center */}
        <div className="hidden md:flex w-full items-center justify-center gap-8">
          <DashboardLinks />
        </div>

        {/* Right */}
        <div className="w-full flex items-center justify-end gap-2">
          <UserAvatar username={user.displayName} imgUrl={user.avatarUrl} />
        </div>
      </div>
    </nav>
  )
}
