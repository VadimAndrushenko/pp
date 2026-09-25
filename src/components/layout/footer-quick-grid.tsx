import { ChevronRight, FileText, Phone } from "lucide-react"
import type { ComponentType, SVGProps } from "react"

import { links as linksFallback } from "@/config/links"
import type { SiteSettings } from "@/lib/transformData"

/** Кастомный SVG: скутер для доставки (в lucide-react подходящей иконки нет) */
function ScooterIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <circle cx="6" cy="18" r="3" />
      <circle cx="18" cy="18" r="3" />
      <path d="M9 18h6" />
      <path d="M18 15V9a2 2 0 0 0-2-2h-2" />
      <path d="M6 15c0-4 2-6 6-6h4" />
      <path d="M14 5h3l1 4" />
    </svg>
  )
}

/** Кастомный SVG: календарь со звёздочкой — для «Афиши мероприятий» */
function CalendarStarIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <rect x="3" y="5" width="18" height="16" rx="2" />
      <path d="M8 3v4M16 3v4M3 10h18" />
      <path d="m12 13 1.1 2.3 2.5.3-1.8 1.8.5 2.5-2.3-1.2-2.3 1.2.5-2.5-1.8-1.8 2.5-.3z" />
    </svg>
  )
}

export interface FooterQuickCardProps {
  id: string
  icon: ComponentType<SVGProps<SVGSVGElement>>
  label: string
  href: string
}

function FooterQuickCard({ id, icon: Icon, label, href }: FooterQuickCardProps) {
  return (
    <a
      href={href}
      data-testid={`footer-quick-${id}`}
      className="group relative flex items-center justify-between gap-4 max-sm:gap-2 rounded-card border border-border bg-transparent p-5 max-sm:p-3 sm:p-6 transition-all duration-300 hover:-translate-y-1 hover:border-accent hover:shadow-[0_0_28px_-4px_color-mix(in_srgb,var(--color-accent)_45%,transparent)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
    >
      <span className="flex items-center gap-4 max-sm:gap-2 min-w-0">
        <Icon
          className="h-9 w-9 max-sm:h-7 max-sm:w-7 sm:h-10 sm:w-10 shrink-0 text-accent transition-transform duration-300 group-hover:scale-110 group-hover:drop-shadow-[0_0_10px_color-mix(in_srgb,var(--color-accent)_60%,transparent)]"
        />
        <span className="truncate font-display font-bold uppercase tracking-wide text-lg max-sm:text-sm sm:text-xl lg:text-2xl text-text-primary">
          {label}
        </span>
      </span>

      <ChevronRight
        className="h-6 w-6 max-sm:h-4 max-sm:w-4 shrink-0 text-accent transition-transform duration-300 group-hover:translate-x-1"
        strokeWidth={2.25}
      />
    </a>
  )
}

export const getFooterQuickLinks = (
  links: SiteSettings["links"] = linksFallback
): readonly FooterQuickCardProps[] => [
  { id: "menu", icon: FileText, label: "Меню", href: links.menu },
  {
    id: "events",
    icon: CalendarStarIcon,
    label: "Афиша мероприятий",
    href: links.events,
  },
  { id: "delivery", icon: ScooterIcon, label: "Доставка", href: links.delivery },
  { id: "contacts", icon: Phone, label: "Контакты", href: links.contacts },
] as const

interface FooterQuickGridProps {
  links?: SiteSettings["links"]
}

export function FooterQuickGrid({
  links = linksFallback,
}: FooterQuickGridProps) {
  return (
    <div
      className="grid grid-cols-2 gap-4"
      data-testid="footer-quick-grid"
    >
      {getFooterQuickLinks(links).map((item) => (
        <FooterQuickCard key={item.id} {...item} />
      ))}
    </div>
  )
}
