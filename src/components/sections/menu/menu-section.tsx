import type { MenuSection as MenuSectionConfig } from "@/config/menu-data"
import { MenuDishRow } from "@/components/sections/menu/menu-dish-row"
import { UtensilsCrossed, Star } from "lucide-react"

export function MenuSection({ section, index }: { section: MenuSectionConfig; index?: number }) {
  return (
    <section id={section.id} className="scroll-mt-36 pb-10">
      <div className="relative flex items-center gap-4 mb-2">
        <UtensilsCrossed className="w-6 h-6 text-accent shrink-0" strokeWidth={1.5} />
        <h2 className="font-display uppercase tracking-wider text-4xl max-sm:text-3xl font-bold text-text-primary pr-14 max-sm:pr-10">
          {section.title}
        </h2>
        {typeof index === "number" && (
          <span className="absolute right-0 font-display text-2xl max-sm:text-xl whitespace-nowrap">
            <span className="text-accent/80">{"|"}</span>
            <span className="text-white">{index + 1}</span>
            <span className="text-accent/80">{"|"}</span>
          </span>
        )}
      </div>
      {section.subtitle && (
        <p className="text-text-muted mb-4">{section.subtitle}</p>
      )}
      <div className="flex items-center gap-3">
        <span className="flex-1 h-[1px] xl:h-[3px] bg-accent/60" />
        <Star className="w-4 h-4 text-accent fill-accent shrink-0" />
        <span className="flex-1 h-[1px] xl:h-[3px] bg-accent/60" />
      </div>
      <div className="mt-6 space-y-5">
        {section.dishes.map((dish, i) => (
          <MenuDishRow key={dish.name} dish={dish} index={i} />
        ))}
      </div>
    </section>
  )
}