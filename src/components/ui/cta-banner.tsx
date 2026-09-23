import Link from "next/link"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { cn } from "@/components/lib/utils"
import { Info, Send, MessageCircle } from "lucide-react"

export function CTABanner() {
  return (
    <div className="section-py">
      <Card
        className="relative overflow-hidden flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6 p-4 sm:p-8 border-2 border-accent"
        style={{
          boxShadow:
            "0 0 45px color-mix(in srgb, var(--color-accent) 18%, transparent), inset 0 0 45px color-mix(in srgb, var(--color-accent) 4%, transparent)",
          background:
            "linear-gradient(135deg, color-mix(in srgb, var(--color-accent) 6%, transparent) 0%, transparent 50%)",
        }}
      >
        <div
          className="absolute -top-1/3 -right-1/4 w-80 h-80 rounded-full blur-3xl opacity-20 pointer-events-none bg-accent"
        />
        <div
          className="absolute -bottom-1/3 -left-1/4 w-80 h-80 rounded-full blur-3xl opacity-10 pointer-events-none bg-accent"
        />
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full rounded-full blur-3xl opacity-[0.06] pointer-events-none bg-accent"
        />

        <div className="relative flex items-center gap-4 flex-1 z-10">
          <div
            className="flex items-center justify-center w-12 h-12 rounded-full shrink-0 shadow-[0_0_20px_color-mix(in_srgb,var(--color-accent)_40%,transparent)] bg-accent"
          >
            <Info className="w-6 h-6 text-white" strokeWidth={2} />
          </div>
          <p className="text-sm sm:text-base lg:text-lg font-semibold text-text-primary drop-shadow-lg">
            Бронируй выездной кальян прямо сейчас — <span className="text-accent">доставим за 30 минут</span>
          </p>
        </div>

        <div className="hidden sm:block w-px self-stretch bg-accent/30" />

        <div className="relative flex items-center gap-4 sm:gap-6 z-10">
          <div className="flex items-center gap-3">
            <Link
              href="https://t.me/poidem_pozhrem"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-12 h-12 rounded-full shrink-0 shadow-[0_0_20px_rgba(0,136,204,0.4)] transition-all duration-300 hover:scale-125 hover:shadow-[0_0_30px_rgba(0,136,204,0.6)] bg-telegram"
            >
              <Send className="w-5 h-5 text-white" />
            </Link>
            <Link
              href="https://wa.me/84855559797"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-12 h-12 rounded-full shrink-0 shadow-[0_0_20px_rgba(37,211,102,0.4)] transition-all duration-300 hover:scale-125 hover:shadow-[0_0_30px_rgba(37,211,102,0.6)] bg-whatsapp"
            >
              <MessageCircle className="w-5 h-5 text-white" />
            </Link>
          </div>

          <Button
            variant="solid"
            className="rounded-full px-10 py-4 shrink-0 whitespace-nowrap text-base font-bold tracking-wider uppercase shadow-[0_0_30px_color-mix(in_srgb,var(--color-accent)_50%,transparent)] transition-all duration-300 hover:scale-110 hover:shadow-[0_0_50px_color-mix(in_srgb,var(--color-accent)_70%,transparent)] animate-pulse hover:animate-none max-sm:px-8"
          >
            Заказать
          </Button>
        </div>
      </Card>
    </div>
  )
}
