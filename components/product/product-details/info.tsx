import { capitalize, formatUSD } from "@/lib/utils"
import { HeartIcon } from "lucide-react"
import { Product } from "@prisma/client"

import AddToCart from "@/components/cart/add-to-cart"

interface ProductInfoProps {
  product: Product
}

export default function ProductInfo({
  product: { id, title, price, description, stock, OrderThreshold },
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
        {stock <= 5 && stock > 0 && (
          <>
            <span>Only {stock} are left in stock</span>
          </>
        )}
        <div className="mt-10 flex items-center gap-4">
          {stock <= OrderThreshold ? (
            <>
              <span className="max-w-xs flex-1 bg-[#0f072b] rounded-md py-2 px-8 flex items-center justify-center gap-2 text-base font-medium text-white hover:bg-[#0f072b] sm:w-full">
                out of stock
              </span>
            </>
          ) : (
            <AddToCart
              productId={id}
              stock={stock}
              orderThreshold={OrderThreshold}
            />
          )}
        </div>
      </div>
    </div>
  )
}
