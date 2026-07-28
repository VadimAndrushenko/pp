import { HeroSection } from "@/components/sections/main/hero-section"
import { QuickNav } from "@/components/sections/main/quick-nav"
import { VideoSection } from "@/components/sections/main/video-section"
import { EventsPreview } from "@/components/sections/events/events-preview"
import { ServicesGrid } from "@/components/sections/main/services-grid"
import { galleryPreviews } from "@/config/gallery"
import { events } from "@/config/events"

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <QuickNav className="py-8" />
      <VideoSection className="py-8" />
      <EventsPreview events={events} className="py-8" />
      <EventsPreview
        title="Фото и видеоотчёты"
        events={galleryPreviews}
        linkHref="/gallery"
        linkLabel="Смотреть всё"
        className="py-8"
      />
      <ServicesGrid />
    </>
  )
}
