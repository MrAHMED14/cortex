import { Button } from "@/components/ui/button"
import { Truck } from "lucide-react"

export function ProductDetails() {
  const originalPrice = 129.99
  const discountedPrice = 89.99
  const discountPercentage = Math.round(
    ((originalPrice - discountedPrice) / originalPrice) * 100
  )

  return (
    <div className="flex flex-col space-y-4">
      <h1 className="text-3xl font-bold text-gray-900">Minimalist Desk Lamp</h1>
      <div className="flex items-center space-x-2">
        <p className="text-2xl font-bold text-gray-900">
          ${discountedPrice.toFixed(2)}
        </p>
        <p className="text-lg text-gray-500 line-through">
          ${originalPrice.toFixed(2)}
        </p>
        <span className="bg-green-100 text-green-800 text-sm font-semibold px-2.5 py-0.5 rounded">
          {discountPercentage}% OFF
        </span>
      </div>
      <p className="text-gray-600">
        Elevate your workspace with our sleek and modern desk lamp. Designed for
        both style and functionality, this lamp provides perfect illumination
        for your tasks while adding a touch of elegance to your desk.
      </p>
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
      <Button className="w-full">Add to Cart</Button>
    </div>
  )
}
