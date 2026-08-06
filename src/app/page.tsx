import { HeroSection } from "@/components/sections/main/hero-section"
import { QuickNav } from "@/components/sections/main/quick-nav"
import { RestaurantVideo } from "@/components/ui/restaurant-video"
import { EventsPreview } from "@/components/sections/events/events-preview"
import { ServicesGrid } from "@/components/sections/main/services-grid"
import { galleryPreviews } from "@/config/gallery"
import { events } from "@/config/events"

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <QuickNav className="section-py" />
      <RestaurantVideo className="section-py" />
      <EventsPreview events={events} className="section-py" />
      <EventsPreview
        title="Фото и видеоотчёты"
        events={galleryPreviews}
        linkHref="/gallery#reports"
        linkLabel="Смотреть всё"
        className="section-py"
      />
      <ServicesGrid className="section-py" />
    </>
  )
}
