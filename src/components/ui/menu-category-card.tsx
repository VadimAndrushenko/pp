import Image from "next/image"
import Link from "next/link"
import type { MenuData } from "@/config/menu-data"
import { Cloche, BowlSteam, Skewer, OrnamentSnowflake, OrnamentFlower, OrnamentGeometric, Star, Lotus, Glass, Bottle, Pretzel, Crescent, Hookah } from "@/components/icons"
import { Egg, Salad, Soup, ChefHat, Pizza, ForkKnife, Beer, Sandwich, Hamburger, Coffee, CupSoda, Citrus, Martini, Wine, GlassWater } from "lucide-react"

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
  egg: Egg,
  salad: Salad,
  soup: Soup,
  "chef-hat": ChefHat,
  pizza: Pizza,
  "fork-knife": ForkKnife,
  beer: Beer,
  sandwich: Sandwich,
  hamburger: Hamburger,
  coffee: Coffee,
  "cup-soda": CupSoda,
  citrus: Citrus,
  martini: Martini,
  wine: Wine,
  "glass-water": GlassWater,
}

export function MenuCategoryCard({ item, icon, href, priority, index, large, showSubtitle }: { item: MenuData; icon: string; href?: string; priority?: boolean; index?: number; large?: boolean; showSubtitle?: boolean }) {
  const Icon = iconMap[icon]
  const link = href ?? `/menu/${item.id}`
  const dishCount = item.sections.reduce((acc, section) => acc + section.dishes.length, 0)

  return (
    <Link
      href={link}
      className={`relative overflow-hidden rounded-card block group cursor-pointer transition-all duration-300 hover:shadow-[0_0_30px_rgba(255,106,0,0.35)] hover:-translate-y-1 hover:border-accent active:scale-[0.98] border border-border ${
        large ? "h-[300px] max-md:h-[280px]" : "h-52 max-sm:h-40"
      }`}
    >
      {typeof index === "number" && (
        <span className="absolute top-2.5 right-3 z-10 font-display text-lg max-sm:text-xs whitespace-nowrap rounded-sm border border-border/60 bg-black/40 px-2 py-0.5 backdrop-blur-sm">
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
        sizes="(max-width: 640px) 50vw, (max-width: 1024px) 25vw, 33vw"
        loading={priority ? undefined : "lazy"}
        priority={priority}
      />

      <div className="absolute inset-0 bg-black/30" />
      <div className="absolute inset-x-0 bottom-0 h-4/5 bg-gradient-to-t from-black via-black/80 to-transparent" />

      <div className={`absolute inset-x-0 bottom-0 z-10 ${large ? "p-5" : "p-3 max-sm:p-2"}`}>
        <div className={`flex items-center gap-2 ${large ? "mb-3" : "mb-1.5 max-sm:gap-1.5 max-sm:mb-1"}`}>
          {Icon && (
            <span className={`flex items-center justify-center rounded-sm border border-accent/40 bg-accent/10 shrink-0 transition-all duration-300 group-hover:bg-accent/20 group-hover:border-accent/70 group-hover:shadow-[0_0_14px_rgba(255,106,0,0.35)] ${
              large ? "w-11 h-11" : "w-10 h-10 max-sm:w-5.5 max-sm:h-5.5"
            }`}>
              <Icon className={`text-accent ${large ? "w-6 h-6" : "w-5 h-5 max-sm:w-3 max-sm:h-3"}`} strokeWidth={1.5} />
            </span>
          )}
          {dishCount > 0 && (
            <span className={`font-display uppercase tracking-widest text-text-secondary border border-border/40 rounded-sm px-1.5 py-0.5 bg-black/30 whitespace-nowrap ${
              large ? "text-xs" : "text-[10px]"
            }`}>
              {dishCount} блюд
            </span>
          )}
        </div>
        <h3 className={`font-display uppercase tracking-tight text-white leading-tight break-words drop-shadow-[0_1px_3px_rgba(0,0,0,0.9)] transition-colors duration-300 group-hover:text-accent ${
          large ? "text-2xl max-md:text-xl" : "text-3xl max-sm:text-xl"
        }`}>
          {item.title}
        </h3>
        {showSubtitle && item.subtitle && (
          <p className="font-body text-text-secondary text-sm mt-2 leading-relaxed break-words drop-shadow-[0_1px_2px_rgba(0,0,0,0.95)] line-clamp-3">
            {item.subtitle}
          </p>
        )}
      </div>
    </Link>
  )
}