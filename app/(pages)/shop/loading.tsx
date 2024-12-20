import MaxWidthWrapper from "@/components/global/max-width-wrapper"
import Title from "@/components/ui/title"
import { Loader2Icon } from "lucide-react"

export default function Loading() {
  return (
    <MaxWidthWrapper>
      <div className="py-6 sm:py-24">
        <Title>Our Products</Title>
        <p className="text-sm text-neutral-500">
          Explore our wide selection of valuable products. Your satisfaction is
          our top priority.
        </p>
        <div className="flex justify-center items-center w-full h-[430px]">
          <Loader2Icon className="size-7 animate-spin" />
        </div>
      </div>
    </MaxWidthWrapper>
  )
}
