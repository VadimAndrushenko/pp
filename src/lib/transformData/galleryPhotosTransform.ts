import type { GalleryReport } from "@payload-types"
import type { GalleryPhoto } from "@/types"
import { formatDateLabel } from "@/collections/components/dateTimeUtils"
import { resolveImageUrl } from "./resolveImageUrl"

const monthLower = (month: string) => (month ? month.toLowerCase() : "")

export const transformGalleryPhotos = (reports: GalleryReport[]): GalleryPhoto[] =>
  reports.flatMap((report) => {
    const dateKey = report.reportDate || `legacy-${report.id}`
    const dateLabel = report.reportDate
      ? formatDateLabel(report.reportDate)
      : `${report.date} ${monthLower(report.month)}`.trim()

    const items =
      report.photos?.map((photo, index) => ({
        id: `${report.id}-${index}`,
        image: resolveImageUrl(photo.image),
        title: photo.title || report.title,
        dateKey,
        dateLabel,
      })) ?? []

    if (items.length > 0) return items

    return [
      {
        id: String(report.id),
        image: resolveImageUrl(report.image),
        title: report.title,
        dateKey,
        dateLabel,
      },
    ]
  })