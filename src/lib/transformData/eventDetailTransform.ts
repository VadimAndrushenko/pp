import type { Event } from "@payload-types"

export interface EventProgramItem {
  icon: string
  title: string
  desc: string
}

export interface EventDetail {
  titleLine1: string
  titleLine2?: string
  titleLine3?: string
  subtitle: string
  featuresHeading: string
  features: EventProgramItem[]
}

export const transformEventDetail = (event: Event | null): EventDetail | null => {
  if (!event) return null

  const lines = (event.heroLines || [])
    .map((item) => item.line?.trim())
    .filter((line): line is string => Boolean(line))

  return {
    titleLine1: lines[0] || event.title.toUpperCase(),
    titleLine2: lines[1],
    titleLine3: lines[2],
    subtitle: event.heroSubtitle || event.subtitle || "",
    featuresHeading: event.programHeading || "В ПРОГРАММЕ",
    features: (event.features || [])
      .filter((feature) => feature.title || feature.desc)
      .map((feature) => ({
        icon: feature.icon || "star",
        title: feature.title || "",
        desc: feature.desc || "",
      })),
  }
}