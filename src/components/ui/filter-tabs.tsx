"use client"

import { cn } from "@/components/lib/utils"
import type { EventCategory } from "@/types"
import type { LucideIcon } from "lucide-react"

interface FilterTab {
  id: EventCategory
  label: string
  icon: LucideIcon
}

interface FilterTabsProps {
  activeTab: EventCategory
  onTabChange: (tab: EventCategory) => void
  tabs: FilterTab[]
}

export function FilterTabs({ activeTab, onTabChange, tabs }: FilterTabsProps) {
  return (
    <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-none">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => onTabChange(tab.id)}
          className={cn(
            "whitespace-nowrap px-8 py-4 rounded-[var(--radius-sm)] text-lg font-display uppercase tracking-wider transition-all duration-200 inline-flex items-center gap-3",
            activeTab === tab.id
              ? "bg-[var(--color-accent)] text-white"
              : "border border-[var(--color-border)] text-[var(--color-text-secondary)] hover:text-[var(--color-accent)]",
          )}
        >
          <tab.icon className="w-7 h-7" />
          {tab.label}
        </button>
      ))}
    </div>
  )
}
