"use client"

import Link from "next/link"
import Slider from "@/components/ui/Slider"
import { ArrowRight, Play, Calendar } from "lucide-react"
import type { GalleryReleaseItem } from "@/lib/transformData/galleryReleasesTransform"

interface GalleryReleasesPreviewProps {
  title?: string
  items: GalleryReleaseItem[]
  linkHref?: string
  linkLabel?: string
}

function splitDateKey(dateKey: string) {
  const [y, m, d] = dateKey.split("-")
  const months = ["", "ЯНВ", "ФЕВ", "МАР", "АПР", "МАЯ", "ИЮН", "ИЮЛ", "АВГ", "СЕН", "ОКТ", "НОЯ", "ДЕК"]
  return { day: d || dateKey, month: months[Number(m)] || m || "" }
}

export function GalleryReleasesPreview({
  title = "Фото и видеоотчёты",
  items,
  linkHref,
  linkLabel = "Смотреть всё",
}: GalleryReleasesPreviewProps) {
  return (
    <section className="section-py">
      <div className="flex items-center justify-between mb-6">
        <h2 className="section-heading font-display font-bold uppercase tracking-tight text-text-primary">
          {title}
        </h2>
        {linkHref && (
          <Link
            href={linkHref}
            className="text-xs font-display uppercase tracking-wider flex items-center gap-1 link-underline shrink-0 text-accent"
          >
            {linkLabel}
            <ArrowRight className="w-3 h-3" />
          </Link>
        )}
      </div>

      <Slider cols={{ base: 1, [410]: 2, sm: 2, md: 3, lg: 4, xl: 5 }} gap="1rem">
        {items.map((item) => {
          const { day, month } = splitDateKey(item.dateKey)
          return (
            <a
              key={item.id}
              href={item.href}
              className="group w-full border border-transparent transition-all duration-200 hover:-translate-y-1.5 hover:shadow-[0_0_30px_color-mix(in_srgb,var(--color-accent)_35%,transparent)] hover:border-accent focus-visible:ring-2 focus-visible:ring-accent focus-visible:outline-none rounded-card cursor-pointer"
            >
              <div
                className="relative w-full aspect-[4/5] rounded-card overflow-hidden bg-cover bg-center bg-surface"
                style={item.image ? { backgroundImage: `url(${item.image})` } : undefined}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />

                <div className="absolute top-2 left-2 bg-black/80 rounded-md px-2 py-1.5 text-center min-w-[44px]">
                  <div className="text-base font-display font-bold leading-none text-text-primary">
                    {day}
                  </div>
                  <div className="text-[9px] uppercase tracking-wide text-text-muted mt-0.5">
                    {month}
                  </div>
                </div>

                {item.type === "video" && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="bg-black/60 rounded-full w-12 h-12 flex items-center justify-center transition-transform duration-200 group-hover:scale-110">
                      <Play className="w-6 h-6 text-white ml-0.5" fill="white" />
                    </div>
                  </div>
                )}
              </div>

              <div className="pt-3 pb-3 px-2 text-center">
                <h3 className="text-sm font-display font-bold uppercase leading-snug text-text-primary line-clamp-2 min-h-[2.2em]">
                  {item.title}
                </h3>
                {item.dateLabel && (
                  <div className="flex items-center justify-center gap-1 mt-1.5 text-xs text-text-muted uppercase tracking-wide">
                    <Calendar className="w-3 h-3 shrink-0" />
                    <span>{item.dateLabel}</span>
                  </div>
                )}
              </div>
            </a>
          )
        })}
      </Slider>
    </section>
  )
}