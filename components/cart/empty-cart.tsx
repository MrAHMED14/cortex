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
            <div className="w-full md:w-[65%] h-56 flex items-center justify-center rounded-lg border border-neutral-200 bg-neutral-50 shadow-sm">
              <p className="text-2xl font-bold text-center">
                Your cart is empty.
              </p>
            </div>

            <Link href="/shop" className="text-neutral-500 hover:underline">
              continue shopping
            </Link>
          </>
        )}
      </div>
    </>
  )
}
