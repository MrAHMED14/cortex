import Link from "next/link"

interface EmptyOrderHistoryProps {}

export default function EmptyOrderHistory({}: EmptyOrderHistoryProps) {
  return (
    <div className="w-full flex flex-col items-center justify-center mt-10 gap-3">
      <div className="w-full md:w-1/2 h-48 flex items-center justify-center rounded-lg border border-gray-200 shadow-sm bg-muted dark:border-stone-700 dark:bg-muted">
        <p className="text-2xl font-bold text-center">
          Oops! <br />
          <span className="text-xl">
            It looks like you don&rsquo;t have any orders.
          </span>
        </p>
      </div>
      <Link href="/shop" className="text-muted-foreground hover:underline">
        continue shopping
      </Link>
    </div>
  )
}
