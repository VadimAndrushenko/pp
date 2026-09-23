"use client"

import Link from "next/link"
import { useRouter } from "next/navigation"
import { cn } from "@/components/lib/utils"
import type { EventItem } from "@/types"

interface EventDayCardProps {
  events: EventItem[]
  className?: string
}

export const CATEGORY_LABELS: Record<EventItem["category"], string> = {
  all: "Все",
  karaoke: "Караоке",
  quiz: "Квиз",
  music: "Музыка",
  business: "Бизнес",
  show: "Шоу",
}

const pluralEvents = (n: number) => {
  if (n === 1) return "событие"
  if (n >= 2 && n <= 4) return "события"
  return "событий"
}

export function EventDayCard({ events, className }: EventDayCardProps) {
  const [first] = events
  const router = useRouter()

  return (
    <div
      onClick={() => router.push(`/events/${first.slug}`)}
      className={cn(
        "group flex h-full w-full cursor-pointer flex-col border border-border/60 transition-all duration-200 hover:-translate-y-1.5 hover:shadow-[0_0_30px_color-mix(in_srgb,var(--color-accent)_35%,transparent)] hover:border-accent focus-visible:ring-2 focus-visible:ring-accent focus-visible:outline-none rounded-card",
        className,
      )}
    >
      <div className="relative flex h-full w-full flex-col items-center overflow-hidden rounded-card bg-surface px-3 py-5 text-center">
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-accent/[0.07] via-transparent to-black/50" />
        <div className="pointer-events-none absolute -top-10 -right-10 h-32 w-32 rounded-full bg-accent/15 blur-3xl" />
        <div className="pointer-events-none absolute inset-0 rounded-card ring-1 ring-inset ring-border/40" />

        <span className="relative flex items-center gap-1.5 font-display text-[11px] font-semibold uppercase tracking-[0.25em] text-text-muted">
          <span className="h-1.5 w-1.5 rounded-full bg-accent" />
          {CATEGORY_LABELS[first.category]}
        </span>

        <div className="relative mt-2 flex flex-col items-center gap-0.5">
          <span className="text-[11px] uppercase tracking-[0.25em] text-text-muted">{first.month}</span>
          <span className="font-display text-4xl leading-none font-bold text-accent">{first.date}</span>
          <span className="text-lg uppercase tracking-wide text-text-primary">{first.dayOfWeek}</span>
        </div>

        <div className="relative mt-2 flex items-center gap-2">
          <div className="h-px w-10 border-t border-dashed border-accent/40" />
          <span className="font-display text-xs uppercase tracking-wide text-text-muted">
            {events.length} {pluralEvents(events.length)}
          </span>
          <div className="h-px w-10 border-t border-dashed border-accent/40" />
        </div>

        <div className="relative mt-3 flex min-h-0 w-full flex-1 flex-col gap-1.5 overflow-y-auto pr-1 [scrollbar-width:thin] [scrollbar-color:var(--color-border)_transparent] [&::-webkit-scrollbar]:w-[3px] [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-border [&::-webkit-scrollbar-track]:bg-transparent">
          {events.map((event) => (
            <Link
              key={event.id}
              href={`/events/${event.slug}`}
              onClick={(e) => e.stopPropagation()}
              className="group/chip flex flex-col gap-1.5 rounded-lg border-2 border-accent/40 bg-gradient-to-br from-black/60 to-accent/10 px-3 py-2.5 text-left transition-all duration-200 hover:border-accent hover:bg-accent/20 hover:shadow-[0_0_20px_color-mix(in_srgb,var(--color-accent)_25%,transparent)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
            >
              <span className="flex items-center justify-between gap-2">
                <span className="shrink-0 font-display text-xs font-bold uppercase tracking-wider text-accent md:text-[13px] lg:text-sm xl:text-base">
                  {event.time}
                </span>
                <span
                  className={cn(
                    "shrink-0 rounded-sm border px-1 md:px-1.5 py-0.5 text-[9px] font-semibold leading-none tracking-wider md:text-[11px] lg:text-xs xl:text-[13px]",
                    event.admission === "free"
                      ? "border-accent/40 text-accent"
                      : "border-text-muted/40 text-text-muted",
                  )}
                >
                  {event.admission === "free" ? "Вход свободный" : "Вход платный"}
                </span>
              </span>
              <span className="min-w-0 truncate font-display text-sm font-bold uppercase leading-snug text-text-primary transition-colors duration-200 group-hover/chip:text-accent">
                {event.title}
              </span>
              {event.tagline && (
                <span className="min-w-0 break-words text-[11px] font-semibold uppercase leading-snug tracking-wide text-text-secondary">
                  {event.tagline}
                </span>
              )}
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}