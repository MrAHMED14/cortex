import ComingSoon from "@/components/global/coming-soon"
import MaxWidthWrapper from "@/components/global/max-width-wrapper"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Contact",
}

export default function ContactPage() {
  return (
    <MaxWidthWrapper>
      <ComingSoon />
    </MaxWidthWrapper>
  )
}
