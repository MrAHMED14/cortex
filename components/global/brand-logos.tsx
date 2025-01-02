"use client"

import Image from "next/image"
import { useEffect, useState } from "react"
import { cn } from "@/lib/utils"

const brands = [
  {
    name: "ASUS",
    logo: "/asus.svg",
    width: 140,
    height: 28,
  },
  {
    name: "NVIDIA",
    logo: "/nvidia.svg",
    width: 140,
    height: 28,
  },
  {
    name: "Intel",
    logo: "/intel.svg",
    width: 140,
    height: 28,
  },
  {
    name: "AMD",
    logo: "/amd.svg",
    width: 140,
    height: 28,
  },
]

export default function BrandLogos() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="w-full py-6 bg-white">
      <div className="container px-4 mx-auto">
        <h2 className="text-center text-2xl font-semibold text-gray-900 mb-8">
          Trusted by Leading Brands
        </h2>
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
          {brands.map((brand, index) => (
            <div
              key={brand.name}
              className={cn(
                "transition-all duration-700 transform opacity-0 translate-y-4",
                isVisible && "opacity-100 translate-y-0",
                isVisible && `delay-[${index * 200}ms]`
              )}
            >
              <Image
                src={brand.logo}
                alt={`${brand.name} logo`}
                width={brand.width}
                height={brand.height}
                className="opacity-70 hover:opacity-100 transition-opacity duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
