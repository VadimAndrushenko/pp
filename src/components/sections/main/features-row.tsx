"use client"

import { StaggerGrid, StaggerItem } from "@/components/ui/stagger-grid"
import type { LucideIcon } from "lucide-react"
import { Soup, CalendarCheck, Cigarette, Camera } from "lucide-react"
import { cn } from "@/components/lib/utils"

interface FeatureItem {
  icon: LucideIcon
  label: string
  text: string
}

const features: FeatureItem[] = [
  { icon: Soup, label: "МЕНЮ", text: "Русская, кавказская, восточная, европейская и азиатская кухни" },
  { icon: CalendarCheck, label: "ЧТО СЕГОДНЯ?", text: "Каждый день — мероприятия" },
  { icon: Cigarette, label: "ДОСТАВКА", text: "Премиальные кальяны" },
  { icon: Camera, label: "КАК У НАС", text: "Фото- и видеоотчёты" },
]

interface FeaturesRowProps {
  embedded?: boolean
}

export function FeaturesRow({ embedded }: FeaturesRowProps) {
  const grid = (
    <StaggerGrid className="grid grid-cols-2 lg:grid-cols-4 gap-y-8 gap-x-4" staggerDelay={0.08}>
      {features.map((feature, index) => {
        const Icon = feature.icon
        return (
          <StaggerItem key={index}>
            <div
              className={cn(
                "flex flex-col items-center text-center gap-3 px-2 py-4 rounded-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_4px_20px_rgba(255,106,0,0.1)]",
                "lg:border-r lg:border-border",
                index === features.length - 1 && "lg:border-r-0",
              )}
            >
              <Icon
                className="w-7 h-7 lg:w-8 lg:h-8 text-accent hover-glow-accent"
                strokeWidth={1.5}
              />
              <span className="text-lg max-md:text-base font-display font-bold uppercase tracking-wide text-text-primary">
                {feature.label}
              </span>
              <span className="text-sm max-md:text-xs uppercase tracking-wide leading-snug text-text-muted -mt-1">
                {feature.text}
              </span>
            </div>
          </StaggerItem>
        )
      })}
    </StaggerGrid>
  )

  if (embedded) return grid

  return grid
}
