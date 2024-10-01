"use client"

import { ChevronUp } from "lucide-react"
import { useEffect, useState } from "react"
import { Button } from "./button"

interface UpProps {}

export default function Up({}: UpProps) {
  const [showTopBtn, setShowTopBtn] = useState<boolean>(false)
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 400) {
        setShowTopBtn(true)
      } else {
        setShowTopBtn(false)
      }
    })
  }, [])
  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }
  return (
    <div className="fixed bottom-2 right-2 z-50">
      {showTopBtn && (
        <button
          onClick={goToTop}
          className="p-3 rounded-sm text-center bg-primary text-primary-foreground shadow hover:bg-primary/90"
        >
          <ChevronUp className="text-white size-4" />
        </button>
      )}
    </div>
  )
}
