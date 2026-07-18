"use client"

import { useState } from "react"
import Link from "next/link"
import { Breadcrumb } from "@/components/layout/breadcrumb"
import { FilterTabs } from "@/components/ui/filter-tabs"
import { EventCard } from "@/components/ui/event-card"
import { PromoBanner } from "@/components/ui/promo-banner"
import { FeaturesRow } from "@/components/sections/features-row"
import { events } from "@/config/events"
import { CalendarCheck, LayoutGrid, MicVocal, Brain, Music, Briefcase, Sparkles } from "lucide-react"
import type { EventCategory } from "@/types"

const filterTabs = [
  { id: "all" as EventCategory, label: "Все события", icon: LayoutGrid },
  { id: "karaoke" as EventCategory, label: "Караоке", icon: MicVocal },
  { id: "quiz" as EventCategory, label: "Квизы", icon: Brain },
  { id: "music" as EventCategory, label: "Музыка", icon: Music },
  { id: "business" as EventCategory, label: "Бизнес", icon: Briefcase },
  { id: "show" as EventCategory, label: "Шоу", icon: Sparkles },
]

export default function EventsPage() {
  const [activeTab, setActiveTab] = useState<EventCategory>("all")

  const filtered = activeTab === "all" ? events : events.filter((e) => e.category === activeTab)

  return (
    <div className="px-5 py-6">
      <div className="max-w-7xl mx-auto">
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

        <FilterTabs activeTab={activeTab} onTabChange={setActiveTab} tabs={filterTabs} />

        <div className="mt-6 grid gap-4">
          {filtered.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>

        {filtered.length === 0 && (
          <p className="text-center py-12 text-[var(--color-text-muted)] font-display uppercase">
            В этой категории пока нет событий
          </p>
        )}

        <div className="mt-10">
          <FeaturesRow />
        </div>

        <div className="mt-8">
          <PromoBanner
            title="День рождения в Poidem Pozhrem!"
            description="Празднуй у нас и получай подарки!"
            href="/promotions"
          />
        </div>
      </div>
    </div>
  )
}
