interface SummarySkeletonProps {}

export default function SummarySkeleton({}: SummarySkeletonProps) {
  return (
    <div className="animate-pulse space-y-4 rounded-lg border border-gray-200 p-4 shadow-sm bg-muted dark:border-stone-700 dark:bg-muted sm:p-6 h-72" />
  )
}
