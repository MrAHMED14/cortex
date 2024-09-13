"use client"

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import {
  Loader2Icon,
  LogOutIcon,
  MenuIcon,
  UserCircle2Icon,
} from "lucide-react"
import { buttonVariants } from "../ui/button"
import { useTransition } from "react"
import { usePathname } from "next/navigation"
import { logout } from "@/lib/actions/auth/action"
import { User } from "lucia"
import { cn } from "@/lib/utils"

import ThemeSwitcher from "../global/theme-switcher"
import Search from "../filter/search"
import Image from "next/image"
import Link from "next/link"

interface MenuItemsProps {
  className?: string
  user: User | null
  cartSize: number
}

export default function MenuItems({
  className,
  user,
  cartSize,
}: MenuItemsProps) {
  return (
    <div className={cn("flex items-center justify-center gap-4", className)}>
      {/* Desktop Menu */}
      <Menu
        className="hidden min-[1140px]:flex items-center gap-8"
        cartSize={cartSize}
      />

      {/* Light / dark mode toggle */}
      <ThemeSwitcher />

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
            <h3 className="sr-only">Main Menu</h3>
            <MenuIcon className="w-6 h-6" />
          </SheetTrigger>
          <SheetContent
            className={cn(
              "flex flex-col",
              !user && "max-[375px]:justify-between"
            )}
          >
            <SheetHeader>
              <SheetTitle className="text-start">Main Menu</SheetTitle>
              <SheetDescription>
                <h3 className="sr-only">this is the main menu</h3>
              </SheetDescription>
              <Search className="sm:hidden flex" />
            </SheetHeader>
            <Menu
              className="flex flex-col items-start gap-y-5"
              cartSize={cartSize}
            />
            {!user && <AuthButton className="min-[375px]:hidden flex" />}
          </SheetContent>
        </Sheet>
      </div>
    </div>
  )
}

export function Menu({
  className,
  cartSize,
}: {
  className: string
  cartSize: number
}) {
  const pathname = usePathname()
  return (
    <div className={cn(className)}>
      <Link
        href={"/"}
        className={cn(
          pathname === "/"
            ? "text-stone-950 dark:text-white font-semibold"
            : "text-muted-foreground"
        )}
      >
        Home
      </Link>

      <Link
        href={"/shop"}
        className={cn(
          pathname === "/shop"
            ? "text-stone-950 dark:text-white font-semibold"
            : "text-muted-foreground"
        )}
      >
        Shop
      </Link>

      <Link
        href={"/shop/cart"}
        className={cn(
          pathname === "/shop/cart"
            ? "text-stone-950 dark:text-white font-semibold"
            : "text-muted-foreground"
        )}
      >
        <p className="flex items-center gap-1">
          Cart
          <span className="flex items-start justify-start h-5 text-[9px]">
            {cartSize}
          </span>
        </p>
      </Link>

      <Link
        href={"/my-orders"}
        className={cn(
          pathname === "/my-orders"
            ? "text-stone-950 dark:text-white font-semibold"
            : "text-muted-foreground"
        )}
      >
        My Orders
      </Link>
    </div>
  )
}

export function AuthButton({ className }: { className: string }) {
  return (
    // Auth Component
    <div className={cn("flex gap-3", className)}>
      <Link
        href="/login"
        className={cn(
          buttonVariants({
            variant: "ghost",
            className: "font-bold hover:bg-muted-foreground/40",
          })
        )}
      >
        Login
      </Link>
      <Link
        href="/sign-up"
        className={cn(buttonVariants({ className: "font-bold" }))}
      >
        Sign up
      </Link>
    </div>
  )
}

interface UserAvatarProps {
  username: string
  imgUrl?: string | null
}
export function UserAvatar({ username, imgUrl }: UserAvatarProps) {
  const [isPending, startTransition] = useTransition()

  async function handleLogout() {
    startTransition(async () => {
      await logout()
    })
  }
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <div className="w-9 h-9 aspect-square object-center">
          {imgUrl ? (
            <Image
              src={imgUrl}
              alt={"user_img"}
              width={500}
              height={500}
              className="object-cover w-full h-full rounded-full"
            />
          ) : (
            <div className="dark:bg-white bg-stone-950/90 w-9 h-9 rounded-full aspect-square object-center flex items-center justify-center">
              <UserCircle2Icon className="dark:text-stone-950/70 text-white/90" />
            </div>
          )}
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="mr-7">
        <DropdownMenuLabel>{username ?? "Username"}</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem className="cursor-pointer">Profile</DropdownMenuItem>
        <DropdownMenuItem
          className="cursor-pointer flex items-center gap-2"
          onClick={handleLogout}
        >
          {isPending ? <Loader2Icon size={18} /> : <LogOutIcon size={18} />}
          <span>Logout</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
