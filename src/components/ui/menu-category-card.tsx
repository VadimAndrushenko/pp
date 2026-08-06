import Image from "next/image"
import Link from "next/link"
import type { MenuCategory } from "@/config/menu-items"
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

const iconSize = "w-10 h-10"

export function MenuCategoryCard({ item, priority }: { item: MenuCategory; priority?: boolean }) {
  const Icon = iconMap[item.icon]

  return (
    <Link
      href={item.href}
      target={item.href.startsWith("http") ? "_blank" : undefined}
      rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
      className="relative overflow-hidden rounded-card h-[260px] block group cursor-pointer transition-all duration-300 hover:shadow-[0_0_30px_rgba(255,106,0,0.35)] hover:-translate-y-1.5 hover:border-accent active:scale-[0.98] border border-border"
    >
      <Image
        src={item.image}
        alt={item.title}
        fill
        className="object-cover transition-transform duration-500 group-hover:scale-105"
        sizes="(max-width: 768px) 100vw, 50vw"
        loading={priority ? undefined : "lazy"}
        priority={priority}
      />

      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />

      <div className="relative z-10 p-4 flex flex-col items-start h-full justify-center" style={{ width: "200px" }}>
        {Icon && <Icon className={`${iconSize} mb-3 text-accent`} strokeWidth={1.5} />}
        <h3 className="font-display uppercase tracking-tight text-white text-3xl max-md:text-2xl leading-tight transition-colors duration-300 group-hover:text-accent">
          {item.title}
        </h3>
        <p className="font-body text-text-muted text-base mt-1">
          {item.subtitle}
        </p>
      </div>
    </Link>
  )
}
