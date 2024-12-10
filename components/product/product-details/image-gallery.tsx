/* eslint-disable @next/next/no-img-element */
import { Product } from "@prisma/client"

interface ProductImageGalleryProps {
  product: Product
}

export default function ProductImageGallery({
  product: { img },
}: ProductImageGalleryProps) {
  img = [
    "/product-images/ram-02.webp",
    "/product-images/ram-01.webp",
    "/product-images/ram-03.webp",
    "/product-images/CQ32G3SE-01.webp",
    "/product-images/CQ32G3SE-02.webp",
    "/product-images/CQ32G3SE-03.webp",
    "/product-images/CQ32G3SE-04.webp",
    "/product-images/CQ32G3SE-05.webp",
  ]
  return (
    <div className="flex flex-col-reverse">
      {/* <!-- Image selector --> */}
      <div className="w-full mt-6">
        <div className="flex items-center gap-4 overflow-x-auto">
          {img.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={"product-" + index + 1}
              className="w-24 h-24 aspect-square object-center object-cover rounded-md"
            />
          ))}
        </div>
      </div>

      <div className="w-full">
        <img
          src="/product-images/CQ32G3SE-01.webp"
          alt="product"
          className="w-full h-full aspect-square object-center object-cover rounded-md"
        />
      </div>
    </div>
  )
}
