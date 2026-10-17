import { Ban } from "lucide-react"

export const OUT_OF_STOCK_TEXT = "Временно отсутствует в наличии"

/**
 * Пометка недоступного блюда. Используется в меню и в корзине,
 * чтобы текст и оформление совпадали везде.
 * `solid` — плотный тёмный фон (для оверлея поверх контента).
 */
export function OutOfStockBadge({
  className = "",
  solid = false,
}: {
  className?: string
  solid?: boolean
}) {
  return (
    <span
      className={`inline-flex items-center justify-center gap-2 rounded-full border border-neon-red/50 px-4 py-1.5 text-center font-display text-sm font-semibold uppercase leading-tight tracking-[0.12em] text-neon-red max-sm:px-3 max-sm:text-xs ${
        solid ? "bg-bg shadow-[0_0_24px_12px_rgba(0,0,0,0.85)]" : "bg-neon-red/10"
      } ${className}`}
    >
      <Ban className="h-3.5 w-3.5 shrink-0" strokeWidth={2.4} />
      {OUT_OF_STOCK_TEXT}
    </span>
  )
}

/**
 * Оверлей недоступного блюда: блок затемнён, из левого верхнего угла
 * в правый нижний идёт тонкая диагональ, по центру — красная надпись.
 * Ставится поверх контента карточки (pointer-events-none — клики проходят).
 */
export function OutOfStockOverlay() {
  return (
    <div className="pointer-events-none absolute inset-0 z-10 flex items-center justify-center overflow-hidden rounded-[inherit]">
      <svg
        aria-hidden
        focusable="false"
        className="absolute inset-0 h-full w-full"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
        <line
          x1="0"
          y1="0"
          x2="100"
          y2="100"
          stroke="rgba(255,42,60,0.45)"
          strokeWidth="1"
          vectorEffect="non-scaling-stroke"
        />
      </svg>
      <OutOfStockBadge solid className="relative px-5 py-2.5 sm:text-base" />
    </div>
  )
}
