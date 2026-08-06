import { Breadcrumb } from "@/components/layout/breadcrumb"
import { MenuCategoryCard } from "@/components/ui/menu-category-card"
import { menuCategories } from "@/config/menu-items"
export default function MenuPage() {
  const largeCards = menuCategories.filter((c) => c.variant === "large")
  const compactCards = menuCategories.filter((c) => c.variant === "compact")
  const fullCard = menuCategories.find((c) => c.variant === "full")

  return (
    <>
      <Breadcrumb />

      <h1 className="text-7xl lg:text-8xl max-md:text-6xl font-display font-bold uppercase tracking-tight text-text-primary mb-10">
        Меню
      </h1>

      <h2 className=" font-display uppercase tracking-widest text-accent text-xl mb-4">
        Основные разделы
      </h2>
      <div className="grid grid-cols-3 gap-5 mb-10 max-lg:grid-cols-2 max-sm:grid-cols-1">
        {largeCards.map((item, i) => (
          <MenuCategoryCard key={item.id} item={item} priority={i < 2} />
        ))}
      </div>

      <h2 className=" font-display uppercase tracking-widest text-accent text-xl mb-4">
        Напитки и закуски
      </h2>
      <div className="grid grid-cols-3 gap-5 mb-10 max-lg:grid-cols-2 max-sm:grid-cols-1">
        {compactCards.map((item) => (
          <MenuCategoryCard key={item.id} item={item} />
        ))}
      </div>

      {fullCard && (
        <>
          <h2 className=" font-display uppercase tracking-widest text-accent text-xl mb-4">
            Специальное меню
          </h2>
          <div className="mb-10">
            <MenuCategoryCard key={fullCard.id} item={fullCard} priority />
          </div>
        </>
      )}
    </>
  )
}
