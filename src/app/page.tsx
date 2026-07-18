import { HeroSection } from "@/components/sections/hero-section"
import { QuickNav } from "@/components/sections/quick-nav"
import { VideoSection } from "@/components/sections/video-section"
import { EventsPreview } from "@/components/sections/events-preview"
import { GalleryPreview } from "@/components/sections/gallery-preview"
import { ServicesGrid } from "@/components/sections/services-grid"

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <QuickNav />
      <VideoSection />
      <EventsPreview />
      <GalleryPreview />
      <ServicesGrid />
    </>
  )
}
