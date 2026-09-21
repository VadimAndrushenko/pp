import { Breadcrumb } from "@/components/layout/breadcrumb"
import { VideoAlbums } from "@/components/sections/gallery/videos-grid"
import { galleryVideos as galleryVideosFallback } from "@/config/gallery-videos"
import type { GalleryVideo } from "@/types"
import { getGalleryVideos } from "@/lib/payload/gallery"
import { transformGalleryVideos } from "@/lib/transformData/galleryTransform"

export const revalidate = 30

export default async function GalleryVideosPage() {
  const videosData = await getGalleryVideos().then(transformGalleryVideos)
  const videos: GalleryVideo[] = videosData.length > 0 ? videosData : galleryVideosFallback

  return (
    <>
      <Breadcrumb items={[{ label: "Как у нас", href: "/gallery" }, { label: "Видео отчёты" }]} />
      <VideoAlbums videos={videos} />
    </>
  )
}