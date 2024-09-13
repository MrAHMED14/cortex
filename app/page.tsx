import MaxWidthWrapper from "@/components/global/max-width-wrapper"
import Title from "@/components/ui/title"

export default function Home() {
  return (
    <MaxWidthWrapper className="max-w-7xl">
      <div className="py-24">
        <Title>Hello There</Title>
      </div>
    </MaxWidthWrapper>
  )
}
