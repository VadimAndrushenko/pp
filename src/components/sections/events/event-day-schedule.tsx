import Link from "next/link"
import { CalendarDays, ChevronRight } from "lucide-react"
import { EventsPreview } from "./events-preview"
import type { EventItem } from "@/types"

interface EventDayScheduleProps {
  events: EventItem[]
  currentSlug: string
}

const pluralEvents = (n: number) => {
  if (n === 1) return "событие"
  if (n >= 2 && n <= 4) return "события"
  return "событий"
}

export function EventDaySchedule({ events, currentSlug }: EventDayScheduleProps) {
  const current = events.find((event) => event.slug === currentSlug)
  if (!current) return null

  const dayEvents = events.filter((event) => event.dayOfWeek === current.dayOfWeek)
  const restOfWeek = events.filter((event) => event.dayOfWeek !== current.dayOfWeek)
  const hasMoreToday = dayEvents.length > 1
  const [first] = dayEvents

  return (
    <>
      {hasMoreToday && (
        <section className="section-py">
          <div className="mb-6 flex flex-wrap items-end justify-between gap-3">
            <h2 className="section-heading font-display font-bold uppercase tracking-tight text-text-primary">
              Ещё в {first.dayOfWeek}
            </h2>
            <span className="flex items-center gap-2 font-display text-xs uppercase tracking-wider text-text-muted">
              <CalendarDays className="h-4 w-4 text-accent" strokeWidth={2} />
              {first.month} {first.date} · {dayEvents.length} {pluralEvents(dayEvents.length)}
            </span>
          </div>

          <div className="neon-card flex flex-col gap-2 rounded-card border border-border bg-surface p-4 sm:p-6">
              {dayEvents.map((event) => {
                const isCurrent = event.slug === currentSlug

                if (isCurrent) {
                  return (
                    <div
                      key={event.id}
                      className="flex items-center gap-3 rounded-md border border-accent/40 bg-accent/10 px-3 py-3"
                    >
                      <span className="shrink-0 font-display text-xs font-semibold uppercase tracking-wider text-accent">
                        {event.time}
                      </span>
                      <span className="min-w-0 truncate font-display text-sm font-bold uppercase leading-tight text-text-secondary">
                        {event.title}
                      </span>
                      {event.admission === "free" && (
                        <span className="hidden shrink-0 rounded-sm border border-accent/30 px-1.5 py-0.5 text-[9px] font-semibold tracking-wider text-accent sm:inline-flex">
                          Вход свободный
                        </span>
                      )}
                      <span className="ml-auto shrink-0 rounded-sm bg-accent px-2 py-0.5 font-display text-[9px] font-bold uppercase tracking-wider text-black">
                        Вы смотрите
                      </span>
                    </div>
                  )
                }

                return (
                  <Link
                    key={event.id}
                    href={`/events/${event.slug}`}
                    className="group/chip flex items-center gap-3 rounded-md border border-border/50 bg-black/30 px-3 py-3 transition-colors duration-200 hover:border-accent/60 hover:bg-accent/10 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-accent"
                  >
                    <span className="shrink-0 font-display text-xs font-semibold uppercase tracking-wider text-accent">
                      {event.time}
                    </span>
                    <span className="min-w-0 truncate font-display text-sm font-bold uppercase leading-tight text-text-primary transition-colors duration-200 group-hover/chip:text-accent">
                      {event.title}
                    </span>
                    {event.admission === "free" && (
                      <span className="hidden shrink-0 rounded-sm border border-accent/30 px-1.5 py-0.5 text-[9px] font-semibold tracking-wider text-accent sm:inline-flex">
                        Вход свободный
                      </span>
                    )}
                    <ChevronRight
                      className="ml-auto h-4 w-4 shrink-0 text-text-secondary transition-colors duration-200 group-hover/chip:text-accent"
                      strokeWidth={2}
                    />
                  </Link>
                )
              })}
            </div>
        </section>
      )}

      {restOfWeek.length > 0 && (
        <EventsPreview
          title="Вся афиша недели"
          events={restOfWeek}
          cardVariant="cell"
        />
      )}
    </>
  )
}