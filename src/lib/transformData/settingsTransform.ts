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
    googleMapsEmbed: string
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

/** Хост нашего же сайта — по нему определяем «внутренние» ссылки */
const INTERNAL_HOST = new URL(linksFallback.menu).host.replace(/^www\./, "")

/**
 * Абсолютный URL нашего домена превращаем в относительный путь,
 * иначе на localhost клики уводят на прод.
 */
const toInternalPath = (url: string): string => {
  if (!url) return url
  try {
    const { host, pathname, search, hash } = new URL(url)
    return host.replace(/^www\./, "") === INTERNAL_HOST ? `${pathname}${search}${hash}` : url
  } catch {
    return url
  }
}

export const transformSettings = (setting: Setting | null): SiteSettings => ({
  site: {
    name: siteFallback.name,
    tagline: siteFallback.tagline,
    description: siteFallback.description,
    footerHeart: siteFallback.footerHeart,
    cuisines: siteFallback.cuisines,
    neonSlogan: { ...siteFallback.neonSlogan },
  },
  links: {
    googleMaps: setting?.googleMaps || linksFallback.googleMaps,
    googleMapsEmbed: setting?.googleMapsEmbed || linksFallback.googleMapsEmbed,
    yandexMaps: setting?.yandexMaps || linksFallback.yandexMaps,
    telegram: setting?.telegram || linksFallback.telegram,
    telegramBot: setting?.telegramBot || linksFallback.telegramBot,
    whatsapp: setting?.whatsapp || linksFallback.whatsapp,
    menu: toInternalPath(linksFallback.menu),
    events: toInternalPath(linksFallback.events),
    delivery: toInternalPath(linksFallback.delivery),
    contacts: toInternalPath(linksFallback.contacts),
    bookingForm: toInternalPath(linksFallback.bookingForm || linksFallback.whatsapp),
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