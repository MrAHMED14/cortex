import MaxWidthWrapper from "@/components/global/max-width-wrapper"
import Title from "@/components/ui/title"

interface MyPCPageProps {}

export default function MyPCPage({}: MyPCPageProps) {
  return (
    <MaxWidthWrapper className="max-w-7xl">
      <div className="py-24">
        <Title>My Computer</Title>
        <p className="text-sm text-muted-foreground font-semibold">
          Coming Soon...
        </p>
      </div>
    </MaxWidthWrapper>
  )
}
