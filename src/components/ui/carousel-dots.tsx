"use client"

import { useCarousel } from "./carousel-provider"
import { cn } from "@/lib/utils"

interface CarouselDotsProps {
  className?: string
}

export function CarouselDots({ className }: CarouselDotsProps) {
  const { emblaApi, selectedIndex, scrollSnapList } = useCarousel()

  if (scrollSnapList.length <= 1) return null

  return (
    <div
      className={cn("flex items-center justify-center gap-2 mt-6", className)}
      role="tablist"
      aria-label="Пагинация слайдера"
    >
      {scrollSnapList.map((_, index) => (
        <button
          key={index}
          type="button"
          onClick={() => emblaApi?.scrollTo(index)}
          role="tab"
          aria-selected={selectedIndex === index}
          aria-label={`Перейти к слайду ${index + 1}`}
          className={cn(
            "rounded-full transition-all duration-300 focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] focus-visible:outline-none",
            selectedIndex === index
              ? "w-6 h-2 bg-[var(--color-accent)]"
              : "w-2 h-2 bg-[var(--color-border)] hover:bg-[var(--color-text-muted)]",
          )}
        />
      ))}
    </div>
  )
}
