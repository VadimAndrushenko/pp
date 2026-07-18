export interface MenuCategory {
  id: string
  title: string
  subtitle: string
  href: string
  icon: string
  image: string
  variant: "large" | "compact" | "full"
}

const base = "https://images.unsplash.com/photo-"

export const menuCategories: MenuCategory[] = [
  { id: "main", title: "Основное меню", subtitle: "Завтраки и блюда на каждый день", href: "/menu/main.pdf", icon: "cloche", image: `${base}1611599537845-1c7aca0091c0?w=600&h=400&fit=crop`, variant: "large" },
  { id: "breakfast", title: "Завтраки", subtitle: "Сытное начало дня", href: "/menu/breakfast.pdf", icon: "bowl-steam", image: `${base}1776447402055-7d2e7a714b2d?w=600&h=400&fit=crop`, variant: "large" },
  { id: "grill", title: "Мангал", subtitle: "Мясо и овощи на углях", href: "/menu/grill.pdf", icon: "skewer", image: `${base}1550942356-fcfc6eba2acb?w=600&h=400&fit=crop`, variant: "large" },
  { id: "russian", title: "Русская кухня", subtitle: "Традиционные рецепты", href: "/menu/russian.pdf", icon: "ornament-snowflake", image: `${base}1727404679933-99daa2a7573a?w=600&h=400&fit=crop`, variant: "large" },
  { id: "caucasian", title: "Кавказская кухня", subtitle: "Хинкали, шашлык и лепёшки", href: "/menu/caucasian.pdf", icon: "ornament-flower", image: `${base}1587497539328-7e140d2ec8d1?w=600&h=400&fit=crop`, variant: "large" },
  { id: "oriental", title: "Восточная кухня", subtitle: "Плов, лагман и специи", href: "/menu/oriental.pdf", icon: "ornament-geometric", image: `${base}1630429264415-i9lPk8PJCZg?w=600&h=400&fit=crop`, variant: "large" },
  { id: "european", title: "Европейская кухня", subtitle: "Классика и современность", href: "/menu/european.pdf", icon: "star", image: `${base}1651841485544-71cc601b1c6b?w=600&h=400&fit=crop`, variant: "large" },
  { id: "asian", title: "Азиатская и вьетнамская кухня", subtitle: "Вок, суши и фо-бо", href: "/menu/asian.pdf", icon: "lotus", image: `${base}1761668439955-8e6acfcb05c3?w=600&h=400&fit=crop`, variant: "large" },
  { id: "drinks", title: "Напитки", subtitle: "Соки, лимонады и чай", href: "/menu/drinks.pdf", icon: "glass", image: `${base}1616787928056-ae5ab4b649d8?w=600&h=400&fit=crop`, variant: "compact" },
  { id: "alcohol", title: "Алкогольная карта", subtitle: "Крепкие напитки и коктейли", href: "/menu/alcohol.pdf", icon: "bottle", image: `${base}1458253756247-1e4ed949191b?w=600&h=400&fit=crop`, variant: "compact" },
  { id: "beer-snacks", title: "Закуски к пиву", subtitle: "Гренки, наггетсы и кольца", href: "/menu/beer-snacks.pdf", icon: "pretzel", image: `${base}1683827449087-ccf5a9e6283c?w=600&h=400&fit=crop`, variant: "compact" },
  { id: "night", title: "Ночное меню", subtitle: "Еда после полуночи", href: "/menu/night.pdf", icon: "crescent", image: `${base}1759393098862-f2e98983e2f1?w=600&h=400&fit=crop`, variant: "compact" },
  { id: "hookah", title: "Кальянное меню", subtitle: "Премиальные табаки и чаши", href: "/hookah", icon: "hookah", image: `${base}1731613705339-f7984b43fe4d?w=1200&h=400&fit=crop`, variant: "full" },
]
