import { Breadcrumb } from "@/components/layout/breadcrumb"
import { Button } from "@/components/ui/button"
import { HeroCards } from "@/components/sections/gallery/hero-cards"
import { PhotosGrid } from "@/components/sections/gallery/photos-grid"
import { VideosGrid } from "@/components/sections/gallery/videos-grid"
import { SocialCta } from "@/components/sections/gallery/social-cta"

const photos = [
  { id: "p1", image: "https://picsum.photos/seed/poidem-photo-1/400/400", title: "Караоке батл", date: "24 мая" },
  { id: "p2", image: "https://picsum.photos/seed/poidem-photo-2/400/400", title: "DJ вечеринка", date: "26 мая" },
  { id: "p3", image: "https://picsum.photos/seed/poidem-photo-3/400/400", title: "Квиз", date: "25 мая" },
  { id: "p4", image: "https://picsum.photos/seed/poidem-photo-4/400/400", title: "Бизнес-завтрак", date: "28 мая" },
]

const videos = [
  { id: "v1", image: "https://picsum.photos/seed/poidem-video-1/400/400", title: "Живая музыка", date: "30 мая" },
  { id: "v2", image: "https://picsum.photos/seed/poidem-video-2/400/400", title: "DJ сет", date: "26 мая" },
  { id: "v3", image: "https://picsum.photos/seed/poidem-video-3/400/400", title: "Караоке", date: "24 мая" },
  { id: "v4", image: "https://picsum.photos/seed/poidem-video-4/400/400", title: "Интервью", date: "20 мая" },
]

export default function GalleryPage() {
  return (
    <>
      <div className="flex items-start justify-between mb-6">
          <div>
            <Breadcrumb />
          </div>
          <Button variant="outline" size="sm">
            📷 Добавить свои фото
          </Button>
        </div>

        <h1 className="text-3xl md:text-4xl font-display font-bold uppercase tracking-tight text-[var(--color-text-primary)] mb-2">
          Как у нас
        </h1>
        <p className="text-sm font-display uppercase tracking-wider mb-6" style={{ color: "var(--color-accent)" }}>
          Фото и видеоотчёты
        </p>

        <HeroCards className="py-6" />
        <PhotosGrid photos={photos} className="py-8" />
        <VideosGrid videos={videos} className="py-8" />
        <SocialCta className="py-8" />
    </>
  )
}
