"use client"

import Image from "next/image"
import { cn } from "@/lib/utils"
import { useState } from "react"

const images = [
  "/product-images/1.webp",
  "/product-images/2.webp",
  "/product-images/3.webp",
  "/product-images/4.webp",
  "/product-images/5.webp",
]

export function ProductGallery() {
  const [mainImage, setMainImage] = useState<string>(images[0])

  return (
    <div className="space-y-4">
      <div className="aspect-square overflow-hidden rounded-lg bg-gray-100">
        <Image
          src={mainImage}
          alt="Main product image"
          width={1000}
          height={1000}
          className="h-full w-full object-cover object-center"
        />
      </div>
      <div className="grid grid-cols-4 gap-4">
        {images.map((image, index) => (
          <button
            key={index}
            onClick={() => setMainImage(image)}
            className={cn(
              "aspect-square overflow-hidden rounded-md bg-gray-100",
              mainImage === image ? "ring-2 ring-stone-950" : ""
            )}
          >
            <Image
              src={image}
              alt={`Product image ${index + 1}`}
              width={500}
              height={500}
              className="h-full w-full object-cover object-center"
            />
          </button>
        ))}
      </div>
    </div>
  )
}
