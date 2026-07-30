import { Card } from "./card"
import { links } from "@/config/links"
import { MapPin, ArrowRight } from "lucide-react"

export function MapCTA() {
  return (
    <section className="container">
      <Card
        as="a"
        href={links.googleMaps}
        variant="outline"
        className="flex items-center justify-between gap-4 mb-4 py-5"
      >
        <div className="flex items-center gap-3">
          <MapPin className="w-6 h-6" style={{ color: "var(--color-accent)" }} strokeWidth={1.5} />
          <span className="text-sm font-display uppercase tracking-wider text-[var(--color-text-primary)]">
            Построить маршрут
          </span>
        </div>
        <ArrowRight className="w-5 h-5" style={{ color: "var(--color-accent)" }} />
      </Card>

      <p className="text-xs font-display uppercase tracking-wider text-[var(--color-text-muted)] mb-3">
        Выберите карту
      </p>
      <div className="flex gap-3 mb-4">
        <a
          href={links.googleMaps}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex items-center justify-center gap-2 py-3 rounded-[var(--radius-sm)] text-xs font-display uppercase tracking-wider border transition-colors"
          style={{
            borderColor: "var(--color-border)",
            color: "var(--color-text-secondary)",
          }}
        >
          <span className="text-lg">🗺️</span>
          Google Maps
        </a>
        <a
          href={links.yandexMaps}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex items-center justify-center gap-2 py-3 rounded-[var(--radius-sm)] text-xs font-display uppercase tracking-wider border transition-colors"
          style={{
            borderColor: "var(--color-border)",
            color: "var(--color-text-secondary)",
          }}
        >
          <span className="text-lg">📍</span>
          Яндекс Карты
        </a>
      </div>

      <div className="flex items-start gap-2 text-sm text-[var(--color-text-secondary)]">
        <MapPin className="w-4 h-4 mt-0.5 shrink-0" style={{ color: "var(--color-accent)" }} strokeWidth={1.5} />
        <span>{links.address}</span>
      </div>
    </section>
  )
}
