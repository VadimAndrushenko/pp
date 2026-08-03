import { Breadcrumb } from "@/components/layout/breadcrumb"
import { PhotosGrid } from "@/components/sections/gallery/photos-grid"

const photos = [
  { id: "p1", image: "https://picsum.photos/seed/poidem-photo-1/400/400", title: "Караоке батл", date: "24 мая" },
  { id: "p2", image: "https://picsum.photos/seed/poidem-photo-2/400/400", title: "DJ вечеринка", date: "26 мая" },
  { id: "p3", image: "https://picsum.photos/seed/poidem-photo-3/400/400", title: "Квиз", date: "25 мая" },
  { id: "p4", image: "https://picsum.photos/seed/poidem-photo-4/400/400", title: "Бизнес-завтрак", date: "28 мая" },
  { id: "p5", image: "https://picsum.photos/seed/poidem-photo-5/400/400", title: "Живая музыка", date: "30 мая" },
  { id: "p6", image: "https://picsum.photos/seed/poidem-photo-6/400/400", title: "Караоке батл", date: "3 июня" },
  { id: "p7", image: "https://picsum.photos/seed/poidem-photo-7/400/400", title: "Бизнес-завтрак", date: "4 июня" },
  { id: "p8", image: "https://picsum.photos/seed/poidem-photo-8/400/400", title: "DJ вечеринка", date: "7 июня" },
]

export default function GalleryPhotosPage() {
  return (
    <>
      <Breadcrumb />
      <PhotosGrid photos={photos} className="py-6" />
    </>
  )
}