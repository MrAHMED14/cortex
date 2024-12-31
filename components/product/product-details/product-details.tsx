import AddToCart from "@/components/cart/add-to-cart"
import { Button } from "@/components/ui/button"
import { formatFloatNumber, formatUSD } from "@/lib/utils"
import { Product } from "@prisma/client"
import { Truck } from "lucide-react"

export function ProductDetails({
  data: { id, title, price, discountPrice, description, OrderThreshold, stock },
}: {
  data: Product
}) {
  const discountPercentage = discountPrice
    ? Math.round(((price - discountPrice) / price) * 100)
    : null

  return (
    <div className="flex flex-col space-y-4">
      <h1 className="text-3xl font-bold text-gray-900">{title}</h1>
      <div className="flex items-center space-x-2">
        {discountPrice ? (
          <>
            <p className="text-2xl font-bold text-gray-900">
              {formatUSD(formatFloatNumber(discountPrice))}
            </p>
            <p className="text-lg text-gray-500 line-through">
              {formatUSD(price)}
            </p>
            <span className="bg-green-100 text-green-800 text-sm font-semibold px-2.5 py-0.5 rounded">
              {discountPercentage && discountPercentage.toFixed(0)}% OFF
            </span>
          </>
        ) : (
          <>
            <p className="text-2xl font-bold text-gray-900">
              {formatUSD(formatFloatNumber(price))}
            </p>
          </>
        )}
      </div>
      <p className="text-gray-600">{description}</p>
      <div className="flex items-center space-x-2 text-sm text-gray-600">
        <Truck className="h-5 w-5" />
        <span>Free shipping on orders over $100</span>
      </div>
      <div className="space-y-2">
        <h3 className="font-semibold text-gray-900">Features:</h3>
        <ul className="list-inside list-disc space-y-1 text-gray-600">
          <li>Adjustable arm and head for precise lighting</li>
          <li>Energy-efficient LED bulb included</li>
          <li>Touch-sensitive controls with dimming function</li>
          <li>Sleek aluminum construction</li>
          <li>Available in matte black or brushed silver finish</li>
        </ul>
      </div>
      {stock <= OrderThreshold ? (
        <Button className="w-full" disabled>
          Out of stock
        </Button>
      ) : (
        <AddToCart
          productId={id}
          stock={stock}
          orderThreshold={OrderThreshold}
        />
      )}
    </div>
  )
}
