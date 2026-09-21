import type { GalleryReport } from "@payload-types"
import type { EventItem } from "@/types"
import { resolveImageUrl } from "./resolveImageUrl"

export const transformGalleryReports = (reports: GalleryReport[]): EventItem[] =>
  reports.map((report) => ({
    id: String(report.id),
    date: report.date,
    month: report.month,
    dayOfWeek: report.dayOfWeek,
    title: report.title,
    category: report.category,
    time: report.time,
    image: resolveImageUrl(report.image),
    description: report.description,
    admission: report.admission,
    slug: report.slug,
  }))