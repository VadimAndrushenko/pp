import { transformEvents, transformEvent, transformEventBySlug, sortEventsByStart } from "./eventsTransform"
import type { HomeContent, GalleryReport, GalleryVideo } from "@payload-types"
import type { ServiceItem } from "@/types"
import { site as siteFallback } from "@/config/site"

export interface QuickNavItemData {
  icon: string
  label: string
  desc: string
  href: string
}

export interface HomeSectionTitles {
  menu: string
  events: string
  gallery: string
}

export interface HeroSectionData {
  title: {
    text: string
    accent: string
  }
  cuisines: string
  neonSlogan: {
    line1: string
    accent1: string
    accent2: string
    subtitle: string
  }
}

export interface HomeContentData {
  services: ServiceItem[]
  sectionTitles: HomeSectionTitles
  hero: HeroSectionData
  quickNav: QuickNavItemData[]
  galleryPhotoIds: string[]
  galleryVideoIds: string[]
}

const relIds = (values: (number | GalleryReport | GalleryVideo)[] | null | undefined): string[] =>
  (values ?? [])
    .map((v) => String(typeof v === "object" && v !== null ? v.id : v))
    .filter(Boolean)

const quickNavFallback: QuickNavItemData[] = [
  {
    icon: "soup",
    label: "МЕНЮ",
    desc: "Русская, кавказская, восточная, европейская и азиатская кухни",
    href: "/menu",
  },
  {
    icon: "calendar-check",
    label: "ЧТО СЕГОДНЯ?",
    desc: "Каждый день — мероприятия",
    href: "/events",
  },
  {
    icon: "cigarette",
    label: "ДОСТАВКА",
    desc: "Премиальные кальяны",
    href: "/delivery",
  },
  {
    icon: "camera",
    label: "КАК У НАС",
    desc: "Фото- и видеоотчёты",
    href: "/gallery",
  },
]

export const transformHomeContent = (home: HomeContent | null): HomeContentData => ({
  services:
    home && home.services && home.services.length > 0
      ? home.services.map((service) => ({
          id: String(service.id),
          icon: service.icon || "",
          title: service.title,
          description: service.description,
          href: service.href,
        }))
      : [],
  sectionTitles: {
    menu: home?.menuTitle || "МЕНЮ",
    events: home?.eventsTitle || "РАСПИСАНИЕ НА НЕДЕЛЮ",
    gallery: home?.galleryTitle || "ФОТО И ВИДЕООТЧЁТЫ",
  },
  hero: {
    title: {
      text: home?.title?.text || "Ресторан на Фукуоке, где каждый день",
      accent: home?.title?.accent || "что-то происходит!",
    },
    cuisines: home?.cuisines || siteFallback.cuisines,
    neonSlogan: {
      line1: home?.neonSlogan?.line1 || siteFallback.neonSlogan.line1,
      accent1: home?.neonSlogan?.accent1 || siteFallback.neonSlogan.accent1,
      accent2: home?.neonSlogan?.accent2 || siteFallback.neonSlogan.accent2,
      subtitle: home?.neonSlogan?.subtitle || siteFallback.neonSlogan.subtitle,
    },
  },
  quickNav:
    home && home.quickNav && home.quickNav.length > 0
      ? home.quickNav.map((item) => ({
          icon: item.icon || "circle",
          label: item.label,
          desc: item.desc || "",
          href: item.href,
        }))
      : quickNavFallback,
  galleryPhotoIds: relIds(home?.galleryPhotos),
  galleryVideoIds: relIds(home?.galleryVideos),
})
