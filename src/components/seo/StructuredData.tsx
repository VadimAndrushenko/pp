import type { Event as EventType } from '@payload-types'
import type { MenuData } from '@/config/menu-data'
import { DEFAULT_OG_IMAGE, GEO, SITE_NAME, siteUrl } from '@/lib/seo/config'

export interface BreadcrumbJsonItem {
  label: string
  href?: string
}

const escape = (value: unknown): string => JSON.stringify(value).replace(/</g, '\\u003c')

const JsonLd = ({ data }: { data: Record<string, unknown> }) => (
  <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: escape(data) }} />
)

const clean = (value?: string | null): string => (value ?? '').trim()

const resolveMediaUrl = (media: unknown): string => {
  if (typeof media === 'object' && media !== null && 'url' in media) {
    const url = (media as { url?: string | null }).url
    if (clean(url)) return url as string
  }
  return DEFAULT_OG_IMAGE
}

/**
 * 🍞 Хлебные крошки в разметке Schema.org.
 * Повторяет визуальные крошки, поэтому rich snippet и страница не расходятся.
 */
export function BreadcrumbStructuredData({ items }: { items: BreadcrumbJsonItem[] }) {
  if (items.length === 0) return null

  const itemList = [{ label: 'Главная', href: '/' }, ...items].map((item, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    name: item.label,
    ...(item.href ? { item: `${siteUrl}${item.href}` } : {}),
  }))

  return (
    <JsonLd
      data={{
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: itemList,
      }}
    />
  )
}

/**
 * 🏠 Сайт + действие поиска. Даёт знать поисковику, что это ресторан, а не блог.
 */
export function WebSiteStructuredData() {
  return (
    <JsonLd
      data={{
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        name: SITE_NAME,
        url: siteUrl,
        inLanguage: 'ru-RU',
        publisher: { '@type': 'Organization', name: SITE_NAME, url: siteUrl },
      }}
    />
  )
}

/**
 * 🍽 Ресторан: адрес, координаты, телефон, кухни, соцсети.
 */
export function RestaurantStructuredData({
  site,
  links,
  workingHours,
}: {
  site: { name: string; description?: string | null; cuisines?: string | null }
  links: {
    phone?: string | null
    phoneHref?: string | null
    googleMaps?: string | null
    addressFull?: string | null
    telegram?: string | null
    whatsapp?: string | null
    instagram?: string | null
    facebook?: string | null
    youtube?: string | null
    zalo?: string | null
    menu?: string | null
  }
  workingHours?: { daily?: { label?: string; hours?: string; highlighted?: boolean } | null } | null
}) {
  const cuisines = clean(site.cuisines)
    .split(/[•·,]/)
    .map((item) => item.trim())
    .filter(Boolean)

  const hoursLabel = clean(workingHours?.daily?.hours)
  const isAllDay = hoursLabel.toLowerCase().replace(/\s/g, '') === '24/7'

  return (
    <JsonLd
      data={{
        '@context': 'https://schema.org',
        '@type': 'Restaurant',
        '@id': `${siteUrl}/#restaurant`,
        name: site.name,
        description: clean(site.description) || undefined,
        url: siteUrl,
        image: DEFAULT_OG_IMAGE,
        logo: `${siteUrl}/logo.png`,
        servesCuisine: cuisines.length > 0 ? cuisines : undefined,
        priceRange: '$$',
        currenciesAccepted: 'VND, RUB, USD',
        ...(clean(links.phoneHref)
          ? { telephone: clean(links.phoneHref).replace(/^tel:/, '') }
          : {}),
        ...(clean(links.googleMaps) ? { hasMap: clean(links.googleMaps) } : {}),
        address: {
          '@type': 'PostalAddress',
          streetAddress: '97 Trần Hưng Đạo, 2 этаж (вход через Holiday Center)',
          addressLocality: 'Dương Đông',
          addressRegion: 'Phú Quốc',
          addressCountry: 'VN',
        },
        geo: {
          '@type': 'GeoCoordinates',
          latitude: GEO.latitude,
          longitude: GEO.longitude,
        },
        openingHoursSpecification: [
          {
            '@type': 'OpeningHoursSpecification',
            dayOfWeek: [
              'Monday',
              'Tuesday',
              'Wednesday',
              'Thursday',
              'Friday',
              'Saturday',
              'Sunday',
            ],
            ...(isAllDay ? { opens: '00:00', closes: '23:59' } : {}),
          },
        ],
        acceptsReservations: true,
        sameAs: [
          links.telegram,
          links.whatsapp,
          links.instagram,
          links.facebook,
          links.youtube,
          links.zalo,
        ].filter(Boolean),
        ...(clean(links.menu) ? { hasMenu: `${siteUrl}/menu` } : {}),
      }}
    />
  )
}

/**
 * 🎤 Событие: даты, время и место. Google показывает это календарём в выдаче.
 */
export function EventStructuredData({
  event,
  links,
}: {
  event: Pick<
    EventType,
    | 'title'
    | 'slug'
    | 'description'
    | 'date'
    | 'time'
    | 'scheduleType'
    | 'specificDate'
    | 'image'
    | 'admission'
  >
  links?: { addressFull?: string | null; phoneHref?: string | null } | null
}) {
  const url = `${siteUrl}/events/${event.slug}`

  const rawDate = event.scheduleType === 'one-off' ? clean(event.specificDate) : clean(event.date)

  const timeMatch = clean(event.time).match(/\d{1,2}:\d{2}/)
  const startDate = rawDate && timeMatch ? `${rawDate}T${timeMatch[0]}:00` : rawDate || undefined

  const price = event.admission === 'free' ? '0' : undefined

  return (
    <JsonLd
      data={{
        '@context': 'https://schema.org',
        '@type': 'Event',
        '@id': `${url}#event`,
        name: event.title,
        description: clean(event.description) || undefined,
        url,
        image: resolveMediaUrl(event.image),
        eventStatus: 'https://schema.org/EventScheduled',
        eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
        ...(startDate ? { startDate } : {}),
        ...(timeMatch
          ? {
              endDate: (() => {
                const [h, m] = timeMatch[0].split(':').map(Number)
                const end = new Date(2000, 0, 1, h + 4, m)
                return end.toTimeString().slice(0, 5)
              })(),
            }
          : {}),
        location: {
          '@type': 'Place',
          name: SITE_NAME,
          address: {
            '@type': 'PostalAddress',
            streetAddress: clean(links?.addressFull) || '97 Trần Hưng Đạo, Dương Đông, Phú Quốc',
            addressCountry: 'VN',
          },
          geo: { '@type': 'GeoCoordinates', latitude: GEO.latitude, longitude: GEO.longitude },
        },
        organizer: { '@type': 'Organization', name: SITE_NAME, url: siteUrl },
        ...(clean(event.admission) === 'free' ? { isAccessibleForFree: true } : {}),
        ...(price
          ? {
              offers: {
                '@type': 'Offer',
                price,
                priceCurrency: 'VND',
                availability: 'https://schema.org/InStock',
              },
            }
          : {}),
      }}
    />
  )
}

/**
 * 📋 Меню по схеме Google для ресторанов.
 */
export function MenuStructuredData({ menu }: { menu: MenuData }) {
  const url = `${siteUrl}/menu/${menu.id}`

  const sections = (menu.sections ?? [])
    .filter((section) => (section?.dishes ?? []).length > 0)
    .map((section) => ({
      '@type': 'MenuSection',
      name: clean(section?.title) || undefined,
      ...(clean(section?.subtitle) ? { description: clean(section?.subtitle) } : {}),
      hasMenuItem: (section?.dishes ?? [])
        .filter((dish) => clean(dish?.name))
        .map((dish) => ({
          '@type': 'MenuItem',
          name: clean(dish?.name),
          ...(clean(dish?.description) ? { description: clean(dish?.description) } : {}),
          ...(clean(dish?.price)
            ? {
                offers: {
                  '@type': 'Offer',
                  price: clean(dish?.price).replace(/[^\d]/g, ''),
                  priceCurrency: 'VND',
                },
              }
            : {}),
        })),
    }))
    .filter((section) => section.hasMenuItem.length > 0)

  return (
    <JsonLd
      data={{
        '@context': 'https://schema.org',
        '@type': 'Menu',
        '@id': `${url}#menu`,
        name: menu.title,
        ...(clean(menu.subtitle) ? { description: clean(menu.subtitle) } : {}),
        url,
        inLanguage: 'ru-RU',
        ...(sections.length > 0 ? { hasMenuSection: sections } : {}),
      }}
    />
  )
}

/**
 * ℹ️ Обычная страница — для статических разделов без спецсхемы.
 */
export function WebPageStructuredData({
  title,
  description,
  path,
}: {
  title: string
  description?: string | null
  path: string
}) {
  return (
    <JsonLd
      data={{
        '@context': 'https://schema.org',
        '@type': 'WebPage',
        name: title,
        description: clean(description) || undefined,
        url: `${siteUrl}${path}`,
        isPartOf: { '@type': 'WebSite', name: SITE_NAME, url: siteUrl },
        inLanguage: 'ru-RU',
      }}
    />
  )
}
