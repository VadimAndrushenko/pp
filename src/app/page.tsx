import { HeroSection } from "@/components/sections/main/hero-section"
import { QuickNav } from "@/components/sections/main/quick-nav"
import { VideoSection } from "@/components/sections/main/video-section"
import { EventsPreview } from "@/components/blocks/events-preview"
import { ServicesGrid } from "@/components/sections/main/services-grid"
import { galleryPreviews } from "@/config/gallery"
import { events } from "@/config/events"

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <QuickNav />
      <VideoSection />
      <EventsPreview events={events} />
      <EventsPreview
        title="Фото и видеоотчёты"
        events={galleryPreviews}
        linkHref="/gallery"
        linkLabel="Смотреть всё"
      />
      <ServicesGrid />
    </>
  )
}
