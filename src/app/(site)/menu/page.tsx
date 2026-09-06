import { Breadcrumb } from "@/components/layout/breadcrumb"
import { MenuCategoryCard } from "@/components/ui/menu-category-card"
import type { MenuData } from "@/config/menu-data"
import { menuData } from "@/config/menu-data"
import { alcoholMenus } from "@/config/menu-data"
import { nonAlcoholMenus } from "@/config/menu-data"
import { getMenuNumber } from "@/config/menu-data"

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

const drinkCategoryIcons: Record<string, string> = {
  vodka: "bottle",
  gin: "bottle",
  tequila: "bottle",
  rum: "bottle",
  whisky: "bottle",
  cognac: "bottle",
  liqueurs: "bottle",
  vermouth: "wine",
  sparkling: "wine",
  "white-wine": "wine",
  "rose-wine": "wine",
  "red-wine": "wine",
  "beer-local": "beer",
  "beer-international": "beer",
  "beer-specialty": "beer",
  "beer-draft": "beer",
  "beer-zero": "beer",
  cider: "beer",
  "classic-cocktails": "martini",
  highballs: "martini",
  "tropical-cocktails": "martini",
  "signature-cocktails": "martini",
  shots: "bottle",
  "shot-sets": "bottle",
  "cocktail-sets": "martini",
  coffee: "coffee",
  "vietnamese-coffee": "coffee",
  tea: "cup-soda",
  "fruit-tea": "cup-soda",
  juices: "citrus",
  smoothies: "citrus",
  "soft-drinks": "cup-soda",
  water: "glass-water",
  lemonades: "cup-soda",
  mocktails: "martini",
}

const hookahMenu: MenuData = {
  id: "hookah",
  title: "Кальянное меню",
  subtitle: "Премиальные табаки и чаши",
  image: "/images/hookah/shisha.png",
  sections: [],
}

const menuBlocks: {
  title: string
  items: MenuData[]
  icon: (item: MenuData) => string
  priority?: (item: MenuData, index: number) => boolean
  href?: (item: MenuData) => string | undefined
}[] = [
  {
    title: "Основные разделы",
    items: menuData,
    icon: (item) => categoryIcons[item.id] ?? "cloche",
    priority: (_, i) => i < 2,
  },
  {
    title: "Алкогольное меню",
    items: alcoholMenus,
    icon: (item) => drinkCategoryIcons[item.id] ?? "bottle",
    priority: (item) => item.id === "vodka",
  },
  {
    title: "Безалкогольное меню",
    items: nonAlcoholMenus,
    icon: (item) => drinkCategoryIcons[item.id] ?? "cup-soda",
    priority: (item) => item.id === "coffee",
  },
  {
    title: "Кальянное меню",
    items: [hookahMenu],
    icon: () => "hookah",
    priority: () => true,
    href: (item) => (item.id === "hookah" ? "/hookah" : undefined),
  },
]

export default function MenuPage() {
  return (
    <>
      <Breadcrumb />

      <h1 className="text-5xl lg:text-6xl max-sm:text-4xl font-display font-bold uppercase tracking-tight text-text-primary mb-5 max-sm:mb-3">
        Меню
      </h1>

      {menuBlocks.map((block) => (
        <div key={block.title}>
          <h2 className=" font-display uppercase tracking-widest text-accent text-2xl max-sm:text-xl mb-3 max-sm:mb-2">
            {block.title}
          </h2>
          <div className="
            grid grid-cols-4 max-lg:grid-cols-3 gap-2 mb-7 max-sm:grid-cols-2 max-sm:gap-1.5 max-sm:mb-4 
          ">
            {block.items.map((item, i) => {
              const menuNumber = getMenuNumber(item.id)
              return (
                <MenuCategoryCard
                  key={item.id}
                  item={item}
                  icon={block.icon(item)}
                  href={block.href?.(item)}
                  priority={block.priority?.(item, i)}
                  index={menuNumber != null ? menuNumber - 1 : undefined}
                />
              )
            })}
          </div>
        </div>
      ))}
    </>
  )
}
