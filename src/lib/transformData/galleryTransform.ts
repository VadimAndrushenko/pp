import type { GalleryVideo as PayloadGalleryVideo } from "@payload-types"
import type { GalleryVideo } from "@/types"

export const transformGalleryVideos = (
  videos: PayloadGalleryVideo[],
): GalleryVideo[] =>
  videos.flatMap((album) => {
    const items =
      album.videos?.map((video, index) => ({
        id: `${album.id}-${index}`,
        videoId: video.videoId,
        title: video.title || album.title,
        dateKey: album.dateKey,
        dateLabel: album.dateLabel,
      })) ?? []

    if (items.length > 0) return items

    if (album.videoId) {
      return [
        {
          id: String(album.id),
          videoId: album.videoId,
          title: album.title,
          dateKey: album.dateKey,
          dateLabel: album.dateLabel,
        },
      ]
    }

    return []
  })