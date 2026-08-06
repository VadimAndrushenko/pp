"use client"

import { StaggerGrid, StaggerItem } from "@/components/ui/stagger-grid"
import { Soup, CalendarCheck, Motorbike, Video } from "lucide-react"

export interface NavItem {
  icon: typeof Soup
  label: string
  desc: string
  href: string
}

const TODAY_SLUGS = [
  "show-program",          // Воскресенье (0)
  "after-weekend-party",   // Понедельник (1)
  "business-breakfast",    // Вторник (2)
  "quiz-poidem-pozhrem",   // Среда (3)
  "live-music",            // Четверг (4)
  "karaoke-battle",        // Пятница (5)
  "dj-party",              // Суббота (6)
]

function getTodayHref() {
  const day = new Date().getDay()
  return `/events/${TODAY_SLUGS[day]}`
}

const navItems: NavItem[] = [
  { icon: Soup, label: "МЕНЮ", desc: "Русская, кавказская, восточная, европейская и азиатская кухни", href: "/menu" },
  { icon: CalendarCheck, label: "ЧТО СЕГОДНЯ?", desc: "Каждый день — мероприятия", href: getTodayHref() },
  { icon: Motorbike, label: "ДОСТАВКА", desc: "Премиальные кальяны", href: "/delivery" },
  { icon: Video, label: "КАК У НАС", desc: "Фото- и видеоотчёты", href: "/gallery" },
]

interface QuickNavProps {
  embedded?: boolean
  items?: NavItem[]
  className?: string
}

export function QuickNav({ embedded, items, className }: QuickNavProps) {
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
              group flex flex-col items-center justify-center gap-4 p-5 h-full rounded-card border 
              border-border bg-transparent transition-all duration-300 hover:-translate-y-2 
              hover:shadow-[0_0_40px_rgba(255,106,0,0.18)] hover:border-accent hover:bg-surface/50 
              focus-visible:ring-2 focus-visible:ring-accent
              
              max-sm:p-3 max-sm:gap-2 
              "
            >
              <Icon
                className="
                  w-12 h-12 text-accent transition-all duration-300 group-hover:scale-125 
                  group-hover:drop-shadow-[0_0_10px_rgba(255,106,0,0.5)] 
                  
                  max-sm:w-10 max-sm:h-10
                "
                strokeWidth={1.5}
              />
              <span className="
                text-xl font-display font-bold uppercase tracking-wide text-text-primary 
                text-center leading-tight transition-colors duration-200 group-hover:text-accent
                max-md:text-lg max-sm:text-base 
              ">
                {item.label}
              </span>
              <span className="
                text-sm uppercase tracking-wide leading-snug text-text-muted text-center 
                transition-colors duration-200 group-hover:text-text-secondary 

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

  return <div className={className}>{grid}</div>
}
