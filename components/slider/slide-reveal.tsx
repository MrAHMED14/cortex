"use client"

import Image from "next/image"
import { useEffect, useState, useRef, useCallback } from "react"
import useEmblaCarousel from "embla-carousel-react"
import Autoplay from "embla-carousel-autoplay"
import "./slider-style.css"
import Link from "next/link"

interface SlideRevealProps {
  imgURL: { link: string; url: string }[]
}

export default function SlideReveal({ imgURL }: SlideRevealProps) {
  const options = { loop: true }
  const [isPlaying] = useState(true)
  const autoplay = useRef(Autoplay({ delay: 6000, stopOnMouseEnter: true }))

  const [emblaRef, emblaApi] = useEmblaCarousel(options, [autoplay.current])

  const handleMouseEnter = useCallback(() => {
    autoplay.current.stop()
  }, [])

  const handleMouseLeave = useCallback(() => {
    if (isPlaying) {
      autoplay.current.play()
    }
  }, [isPlaying])

  useEffect(() => {
    if (emblaApi) {
      const container = emblaApi.rootNode()
      container.addEventListener("mouseenter", handleMouseEnter)
      container.addEventListener("mouseleave", handleMouseLeave)

      return () => {
        container.removeEventListener("mouseenter", handleMouseEnter)
        container.removeEventListener("mouseleave", handleMouseLeave)
      }
    }
  }, [emblaApi, handleMouseEnter, handleMouseLeave])

  useEffect(() => {
    if (emblaApi) {
      if (isPlaying) {
        autoplay.current.play()
      } else {
        autoplay.current.stop()
      }
    }
  }, [emblaApi, isPlaying])

  return (
    <div className="relative flex flex-col items-center w-full aspect-[10/4] lg:aspect-[10/3.5] rounded-md overflow-hidden bg-gray-100 ">
      <div className="w-full h-full embla" ref={emblaRef}>
        <div className="w-full h-full embla__container">
          {imgURL ? (
            imgURL.map((img, index) => (
              <Link
                href={img.link}
                className="w-full h-full embla__slide"
                key={index}
              >
                <Image
                  src={img.url}
                  alt={`slide ${index + 1}`}
                  width={2500}
                  height={2500}
                  priority={index === 0}
                  className="block w-full h-full pointer-events-none object-cover"
                />
              </Link>
            ))
          ) : (
            <>
              <div className="bg-gray-300 w-full h-full animate-pulse"></div>
            </>
          )}
        </div>
      </div>
    </div>
  )
}
