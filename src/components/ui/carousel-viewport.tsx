"use client"

import { useCarousel } from "./carousel-provider"
import { cn } from "@/lib/utils"
import { CAROUSEL_CONFIG } from "@/config/carousel"

interface CarouselViewportProps {
  children: React.ReactNode
  className?: string
}

export function CarouselViewport({ children, className }: CarouselViewportProps) {
  const { emblaRef } = useCarousel()

  return (
    <div className={cn("relative", CAROUSEL_CONFIG.margin.vertical, CAROUSEL_CONFIG.margin.horizontal, className)}>
      <div
        className={cn("overflow-hidden", CAROUSEL_CONFIG.padding.vertical, CAROUSEL_CONFIG.padding.horizontal)}
        ref={emblaRef}
      >
        <div className="flex gap-5">
          {children}
        </div>
      </div>
    </div>
  )
}
