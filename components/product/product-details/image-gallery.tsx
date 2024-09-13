import { Product } from "@prisma/client"

interface ProductImageGalleryProps {
  product: Product
}

export default function ProductImageGallery({
  product: { img },
}: ProductImageGalleryProps) {
  return (
    <div className="flex flex-col-reverse">
      {/* <!-- Image selector --> */}
      <div className="w-full mt-6">
        <div className="flex items-center gap-4 overflow-x-scroll">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://tailwindui.com/img/ecommerce-images/product-page-03-product-01.jpg"
            alt=""
            className="w-24 h-24 aspect-square object-center object-cover rounded-md border border-black"
          />

          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://tailwindui.com/img/ecommerce-images/product-page-03-product-01.jpg"
            alt=""
            className="w-24 h-24 aspect-square object-center object-cover rounded-md border border-black"
          />

          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://tailwindui.com/img/ecommerce-images/product-page-03-product-01.jpg"
            alt=""
            className="w-24 h-24 aspect-square object-center object-cover rounded-md border border-black"
          />
        </div>
      </div>

      <div className="w-full">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="https://tailwindui.com/img/ecommerce-images/product-page-03-product-01.jpg"
          alt="Angled front view with bag zipped and handles upright."
          className="w-full h-full aspect-square object-center object-cover  rounded-md border border-black"
        />
      </div>
    </div>
  )
}
