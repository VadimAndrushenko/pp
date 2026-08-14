import Image from "next/image"
import Link from "next/link"
import type { MenuData } from "@/config/menu-data"
import { Cloche, BowlSteam, Skewer, OrnamentSnowflake, OrnamentFlower, OrnamentGeometric, Star, Lotus, Glass, Bottle, Pretzel, Crescent, Hookah } from "@/components/icons"

const iconMap: Record<string, React.ComponentType<{ className?: string; style?: React.CSSProperties; strokeWidth?: number }>> = {
  cloche: Cloche,
  "bowl-steam": BowlSteam,
  skewer: Skewer,
  "ornament-snowflake": OrnamentSnowflake,
  "ornament-flower": OrnamentFlower,
  "ornament-geometric": OrnamentGeometric,
  star: Star,
  lotus: Lotus,
  glass: Glass,
  bottle: Bottle,
  pretzel: Pretzel,
  crescent: Crescent,
  hookah: Hookah,
}

export function MenuCategoryCard({ item, icon, href, priority, index }: { item: MenuData; icon: string; href?: string; priority?: boolean; index?: number }) {
  const Icon = iconMap[icon]
  const link = href ?? `/menu/${item.id}`
  const dishCount = item.sections.reduce((acc, section) => acc + section.dishes.length, 0)

  return (
    <Link
      href={link}
      className="relative overflow-hidden rounded-card h-[300px] max-md:h-[280px] block group cursor-pointer transition-all duration-300 hover:shadow-[0_0_30px_rgba(255,106,0,0.35)] hover:-translate-y-1.5 hover:border-accent active:scale-[0.98] border border-border"
    >
      {typeof index === "number" && (
        <span className="absolute top-4 right-5 z-10 font-display text-xl whitespace-nowrap rounded-sm border border-border/60 bg-black/40 px-2.5 py-1 backdrop-blur-sm">
          <span className="text-accent/80">{"|"}</span>
          <span className="text-white">{index + 1}</span>
          <span className="text-accent/80">{"|"}</span>
        </span>
      )}
      <Image
        src={item.image}
        alt={item.title}
        fill
        className="object-cover transition-transform duration-500 group-hover:scale-105"
        sizes="(max-width: 768px) 100vw, 50vw"
        loading={priority ? undefined : "lazy"}
        priority={priority}
      />

      <div className="absolute inset-0 bg-black/30" />
      <div className="absolute inset-x-0 bottom-0 h-4/5 bg-gradient-to-t from-black via-black/80 to-transparent" />

      <div className="absolute inset-x-0 bottom-0 z-10 p-5">
        <div className="flex items-center gap-3 mb-3">
          {Icon && (
            <span className="flex items-center justify-center w-11 h-11 rounded-sm border border-accent/40 bg-accent/10 shrink-0 transition-all duration-300 group-hover:bg-accent/20 group-hover:border-accent/70 group-hover:shadow-[0_0_14px_rgba(255,106,0,0.35)]">
              <Icon className="w-6 h-6 text-accent" strokeWidth={1.5} />
            </span>
          )}
          {dishCount > 0 && (
            <span className="font-display uppercase tracking-widest text-xs text-text-secondary border border-border/40 rounded-sm px-2 py-1 bg-black/30">
              {dishCount} блюд
            </span>
          )}
        </div>
        <h3 className="font-display uppercase tracking-tight text-white text-2xl max-md:text-xl leading-tight break-words drop-shadow-[0_1px_3px_rgba(0,0,0,0.9)] transition-colors duration-300 group-hover:text-accent">
          {item.title}
        </h3>
        <p className="font-body text-text-secondary text-sm mt-2 leading-relaxed break-words drop-shadow-[0_1px_2px_rgba(0,0,0,0.95)] line-clamp-3">
          {item.subtitle}
        </p>
      </div>
    </Link>
  )
}