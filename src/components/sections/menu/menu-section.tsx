import type { MenuSection as MenuSectionConfig } from "@/config/menu-data"
import { MenuDishRow } from "@/components/sections/menu/menu-dish-row"
import { UtensilsCrossed, Star } from "lucide-react"

export function MenuSection({ section }: { section: MenuSectionConfig }) {
  return (
    <section id={section.id} className="scroll-mt-36 pb-10">
      <div className="flex items-center gap-4 mb-2">
        <UtensilsCrossed className="w-6 h-6 text-accent shrink-0" strokeWidth={1.5} />
        <h2 className="font-display uppercase tracking-wider text-4xl max-sm:text-3xl font-bold text-text-primary">
          {section.title}
        </h2>
      </div>
      {section.subtitle && (
        <p className="text-text-muted mb-4">{section.subtitle}</p>
      )}
      <div className="flex items-center gap-3">
        <span className="flex-1 h-[1px] xl:h-[3px] bg-accent/60" />
        <Star className="w-4 h-4 text-accent fill-accent shrink-0" />
        <span className="flex-1 h-[1px] xl:h-[3px] bg-accent/60" />
      </div>
      <div className="mt-6">
        {section.dishes.map((dish) => (
          <MenuDishRow key={dish.name} dish={dish} />
        ))}
      </div>
    </section>
  )
}