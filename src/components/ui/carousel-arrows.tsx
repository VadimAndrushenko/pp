"use client"

import { useCarousel } from "./carousel-provider"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"

interface CarouselArrowsProps {
  className?: string
}

export function CarouselArrows({ className }: CarouselArrowsProps) {
  const { emblaApi, canScrollPrev, canScrollNext } = useCarousel()

  return (
    <div className={cn("flex items-center gap-2", className)}>
      <button
        type="button"
        onClick={() => emblaApi?.scrollPrev()}
        disabled={!canScrollPrev}
        aria-label="Предыдущее мероприятие"
        suppressHydrationWarning
        className={cn(
          "w-10 h-10 rounded-full border flex items-center justify-center transition-all duration-200",
          "border-[var(--color-border)] text-[var(--color-text-secondary)]",
          "hover:border-[var(--color-accent)] hover:bg-[var(--color-accent)]/10 hover:text-[var(--color-accent)]",
          "focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] focus-visible:outline-none",
          !canScrollPrev && "opacity-30 cursor-not-allowed pointer-events-none",
        )}
      >
        <ChevronLeft className="w-5 h-5" />
      </button>
      <button
        type="button"
        onClick={() => emblaApi?.scrollNext()}
        disabled={!canScrollNext}
        aria-label="Следующее мероприятие"
        suppressHydrationWarning
        className={cn(
          "w-10 h-10 rounded-full border flex items-center justify-center transition-all duration-200",
          "border-[var(--color-border)] text-[var(--color-text-secondary)]",
          "hover:border-[var(--color-accent)] hover:bg-[var(--color-accent)]/10 hover:text-[var(--color-accent)]",
          "focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] focus-visible:outline-none",
          !canScrollNext && "opacity-30 cursor-not-allowed pointer-events-none",
        )}
      >
        <ChevronRight className="w-5 h-5" />
      </button>
    </div>
  )
}
