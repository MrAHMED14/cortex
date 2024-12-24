"use client"

import { cn } from "@/lib/utils"
import Link from "next/link"
import { usePathname } from "next/navigation"

const links = [
  {
    name: "Overview",
    href: "/dashboard",
  },
  {
    name: "Orders",
    href: "/dashboard/orders",
  },
  {
    name: "Products",
    href: "/dashboard/products",
  },
  {
    name: "Content",
    href: "/dashboard/content",
  },
  {
    name: "Users",
    href: "/dashboard/users",
  },
]

export function DashboardLinks() {
  const pathname = usePathname()
  return (
    <>
      {links.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          className={cn(
            link.href === pathname
              ? "text-primary font-bold"
              : "hover:text-primary font-semibold text-neutral-700"
          )}
        >
          {link.name}
        </Link>
      ))}
    </>
  )
}
