import type { GalleryContent } from "@payload-types"
import { getPayloadClient } from "./payload"

export async function getGalleryContent(): Promise<GalleryContent | null> {
  try {
    const payload = await getPayloadClient()

    const global = (await payload.findGlobal({
      slug: "gallery-content",
      depth: 2,
      draft: false,
    })) as GalleryContent

    return global
  } catch (error) {
    console.error("❌ Ошибка getGalleryContent:", error)
    return null
  }
}
