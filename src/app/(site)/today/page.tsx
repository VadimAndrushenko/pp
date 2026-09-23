import { redirect } from "next/navigation"

import { dayOfWeekFromDate } from "@/collections/components/dateTimeUtils"
import { getEvents } from "@/lib/payload/events"
import { transformEvents } from "@/lib/transformData/eventsTransform"

export const dynamic = "force-dynamic"

const VENUE_TIME_ZONE = "Asia/Ho_Chi_Minh"

function nowInTimeZone(timeZone: string): Date {
  const formatted = new Intl.DateTimeFormat("en-US", {
    timeZone,
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
  }).format(new Date())

  const [month, day, year, hour, minute] = formatted.match(/\d+/g)!.map(Number)
  return new Date(year, month - 1, day, hour === 24 ? 0 : hour, minute)
}

export default async function TodayPage() {
  const now = nowInTimeZone(VENUE_TIME_ZONE)
  const today = dayOfWeekFromDate(now)
  const time = `${String(now.getHours()).padStart(2, "0")}:${String(now.getMinutes()).padStart(2, "0")}`

  const events = await getEvents().then((docs) => transformEvents(docs, now))
  const todays = events
    .filter((event) => event.dayOfWeek === today)
    .sort((a, b) => a.time.localeCompare(b.time, "ru"))

  const target = todays.find((event) => event.time >= time) ?? todays[todays.length - 1]

  redirect(target ? `/events/${target.slug}` : "/", "replace")
}