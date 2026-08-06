import { links } from "@/config/links"
import { InstagramIcon, YoutubeIcon, TikTokIcon } from "@/components/ui/social-icons"
import type { CSSProperties } from "react"

const SOCIALS = [
  { icon: InstagramIcon, label: "Instagram", href: links.instagram, color: "#E4405F" },
  { icon: YoutubeIcon, label: "YouTube", href: links.youtube, color: "#FF0000" },
  { icon: TikTokIcon, label: "TikTok", href: links.tiktok, color: "#00F2EA" },
] as const

export function FooterSocials() {
  return (
    <div className="flex flex-wrap items-center gap-3">
      {SOCIALS.map((s) => {
        const Icon = s.icon
        return (
          <a
            key={s.label}
            href={s.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={s.label}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-surface text-text-secondary transition-all duration-300 hover:-translate-y-1 hover:border-(--brand) hover:text-(--brand) hover:shadow-brand"
            style={{ "--brand": s.color } as CSSProperties}
          >
            <Icon className="h-[18px] w-[18px]" />
          </a>
        )
      })}
    </div>
  )
}
