import type { GalleryReleaseType } from "@/types"
import { formatDateLabel } from "@/collections/components/dateTimeUtils"
import { resolveImageUrl } from "./resolveImageUrl"
import type { GalleryReport, GalleryVideo } from "@payload-types"
import type { GalleryPick } from "@/globals/components/galleryPicksShared"

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

export function buildPhotoReleases(report: GalleryReport, picks: GalleryPick[]): GalleryReleaseItem[] {
  const dateKey = dateKeyFor(report)
  if (!dateKey) return []

  const photos = report.photos ?? []
  if (photos.length === 0) return []

  return photos
    .map((photo, index) => ({ photo, index }))
    .filter(({ photo, index }) =>
      picks.length === 0
        ? true
        : picks.some(
            (pick) => String(pick.reportId) === String(report.id) && pick.key === photoRowKey(photo.id, index),
          ),
    )
    .map(({ photo, index }) => ({
      type: "photo",
      id: `photo-${report.id}-${index}`,
      title: photo.title || report.title,
      image: resolveImageUrl(photo.image),
      dateKey,
      dateLabel: dateLabelFor(report),
      href: `/gallery/photos?release=${encodeURIComponent(dateKey)}#album-${encodeURIComponent(dateKey)}`,
    }))
}

function photoRowKey(rowId: string | null | undefined, index: number): string {
  if (rowId) return rowId
  return `idx-${index}`
}

export function buildVideoReleases(album: GalleryVideo, picks: GalleryPick[]): GalleryReleaseItem[] {
  if (!album.dateKey) return []

  const videos = album.videos ?? []
  if (videos.length === 0) return []

  return videos
    .map((video, index) => ({ video, index }))
    .filter(({ video, index }) =>
      picks.length === 0
        ? true
        : picks.some(
            (pick) => String(pick.reportId) === String(album.id) && pick.key === videoRowKey(video.id, index),
          ),
    )
    .map(({ video, index }) => ({
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

function videoRowKey(rowId: string | null | undefined, index: number): string {
  if (rowId) return rowId
  return `idx-${index}`
}

export const selectGalleryReleases = ({
  reports,
  videos,
  photoPicks,
  videoPicks,
}: {
  reports: GalleryReport[]
  videos: GalleryVideo[]
  photoPicks: GalleryPick[]
  videoPicks: GalleryPick[]
}): GalleryReleaseItem[] => {
  const items: GalleryReleaseItem[] = []
  for (const report of reports) items.push(...buildPhotoReleases(report, photoPicks))
  for (const album of videos) items.push(...buildVideoReleases(album, videoPicks))
  return items
}