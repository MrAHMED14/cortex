import MaxWidthWrapper from "@/components/global/max-width-wrapper"
import MenuItems, {
  AuthButton,
  Menu,
  UserAvatar,
} from "@/components/navbar/menu-items"
import { getCart } from "@/lib/actions/cart/lib"
import { getUser } from "@/lib/actions/auth/action"
import CategoryDropdown from "./category-dropdown"
import ThemeSwitcher from "../global/theme-switcher"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { MenuIcon } from "lucide-react"
import Search from "../filter/search"
import { cn } from "@/lib/utils"
import Link from "next/link"
import MainNavbar from "./main-navbar"
import Image from "next/image"

interface NavbarProps {}

export default async function Navbar({}: NavbarProps) {
  const user = await getUser()
  const cart = await getCart()

  return (
    <MaxWidthWrapper>
      <nav className="top-0 h-14 z-50">
        <div className="w-full flex items-center justify-between mx-auto my-2">
          {/* Left */}
          <div className="w-full flex items-center justify-start">
            <CategoryDropdown />
            <Link className="flex lg:hidden" href="/">
              <Image
                src="./cortex-svg.svg"
                width={200}
                height={100}
                alt="cortex"
                className="h-5 w-fit"
              />
            </Link>
          </div>

          {/* Center */}
          <div className="w-full flex items-center justify-center">
            <MenuItems user={user} cartSize={cart?.size ?? 0} />
          </div>

          {/* Right */}
          <div className="w-full flex items-center justify-end gap-2">
            {/* Light / dark mode toggle */}
            {/* <ThemeSwitcher /> */}

            {user ? (
              // Avatar Component
              <UserAvatar username={user.displayName} imgUrl={user.avatarUrl} />
            ) : (
              // Auth Component
              <AuthButton className="hidden min-[375px]:flex" />
            )}

            {/* Mobile Menu */}
            <div className="min-[1140px]:hidden flex">
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
                    <Search className="sm:hidden flex" />
                  </SheetHeader>
                  <Menu
                    className="flex flex-col items-start gap-y-5"
                    cartSize={cart?.size ?? 0}
                  />
                  {!user && <AuthButton className="min-[375px]:hidden flex" />}
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </nav>
    </MaxWidthWrapper>
  )
}