import { EventCard } from "@/components/ui/event-card"
import type { EventItem } from "@/types"

export function EventList({ events }: { events: EventItem[] }) {
  return (
    <>
      <div className="mt-6 grid gap-4">
        {events.map((event) => (
          <EventCard key={event.id} event={event} />
        ))}
      </div>
      {events.length === 0 && (
        <p className="text-center py-12 text-[var(--color-text-muted)] font-display uppercase">
          В этой категории пока нет событий
        </p>
      )}
    </>
  )
}
