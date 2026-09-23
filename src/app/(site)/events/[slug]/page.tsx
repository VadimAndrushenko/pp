import { notFound } from "next/navigation"

import { BookingButton } from "@/components/ui/booking-button"
import { Breadcrumb } from "@/components/layout/breadcrumb"
import { EventHero } from "@/components/sections/events/event-hero"
import { EventDescription } from "@/components/sections/events/event-description"
import { EventProgram } from "@/components/sections/events/event-program"
import { EventBanner } from "@/components/sections/events/event-banner"
import { EventInfo } from "@/components/sections/events/event-info"
import { EventDaySchedule } from "@/components/sections/events/event-day-schedule"
import type { EventDetail } from "@/lib/transformData"
import type { EventItem } from "@/types"
import { getEvents, getEventBySlug } from "@/lib/payload/events"
import {
  transformEvent,
  transformEvents,
  transformEventDetail,
  sortEventsByStart,
} from "@/lib/transformData"

export const revalidate = 30

async function getEventWithDetails(
  slug: string,
): Promise<{ event: EventItem; details: EventDetail } | null> {
  const dbEvent = await getEventBySlug(slug)
  if (!dbEvent) return null

  const details = transformEventDetail(dbEvent)
  if (!details) return null

  return { event: transformEvent(dbEvent), details }
}

export async function generateStaticParams() {
  const events = await getEvents()
  return events.map((event) => ({ slug: event.slug }))
}

export default async function EventPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const data = await getEventWithDetails(slug)

  if (!data) {
    notFound()
  }

  const { event, details } = data

  const allEventsData = await getEvents().then(transformEvents)
  const allEvents = sortEventsByStart(allEventsData)

  const hexRaw = event.accentColor?.trim().replace(/^#/, "")
  const accentCss =
    hexRaw && /^([0-9a-fA-F]{3}|[0-9a-fA-F]{6})$/.test(hexRaw)
      ? [
          `--color-accent:#${hexRaw}`,
          "--color-accent-hover:color-mix(in srgb, var(--color-accent) 80%, #000)",
          "--color-accent-dim:color-mix(in srgb, var(--color-accent) 60%, transparent)",
          "--color-border:color-mix(in srgb, var(--color-accent) 60%, transparent)",
        ].join(";")
      : null

  return (
    <div>
      {accentCss && (
        <style dangerouslySetInnerHTML={{ __html: `:root:root{${accentCss}}` }} />
      )}
      <Breadcrumb />
      <EventHero
        event={event}
        titleLine1={details.titleLine1}
        titleLine2={details.titleLine2}
        titleLine3={details.titleLine3}
        subtitle={details.subtitle}
      />
      <EventDescription description={event.description} />
      <EventProgram heading={details.featuresHeading} features={details.features} />
      <EventBanner />
      <EventInfo time={event.time} dayOfWeek={event.dayOfWeek} />
      <section className="section-py">
        <BookingButton
          href="https://wa.me/84855559797"
          label="ЗАБРОНИРОВАТЬ СТОЛ"
          className="text-black lg:py-6 lg:text-2xl"
        />
      </section>
      <EventDaySchedule events={allEvents} currentSlug={event.slug} />
    </div>
  )
}