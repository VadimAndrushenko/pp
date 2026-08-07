import type { MenuDish } from "@/config/menu-data"

export function MenuDishRow({ dish, index }: { dish: MenuDish; index?: number }) {
  const priceMatch = dish.price.match(/^(.+?)\s*(VND)?$/i)
  const amount = priceMatch?.[1] ?? dish.price
  const currency = priceMatch?.[2] ?? ""

  return (
    <div className="relative group py-6 px-5 rounded-lg bg-surface/25 border border-border/35 transition-all duration-300 hover:bg-surface/40 hover:border-accent/40 hover:shadow-[0_0_20px_rgba(0,0,0,0.25)]">
      {typeof index === "number" && (
        <span className="absolute right-5 bottom-4 max-sm:bottom-auto max-sm:top-4 z-10 font-display text-2xl whitespace-nowrap">
          <span className="text-accent/80">{"|"}</span>
          <span className="text-white">{index + 1}</span>
          <span className="text-accent/80">{"|"}</span>
        </span>
      )}
      <div className="flex items-baseline gap-4 mb-5 max-sm:flex-col max-sm:items-stretch max-sm:gap-2">
        <h3 className="font-display uppercase tracking-wide text-3xl max-sm:text-xl max-sm:pr-7 text-text-primary transition-colors duration-200 group-hover:text-accent">
          {dish.name}
        </h3>
        <span className="flex-1 border-b border-dotted border-text-muted/50 translate-y-[-0.3em] hidden sm:block" />
        <div className="flex items-baseline gap-3 whitespace-nowrap max-sm:mt-3 max-sm:pt-2.5 max-sm:border-t max-sm:border-border/50 max-sm:justify-end max-sm:items-center">
          {dish.weight && (
            <>
              <span className="font-display text-accent text-2xl whitespace-nowrap order-1 max-sm:order-3 max-sm:text-xl max-sm:text-white">
                {dish.weight}
              </span>
              <span
                className="w-px self-center h-7 bg-border/70 order-2 max-sm:order-2"
                aria-hidden="true"
              />
            </>
          )}
          <span className="font-display text-3xl whitespace-nowrap order-3 max-sm:order-1 max-sm:text-2xl">
            <span className="text-white">{amount}</span>{" "}
            {currency && <span className="text-accent">{currency}</span>}
          </span>
        </div>
      </div>

      {dish.description && (
        <p className="mt-2.5 max-sm:text-sm sm:max-w-[80%] leading-relaxed lg:leading-loose">
          <span className="font-display uppercase tracking-wider text-accent">Описание: </span>
          <span className="text-text-muted">{dish.description}</span>
        </p>
      )}

      {dish.base && (
        <p className="mt-2.5 max-sm:text-sm sm:max-w-[80%] leading-relaxed lg:leading-loose">
          <span className="font-display uppercase tracking-wider text-accent">Основа на выбор: </span>
          <span className="text-text-muted">{dish.base}</span>
        </p>
      )}

      {dish.composition && (
        <p className="mt-2.5 max-sm:text-sm sm:max-w-[80%] leading-relaxed lg:leading-loose">
          <span className="font-display uppercase tracking-wider text-accent">Состав: </span>
          <span className="text-text-muted">{dish.composition}</span>
        </p>
      )}
    </div>
  )
}