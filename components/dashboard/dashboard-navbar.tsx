import { getUser } from "@/lib/actions/auth/action"
import Image from "next/image"
import Link from "next/link"
import { UserAvatar } from "../navbar/menu-items"
import { DashboardLinks } from "./dasboard-links"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { MenuIcon } from "lucide-react"
import { cn } from "@/lib/utils"

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
          <Link href="/">
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
          <UserAvatar
            username={user.displayName}
            imgUrl={user.avatarUrl}
            email={user.email ?? ""}
          />
          <div className="md:hidden flex">
            <Sheet>
              <SheetTrigger>
                <span className="sr-only">Main Menu</span>
                <MenuIcon className="w-6 h-6" />
              </SheetTrigger>
              <SheetContent
                className={cn(
                  "flex flex-col",
                  !user && "max-[375px]:justify-between"
                )}
              >
                <SheetHeader>
                  <SheetTitle className="text-start sr-only">
                    Main Menu
                  </SheetTitle>
                  <SheetDescription>
                    <span className="sr-only">this is the main menu</span>
                  </SheetDescription>
                </SheetHeader>
                <div className="flex flex-col items-start gap-y-5">
                  <DashboardLinks />
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  )
}
