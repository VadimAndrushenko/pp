import type { Metadata } from "next"
import { Oswald, Montserrat } from "next/font/google"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { PageTransition } from "@/components/ui/page-transition"
import { CartProvider } from "@/components/cart/cart-context"
import { CartButton } from "@/components/cart/cart-button"
import { CartDrawer } from "@/components/cart/cart-drawer"
import { getSiteSettings } from "@/lib/data/settings"
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




const SITE_URL = "https://poidempozhrem.com"

export async function generateMetadata(): Promise<Metadata> {
  const { site } = await getSiteSettings()

  return {
    metadataBase: new URL(SITE_URL),
    title: `${site.name} — Ресторан на Фукуоке`,
    description:
      site.description ||
      "Ресторан на Фукуоке, где каждый день что-то происходит! Русская, кавказская, восточная, европейская, азиатская кухня. Кальяны, мероприятия, доставка.",
    openGraph: {
      title: `${site.name} — Ресторан на Фукуоке`,
      description:
        site.description ||
        "Ресторан на Фукуоке, где каждый день что-то происходит! Русская, кавказская, восточная, европейская, азиатская кухня. Кальяны, мероприятия, доставка.",
      type: "website",
      url: SITE_URL,
      siteName: site.name,
      locale: "ru_RU",
    },
    twitter: {
      card: "summary_large_image",
      title: `${site.name} — Ресторан на Фукуоке`,
      description: site.description,
    },
  }
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const { site, links, workingHours } = await getSiteSettings()

  const restaurantJsonLd = {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    name: site.name,
    description: site.description,
    url: SITE_URL,
    telephone: links.phone,
    address: {
      "@type": "PostalAddress",
      streetAddress: "97 Trần Hưng Đạo, 2 этаж (вход через Holiday Center)",
      addressLocality: "Duong Dong",
      addressRegion: "Phu Quoc",
      addressCountry: "VN",
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        opens: "00:00",
        closes: "23:59",
      },
    ],
    servesCuisine: site.cuisines,
    priceRange: "$$",
    sameAs: [
      links.telegram,
      links.whatsapp,
      links.instagram,
      links.facebook,
      links.youtube,
      links.zalo,
    ],
    hasMap: links.googleMaps,
  }

  return (
    <html
      lang="ru"
      suppressHydrationWarning
      className={`${oswald.variable} ${montserrat.variable}`}
    >
      <body className="min-h-screen flex flex-col bg-bg text-text-primary font-body antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(restaurantJsonLd).replace(/</g, "\\u003c"),
          }}
        />
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