import { formatFloatNumber, formatteDate, formatUSD } from "@/lib/utils"
import { OrderProductWithQuantity, OrderWithProduct } from "@/lib/types/order"
import { Button } from "../ui/button"

import SecondaryButton from "../ui/secondary-button"
import Link from "next/link"
import Image from "next/image"

interface OrderHistoryListProps {
  orders: OrderWithProduct[]
}

export default function OrderHistoryList({ orders }: OrderHistoryListProps) {
  return (
    <div className="mt-16">
      <h2 className="sr-only">Recent orders</h2>

      <div className="space-y-20">
        {orders.map((order) => (
          <div
            key={order.id}
            className="border border-gray-300 dark:border-stone-700 shadow-sm rounded-xl p-2"
          >
            <HeadOrderHistoryDetails order={order} />
            <OrderHistoryItems order={order} />
          </div>
        ))}
      </div>
    </div>
  )
}

export function HeadOrderHistoryDetails({
  order,
}: {
  order: OrderWithProduct
}) {
  return (
    <div className="border border-neutral-200 bg-neutral-50 shadow-sm dark:border-stone-700 rounded-lg py-6 px-4 sm:px-6 sm:flex sm:items-center sm:justify-between sm:space-x-6 lg:space-x-8">
      <dl className="divide-y divide-gray-200 dark:divide-stone-700 space-y-6 text-sm flex-auto sm:divide-y-0 sm:space-y-0 sm:grid sm:grid-cols-3 sm:gap-x-6 lg:w-1/2 lg:flex-none lg:gap-x-8">
        <div className="flex justify-between sm:block">
          <dt className="font-medium dark:text-white">Date placed</dt>
          <dd className="sm:mt-1 text-muted-foreground">
            <time dateTime={formatteDate(order.createdAt)}>
              {formatteDate(order.createdAt)}
            </time>
          </dd>
        </div>
        <div className="flex justify-between pt-6 sm:block sm:pt-0">
          <dt className="font-medium dark:text-white">Order status</dt>
          <dd className="sm:mt-1 text-muted-foreground capitalize">
            {order.status.toLowerCase()}
          </dd>
        </div>
        <div className="flex justify-between pt-6 font-medium dark:text-white sm:block sm:pt-0">
          <dt>Total amount</dt>
          <dd className="sm:mt-1 text-muted-foreground">
            {formatUSD(formatFloatNumber(order.total))}
          </dd>
        </div>
      </dl>
      <Button>View Invoice</Button>
    </div>
  )
}

export function OrderHistoryItems({ order }: { order: OrderWithProduct }) {
  return (
    <div className="mt-4 w-full sm:mt-6">
      <h1 className="text-sm text-muted-foreground font-normal mb-2">
        Orderd Products
      </h1>
      <div className="w-full border border-neutral-200 bg-neutral-50 shadow-sm dark:border-stone-700 rounded-lg">
        {order.items.map((orderItem, index) => (
          <div className="w-full" key={orderItem.id}>
            <div className="w-full flex items-center justify-center">
              {index % 2 !== 0 && (
                <div className="w-[90%] h-px bg-gray-200 dark:bg-stone-700" />
              )}
            </div>

            <OrderHistoryItem orderItem={orderItem} />

            <div className="w-full flex items-center justify-center">
              {order.items.length % 2 !== 0 && index % 2 !== 0 && (
                <div className="w-[90%] h-px bg-gray-200 dark:bg-stone-700" />
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export function OrderHistoryItem({
  orderItem: {
    price,
    product: { title, slug, img },
    quantity,
  },
}: {
  orderItem: OrderProductWithQuantity
}) {
  return (
    <div className="flex items-center justify-between py-6 text-sm px-1 sm:px-6">
      <div className="flex items-center gap-5">
        <Image
          src={img[0]}
          width={100}
          height={100}
          alt={slug}
          className="w-16 h-16 object-center object-cover rounded"
        />
        <div>
          <p className="md:max-w-80 max-w-60 line-clamp-3 font-medium dark:text-white">
            {title}
          </p>

          <p className="mt-1 sm:hidden text-muted-foreground">
            {formatUSD(price)} x {quantity}
          </p>
        </div>
      </div>
      <p className="hidden sm:block text-muted-foreground">x{quantity}</p>
      <p className="hidden sm:block text-muted-foreground">
        {formatUSD(price)}
      </p>
      <Link href={`/shop/${slug}`}>
        <Button variant="ghost">View</Button>
      </Link>
    </div>
  )
}
