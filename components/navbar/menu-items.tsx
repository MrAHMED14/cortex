/* eslint-disable @next/next/no-img-element */
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
            ? "text-primary font-bold"
            : "hover:text-primary font-semibold text-neutral-700"
        )}
      >
        Home
      </Link>

      <Link
        href={"/shop"}
        className={cn(
          pathname === "/shop"
            ? "text-primary font-bold"
            : "hover:text-primary font-semibold text-neutral-700"
        )}
      >
        Shop
      </Link>

      {/* <Link
        href={"/my-pc"}
        className={cn(
          pathname === "/my-pc"
            ? "text-primary font-bold"
            : "hover:text-primary font-semibold text-neutral-700"
        )}
      >
        Hot Deals
      </Link> */}

      <Link
        href={"/my-pc"}
        className={cn(
          pathname === "/my-pc"
            ? "text-primary font-bold"
            : "hover:text-primary font-semibold text-neutral-700"
        )}
      >
        Blog
      </Link>

      <Link
        href={"/contact"}
        className={cn(
          pathname === "/contact"
            ? "text-primary font-bold"
            : "hover:text-primary font-semibold text-neutral-700"
        )}
      >
        Contact
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
            <img
              src="https://api.dicebear.com/9.x/notionists/svg"
              alt="avatar"
              className="object-cover w-full h-full rounded-full bg-blue-500 shrink-0 "
            />

            // <div className="dark:bg-white bg-stone-950/90 w-9 h-9 rounded-full aspect-square object-center flex items-center justify-center">
            //   <UserCircle2Icon className="dark:text-stone-950/70 text-white/90" />
            // </div>
          )}
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="mr-7">
        <DropdownMenuLabel>
          <span>{username ?? "Username"}</span>
          <br />
          <span className="text-neutral-500 text-xs">chikhaoui@ahmed.dev</span>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <Link href="/my-orders">
          <DropdownMenuItem className="cursor-pointer">Orders</DropdownMenuItem>
        </Link>
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
