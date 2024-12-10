import Link from "next/link"

export default function EmptyOrderHistory() {
  return (
    <div className="w-full flex flex-col items-center justify-center mt-10 gap-3">
      <div className="w-full md:w-[65%] h-56 flex items-center justify-center rounded-lg border border-neutral-200 bg-neutral-50 shadow-sm">
        <p className="text-2xl font-bold text-center">
          Oops! <br />
          <span className="text-xl">
            It looks like you don&rsquo;t have any orders.
          </span>
        </p>
      </div>
      <Link href="/shop" className="text-neutral-500 hover:underline">
        continue shopping
      </Link>
    </div>
  )
}
