import type { Metadata } from "next"
import { Breadcrumb } from "@/components/layout/breadcrumb"
import { GalleryHeading } from "@/components/sections/gallery/gallery-heading"
import { GalleryReportsHeading } from "@/components/sections/gallery/gallery-reports-heading"
import { HeroCards } from "@/components/sections/gallery/hero-cards"
import { RestaurantVideo } from "@/components/ui/restaurant-video"
import { getGalleryContentData } from "@/lib/data/galleryContent"
import { buildMetadata } from "@/lib/seo/metadata"

export const revalidate = 5400

export async function generateMetadata(): Promise<Metadata> {
  const content = await getGalleryContentData()

  return buildMetadata({
    seo: content.gallery.seo,
    title: content.gallery.heading,
    description: content.gallery.reportsSubtitle,
    path: "/gallery",
  })
}

export default async function GalleryPage() {
  const content = await getGalleryContentData()

  return (
    <>
      <Breadcrumb />
      <GalleryHeading title={content.gallery.heading} />
      <RestaurantVideo />
      <GalleryReportsHeading
        title={content.gallery.reportsTitle}
        subtitle={content.gallery.reportsSubtitle}
      />
      <HeroCards
        photoCard={content.gallery.photoCard}
        videoCard={content.gallery.videoCard}
      />
    </>
  )
}
