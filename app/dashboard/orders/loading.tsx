import { Loader2 } from "lucide-react"

export default function Loading() {
  return (
    <div className="flex items-center justify-center w-full h-[calc(100vh-56px)]">
      <Loader2 className="size-5 animate-spin" />
    </div>
  )
}
