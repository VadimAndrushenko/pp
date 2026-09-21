import { cache } from "react"
import { getSettings } from "@/lib/payload/settings"
import { transformSettings, type SiteSettings } from "@/lib/transformData"

export const getSiteSettings = cache(async (): Promise<SiteSettings> => {
  const setting = await getSettings()
  return transformSettings(setting)
})