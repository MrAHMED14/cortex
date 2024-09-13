interface ProductSkeletonProps {}
export default function ProductSkeleton({}: ProductSkeletonProps) {
  return (
    <div className="flex flex-col items-start animate-pulse">
      <div className="h-[230px] p-6 w-full">
        <div className="border border-gray-200 shadow-sm bg-muted dark:border-stone-700 w-full h-full rounded-lg"></div>
      </div>

      <div className="flex flex-col gap-2">
        <div className="h-[24px] px-6 w-[250px]">
          <div className="border border-gray-200 shadow-sm bg-muted dark:border-stone-700 w-full h-full rounded-md"></div>
        </div>
        <div className="h-[24px] px-6 w-[200px]">
          <div className="border border-gray-200 shadow-sm bg-muted dark:border-stone-700 w-full h-full rounded-md"></div>
        </div>
      </div>
    </div>
  )
}
