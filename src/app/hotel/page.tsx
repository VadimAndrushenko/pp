import { Breadcrumb } from "@/components/layout/breadcrumb"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Building, Wifi, Coffee, Wind, Tv, Snowflake } from "lucide-react"

export default function HotelPage() {
  return (
    <div className="px-5 py-6">
      <div className="max-w-7xl mx-auto">
        <Breadcrumb />
        <h1 className="text-3xl md:text-4xl font-display font-bold uppercase tracking-tight text-[var(--color-text-primary)] mb-2">
          Отель
        </h1>
        <p className="text-sm font-display uppercase tracking-wider mb-2" style={{ color: "var(--color-accent)" }}>
          Комфортное проживание на Фукуоке
        </p>
        <p className="text-sm text-[var(--color-text-secondary)] mb-8">
          Уютные номера рядом с рестораном. Идеальное место для отдыха.
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-8">
          {[
            { icon: Wifi, title: "Wi-Fi" },
            { icon: Coffee, title: "Завтрак" },
            { icon: Wind, title: "Кондиционер" },
            { icon: Tv, title: "Телевизор" },
            { icon: Snowflake, title: "Холодильник" },
            { icon: Building, title: "Сейф" },
          ].map((item, i) => {
            const Icon = item.icon
            return (
              <Card key={i} className="flex flex-col items-center gap-2 p-4 text-center">
                <Icon className="w-6 h-6" style={{ color: "var(--color-accent)" }} strokeWidth={1.5} />
                <span className="text-xs font-display uppercase text-[var(--color-text-primary)]">{item.title}</span>
              </Card>
            )
          })}
        </div>

        <Button variant="solid" size="full" as="a" href="https://wa.me/84855559797">
          Забронировать номер
        </Button>
      </div>
    </div>
  )
}
