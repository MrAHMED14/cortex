import MaxWidthWrapper from "@/components/global/max-width-wrapper"

interface LoadingProps {}

export default function Loading({}: LoadingProps) {
  return (
    <MaxWidthWrapper className="max-w-7xl">
      <div className="py-24">
        <div className="animate-pulse w-full sm:w-1/2 border border-gray-200 shadow-sm bg-muted dark:border-stone-700 rounded-lg h-7" />

        <div className="max-w-2xl mx-auto py-16 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-x-8 lg:items-start">
            <div className="flex flex-col-reverse">
              {/* <!-- Image selector --> */}
              <div className="w-full mt-6">
                <div className="flex items-center gap-4 overflow-x-scroll">
                  <div className="animate-pulse w-24 h-24 aspect-square border border-gray-200 shadow-sm bg-muted dark:border-stone-700 rounded-lg" />
                  <div className="animate-pulse w-24 h-24 aspect-square border border-gray-200 shadow-sm bg-muted dark:border-stone-700 rounded-lg" />
                  <div className="hidden sm:flex animate-pulse w-24 h-24 aspect-square border border-gray-200 shadow-sm bg-muted dark:border-stone-700 rounded-lg" />
                </div>
              </div>

              <div className="w-full">
                <div className="animate-pulse  w-full h-full aspect-square border border-gray-200 shadow-sm bg-muted dark:border-stone-700 rounded-lg" />
              </div>
            </div>

            <div className="mt-10 sm:px-0 sm:mt-16 lg:mt-0">
              <div className="animate-pulse w-[90%] border border-gray-200 shadow-sm bg-muted dark:border-stone-700 rounded-lg h-9" />

              <div className="mt-3">
                <div className="animate-pulse w-[50%] border border-gray-200 shadow-sm bg-muted dark:border-stone-700 rounded-lg h-9" />
              </div>

              <div className="mt-6">
                <div className="animate-pulse w-full border border-gray-200 bg-muted dark:border-stone-700 rounded-lg h-44" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </MaxWidthWrapper>
  )
}
