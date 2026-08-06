import type { MenuDish } from "@/config/menu-data"

export function MenuDishRow({ dish }: { dish: MenuDish }) {
  return (
    <div className="group py-4 border-b border-border/30 last:border-b-0 transition-colors duration-200 hover:bg-surface/40 px-3 -mx-3 rounded-sm">
      <div className="flex items-baseline gap-3">
        <h3 className="font-display uppercase tracking-wide text-2xl max-sm:text-lg text-text-primary transition-colors duration-200 group-hover:text-accent">
          {dish.name}
        </h3>
        <span className="flex-1 border-b border-dotted border-text-muted/50 translate-y-[-0.3em]" />
        {dish.weight && (
          <span className="text-text-muted text-base whitespace-nowrap max-sm:text-[11px]">{dish.weight}</span>
        )}
        <span className="font-display text-accent text-xl max-sm:text-sm whitespace-nowrap">{dish.price}</span>
      </div>

      {dish.description && (
        <p className="mt-1.5 max-sm:text-sm sm:max-w-[70%]">
          <span className="font-display uppercase tracking-wider text-accent">Описание: </span>
          <span className="text-text-muted">{dish.description}</span>
        </p>
      )}

      {dish.base && (
        <p className="mt-1 max-sm:text-sm sm:max-w-[70%]">
          <span className="font-display uppercase tracking-wider text-accent">Основа на выбор: </span>
          <span className="text-text-muted">{dish.base}</span>
        </p>
      )}

      {dish.composition && (
        <p className="mt-1 max-sm:text-sm sm:max-w-[70%]">
          <span className="font-display uppercase tracking-wider text-accent">Состав: </span>
          <span className="text-text-muted">{dish.composition}</span>
        </p>
      )}
    </div>
  )
}