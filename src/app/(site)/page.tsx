import { HeroSection } from "@/components/sections/main/hero-section"
import { QuickNav } from "@/components/sections/main/quick-nav"
import { RestaurantVideo } from "@/components/ui/restaurant-video"
import { EventsPreview } from "@/components/sections/events/events-preview"
import { GalleryReleasesPreview } from "@/components/sections/main/gallery-releases-preview"
import { ServicesGrid } from "@/components/sections/main/services-grid"
import { services as servicesFallback } from "@/config/services"
import { getHomeContent } from "@/lib/payload/homeContent"
import { getEvents } from "@/lib/payload/events"
import { getGalleryReports, getGalleryVideos } from "@/lib/payload/gallery"
import { getSiteSettings } from "@/lib/data/settings"
import { transformEvents, sortEventsByStart } from "@/lib/transformData/eventsTransform"
import { selectGalleryReleases } from "@/lib/transformData/galleryReleasesTransform"
import { transformHomeContent } from "@/lib/transformData/homeContentTransform"

export const revalidate = 30

export default async function HomePage() {
  const [settings, eventsData, reportsData, videosData, homeData] = await Promise.all([
    getSiteSettings(),
    getEvents().then(transformEvents),
    getGalleryReports(),
    getGalleryVideos(),
    getHomeContent().then(transformHomeContent),
  ])

  const events = sortEventsByStart(eventsData)
  const services = homeData.services.length > 0 ? homeData.services : servicesFallback
  const sectionTitles = homeData.sectionTitles
  const releases = selectGalleryReleases({
    reports: reportsData,
    videos: videosData,
    photoPicks: homeData.galleryPhotoPicks,
    videoPicks: homeData.galleryVideoPicks,
  })

  return (
    <>
      <HeroSection site={settings.site} hero={homeData.hero} />
      <QuickNav items={homeData.quickNav} />
      <RestaurantVideo />
      <EventsPreview events={events} cardVariant="cell" title={sectionTitles.events} />
      <GalleryReleasesPreview
        title={sectionTitles.gallery}
        items={releases}
        linkHref="/gallery"
        linkLabel="Смотреть всё"
      />
      <ServicesGrid title={sectionTitles.menu} services={services} />
    </>
  )
}
