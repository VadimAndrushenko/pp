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
      {/* Верхняя градиентная неон-линия — не трогали */}
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent to-transparent"
        style={{
          boxShadow: "0 0 12px color-mix(in srgb, var(--color-accent) 60%, transparent)",
        }}
      />

      <div className="container pb-10 pt-12 lg:pt-14">
        {/* ─────────── Блок A — Action Bar ─────────── */}
        <div
          className="flex flex-col gap-4 sm:flex-row sm:items-stretch"
          data-testid="footer-action-bar"
        >
          <div className="sm:shrink-0">
            <FooterSocials links={links} variant="pill" />
          </div>

          <BookingButton
            href={links.whatsapp}
            label="Забронировать столик"
            icon={<Calendar className="h-6 w-6 shrink-0" strokeWidth={2} />}
            size="lg"
            className="w-full sm:flex-1 justify-center text-lg lg:text-xl py-5"
          />
        </div>

        {/* ─────────── Блок B — Quick Nav Grid ─────────── */}
        <div className="mt-8 lg:mt-10">
          <FooterQuickGrid />
        </div>

        {/* ─────────── Блок C — Info Strip ─────────── */}
        <div
          className="mt-10 lg:mt-12 grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-0 lg:divide-x lg:divide-border"
          data-testid="footer-info-strip"
        >
          {/* Колонка 1 — Лого */}
          <div className="flex flex-col items-start gap-2 lg:pr-8">
            <Link
              href="/"
              aria-label="POIDEM POZHREM — на главную"
              className="hover-glow-accent inline-flex"
            >
              <Image
                src="/logo.png"
                alt="POIDEM POZHREM — ресторан, бар, караоке, клуб"
                width={260}
                height={110}
                className="h-20 lg:h-24 w-auto object-contain"
                priority={false}
              />
            </Link>
            <p className="text-[11px] font-display tracking-[0.25em] uppercase text-text-muted">
              Restaurant · Bar · Karaoke · Club
            </p>
          </div>

          {/* Колонка 2 — Телефон + часы */}
          <address className="not-italic flex flex-col justify-center gap-4 border-t border-border pt-6 lg:border-t-0 lg:pt-0 lg:px-8">
            <a
              href={links.phoneHref}
              className="link-accent flex items-center gap-3 text-xl font-semibold text-text-primary"
              data-testid="footer-phone"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-full border border-accent/40 text-accent">
                <Phone className="h-5 w-5" strokeWidth={2} />
              </span>
              <span>{links.phone}</span>
            </a>

            <div className="flex items-center gap-3 text-base text-text-secondary">
              <span className="flex h-10 w-10 items-center justify-center rounded-full border border-accent/40 text-accent">
                <Clock className="h-5 w-5" strokeWidth={2} />
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
            className="link-accent flex items-start gap-3 border-t border-border pt-6 lg:border-t-0 lg:pt-0 lg:pl-8 text-base leading-relaxed text-text-secondary"
            data-testid="footer-address"
          >
            <span className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-accent/40 text-accent">
              <MapPin className="h-5 w-5" strokeWidth={2} />
            </span>
            <span>{links.addressFull}</span>
          </a>
        </div>

        {/* ─────────── Блок D — Copyright bar ─────────── */}
        <div
          className="mt-10 lg:mt-12 flex items-center gap-6"
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
