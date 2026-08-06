import { Breadcrumb } from "@/components/layout/breadcrumb"
import { GalleryHeading } from "@/components/sections/gallery/gallery-heading"
import { GalleryReportsHeading } from "@/components/sections/gallery/gallery-reports-heading"
import { HeroCards } from "@/components/sections/gallery/hero-cards"
import { RestaurantVideo } from "@/components/ui/restaurant-video"

export default function GalleryPage() {
  return (
    <>
      <Breadcrumb />
      <GalleryHeading />
      <RestaurantVideo />
      <GalleryReportsHeading />
      <HeroCards />
    </>
  )
}