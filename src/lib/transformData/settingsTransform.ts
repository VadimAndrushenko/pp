import type { Setting } from "@payload-types"
import { site as siteFallback } from "@/config/site"
import { links as linksFallback, workingHours as workingHoursFallback } from "@/config/links"

export interface SiteSettings {
  site: {
    name: string
    tagline: string
    description: string
    footerHeart: string
    cuisines: string
    neonSlogan: {
      line1: string
      accent1: string
      accent2: string
      subtitle: string
    }
  }
  links: {
    googleMaps: string
    yandexMaps: string
    telegram: string
    telegramBot: string
    whatsapp: string
    menu: string
    events: string
    delivery: string
    contacts: string
    bookingForm: string
    grab: string
    instagram: string
    facebook: string
    youtube: string
    tiktok: string
    zalo: string
    email: string
    phone: string
    phoneHref: string
    address: string
    addressFull: string
  }
  workingHours: {
    daily: {
      label: string
      hours: string
      highlighted: boolean
    }
  }
}

export const transformSettings = (setting: Setting | null): SiteSettings => ({
  site: {
    name: setting?.siteName || siteFallback.name,
    tagline: setting?.tagline || siteFallback.tagline,
    description: setting?.description || siteFallback.description,
    footerHeart: setting?.footerHeart || siteFallback.footerHeart,
    cuisines: setting?.cuisines || siteFallback.cuisines,
    neonSlogan: {
      line1: setting?.neonSlogan?.line1 || siteFallback.neonSlogan.line1,
      accent1: setting?.neonSlogan?.accent1 || siteFallback.neonSlogan.accent1,
      accent2: setting?.neonSlogan?.accent2 || siteFallback.neonSlogan.accent2,
      subtitle: setting?.neonSlogan?.subtitle || siteFallback.neonSlogan.subtitle,
    },
  },
  links: {
    googleMaps: setting?.googleMaps || linksFallback.googleMaps,
    yandexMaps: setting?.yandexMaps || linksFallback.yandexMaps,
    telegram: setting?.telegram || linksFallback.telegram,
    telegramBot: setting?.telegramBot || linksFallback.telegramBot,
    whatsapp: setting?.whatsapp || linksFallback.whatsapp,
    menu: setting?.menu || linksFallback.menu,
    events: setting?.events || linksFallback.events,
    delivery: setting?.delivery || linksFallback.delivery,
    contacts: setting?.contacts || linksFallback.contacts,
    bookingForm: setting?.bookingForm || linksFallback.bookingForm || linksFallback.whatsapp,
    grab: setting?.grab || linksFallback.grab,
    instagram: setting?.instagram || linksFallback.instagram,
    facebook: setting?.facebook || linksFallback.facebook,
    youtube: setting?.youtube || linksFallback.youtube,
    tiktok: setting?.tiktok || linksFallback.tiktok,
    zalo: setting?.zalo || linksFallback.zalo,
    email: setting?.email || linksFallback.email,
    phone: setting?.phone || linksFallback.phone,
    phoneHref: setting?.phoneHref || linksFallback.phoneHref,
    address: setting?.address || linksFallback.address,
    addressFull: setting?.addressFull || linksFallback.addressFull,
  },
  workingHours: {
    daily: {
      label: setting?.workingHours?.label || workingHoursFallback.daily.label,
      hours: setting?.workingHours?.hours || workingHoursFallback.daily.hours,
      highlighted:
        setting?.workingHours?.highlighted ?? workingHoursFallback.daily.highlighted,
    },
  },
})