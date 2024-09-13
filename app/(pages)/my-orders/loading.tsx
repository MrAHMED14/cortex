import MaxWidthWrapper from "@/components/global/max-width-wrapper"
import Title from "@/components/ui/title"

interface LoadingProps {}

export default function Loading({}: LoadingProps) {
  return (
    <MaxWidthWrapper className="max-w-7xl">
      <div className="py-24">
        <Title>Order history</Title>
        <p className="text-sm text-muted-foreground">
          Check the status of recent orders, manage returns, and download
          invoices.
        </p>
        <div className="space-y-20 mt-16">
          <div className="w-full h-[500px] animate-pulse rounded-lg border border-gray-200 shadow-sm bg-muted dark:border-stone-700" />
          <div className="w-full h-[500px] animate-pulse rounded-lg border border-gray-200 shadow-sm bg-muted dark:border-stone-700" />
          <div className="w-full h-[500px] animate-pulse rounded-lg border border-gray-200 shadow-sm bg-muted dark:border-stone-700" />
        </div>
      </div>
    </MaxWidthWrapper>
  )
}
