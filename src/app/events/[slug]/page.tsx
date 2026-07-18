import { notFound } from "next/navigation"
import { Breadcrumb } from "@/components/layout/breadcrumb"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { events } from "@/config/events"
import { Clock, MapPin, Calendar } from "lucide-react"
import Link from "next/link"

interface Props {
  params: Promise<{ slug: string }>
}

export default async function EventPage({ params }: Props) {
  const { slug } = await params
  const event = events.find((e) => e.slug === slug)

  if (!event) notFound()

  return (
    <div className="px-5 py-6">
      <div className="max-w-7xl mx-auto">
        <Breadcrumb />

        <div
          className="w-full h-64 rounded-[var(--radius-card)] bg-cover bg-center mb-6 relative"
          style={{ backgroundImage: `url(${event.image})`, backgroundColor: "var(--color-surface)" }}
        >
          <Badge variant={event.admission === "free" ? "success" : "accent"} className="absolute top-3 left-3">
            {event.admission === "free" ? "Вход свободный" : "Платный вход"}
          </Badge>
        </div>

        <div className="flex items-center gap-3 mb-4">
          <div className="flex flex-col items-center">
            <span className="text-3xl font-display font-bold text-[var(--color-accent)]">{event.date}</span>
            <span className="text-xs text-[var(--color-text-muted)] uppercase">{event.month}</span>
          </div>
          <div className="h-10 w-px" style={{ backgroundColor: "var(--color-border)" }} />
          <div className="text-sm text-[var(--color-text-secondary)]">
            <div className="flex items-center gap-1">
              <Calendar className="w-3 h-3" />
              {event.dayOfWeek}
            </div>
            <div className="flex items-center gap-1">
              <Clock className="w-3 h-3" />
              {event.time}
            </div>
          </div>
        </div>

        <h1 className="text-3xl font-display font-bold uppercase text-[var(--color-text-primary)] mb-2">
          {event.title}
        </h1>
        {event.subtitle && (
          <p className="text-sm font-display uppercase tracking-wider mb-4" style={{ color: "var(--color-accent)" }}>
            {event.subtitle}
          </p>
        )}
        <p className="text-sm text-[var(--color-text-secondary)] mb-6">{event.description}</p>

        <div className="flex flex-col sm:flex-row gap-3 mb-8">
          <Button variant="solid" size="lg" as="a" href="https://wa.me/84855559797">
            Забронировать стол
          </Button>
          <Button variant="outline" size="lg" as="a" href="/events">
            ← Назад к афише
          </Button>
        </div>

        <Card className="p-4 mb-8">
          <h3 className="text-sm font-display uppercase text-[var(--color-text-primary)] mb-3">Другие события</h3>
          <div className="flex gap-3 overflow-x-auto pb-2">
            {events
              .filter((e) => e.slug !== slug)
              .slice(0, 3)
              .map((e) => (
                <Link
                  key={e.id}
                  href={`/events/${e.slug}`}
                  className="min-w-[150px] p-3 rounded-[var(--radius-sm)] border shrink-0"
                  style={{ borderColor: "var(--color-border)" }}
                >
                  <span className="text-lg font-display font-bold text-[var(--color-accent)] block">{e.date}</span>
                  <span className="text-xs text-[var(--color-text-muted)] uppercase block">{e.month}</span>
                  <span className="text-xs font-display uppercase text-[var(--color-text-primary)] mt-1 block">{e.title}</span>
                </Link>
              ))}
          </div>
        </Card>
      </div>
    </div>
  )
}
