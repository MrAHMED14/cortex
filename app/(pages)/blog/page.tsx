import ComingSoon from "@/components/global/coming-soon"
import MaxWidthWrapper from "@/components/global/max-width-wrapper"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Blog",
}

export default function BlogPage() {
  return (
    <MaxWidthWrapper>
      <ComingSoon />
    </MaxWidthWrapper>
  )
}
