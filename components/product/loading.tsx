import ProductSkeleton from "./skeleton"

interface ProductLoadingProps {}
export default function ProductLoading({}: ProductLoadingProps) {
  return (
    <div className="w-full flex flex-col">
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 min-[960px]:grid-cols-3 min-[1310px]:grid-cols-4 place-items-center lg:place-items-end gap-y-10">
        {Array(16)
          .fill(16)
          .map((_, index) => (
            <ProductSkeleton key={index} />
          ))}
      </div>
    </div>
  )
}
