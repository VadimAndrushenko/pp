import { Card } from "./card"
import { Badge } from "./badge"
import { cn } from "@/lib/utils"
import type { EventItem } from "@/types"
import { Clock, ChevronRight } from "lucide-react"

interface EventCardProps {
  event: EventItem
  variant?: "full" | "compact" | "carousel"
}

export function EventCard({ event, variant = "full" }: EventCardProps) {
  if (variant === "compact") {
    return (
      <Card as="a" href={`/events/${event.slug}`} className="flex flex-col gap-3 min-w-[200px]">
        <div className="text-center">
          <div className="text-2xl font-display font-bold text-[var(--color-accent)]">{event.date}</div>
          <div className="text-xs text-[var(--color-text-muted)] uppercase">{event.month}</div>
        </div>
        <div
          className="w-full h-24 rounded-[var(--radius-sm)] bg-cover bg-center"
          style={{ backgroundImage: `url(${event.image})` }}
        />
        <h4 className="text-sm font-display uppercase text-[var(--color-text-primary)]">{event.title}</h4>
        <div className="flex items-center gap-1 text-xs text-[var(--color-text-muted)]">
          <Clock className="w-3 h-3" />
          <span>{event.dayOfWeek}, {event.time}</span>
        </div>
      </Card>
    )
  }

  if (variant === "carousel") {
    return (
      <a
        href={`/events/${event.slug}`}
        className="group shrink-0 w-[180px] sm:w-[200px] md:w-[210px] lg:w-[240px] border border-transparent transition-all duration-200 hover:-translate-y-1.5 hover:shadow-[0_0_30px_rgba(255,106,0,0.35)] hover:border-[var(--color-accent)] focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] focus-visible:outline-none rounded-[var(--radius-card)] cursor-pointer"
      >
        <div
          className="relative w-full aspect-[4/5] rounded-[var(--radius-card)] overflow-hidden bg-contain bg-center"
          style={{
            backgroundImage: `url(${event.image})`,
            backgroundColor: "var(--color-surface)",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />

          <div className="absolute top-2 left-2 bg-black/80 rounded-md px-2 py-1.5 text-center min-w-[44px]">
            <div className="text-base font-display font-bold leading-none text-[var(--color-text-primary)]">
              {event.date}
            </div>
            <div className="text-[9px] uppercase tracking-wide text-[var(--color-text-muted)] mt-0.5">
              {event.month}
            </div>
          </div>
        </div>

        <div className="pt-3 pb-3 px-2 text-center">
          <h3 className="text-sm font-display font-bold uppercase leading-snug text-[var(--color-text-primary)] line-clamp-2 min-h-[2.2em]">
            {event.title}
          </h3>
          <div className="flex items-center justify-center gap-1 mt-1.5 text-xs text-[var(--color-text-muted)] uppercase tracking-wide">
            <Clock className="w-3 h-3 shrink-0" />
            <span>{event.dayOfWeek}, {event.time}</span>
          </div>
        </div>
      </a>
    )
  }

  /* FULL variant (events page) */
  return (
    <Card as="a" href={`/events/${event.slug}`} className="grid grid-cols-[1fr_auto] gap-4 md:grid-cols-[auto_1fr_auto] items-start">
      <div className="col-span-2 md:col-span-1 md:col-start-2">
        <div
          className="w-full h-36 rounded-[var(--radius-sm)] bg-cover bg-center mb-3 relative"
          style={{ backgroundImage: `url(${event.image})` }}
        >
          <Badge variant="accent" className="absolute top-2 left-2">
            {event.category}
          </Badge>
        </div>
        <h3 className="text-base font-display uppercase text-[var(--color-text-primary)] mb-1">
          {event.title}
        </h3>
        {event.subtitle && (
          <p className="text-sm text-[var(--color-accent)] font-display uppercase mb-1">{event.subtitle}</p>
        )}
        <p className="text-xs text-[var(--color-text-secondary)] mb-2 line-clamp-2">{event.description}</p>
        <div className="flex items-center gap-2 text-sm text-[var(--color-text-muted)]">
          <Clock className="w-5 h-5" strokeWidth={1.5} style={{ color: "var(--color-accent)" }} />
          <span>{event.time}</span>
          {event.admission === "free" && (
            <>
              <span>|</span>
              <span className="font-display uppercase tracking-wider" style={{ color: "var(--color-accent)" }}>Вход свободный</span>
            </>
          )}
        </div>
      </div>

      <div className="flex items-center gap-x-3 md:flex-col md:items-center md:justify-center md:text-center md:min-w-[70px] md:gap-x-0">
        <div
          className="text-7xl font-display font-bold leading-none"
          style={{ color: "var(--color-accent)" }}
        >
          {event.date}
        </div>
        <div className="text-xl text-[var(--color-text-primary)] uppercase md:mt-1">{event.month}</div>
        <div className="text-lg text-[var(--color-accent)] md:mt-1">{event.dayOfWeek}</div>
      </div>

      <ChevronRight
        className="w-5 h-5 justify-self-end self-center md:mt-4"
        style={{ color: "var(--color-accent)" }}
      />
    </Card>
  )
}
