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
    category: report.category ?? "all",
    time: report.time ?? "20:00",
    image: resolveImageUrl(report.image),
    description: report.description ?? "",
    admission: report.admission ?? "free",
    slug: report.slug,
  }))