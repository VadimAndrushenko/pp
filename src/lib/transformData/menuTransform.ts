import type { MenuCategory } from "@payload-types"
import type { MenuData, MenuDish, MenuSection } from "@/config/menu-data"
import { resolveImageUrl } from "./resolveImageUrl"

const transformDish = (
  dish: NonNullable<NonNullable<MenuCategory["sections"]>[number]["dishes"]>[number],
): MenuDish => ({
  name: dish.name,
  description: dish.description ?? undefined,
  subtitle: dish.subtitle ?? undefined,
  base: dish.base ?? undefined,
  composition: dish.composition ?? undefined,
  weight: dish.weight ?? undefined,
  price: dish.price,
  discount: dish.discount ?? undefined,
  badges: (dish.badges || []).map((badge) => badge.text).filter(Boolean),
})

const transformSection = (
  section: NonNullable<MenuCategory["sections"]>[number],
  categoryId: string,
  index: number,
): MenuSection => ({
  id: section.id ?? `${categoryId}-section-${index}`,
  title: section.title,
  subtitle: section.subtitle ?? undefined,
  dishes: (section.dishes || []).map(transformDish),
})

export const transformMenuCategory = (category: MenuCategory): MenuData => ({
  id: category.slug,
  title: category.title,
  subtitle: category.subtitle,
  image: resolveImageUrl(category.image),
  sections: (category.sections || []).map((section, index) =>
    transformSection(section, category.slug, index),
  ),
  group: category.group,
  order: toOrderNumber(category.order),
})

const toOrderNumber = (value: number | string | null | undefined): number | undefined => {
  const parsed = typeof value === "string" ? Number(value) : value
  return typeof parsed === "number" && Number.isFinite(parsed) ? parsed : undefined
}

export const transformMenuCategories = (categories: MenuCategory[]): MenuData[] =>
  categories
    .map((category, index) => ({ menu: transformMenuCategory(category), index }))
    .sort((a, b) => {
      const orderA = a.menu.order ?? Number.MAX_SAFE_INTEGER
      const orderB = b.menu.order ?? Number.MAX_SAFE_INTEGER
      if (orderA !== orderB) return orderA - orderB
      return a.index - b.index
    })
    .map(({ menu }) => menu)

export const transformMenuNumber = (categories: MenuCategory[]): Map<string, number> => {
  const numbers = new Map<string, number>()
  categories.forEach((category, index) => {
    numbers.set(category.slug, index + 1)
  })
  return numbers
}