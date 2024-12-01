import Link from "next/link"
import Search from "../filter/search"
import { FaSearch, FaShoppingCart } from "react-icons/fa"
import { getCart } from "@/lib/actions/cart/lib"
import Image from "next/image"

interface SearchBarProps {}

export default async function SearchBar({}: SearchBarProps) {
  const cart = await getCart()

  return (
    <div className="hidden lg:flex items-center justify-between font-bold h-16 px-10">
      <div className="w-36">
        <Link href="/" className="">
          <Image
            src="./cortex-svg.svg"
            width={200}
            height={100}
            alt="cortex"
            className="h-5 w-fit"
          />
        </Link>
      </div>

      <Search />

      <div className="flex items-center justify-end w-36">
        <div className="flex items-center gap-3 text-xl">
          <Link
            href="/shop/cart"
            className="hover:text-primary cursor-pointer flex items-center justify-center"
          >
            <FaShoppingCart className="text-2xl" />
            <p className="text-sm">({cart ? cart.size : 0})</p>
          </Link>
        </div>
      </div>
    </div>
  )
}