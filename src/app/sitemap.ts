import type { MetadataRoute } from 'next'
import { getEvents } from '@/lib/payload/events'
import { getMenuCategories } from '@/lib/payload/menu'
import { siteUrl } from '@/lib/seo/config'

type ChangeFrequency = MetadataRoute.Sitemap[number]['changeFrequency']

interface StaticEntry {
  path: string
  changeFrequency: ChangeFrequency
  priority: number
}

const STATIC_ROUTES: StaticEntry[] = [
  { path: '/', changeFrequency: 'daily', priority: 1 },
  { path: '/menu', changeFrequency: 'daily', priority: 0.9 },
  { path: '/events', changeFrequency: 'daily', priority: 0.9 },
  { path: '/contacts', changeFrequency: 'monthly', priority: 0.8 },
  { path: '/booking', changeFrequency: 'monthly', priority: 0.8 },
  { path: '/find-us', changeFrequency: 'monthly', priority: 0.7 },
  { path: '/banquet', changeFrequency: 'monthly', priority: 0.7 },
  { path: '/delivery', changeFrequency: 'weekly', priority: 0.7 },
  { path: '/today', changeFrequency: 'daily', priority: 0.7 },
  { path: '/hookah', changeFrequency: 'weekly', priority: 0.7 },
  { path: '/gallery', changeFrequency: 'weekly', priority: 0.6 },
  { path: '/gallery/photos', changeFrequency: 'weekly', priority: 0.6 },
  { path: '/gallery/videos', changeFrequency: 'weekly', priority: 0.6 },
  { path: '/community', changeFrequency: 'weekly', priority: 0.6 },
  { path: '/hotel', changeFrequency: 'monthly', priority: 0.6 },
  { path: '/island-info', changeFrequency: 'monthly', priority: 0.6 },
  { path: '/promotions', changeFrequency: 'weekly', priority: 0.6 },
  { path: '/vip', changeFrequency: 'monthly', priority: 0.5 },
  { path: '/currency', changeFrequency: 'weekly', priority: 0.3 },
]

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const now = new Date()

  const urls: MetadataRoute.Sitemap = STATIC_ROUTES.map(({ path, changeFrequency, priority }) => ({
    url: `${siteUrl}${path}`,
    lastModified: now,
    changeFrequency,
    priority,
  }))

  try {
    const events = await getEvents()

    for (const event of events) {
      if (!event.slug) continue

      urls.push({
        url: `${siteUrl}/events/${event.slug}`,
        lastModified: event.updatedAt ? new Date(event.updatedAt) : now,
        changeFrequency: 'weekly',
        priority: 0.7,
      })
    }
  } catch (error) {
    console.error('❌ Ошибка добавления событий в sitemap:', error)
  }

  try {
    const categories = await getMenuCategories()

    for (const category of categories) {
      if (!category.slug) continue

      urls.push({
        url: `${siteUrl}/menu/${category.slug}`,
        lastModified: category.updatedAt ? new Date(category.updatedAt) : now,
        changeFrequency: 'weekly',
        priority: 0.8,
      })
    }
  } catch (error) {
    console.error('❌ Ошибка добавления меню в sitemap:', error)
  }

  return urls
}
