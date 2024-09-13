import MaxWidthWrapper from "@/components/global/max-width-wrapper"
import Title from "@/components/ui/title"
import { Loader2Icon } from "lucide-react"

interface LoadingProps {}

export default function Loading({}: LoadingProps) {
  return (
    <MaxWidthWrapper>
      <div className="py-24">
        <Title>Our Products</Title>
        <p className="text-sm text-muted-foreground">
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
