function resolveSiteUrl(): string {
  const raw =
    process.env.NEXT_PUBLIC_SITE_URL ||
    (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : '')

  if (!raw) return 'https://poidempozhrem.com'

  return raw.startsWith('http') ? raw.replace(/\/$/, '') : `https://${raw.replace(/\/$/, '')}`
}

export const siteUrl = resolveSiteUrl()

export const SITE_NAME = 'POIDEM POZHREM!'

export const DEFAULT_OG_IMAGE = `${siteUrl}/og-default.jpg`

/**
 * Иконка вкладки браузера по умолчанию.
 * Подменяется в «Содержание главной страницы → SEO → Иконка вкладки браузера».
 */
export const DEFAULT_FAVICON = '/icon.png'
export const DEFAULT_APPLE_ICON = '/apple-icon.png'

export const GEO = {
  latitude: 10.2056387725145,
  longitude: 103.96382863259639,
} as const
