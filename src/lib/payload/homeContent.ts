import type { HomeContent } from "@payload-types"
import { getPayloadClient } from "./payload"

export async function getHomeContent(): Promise<HomeContent | null> {
  try {
    const payload = await getPayloadClient()

    const global = (await payload.findGlobal({
      slug: "home-content",
      depth: 2,
      draft: false,
    })) as HomeContent

    return global
  } catch (error) {
    console.error("❌ Ошибка getHomeContent:", error)
    return null
  }
}


