import Link from "next/link"
import { Breadcrumb } from "@/components/layout/breadcrumb"
import { CalendarCheck } from "lucide-react"

export function EventsHeader() {
  return (
    <>
      <Breadcrumb />
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl md:text-4xl font-display font-bold uppercase tracking-tight text-[var(--color-text-primary)]">
          Афиша мероприятий
        </h1>
        <Link
          href="/today"
          className="hidden sm:flex items-center gap-2 px-4 py-2 rounded-[var(--radius-sm)] border text-xs font-display uppercase tracking-wider"
          style={{
            borderColor: "var(--color-border)",
            color: "var(--color-text-secondary)",
          }}
        >
          <CalendarCheck className="w-4 h-4" style={{ color: "var(--color-accent)" }} />
          Что сегодня?
        </Link>
      </div>
      <p className="text-sm text-[var(--color-text-secondary)] mb-6">
        Каждый день что-то происходит! Выбирай событие по душе и присоединяйся.
      </p>
    </>
  )
}
