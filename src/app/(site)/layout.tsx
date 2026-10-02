import type { Metadata } from "next"
import { Oswald, Montserrat } from "next/font/google"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { PageTransition } from "@/components/ui/page-transition"
import { CartProvider } from "@/components/cart/cart-context"
import { CartButton } from "@/components/cart/cart-button"
import { CartDrawer } from "@/components/cart/cart-drawer"
import { getSiteSettings } from "@/lib/data/settings"
import { RestaurantStructuredData, WebSiteStructuredData } from "@/components/seo/StructuredData"
import { DEFAULT_OG_IMAGE, SITE_NAME, siteUrl } from "@/lib/seo/config"
import "../globals.css"

const oswald = Oswald({
  variable: "--font-display",
  subsets: ["latin", "cyrillic"],
  display: "swap",
})

const montserrat = Montserrat({
  variable: "--font-body",
  subsets: ["latin", "cyrillic"],
  display: "swap",
})




const FALLBACK_DESCRIPTION =
  "Ресторан на Фукуоке, где каждый день что-то происходит! Русская, кавказская, восточная, европейская, азиатская кухня. Кальяны, мероприятия, доставка."

export async function generateMetadata(): Promise<Metadata> {
  const { site } = await getSiteSettings()

  const description = site.description || FALLBACK_DESCRIPTION

  return {
    metadataBase: new URL(siteUrl),
    title: `${site.name} — Ресторан на Фукуоке`,
    description,
    openGraph: {
      title: `${site.name} — Ресторан на Фукуоке`,
      description,
      type: "website",
      url: siteUrl,
      siteName: SITE_NAME,
      locale: "ru_RU",
      images: [{ url: DEFAULT_OG_IMAGE, width: 1200, height: 630, alt: SITE_NAME }],
    },
    twitter: {
      card: "summary_large_image",
      title: `${site.name} — Ресторан на Фукуоке`,
      description,
      images: [DEFAULT_OG_IMAGE],
    },
  }
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const { site, links, workingHours } = await getSiteSettings()

  return (
    <html
      lang="ru"
      suppressHydrationWarning
      className={`${oswald.variable} ${montserrat.variable}`}
    >
      <body className="min-h-screen flex flex-col bg-bg text-text-primary font-body antialiased">
        <WebSiteStructuredData />
        <RestaurantStructuredData site={site} links={links} workingHours={workingHours} />
        <CartProvider>
          <Header workingHours={workingHours} />
          <main className="container py-6 flex-1">
            <PageTransition>{children}</PageTransition>
          </main>
          <Footer site={site} links={links} workingHours={workingHours} />
          <CartButton />
          <CartDrawer />
        </CartProvider>
      </body>
    </html>
  )
}