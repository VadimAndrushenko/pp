import type { MenuCategory } from "@payload-types"
import { getPayloadClient } from "./payload"

export async function getMenuCategories(): Promise<MenuCategory[]> {
  try {
    const payload = await getPayloadClient()

    const { docs } = await payload.find({
      collection: "menu-categories",
      sort: "order",
      limit: 100,
      draft: false,
      depth: 1,
    })

    return docs as MenuCategory[]
  } catch (error) {
    console.error("❌ Ошибка getMenuCategories:", error)
    return []
  }
}

export async function getMenuCategoryBySlug(slug: string): Promise<MenuCategory | null> {
  try {
    const payload = await getPayloadClient()

    const { docs } = await payload.find({
      collection: "menu-categories",
      where: {
        slug: { equals: slug },
      },
      depth: 3,
      limit: 1,
      draft: false,
    })

    return (docs[0] as MenuCategory) || null
  } catch (error) {
    console.error("❌ Ошибка getMenuCategoryBySlug:", error)
    return null
  }
}