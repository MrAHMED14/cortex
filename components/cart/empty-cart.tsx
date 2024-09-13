import Link from "next/link"

interface EmptyCartProps {
  size: number
}

export default function EmptyCart({ size }: EmptyCartProps) {
  return (
    <>
      <div className="w-full flex flex-col items-center justify-center mt-10 gap-3">
        {size === 0 && (
          <>
            <div className="w-full md:w-1/2 h-48 flex items-center justify-center rounded-lg border border-gray-200 shadow-sm bg-muted dark:border-stone-700 dark:bg-muted">
              <p className="text-2xl font-bold text-center">
                Your cart is empty.
              </p>
            </div>

            <Link
              href="/shop"
              className="text-muted-foreground hover:underline"
            >
              continue shopping
            </Link>
          </>
        )}
      </div>
    </>
  )
}
