import { notFound } from "next/navigation"
import type { Metadata } from "next"

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
import { resolveImageUrlNullable } from "@/lib/transformData/resolveImageUrl"
import { buildMetadata } from "@/lib/seo/metadata"
import { EventStructuredData } from "@/components/seo/StructuredData"
import { links } from "@/config/links"

export const revalidate = 30

async function getEventWithDetails(
  slug: string,
): Promise<{ event: EventItem; details: EventDetail; dbEvent: Awaited<ReturnType<typeof getEventBySlug>> } | null> {
  const dbEvent = await getEventBySlug(slug)
  if (!dbEvent) return null

  const details = transformEventDetail(dbEvent)
  if (!details) return null

  return { event: transformEvent(dbEvent), details, dbEvent }
}

export async function generateStaticParams() {
  const events = await getEvents()
  return events.map((event) => ({ slug: event.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const event = await getEventBySlug(slug)
  if (!event) return {}

  return buildMetadata({
    seo: event,
    title: event.title,
    description: event.description,
    path: `/events/${event.slug}`,
    image: resolveImageUrlNullable(event.image),
  })
}

export default async function EventPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const data = await getEventWithDetails(slug)

  if (!data) {
    notFound()
  }

  const { event, details, dbEvent } = data

  const allEventsData = await getEvents().then(transformEvents)
  const allEvents = sortEventsByStart(allEventsData)

  const hexRaw = event.accentColor?.trim().replace(/^#/, "")
  const schemaEvent = dbEvent ?? {
    title: event.title,
    slug: event.slug,
    description: event.description,
    date: "",
    time: event.time,
    scheduleType: "recurring" as const,
    specificDate: null,
    image: 0,
    admission: "free" as const,
  }

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
      <Breadcrumb items={[{ label: "События", href: "/events" }, { label: event.title }]} />
      <EventStructuredData event={schemaEvent} links={links} />
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
          href={links.bookingForm}
          label="ЗАБРОНИРОВАТЬ СТОЛ"
          className="text-black lg:py-6 lg:text-2xl"
        />
      </section>
      <EventDaySchedule events={allEvents} currentSlug={event.slug} />
    </div>
  )
}