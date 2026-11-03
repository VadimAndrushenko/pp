import type { GalleryContent } from "@payload-types"
import type { SeoFields } from "@/lib/seo/metadata"
import { galleryContentFallbacks as fallback } from "@/config/gallery-content"
import { resolveImageUrl, resolveImageUrlNullable } from "./resolveImageUrl"

type SeoFallback = {
  title: string
  description: string
  keywords: string
}

export interface GalleryCardData {
  title: string
  image: string
}

export interface GalleryPageData {
  heading: string
  reportsTitle: string
  reportsSubtitle: string
  photoCard: GalleryCardData
  videoCard: GalleryCardData
  seo: SeoFields
}

export interface GalleryContentData {
  gallery: GalleryPageData
}

const seoOf = (
  value: GalleryContent["gallerySeo"] | undefined,
  defaults: SeoFallback,
): SeoFields => ({
  seoTitle: value?.title || defaults.title,
  seoDescription: value?.description || defaults.description,
  seoKeywords: value?.keywords || defaults.keywords,
  seoImageUrl: resolveImageUrlNullable(value?.image, "hero"),
  seoImageAlt:
    (typeof value?.image === "object" && value?.image ? value.image.alt : null) || "",
})

export const transformGalleryContent = (
  content: GalleryContent | null,
): GalleryContentData => ({
  gallery: {
    heading: content?.heading || fallback.gallery.heading,
    reportsTitle: content?.reports?.title || fallback.gallery.reportsTitle,
    reportsSubtitle: content?.reports?.subtitle || fallback.gallery.reportsSubtitle,
    photoCard: {
      title: content?.photoCard?.title || fallback.gallery.photoCard.title,
      image: resolveImageUrl(
        content?.photoCard?.image,
        fallback.gallery.photoCard.image,
        "hero",
      ),
    },
    videoCard: {
      title: content?.videoCard?.title || fallback.gallery.videoCard.title,
      image: resolveImageUrl(
        content?.videoCard?.image,
        fallback.gallery.videoCard.image,
        "hero",
      ),
    },
    seo: seoOf(content?.gallerySeo, fallback.gallery.seo),
  },
})
