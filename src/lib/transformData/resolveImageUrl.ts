import type { Media } from "@payload-types"

type MediaValue = number | Media | null | undefined

export type MediaSizeName = "thumbnail" | "card" | "hero"

const resolveSizedUrl = (media: Media, size?: MediaSizeName): string | null => {
  if (!size) return null
  return media.sizes?.[size]?.url ?? null
}

export const resolveImageUrl = (
  value: MediaValue,
  fallback = "",
  size?: MediaSizeName,
): string => {
  if (!value) return fallback
  if (typeof value === "object" && "url" in value) {
    return resolveSizedUrl(value, size) ?? value.url ?? fallback
  }
  return fallback
}

export const resolveImageUrlNullable = (
  value: MediaValue,
  size?: MediaSizeName,
): string | null => {
  if (!value) return null
  if (typeof value === "object" && "url" in value) {
    return resolveSizedUrl(value, size) ?? value.url ?? null
  }
  return null
}
