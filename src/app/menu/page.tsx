import { Breadcrumb } from "@/components/layout/breadcrumb"
import { MenuCategoryCard } from "@/components/ui/menu-category-card"
import type { MenuData } from "@/config/menu-data"
import { menuData } from "@/config/menu-data"

const categoryIcons: Record<string, string> = {
  zakuski: "skewer",
  kutaby: "ornament-geometric",
  pizza: "star",
  mantas: "bowl-steam",
  pasta: "lotus",
  grill: "skewer",
  goryachee: "cloche",
  home_kitchen: "ornament-snowflake",
  soups: "bowl-steam",
  burgers: "pretzel",
}

const hookahMenu: MenuData = {
  id: "hookah",
  title: "Кальянное меню",
  subtitle: "Премиальные табаки и чаши",
  image: "/images/hookah/shisha.png",
  sections: [],
}

export default function MenuPage() {
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
        {menuData.map((item, i) => (
          <MenuCategoryCard key={item.id} item={item} icon={categoryIcons[item.id] ?? "cloche"} priority={i < 2} />
        ))}
      </div>

      <h2 className=" font-display uppercase tracking-widest text-accent text-xl mb-4">
        Кальянное меню
      </h2>
      <div className="mb-10">
        <MenuCategoryCard item={hookahMenu} icon="hookah" href="/hookah" priority />
      </div>
    </>
  )
}
