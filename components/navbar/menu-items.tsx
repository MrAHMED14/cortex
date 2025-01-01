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
import { logout } from "@/lib/actions/auth/action"
import { cn } from "@/lib/utils"
import { User } from "lucia"
import { Loader2Icon, LogOutIcon } from "lucide-react"
import { usePathname } from "next/navigation"
import { useTransition } from "react"
import { Button, buttonVariants } from "../ui/button"

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
        user={user}
      />
    </div>
  )
}

export function Menu({
  className,
  cartSize,
  user,
}: {
  className: string
  cartSize: number
  user: User | null
}) {
  const links = [
    {
      name: "Home",
      href: "/",
    },
    {
      name: "Shop",
      href: "/shop",
    },
    {
      name: "Blog",
      href: "/blog",
    },
    {
      name: `Cart (${cartSize})`,
      href: "/shop/cart",
    },
    {
      name: "Contact",
      href: "/contact",
    },
    {
      name: "Dashboard",
      href: "/dashboard",
    },
  ]
  const pathname = usePathname()
  return (
    <div className={cn(className)}>
      {links.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          className={cn(
            link.href === "/shop/cart" && "min-[1140px]:hidden",
            link.href === "/dashboard" && user?.role !== "ADMIN" && "hidden",
            link.href === pathname
              ? "text-primary font-bold"
              : "hover:text-primary font-semibold text-neutral-700"
          )}
        >
          {link.name}
        </Link>
      ))}
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
        href="/register"
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
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon" className="rounded-full">
          <div className="w-9 h-9 aspect-square object-center">
            {imgUrl ? (
              <Image
                src={imgUrl}
                alt="user_img"
                width={100}
                height={100}
                className="object-cover w-full h-full rounded-full"
              />
            ) : (
              <img
                src="https://api.dicebear.com/9.x/notionists/svg"
                alt="avatar"
                className="object-cover w-full h-full rounded-full bg-blue-500 shrink-0 "
              />
            )}
          </div>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuLabel>{username}</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <Link href="#">
          <DropdownMenuItem className="cursor-pointer">
            My Account
          </DropdownMenuItem>
        </Link>
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
