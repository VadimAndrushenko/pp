import type { Event } from "@payload-types"
import { cache } from "react"
import { getPayloadClient } from "./payload"

export const getEvents = cache(async (): Promise<Event[]> => {
  try {
    const payload = await getPayloadClient()

    const { docs } = await payload.find({
      collection: "events",
      sort: "order",
      limit: 100,
      draft: false,
      depth: 1,
    })

    return docs as Event[]
  } catch (error) {
    console.error("❌ Ошибка getEvents:", error)
    return []
  }
})

export const getEventBySlug = cache(async (slug: string): Promise<Event | null> => {
  try {
    const payload = await getPayloadClient()

    const { docs } = await payload.find({
      collection: "events",
      where: {
        slug: { equals: slug },
      },
      limit: 1,
      draft: false,
      depth: 1,
    })

    return (docs[0] as Event) || null
  } catch (error) {
    console.error("❌ Ошибка getEventBySlug:", error)
    return null
  }
})
