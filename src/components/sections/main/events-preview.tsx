"use client"

import Link from "next/link"
import { EventCard } from "@/components/ui/event-card"
import { MotionDiv } from "@/components/ui/motion-div"
import { CarouselProvider } from "@/components/ui/carousel-provider"
import { CarouselViewport } from "@/components/ui/carousel-viewport"
import { CarouselArrows } from "@/components/ui/carousel-arrows"
import { CarouselDots } from "@/components/ui/carousel-dots"
import { events as allEvents } from "@/config/events"
import { ArrowRight } from "lucide-react"
import type { EventItem } from "@/types"

interface EventsPreviewProps {
  title?: string
  events?: EventItem[]
  linkHref?: string
  linkLabel?: string
  className?: string
  showArrows?: boolean
  showDots?: boolean
  layout?: "carousel" | "flex"
}

export function EventsPreview({
  title = "Афиша мероприятий",
  events = allEvents,
  linkHref = "/events",
  linkLabel = "Смотреть всю афишу",
  className = "",
  showArrows = true,
  showDots = true,
  layout = "carousel",
}: EventsPreviewProps) {
  const heading = (
    <MotionDiv direction="up" delay={0.08}>
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl md:text-3xl font-display font-bold uppercase tracking-tight text-[var(--color-text-primary)]">
          {title}
        </h2>
        <div className="flex items-center gap-3">
          {showArrows && layout === "carousel" && <CarouselArrows className="hidden md:flex" />}
          <Link
            href={linkHref}
            className="text-xs font-display uppercase tracking-wider flex items-center gap-1 link-underline"
            style={{ color: "var(--color-accent)" }}
          >
            {linkLabel}
            <ArrowRight className="w-3 h-3" />
          </Link>
        </div>
      </div>
    </MotionDiv>
  )

  if (layout === "flex") {
    return (
      <section className={`px-5 py-8 ${className}`}>
        <div className="max-w-7xl mx-auto">
          {heading}

          <div className="flex gap-3 overflow-x-auto pb-2 md:hidden">
            {events.map((event) => (
              <div key={event.id} className="shrink-0 w-[180px]">
                <EventCard event={event} variant="carousel" />
              </div>
            ))}
          </div>
          <div className="hidden md:flex md:gap-5">
            {events.map((event) => (
              <div key={event.id} className="flex-1 w-0">
                <EventCard event={event} variant="carousel" />
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className={`px-5 py-8 ${className}`}>
      <div className="max-w-7xl mx-auto">
        <CarouselProvider>
          {heading}

          <MotionDiv direction="up" delay={0.15}>
            <CarouselViewport>
              {events.map((event) => (
                <EventCard key={event.id} event={event} variant="carousel" />
              ))}
            </CarouselViewport>
          </MotionDiv>

          {showDots && (
            <MotionDiv direction="up" delay={0.2}>
              <CarouselDots />
            </MotionDiv>
          )}
        </CarouselProvider>
      </div>
    </section>
  )
}
