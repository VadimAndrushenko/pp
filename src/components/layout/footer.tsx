import Image from "next/image"
import Link from "next/link"
import { Calendar, Clock, MapPin, Phone } from "lucide-react"

import { site as siteFallback } from "@/config/site"
import { links as linksFallback, workingHours as workingHoursFallback } from "@/config/links"
import type { SiteSettings } from "@/lib/transformData"

import { FooterSocials } from "@/components/layout/footer-socials"

import { BookingButton } from "@/components/ui/booking-button"
import { FooterQuickGrid } from "./footer-quick-grid"

interface FooterProps {
  site?: SiteSettings["site"]
  links?: SiteSettings["links"]
  workingHours?: SiteSettings["workingHours"]
}

export function Footer({
  site: _site = siteFallback,
  links = linksFallback,
  workingHours = workingHoursFallback,
}: FooterProps) {
  return (
    <footer
      className="relative border-t border-border"
      data-testid="site-footer"
    >
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent to-transparent"
        style={{
          boxShadow: "0 0 12px color-mix(in srgb, var(--color-accent) 60%, transparent)",
        }}
      />

      <div className="container pb-4 pt-5 sm:pb-10 sm:pt-12 lg:pt-14">
        {/* ─────────── Блок A — Action Bar ─────────── */}
        <div
          className="flex gap-4 max-sm:flex-col sm:items-stretch"
          data-testid="footer-action-bar"
        >
          <div className="sm:shrink-0">
            <FooterSocials links={links} />
          </div>

          <BookingButton
            href={links.bookingForm || links.whatsapp}
            label="Забронировать столик"
            icon={<Calendar className="h-6 w-6 shrink-0" strokeWidth={2} />}
            size="lg"
            className="w-full flex-1 justify-center max-lg:text-lg text-xl py-5 max-sm:py-2.5 max-sm:text-xs "
          />
        </div>

        {/* ─────────── Блок B — Quick Nav Grid ─────────── */}
        <div className="mt-4 sm:mt-8 lg:mt-10">
          <FooterQuickGrid links={links} />
        </div>

        {/* ─────────── Блок C — Info Strip ─────────── */}
        <div
          className="mt-6 sm:mt-8 lg:mt-12 grid grid-cols-1 gap-6 sm:grid-cols-3 sm:gap-0 sm:divide-x sm:divide-border"
          data-testid="footer-info-strip"
        >
          {/* Колонка 1 — Лого */}
          <div className="flex min-w-0 items-center sm:justify-center gap-2 lg:pr-8 max-sm:items-start">
            <Link
              href="/"
              aria-label="POIDEM POZHREM — на главную"
              className="hover-glow-accent inline-flex max-w-full"
            >
              <Image
                src="/logo.png"
                alt="POIDEM POZHREM — ресторан, бар, караоке, клуб"
                width={260}
                height={110}
                className="h-auto w-40 max-w-full object-contain sm:w-36 md:w-40 lg:h-24 lg:w-auto max-sm:w-40"
                priority={false}
              />
            </Link>
          </div>

          {/* Колонка 2 — Телефон + часы */}
          <address className="not-italic flex min-w-0 flex-col justify-center gap-4 border-t border-border pt-6 sm:gap-2 sm:border-t-0 sm:px-4 sm:pt-0 lg:px-8">
            <a
              href={links.phoneHref}
              className="link-accent flex items-center gap-2 text-lg font-semibold text-text-primary sm:gap-2 sm:text-sm lg:gap-3 lg:text-xl"
              data-testid="footer-phone"
            >
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-accent/40 text-accent sm:h-8 sm:w-8 lg:h-10 lg:w-10">
                <Phone className="h-4 w-4 sm:h-4 sm:w-4 lg:h-5 lg:w-5" strokeWidth={2} />
              </span>
              <span>{links.phone}</span>
            </a>

            <div className="flex items-center gap-2 text-sm text-text-secondary sm:text-xs lg:gap-3 lg:text-base">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-accent/40 text-accent sm:h-8 sm:w-8 lg:h-10 lg:w-10">
                <Clock className="h-4 w-4 sm:h-4 sm:w-4 lg:h-5 lg:w-5" strokeWidth={2} />
              </span>
              <span>
                {workingHours.daily.label}:{" "}
                <span className="font-semibold text-accent">
                  {workingHours.daily.hours}
                </span>
              </span>
            </div>
          </address>

          {/* Колонка 3 — Адрес */}
          <a
            href={links.googleMaps}
            target="_blank"
            rel="noopener noreferrer"
            className="link-accent flex min-w-0 items-start gap-2 border-t border-border pt-6 text-sm leading-relaxed text-text-secondary sm:border-t-0 sm:gap-2 sm:px-4 sm:pt-0 sm:text-xs lg:gap-3 lg:pl-8 lg:text-base"
            data-testid="footer-address"
          >
            <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-accent/40 text-accent sm:h-8 sm:w-8 lg:h-10 lg:w-10">
              <MapPin className="h-4 w-4 sm:h-4 sm:w-4 lg:h-5 lg:w-5" strokeWidth={2} />
            </span>
            <span className="max-w-full break-words">{links.addressFull}</span>
          </a>
        </div>

        {/* ─────────── Блок D — Copyright bar ─────────── */}
        <div
          className="mt-6 flex items-center gap-6 sm:mt-10 lg:mt-12"
          data-testid="footer-copyright"
        >
          <span className="h-px flex-1 bg-gradient-to-r from-transparent to-border" />
          <p className="shrink-0 text-xs sm:text-sm tracking-[0.2em] uppercase text-text-muted">
            © {new Date().getFullYear()} POIDEM POZHREM
          </p>
          <span className="h-px flex-1 bg-gradient-to-l from-transparent to-border" />
        </div>
      </div>
    </footer>
  )
}
