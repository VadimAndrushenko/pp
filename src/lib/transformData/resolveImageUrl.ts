import type { Media } from "@payload-types"

type MediaValue = number | Media | null | undefined

export const resolveImageUrl = (value: MediaValue, fallback = ""): string => {
  if (!value) return fallback
  if (typeof value === "object" && "url" in value) {
    return value.url ?? fallback
  }
  return fallback
}

export const resolveImageUrlNullable = (value: MediaValue): string | null => {
  if (!value) return null
  if (typeof value === "object" && "url" in value) {
    return value.url ?? null
  }
  return null
}