import { Breadcrumb } from "@/components/layout/breadcrumb"
import { MenuCategoryCard } from "@/components/ui/menu-category-card"
import type { MenuData } from "@/config/menu-data"
import { menuData } from "@/config/menu-data"

const categoryIcons: Record<string, string> = {
  breakfasts: "egg",
  zakuski: "skewer",
  salads: "salad",
  soups: "soup",
  grill: "skewer",
  home_kitchen: "chef-hat",
  eastern: "crescent",
  pasta: "fork-knife",
  asian: "bowl-steam",
  sides: "bowl-steam",
  "beer-snacks": "beer",
  sandwiches: "sandwich",
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

      <h1 className="text-5xl lg:text-6xl max-sm:text-4xl font-display font-bold uppercase tracking-tight text-text-primary mb-5 max-sm:mb-3">
        Меню
      </h1>

      <h2 className=" font-display uppercase tracking-widest text-accent text-2xl max-sm:text-xl mb-3 max-sm:mb-2">
        Основные разделы
      </h2>
      <div className="grid grid-cols-2 gap-2 mb-7 max-sm:gap-1.5 max-sm:mb-4 sm:grid-cols-4 lg:grid-cols-3">
        {menuData.map((item, i) => (
          <MenuCategoryCard key={item.id} item={item} icon={categoryIcons[item.id] ?? "cloche"} priority={i < 2} index={i} />
        ))}
      </div>

      <h2 className=" font-display uppercase tracking-widest text-accent text-2xl max-sm:text-xl mb-3 max-sm:mb-2">
        Кальянное меню
      </h2>
      <div className="grid grid-cols-2 gap-2 max-sm:gap-1.5 mb-7 max-sm:mb-4 sm:grid-cols-4 lg:grid-cols-3">
        <MenuCategoryCard item={hookahMenu} icon="hookah" href="/hookah" priority />
      </div>
    </>
  )
}
