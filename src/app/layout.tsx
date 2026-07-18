import type { Metadata } from "next"
import { Oswald, Montserrat } from "next/font/google"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { MapCTA } from "@/components/ui/map-cta"
import { PageTransition } from "@/components/ui/page-transition"
import "./globals.css"

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

export const metadata: Metadata = {
  title: "POIDEM POZHREM! — Ресторан на Фукуоке",
  description:
    "Ресторан на Фукуоке, где каждый день что-то происходит! Русская, кавказская, восточная, европейская, азиатская кухня. Кальяны, мероприятия, доставка.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="ru"
      suppressHydrationWarning
      className={`${oswald.variable} ${montserrat.variable}`}
    >
      <body className="min-h-screen flex flex-col bg-[var(--color-bg)] text-[var(--color-text-primary)] font-body antialiased">
        <Header />
        <main className="flex-1">
          <PageTransition>{children}</PageTransition>
        </main>
        <MapCTA />
        <Footer />
      </body>
    </html>
  )
}
