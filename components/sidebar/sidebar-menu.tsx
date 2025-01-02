"use client"
import React, { useState } from "react"
import { Sidebar, SidebarBody, SidebarLink } from "@/components/ui/sidebar"
import {
  IconArrowLeft,
  IconBrandTabler,
  IconDiamond,
  IconSettings,
  IconShoppingCart,
  IconSlashes,
  IconSlideshow,
  IconTruckDelivery,
  IconUsers,
} from "@tabler/icons-react"
import Link from "next/link"
import { motion } from "framer-motion"
import Image from "next/image"

export default function SidebarMenu({
  username,
  avatarUrl,
}: {
  username: string
  avatarUrl?: string | null
}) {
  const links = [
    {
      label: "Overview",
      href: "/dashboard",
      icon: (
        <IconBrandTabler className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
      ),
    },
    {
      label: "Orders",
      href: "/dashboard/orders",
      icon: (
        <IconTruckDelivery className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
      ),
    },
    {
      label: "Products",
      href: "/dashboard/products",
      icon: (
        <IconShoppingCart className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
      ),
    },
    {
      label: "Users",
      href: "/dashboard/users",
      icon: (
        <IconUsers className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
      ),
    },
    {
      label: "Advertising",
      href: "/dashboard/content",
      icon: (
        <IconSlideshow className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
      ),
    },
    {
      label: "Settings",
      href: "#",
      icon: (
        <IconSettings className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
      ),
    },
    {
      label: "Logout",
      href: "#",
      icon: (
        <IconArrowLeft className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
      ),
    },
  ]

  const [open, setOpen] = useState(false)

  return (
    <Sidebar open={open} setOpen={setOpen}>
      <SidebarBody className="justify-between gap-10">
        <div className="flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
          {open ? <Logo /> : <LogoIcon />}
          <div className="mt-8 flex flex-col gap-2">
            {links.map((link, idx) => (
              <SidebarLink key={idx} link={link} />
            ))}
          </div>
        </div>

        <div className="flex items-center justify-start gap-2 group/sidebar py-2">
          <Image
            src={avatarUrl ?? "/unknow.jpg"}
            className="h-7 w-7 flex-shrink-0 rounded-full"
            width={50}
            height={50}
            alt="Avatar"
          />

          <motion.span
            animate={{
              display: open ? "flex" : "none",
              opacity: open ? 1 : 0,
            }}
            className="flex items-center gap-2 text-neutral-700 dark:text-neutral-200 text-sm group-hover/sidebar:translate-x-1 transition duration-150 whitespace-pre !p-0 !m-0"
          >
            {username}
            <IconDiamond className="text-neutral-700 dark:text-neutral-200 h-4 w-4 flex-shrink-0" />
          </motion.span>
        </div>
      </SidebarBody>
    </Sidebar>
  )
}

export const Logo = () => {
  return (
    <Link href="/" className="py-1 relative z-20">
      <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
        <Image
          src="/cortex-black.svg"
          width={24}
          height={24}
          alt="cortex-store"
          className="h-5 w-fit"
          priority
        />
      </motion.span>
    </Link>
  )
}
export const LogoIcon = () => {
  return (
    <Link
      href="#"
      className="font-normal flex space-x-2 items-center text-sm text-black py-1 relative z-20"
    >
      <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
        <IconSlashes className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
      </motion.span>
    </Link>
  )
}
