"use client"

import Link from "next/link"
import { useMemo } from "react"
import { EventCard } from "@/components/ui/event-card"
import { EventDayCard } from "@/components/ui/event-day-card"
import Slider from "@/components/ui/Slider"
import { ArrowRight } from "lucide-react"
import type { EventItem } from "@/types"

interface EventsPreviewProps {
  title?: string
  events: EventItem[]
  linkHref?: string
  linkLabel?: string
  cardVariant?: "carousel" | "cell"
}

export function EventsPreview({
  title = "Афиша мероприятий",
  events,
  linkHref,
  linkLabel,
  cardVariant = "carousel",
}: EventsPreviewProps) {
  const groupedByDay = useMemo(() => {
    const days: Array<{ events: EventItem[] }> = []
    for (const event of events) {
      const day = days.find((d) => d.events[0].dayOfWeek === event.dayOfWeek)
      if (day) day.events.push(event)
      else days.push({ events: [event] })
    }
    return days
  }, [events])

  return (
    <section className="section-py">
      <div className="flex items-center justify-between mb-6">
        <h2 className="section-heading font-display font-bold uppercase tracking-tight text-text-primary">
          {title}
        </h2>
        {linkLabel && linkHref && (
          <Link
            href={linkHref}
            className="text-xs font-display uppercase tracking-wider flex items-center gap-1 link-underline shrink-0 text-accent"
          >
            {linkLabel}
            <ArrowRight className="w-3 h-3" />
          </Link>
        )}
      </div>

      <Slider cols={{ base: 1, [410]: 2, sm: 2, md: 3, lg: 4, xl: 5 }}>
        {cardVariant === "cell"
          ? groupedByDay.map((day) => (
              <EventDayCard key={day.events[0].id} events={day.events} />
            ))
          : events.map((event) => (
              <EventCard key={event.id} event={event} variant="carousel" />
            ))}
      </Slider>
    </section>
  )
}
