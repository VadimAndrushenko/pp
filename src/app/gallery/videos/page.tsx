import { Breadcrumb } from "@/components/layout/breadcrumb"
import { VideosGrid } from "@/components/sections/gallery/videos-grid"

const videos = [
  { id: "v1", image: "https://picsum.photos/seed/poidem-video-1/400/400", title: "Живая музыка", date: "30 мая" },
  { id: "v2", image: "https://picsum.photos/seed/poidem-video-2/400/400", title: "DJ сет", date: "26 мая" },
  { id: "v3", image: "https://picsum.photos/seed/poidem-video-3/400/400", title: "Караоке", date: "24 мая" },
  { id: "v4", image: "https://picsum.photos/seed/poidem-video-4/400/400", title: "Интервью", date: "20 мая" },
  { id: "v5", image: "https://picsum.photos/seed/poidem-video-5/400/400", title: "Бизнес-завтрак", date: "18 мая" },
  { id: "v6", image: "https://picsum.photos/seed/poidem-video-6/400/400", title: "Караоке батл", date: "16 мая" },
  { id: "v7", image: "https://picsum.photos/seed/poidem-video-7/400/400", title: "DJ вечеринка", date: "14 мая" },
  { id: "v8", image: "https://picsum.photos/seed/poidem-video-8/400/400", title: "Квиз", date: "12 мая" },
]

export default function GalleryVideosPage() {
  return (
    <>
      <Breadcrumb />
      <VideosGrid videos={videos} className="py-6" />
    </>
  )
}