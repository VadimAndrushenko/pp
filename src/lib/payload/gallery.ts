import type { GalleryReport, GalleryVideo } from "@payload-types"
import { getPayloadClient } from "./payload"

export async function getGalleryVideos(): Promise<GalleryVideo[]> {
  try {
    const payload = await getPayloadClient()

    const { docs } = await payload.find({
      collection: "gallery-videos",
      sort: "order",
      limit: 200,
      draft: false,
    })

    return docs as GalleryVideo[]
  } catch (error) {
    console.error("❌ Ошибка getGalleryVideos:", error)
    return []
  }
}

export async function getGalleryReports(): Promise<GalleryReport[]> {
  try {
    const payload = await getPayloadClient()

    const { docs } = await payload.find({
      collection: "gallery-reports",
      sort: "order",
      limit: 100,
      draft: false,
      depth: 1,
    })

    return docs as GalleryReport[]
  } catch (error) {
    console.error("❌ Ошибка getGalleryReports:", error)
    return []
  }
}

export async function getGalleryPhotos(): Promise<GalleryReport[]> {
  return getGalleryReports()
}