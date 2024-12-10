import MaxWidthWrapper from "@/components/global/max-width-wrapper"
import Title from "@/components/ui/title"

export default function BlogPage() {
  return (
    <MaxWidthWrapper className="max-w-7xl">
      <div className="py-24">
        <Title>Blog</Title>
        <p className="text-sm text-muted-foreground font-semibold">
          Coming Soon...
        </p>
      </div>
    </MaxWidthWrapper>
  )
}
