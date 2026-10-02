import type { Metadata } from 'next'
import { DEFAULT_OG_IMAGE, SITE_NAME, siteUrl } from './config'

export interface SeoFields {
  seoTitle?: string | null
  seoDescription?: string | null
  seoKeywords?: string | null
  /** Картинка превью из контента (главная). Подставляется, если не передан image. */
  seoImageUrl?: string | null
  seoImageAlt?: string | null
}

const clean = (value?: string | null): string => (value ?? '').trim()

const keywordsList = (value?: string | null): string[] =>
  clean(value)
    .split(',')
    .map((word) => word.trim())
    .filter(Boolean)

/**
 * Собирает metadata страницы. Всё опционально: если SEO-поля не заполнены,
 * подставляются заголовок и описание из контента.
 *
 * Если своё изображение не передано, используется общее og-default.jpg —
 * чтобы ссылка в мессенджерах всегда была с превью.
 */
export const buildMetadata = ({
  seo,
  title,
  description,
  path,
  image,
  imageAlt,
  type = 'website',
  publishedTime,
  modifiedTime,
  noIndex = false,
}: {
  seo?: SeoFields | null
  title: string
  description?: string | null
  path: string
  image?: string | null
  imageAlt?: string | null
  type?: 'website' | 'article'
  publishedTime?: string | null
  modifiedTime?: string | null
  noIndex?: boolean
}): Metadata => {
  const seoTitle = clean(seo?.seoTitle)
  const seoDescription = clean(seo?.seoDescription) || clean(description)
  const keywords = keywordsList(seo?.seoKeywords)
  const url = `${siteUrl}${path}`

  const ogImage = clean(image) || clean(seo?.seoImageUrl) || DEFAULT_OG_IMAGE
  const ogAlt = clean(imageAlt) || clean(seo?.seoImageAlt) || seoTitle || `${SITE_NAME}`

  const ogBase = {
    url,
    siteName: SITE_NAME,
    locale: 'ru_RU',
    title: seoTitle || title,
    description: seoDescription || undefined,
    images: [{ url: ogImage, alt: ogAlt, width: 1200, height: 630 }],
  }

  const openGraph: NonNullable<Metadata['openGraph']> =
    type === 'article'
      ? {
          ...ogBase,
          type,
          ...(publishedTime ? { publishedTime } : {}),
          ...(modifiedTime ? { modifiedTime } : {}),
        }
      : { ...ogBase, type }

  return {
    title: seoTitle || `${title} | ${SITE_NAME}`,
    description: seoDescription || undefined,
    keywords: keywords.length > 0 ? keywords : undefined,
    alternates: { canonical: url },
    robots: noIndex ? { index: false, follow: false } : undefined,
    openGraph,
    twitter: {
      card: 'summary_large_image',
      title: seoTitle || title,
      description: seoDescription || undefined,
      images: [ogImage],
    },
  }
}

export { DEFAULT_OG_IMAGE, SITE_NAME, siteUrl }
