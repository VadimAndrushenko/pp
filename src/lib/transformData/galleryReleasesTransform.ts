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

export function buildPhotoRelease(report: GalleryReport): GalleryReleaseItem | null {
  const dateKey = dateKeyFor(report)
  if (!dateKey) return null
  return {
    type: "photo",
    id: String(report.id),
    title: report.title,
    image: resolveImageUrl(report.image),
    dateKey,
    dateLabel: dateLabelFor(report),
    href: `/gallery/photos?release=${encodeURIComponent(dateKey)}#album-${encodeURIComponent(dateKey)}`,
  }
}

export function buildVideoRelease(album: GalleryVideo): GalleryReleaseItem | null {
  if (!album.dateKey) return null
  const first = album.videos?.[0]
  return {
    type: "video",
    id: String(album.id),
    title: album.title || first?.title || "Видеоотчёт",
    image: first?.videoId
      ? `https://i.ytimg.com/vi/${first.videoId}/hqdefault.jpg`
      : "",
    dateKey: album.dateKey,
    dateLabel: album.dateLabel || formatDateLabel(album.dateKey),
    href: `/gallery/videos?release=${encodeURIComponent(album.dateKey)}#album-${encodeURIComponent(album.dateKey)}`,
  }
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
  for (const report of photos) {
    const item = buildPhotoRelease(report)
    if (item) items.push(item)
  }
  for (const album of vids) {
    const item = buildVideoRelease(album)
    if (item) items.push(item)
  }
  return items
}