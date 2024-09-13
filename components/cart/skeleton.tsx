interface CartSkeletonProps {}

export default function CartSkeleton({}: CartSkeletonProps) {
  return (
    <div className="animate-pulse rounded-lg border border-gray-200 p-4 shadow-sm bg-muted dark:border-stone-700 dark:bg-muted md:p-6 h-32" />
  )
}
