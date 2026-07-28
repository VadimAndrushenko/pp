"use client"

import { useState } from "react"
import { FilterTabs } from "@/components/ui/filter-tabs"
import { PromoBanner } from "@/components/ui/promo-banner"
import { FeaturesRow } from "@/components/sections/main/features-row"
import { EventsHeader } from "@/components/sections/events/events-header"
import { EventList } from "@/components/sections/events/event-list"
import { events } from "@/config/events"
import { LayoutGrid, MicVocal, Brain, Music, Briefcase, Sparkles } from "lucide-react"
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
    <>
      <EventsHeader />

        <FilterTabs activeTab={activeTab} onTabChange={setActiveTab} tabs={filterTabs} />

        <EventList events={filtered} />

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
    </>
  )
}
