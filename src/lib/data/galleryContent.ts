import { cache } from "react"
import { getGalleryContent } from "@/lib/payload/galleryContent"
import { transformGalleryContent, type GalleryContentData } from "@/lib/transformData"

export const getGalleryContentData = cache(async (): Promise<GalleryContentData> => {
  const content = await getGalleryContent()
  return transformGalleryContent(content)
})
