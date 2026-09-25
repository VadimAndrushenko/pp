import { links as linksFallback } from "@/config/links"
import type { SiteSettings } from "@/lib/transformData"
import {
  InstagramIcon,
  YoutubeIcon,
  TikTokIcon,

} from "@/components/ui/social-icons"
import type { CSSProperties } from "react"

interface FooterSocialsProps {
  links?: SiteSettings["links"]
  /** Обёртка с рамкой и фоном под соцсети (Блок A из ТЗ футера) */
  variant?: "plain" | "pill"
}

export function FooterSocials({
  links = linksFallback,
  variant = "plain",
}: FooterSocialsProps) {
  const SOCIALS = [
    { icon: InstagramIcon, label: "Instagram", href: links.instagram, color: "#E4405F" },
    { icon: YoutubeIcon, label: "YouTube", href: links.youtube, color: "#FF0000" },
    { icon: TikTokIcon, label: "TikTok", href: links.tiktok, color: "#00F2EA" },
    {
      icon: TikTokIcon,
      label: "Telegram",
      href: links.telegram,
      color: "var(--color-telegram)",
    },
  ] as const

  const wrapperClass =
    variant === "pill"
      ? "flex flex-wrap items-center justify-center gap-4 rounded-card border border-border bg-transparent px-6 py-4"
      : "flex flex-wrap items-center gap-3"

  return (
    <div className={wrapperClass} data-testid="footer-socials">
      {SOCIALS.map((s) => {
        const Icon = s.icon
        return (
          <a
            key={s.label}
            href={s.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={s.label}
            data-testid={`footer-social-${s.label.toLowerCase()}`}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-border bg-surface text-text-secondary transition-all duration-300 hover:-translate-y-1 hover:border-(--brand) hover:text-(--brand) hover:shadow-brand focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
            style={{ "--brand": s.color } as CSSProperties}
          >
            <Icon className="h-5 w-5" />
          </a>
        )
      })}
    </div>
  )
}
