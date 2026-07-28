import { Card } from "@/components/ui/card"
import { Send } from "lucide-react"

export function SocialCta({ className }: { className?: string }) {
  return (
    <Card className={`p-5 text-center ${className ?? ""}`}>
      <p className="text-sm text-[var(--color-text-secondary)] mb-4">
        Хочешь оставить своё фото или видео? Отмечай нас в соцсетях или отправляй в директ!
      </p>
      <div className="flex justify-center gap-3">
        <a
          href="https://instagram.com/poidem_pozhrem"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-4 py-2 rounded-[var(--radius-sm)] text-xs font-display uppercase"
          style={{ borderColor: "var(--color-border)", border: "1px solid", color: "var(--color-text-secondary)" }}
        >
          <span className="w-4 h-4 flex items-center justify-center text-xs" style={{ color: "var(--color-accent)" }}>📷</span>
          Instagram
        </a>
        <a
          href="https://t.me/poidem_pozhrem"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-4 py-2 rounded-[var(--radius-sm)] text-xs font-display uppercase"
          style={{ borderColor: "var(--color-border)", border: "1px solid", color: "var(--color-text-secondary)" }}
        >
          <Send className="w-4 h-4" style={{ color: "var(--color-telegram)" }} />
          Telegram
        </a>
      </div>
    </Card>
  )
}
