import { Card } from "@/components/ui/card"
import { Send } from "lucide-react"
import { getSiteSettings } from "@/lib/data/settings"

export async function SocialCta({ className }: { className?: string }) {
  const { links } = await getSiteSettings()
  return (
    <Card className={`p-5 text-center ${className ?? ""}`}>
      <p className="text-sm text-text-secondary mb-4">
        Хочешь оставить своё фото или видео? Отмечай нас в соцсетях или отправляй в директ!
      </p>
      <div className="flex justify-center gap-3">
        <a
          href={links.instagram}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-4 py-2 rounded-sm text-xs font-display uppercase border border-border text-text-secondary"
        >
          <span className="w-4 h-4 flex items-center justify-center text-xs text-accent">📷</span>
          Instagram
        </a>
        <a
          href={links.telegram}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-4 py-2 rounded-sm text-xs font-display uppercase border border-border text-text-secondary"
        >
          <Send className="w-4 h-4 text-telegram"  />
          Telegram
        </a>
      </div>
    </Card>
  )
}
