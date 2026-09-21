import type { Setting } from "@payload-types"
import { getPayloadClient } from "./payload"

export async function getSettings(): Promise<Setting | null> {
  try {
    const payload = await getPayloadClient()

    const data = await payload.findGlobal({
      slug: "settings",
      depth: 2,
    })

    return data as Setting
  } catch (error) {
    console.error("❌ Ошибка getSettings:", error)
    return null
  }
}