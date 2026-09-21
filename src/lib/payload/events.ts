import type { Event } from "@payload-types"
import { getPayloadClient } from "./payload"

export async function getEvents(): Promise<Event[]> {
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
}

export async function getEventBySlug(slug: string): Promise<Event | null> {
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
}