import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { PartyPopper } from "lucide-react"

export function BanquetCta() {
  return (
    <Card className="p-6 text-center mb-8">
      <PartyPopper className="w-12 h-12 mx-auto mb-4" style={{ color: "var(--color-accent)" }} strokeWidth={1.5} />
      <h2 className="text-xl font-display font-bold uppercase text-[var(--color-text-primary)] mb-3">
        Заказать банкет
      </h2>
      <p className="text-sm text-[var(--color-text-secondary)] mb-6">
        Свяжитесь с нами для обсуждения деталей
      </p>
      <Button variant="solid" size="lg" as="a" href="https://wa.me/84855559797">
        Связаться
      </Button>
    </Card>
  )
}
