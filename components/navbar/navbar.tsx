import MaxWidthWrapper from "@/components/global/max-width-wrapper"
import MenuItems, {
  AuthButton,
  Menu,
  UserAvatar,
} from "@/components/navbar/menu-items"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { MenuIcon } from "lucide-react"
import { getUser } from "@/lib/actions/auth/action"
import { getCart } from "@/lib/actions/cart/lib"
import { cn } from "@/lib/utils"

import CategoryDropdown from "./category-dropdown"
import Search from "../filter/search"
import Image from "next/image"
import Link from "next/link"
import { getCategoriesWithSub } from "@/lib/actions/product/action"

export default async function Navbar() {
  const user = await getUser()
  const cart = await getCart()
  const categories = await getCategoriesWithSub()

  return (
    <MaxWidthWrapper>
      <nav className="top-0 h-14 z-50">
        <div className="w-full flex items-center justify-between mx-auto my-2">
          {/* Left */}
          <div className="w-full flex items-center justify-start">
            <CategoryDropdown categories={categories} />
            <Link className="flex lg:hidden" href="/">
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
          <div className="w-full flex items-center justify-center">
            <MenuItems user={user} cartSize={cart?.size ?? 0} />
          </div>

          {/* Right */}
          <div className="w-full flex items-center justify-end gap-2">
            {/* Light / dark mode toggle */}
            {/* <ThemeSwitcher /> */}

            {user ? (
              // Avatar Component
              <UserAvatar
                username={user.displayName}
                imgUrl={user.avatarUrl}
                email={user.email ?? "cortex-store@cortex.com"}
              />
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
                    <Search
                      path="/shop"
                      name="products"
                      className="sm:hidden flex"
                    />
                  </SheetHeader>
                  <Menu
                    className="flex flex-col items-start gap-y-5"
                    cartSize={cart?.size ?? 0}
                    user={user}
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
