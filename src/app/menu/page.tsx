import { Breadcrumb } from "@/components/layout/breadcrumb"
import { MenuCategoryCard } from "@/components/ui/menu-category-card"
import { menuCategories } from "@/config/menu-items"
export default function MenuPage() {
  const largeCards = menuCategories.filter((c) => c.variant === "large")
  const compactCards = menuCategories.filter((c) => c.variant === "compact")
  const fullCard = menuCategories.find((c) => c.variant === "full")

  return (
    <div className="px-5 py-6">
      <div className="max-w-7xl mx-auto">
        <Breadcrumb />

        <h1 className="text-6xl md:text-7xl lg:text-8xl font-display font-bold uppercase tracking-tight text-[var(--color-text-primary)] mb-10">
          Меню
        </h1>

        <h2 className="text-xs font-display uppercase tracking-widest text-[var(--color-text-muted)] mb-4">
          Основные разделы
        </h2>
        <div className="grid grid-cols-3 gap-5 mb-10">
          {largeCards.map((item, i) => (
            <MenuCategoryCard key={item.id} item={item} priority={i < 2} />
          ))}
        </div>

        <h2 className="text-xs font-display uppercase tracking-widest text-[var(--color-text-muted)] mb-4">
          Напитки и закуски
        </h2>
        <div className="grid grid-cols-3 gap-5 mb-10">
          {compactCards.map((item) => (
            <MenuCategoryCard key={item.id} item={item} />
          ))}
        </div>

        {fullCard && (
          <>
            <h2 className="text-xs font-display uppercase tracking-widest text-[var(--color-text-muted)] mb-4">
              Специальное меню
            </h2>
            <div className="mb-10">
              <MenuCategoryCard key={fullCard.id} item={fullCard} priority />
            </div>
          </>
        )}
      </div>
    </div>
  )
}
