import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Banknote } from "lucide-react"

export function CurrencyCta({ className }: { className?: string }) {
  return (
    <Card className={`p-6 text-center ${className ?? ""}`}>
      <Banknote className="w-12 h-12 mx-auto mb-4 text-accent"  strokeWidth={1.5} />
      <h2 className="text-xl font-display font-bold uppercase text-text-primary mb-3">
        Уточнить курс
      </h2>
      <p className="text-sm text-text-secondary mb-6">
        Свяжитесь с нами для получения актуального курса
      </p>
      <Button variant="solid" as="a" href="https://wa.me/84855559797">
        Узнать курс
      </Button>
    </Card>
  )
}
