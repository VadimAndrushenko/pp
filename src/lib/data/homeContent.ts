import { cache } from "react"
import { getHomeContent } from "@/lib/payload/homeContent"
import { transformHomeContent, type HomeContentData } from "@/lib/transformData"

export const getHomeContentData = cache(async (): Promise<HomeContentData> => {
  const home = await getHomeContent()
  return transformHomeContent(home)
})