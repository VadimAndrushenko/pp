import { Breadcrumb } from "@/components/layout/breadcrumb"
import { PhotoAlbums } from "@/components/sections/gallery/photo-albums"
import { galleryPhotos } from "@/config/gallery-photos"

export default function GalleryPhotosPage() {
  return (
    <>
      <Breadcrumb />
      <PhotoAlbums photos={galleryPhotos} className="section-py" />
    </>
  )
}
