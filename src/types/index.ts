export interface ServiceItem {
  id: string
  icon: string
  title: string
  description: string
  href: string
}

export interface MenuLinkItem {
  id: string
  icon: string
  label: string
  href: string
  pdfUrl?: string
}

export interface EventItem {
  id: string
  date: string
  month: string
  dayOfWeek: string
  title: string
  subtitle?: string
  category: EventCategory
  time: string
  image: string
  description: string
  admission: "free" | "paid"
  slug: string
}

export type EventCategory =
  | "all"
  | "karaoke"
  | "quiz"
  | "music"
  | "business"
  | "show"

export interface AdvantageItem {
  icon: string
  text: string
}

export interface PriceTier {
  id: string
  name: string
  price: string
  image: string
  description?: string
}

export interface NavLink {
  label: string
  href: string
  icon?: string
}

export interface HookahFeature {
  icon: string
  title: string
  description: string
}

export interface DeliveryZone {
  zone: string
  price: string
  time: string
}

export interface GalleryItem {
  id: string
  image: string
  title: string
  date: string
  type: "photo" | "video"
}

export interface GalleryPhoto {
  id: string
  image: string
  title: string
  dateKey: string
  dateLabel: string
}

export interface GalleryVideo {
  id: string
  videoId: string
  title: string
  dateKey: string
  dateLabel: string
}
