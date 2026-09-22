import type { GalleryReleaseType } from "@/types"
import { formatDateLabel } from "@/collections/components/dateTimeUtils"
import { resolveImageUrl } from "./resolveImageUrl"
import type { GalleryReport, GalleryVideo } from "@payload-types"

export interface GalleryReleaseItem {
  type: GalleryReleaseType
  id: string
  title: string
  image: string
  dateKey: string
  dateLabel: string
  href: string
}

function dateKeyFor(report: GalleryReport): string {
  return report.reportDate || ""
}

function dateLabelFor(report: GalleryReport): string {
  if (report.reportDate) return formatDateLabel(report.reportDate)
  if (!report.date && !report.month) return ""
  return `${report.date} ${report.month || ""}`.trim()
}

export function buildPhotoReleases(report: GalleryReport): GalleryReleaseItem[] {
  const dateKey = dateKeyFor(report)
  if (!dateKey) return []

  const featured = report.photos?.filter((p) => p.featured) ?? []
  const photos = featured.length > 0 ? featured : (report.photos ?? [])

  if (photos.length === 0) return []

  return photos.map((photo, index) => ({
    type: "photo",
    id: `photo-${report.id}-${index}`,
    title: photo.title || report.title,
    image: resolveImageUrl(photo.image),
    dateKey,
    dateLabel: dateLabelFor(report),
    href: `/gallery/photos?release=${encodeURIComponent(dateKey)}#album-${encodeURIComponent(dateKey)}`,
  }))
}

export function buildVideoReleases(album: GalleryVideo): GalleryReleaseItem[] {
  if (!album.dateKey) return []

  const featured = album.videos?.filter((v) => v.featured) ?? []
  const videos = featured.length > 0 ? featured : (album.videos ?? [])

  if (videos.length === 0) return []

  return videos.map((video, index) => ({
    type: "video",
    id: `video-${album.id}-${index}`,
    title: video.title || album.title || "Видеоотчёт",
    image: video.videoId
      ? `https://i.ytimg.com/vi/${video.videoId}/hqdefault.jpg`
      : "",
    dateKey: album.dateKey,
    dateLabel: album.dateLabel || formatDateLabel(album.dateKey),
    href: `/gallery/videos?release=${encodeURIComponent(album.dateKey)}#album-${encodeURIComponent(album.dateKey)}`,
  }))
}

export const selectGalleryReleases = ({
  reports,
  videos,
  photoIds,
  videoIds,
}: {
  reports: GalleryReport[]
  videos: GalleryVideo[]
  photoIds: string[]
  videoIds: string[]
}): GalleryReleaseItem[] => {
  const photos = photoIds.length > 0 ? reports.filter((r) => photoIds.includes(String(r.id))) : reports
  const vids = videoIds.length > 0 ? videos.filter((v) => videoIds.includes(String(v.id))) : videos

  const items: GalleryReleaseItem[] = []
  for (const report of photos) items.push(...buildPhotoReleases(report))
  for (const album of vids) items.push(...buildVideoReleases(album))
  return items
}