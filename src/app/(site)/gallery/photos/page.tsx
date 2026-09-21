import { Breadcrumb } from "@/components/layout/breadcrumb"
import { PhotoAlbums } from "@/components/sections/gallery/photo-albums"
import { galleryPhotos as galleryPhotosFallback } from "@/config/gallery-photos"
import type { GalleryPhoto } from "@/types"
import { getGalleryPhotos } from "@/lib/payload/gallery"
import { transformGalleryPhotos } from "@/lib/transformData/galleryPhotosTransform"

export const revalidate = 30

export default async function GalleryPhotosPage() {
  const photosData = await getGalleryPhotos().then(transformGalleryPhotos)
  const photos: GalleryPhoto[] = photosData.length > 0 ? photosData : galleryPhotosFallback

  return (
    <>
      <Breadcrumb items={[{ label: "Как у нас", href: "/gallery" }, { label: "Фото отчёты" }]} />
      <PhotoAlbums photos={photos} />
    </>
  )
}