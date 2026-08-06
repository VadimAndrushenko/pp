import { Breadcrumb } from "@/components/layout/breadcrumb"
import { PhotoAlbums } from "@/components/sections/gallery/photo-albums"
import { galleryPhotos } from "@/config/gallery-photos"

export default function GalleryPhotosPage() {
  return (
    <>
      <Breadcrumb items={[{ label: "Как у нас", href: "/gallery" }, { label: "Фото отчёты" }]} />
      <PhotoAlbums photos={galleryPhotos} />
    </>
  )
}
