
import { site } from "@/config/site"
import { Heart } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t py-8 px-5" style={{ borderColor: "var(--color-border)" }}>
      <div className="max-w-7xl mx-auto flex flex-col items-center gap-6 text-center">
        <p className="text-sm text-[var(--color-text-secondary)] font-display tracking-wider flex items-center gap-2">
          <Heart className="w-4 h-4 hover-glow-accent" style={{ color: "var(--color-accent)" }} fill="var(--color-accent)" />
          {site.footerHeart}
        </p>
      </div>
    </footer>
  )
}
