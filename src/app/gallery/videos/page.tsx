import { Breadcrumb } from "@/components/layout/breadcrumb"
import { VideoAlbums } from "@/components/sections/gallery/videos-grid"
import { galleryVideos } from "@/config/gallery-videos"

export default function GalleryVideosPage() {
  return (
    <>
      <Breadcrumb />
      <VideoAlbums videos={galleryVideos} className="py-6" />
    </>
  )
}
