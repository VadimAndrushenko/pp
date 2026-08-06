import Image from "next/image"
import Link from "next/link"
import { Heart, MessageCircle } from "lucide-react"
import { site } from "@/config/site"
import { links } from "@/config/links"
import { FooterNav } from "@/components/layout/footer-nav"
import { FooterContacts } from "@/components/layout/footer-contacts"
import { FooterSocials } from "@/components/layout/footer-socials"
import { BookingButton } from "@/components/ui/booking-button"

const NAV_LINKS = [
  { label: "Меню", href: "/menu" },
  { label: "Доставка", href: "/delivery" },
  { label: "Кальяны", href: "/hookah" },
  { label: "Выездной кальян", href: "/hookah/out" },
  { label: "Банкеты", href: "/banquet" },
  { label: "Акции", href: "/promotions" },
] as const

const SERVICE_LINKS = [
  { label: "Фото и видео", href: "/gallery" },
  { label: "VIP Club", href: "/vip" },
  { label: "Отель", href: "/hotel" },
  { label: "Сообщество", href: "/community" },
  { label: "Обмен рублей", href: "/currency" },
  { label: "Инфо-Фукуок", href: "/island-info" },
] as const

export function Footer() {
  return (
    <footer className="relative border-t border-border">
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent to-transparent"
        style={{
          boxShadow: "0 0 12px rgba(255, 106, 0, 0.6)",
        }}
      />
      <div className="container pb-10 pt-14">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5">
          <div className="flex flex-col gap-6 sm:col-span-2 lg:col-span-1 xl:col-span-2">
            <Link href="/" aria-label="POIDEM POZHREM — на главную" className="hover-glow-accent inline-flex self-start">
              <Image
                src="/logo.png"
                alt="POIDEM POZHREM"
                width={200}
                height={70}
                className="h-12 w-auto object-contain"
              />
            </Link>
            <p className="flex items-start gap-2 text-sm leading-relaxed text-text-secondary">
              <Heart
                className="mt-1 h-4 w-4 shrink-0 text-accent"
                fill="currentColor"
              />
              {site.footerHeart}
            </p>
            <FooterSocials />
            <BookingButton
              href={links.whatsapp}
              label="Забронировать столик"
              icon={<MessageCircle className="h-4 w-4" />}
              size="md"
              className="w-fit"
            />
          </div>

          <nav
            aria-label="Навигация в подвале"
            className="grid grid-cols-1 gap-10 sm:grid-cols-2 sm:col-span-2 lg:col-span-2"
          >
            <FooterNav title="Навигация" links={NAV_LINKS} />
            <FooterNav title="Развлечения и услуги" links={SERVICE_LINKS} />
          </nav>

          <div className="sm:col-span-2 lg:col-span-1">
            <FooterContacts />
          </div>
        </div>

        <div
          className="mt-14 flex flex-col items-center gap-4 border-t border-border pt-6 sm:flex-row sm:justify-between"
        >
          <p className="text-xs text-text-muted">
            © {new Date().getFullYear()} POIDEM POZHREM!
          </p>
          <div className="flex items-center gap-6 text-xs">
            <Link href="/contacts" className="link-accent text-text-secondary">
              Контакты
            </Link>
            <span className="text-text-muted">Все права защищены</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
