"use client"

import { StaggerGrid, StaggerItem } from "@/components/ui/stagger-grid"
import { Soup, CalendarCheck, Motorbike, Video } from "lucide-react"

export interface NavItem {
  icon: typeof Soup
  label: string
  desc: string
  href: string
}

const navItems: NavItem[] = [
  { icon: Soup, label: "МЕНЮ", desc: "Русская, кавказская, восточная, европейская и азиатская кухни", href: "/menu" },
  { icon: CalendarCheck, label: "ЧТО СЕГОДНЯ?", desc: "Каждый день — мероприятия", href: "/today" },
  { icon: Motorbike, label: "ДОСТАВКА", desc: "Премиальные кальяны", href: "/delivery" },
  { icon: Video, label: "КАК У НАС", desc: "Фото- и видеоотчёты", href: "/gallery" },
]

interface QuickNavProps {
  embedded?: boolean
  items?: NavItem[]
}

export function QuickNav({ embedded, items }: QuickNavProps) {
  const nav = items ?? navItems
  const grid = (
    <StaggerGrid className="grid grid-cols-2 lg:grid-cols-4 gap-4" staggerDelay={0.08}>
      {nav.map((item) => {
        const Icon = item.icon
        return (
          <StaggerItem key={item.href + item.label} className="h-full">
            <a
              href={item.href}
              className="
              group flex flex-col items-center justify-center gap-4 p-5 h-full rounded-[var(--radius-card)] border 
              border-[var(--color-border)] bg-transparent transition-all duration-300 hover:-translate-y-2 h
              over:shadow-[0_0_40px_rgba(255,106,0,0.18)] hover:border-[var(--color-accent)] hover:bg-[var(--color-surface)]/50 
              focus-visible:ring-2 focus-visible:ring-[var(--color-accent)]
              
              max-sm:p-3 max-sm:gap-2 
              "
            >
              <Icon
                className="
                  w-12 h-12 transition-all duration-300 group-hover:scale-125 
                  group-hover:drop-shadow-[0_0_10px_rgba(255,106,0,0.5)] 
                  
                  max-sm:w-10 max-sm:h-10
                "
                style={{ color: "var(--color-accent)" }}
                strokeWidth={1.5}
              />
              <span className="
                text-xl font-display font-bold uppercase tracking-wide text-[var(--color-text-primary)] 
                text-center leading-tight transition-colors duration-200 group-hover:text-[var(--color-accent)]
                max-md:text-lg max-sm:text-base 
              ">
                {item.label}
              </span>
              <span className="
                text-sm uppercase tracking-wide leading-snug text-[var(--color-text-muted)] text-center 
                transition-colors duration-200 group-hover:text-[var(--color-text-secondary)] 

                max-md:text-xs max-sm:text-[10px]
              ">
                {item.desc}
              </span>
            </a>
          </StaggerItem>
        )
      })}
    </StaggerGrid>
  )

  if (embedded) return grid

  return (
    <section className="px-5 py-8">
      <div className="max-w-7xl mx-auto">{grid}</div>
    </section>
  )
}
