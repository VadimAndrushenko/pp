import { PromoBanner } from "@/components/ui/promo-banner"

export function PromotionsBanner({ className }: { className?: string }) {
  return (
    <PromoBanner
      title="VIP CLUB"
      description="Вступай в наш VIP CLUB и получай до 50% кешбэк!"
      href="/vip"
      className={className}
    />
  )
}
