import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Crown } from "lucide-react"

export function VipCard({ className }: { className?: string }) {
  return (
    <Card className={`p-6 text-center ${className ?? ""}`}>
      <Crown className="w-12 h-12 mx-auto mb-4 text-accent"  strokeWidth={1.5} />
      <h2 className="text-xl font-display font-bold uppercase text-text-primary mb-3">
        Оформить карту VIP
      </h2>
      <p className="text-sm text-text-secondary mb-6">
        Свяжитесь с нами для получения персональной VIP-карты
      </p>
      <div className="flex flex-col sm:flex-row gap-3 justify-center">
        <Button variant="solid" size="lg" as="a" href="https://wa.me/84855559797">
          WhatsApp
        </Button>
        <Button variant="outline" size="lg" as="a" href="https://t.me/poidem_pozhrem">
          Telegram
        </Button>
      </div>
    </Card>
  )
}
