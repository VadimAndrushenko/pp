import type { Event } from "@payload-types"
import type { EventItem } from "@/types"
import { resolveImageUrl } from "./resolveImageUrl"
import {
  computeDateForDayOfWeek,
  computePartsFromIsoDate,
  isDateInCurrentWeek,
} from "@/collections/components/dateTimeUtils"

export const sortEventsByStart = (events: EventItem[]): EventItem[] =>
  [...events].sort((a, b) => {
    const dayDiff = Number(a.date) - Number(b.date)
    if (dayDiff !== 0) return dayDiff
    return a.time.localeCompare(b.time, "ru")
  })

const resolveDateParts = (event: Event, now: Date) => {
  if (event.scheduleType === "one-off" && event.specificDate) {
    return computePartsFromIsoDate(event.specificDate) ?? {
      date: event.date,
      month: event.month,
      dayOfWeek: event.dayOfWeek,
    }
  }

  const computed = computeDateForDayOfWeek(event.dayOfWeek, now)
  return {
    date: computed.date || event.date,
    month: computed.month || event.month,
    dayOfWeek: event.dayOfWeek,
  }
}

export const transformEvents = (events: Event[], now: Date = new Date()): EventItem[] => {
  const visible = events.filter((event) => {
    if (event.scheduleType === "one-off") {
      return event.specificDate ? isDateInCurrentWeek(event.specificDate, now) : true
    }
    return true
  })

  return sortEventsByStart(
    visible.map((event) => {
      const { date, month, dayOfWeek } = resolveDateParts(event, now)
      return {
        id: String(event.id),
        date,
        month,
        dayOfWeek,
        title: event.title,
        subtitle: event.subtitle ?? undefined,
        tagline: event.heroSubtitle ?? undefined,
        category: event.category,
        time: event.time,
        image: resolveImageUrl(event.image),
        description: event.description,
        admission: event.admission,
        slug: event.slug,
        accentColor: event.accentColor?.trim() || undefined,
      }
    }),
  )
}

export const transformEvent = (event: Event): EventItem => transformEvents([event])[0]

export const transformEventBySlug = (event: Event | null): EventItem | null =>
  event ? transformEvent(event) : null