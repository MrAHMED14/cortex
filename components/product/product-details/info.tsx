import { capitalize, formatUSD } from "@/lib/utils"
import { HeartIcon } from "lucide-react"
import { Product } from "@prisma/client"

import AddToCart from "@/components/cart/add-to-cart"

interface ProductInfoProps {
  product: Product
}

export default function ProductInfo({
  product: { id, title, price, description },
}: ProductInfoProps) {
  return (
    <div className="mt-10 sm:px-0 sm:mt-16 lg:mt-0">
      <h1 className="text-3xl font-extrabold tracking-tight">
        {capitalize(title)}
      </h1>

      <div className="mt-3">
        <h2 className="sr-only">Product information</h2>

        <p className="text-xl font-semibold bg-muted px-4 py-2 rounded w-fit">
          {formatUSD(price)}
        </p>
      </div>

      <div className="mt-6">
        <h3 className="sr-only">Description</h3>

        <div className="text-base text-muted-foreground space-y-6">
          <p>{description}</p>
        </div>
      </div>

      <div className="mt-6">
        <div className="mt-10 flex items-center">
          <AddToCart productId={id} />

          <button
            type="button"
            className="ml-4 py-3 px-3 rounded-md flex items-center justify-center text-gray-400 hover:bg-gray-100 hover:text-gray-500"
          >
            <HeartIcon className="size-6 hover:fill-gray-500" />
            <span className="sr-only">Add to favorites</span>
          </button>
        </div>
      </div>
    </div>
  )
}
