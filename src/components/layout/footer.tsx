
import { site } from "@/config/site"
import { Heart } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t py-8 container mx-auto max-w-7xl px-3 sm:px-4 flex flex-col items-center gap-6 text-center" style={{ borderColor: "var(--color-border)" }}>
      <p className="text-sm text-[var(--color-text-secondary)] font-display tracking-wider flex items-center gap-2">
        <Heart className="w-4 h-4 hover-glow-accent" style={{ color: "var(--color-accent)" }} fill="var(--color-accent)" />
        {site.footerHeart}
      </p>
    </footer>
  )
}
