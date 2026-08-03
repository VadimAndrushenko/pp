"use client"

import Link from "next/link"
import { EventCard } from "@/components/ui/event-card"
import Slider from "@/components/ui/Slider"
import { ArrowRight } from "lucide-react"
import type { EventItem } from "@/types"

interface EventsPreviewProps {
  title?: string
  events: EventItem[]
  linkHref?: string
  linkLabel?: string
  className?: string
}

export function EventsPreview({
  title = "Афиша мероприятий",
  events,
  linkHref,
  linkLabel,
  className = "",
}: EventsPreviewProps) {
  return (
    <section className={className}>
        <div className="flex items-center justify-between mb-6">
          <h2 className="section-heading font-display font-bold uppercase tracking-tight text-[var(--color-text-primary)]">
            {title}
          </h2>
          {linkLabel && linkHref && (
            <Link
              href={linkHref}
              className="text-xs font-display uppercase tracking-wider flex items-center gap-1 link-underline shrink-0"
              style={{ color: "var(--color-accent)" }}
            >
              {linkLabel}
              <ArrowRight className="w-3 h-3" />
            </Link>
          )}
        </div>

        <Slider cols={{ base: 1,[380]:2 ,sm:3 , md:4 , lg: 5 }}>
          {events.map((event) => (
            <EventCard key={event.id} event={event} variant="carousel" />
          ))}
        </Slider>
    </section>
  )
}
