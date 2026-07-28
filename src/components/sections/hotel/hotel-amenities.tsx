import { Card } from "@/components/ui/card"
import { Building, Wifi, Coffee, Wind, Tv, Snowflake } from "lucide-react"

const amenities = [
  { icon: Wifi, title: "Wi-Fi" },
  { icon: Coffee, title: "Завтрак" },
  { icon: Wind, title: "Кондиционер" },
  { icon: Tv, title: "Телевизор" },
  { icon: Snowflake, title: "Холодильник" },
  { icon: Building, title: "Сейф" },
]

export function HotelAmenities({ className }: { className?: string }) {
  return (
    <div className={`grid grid-cols-2 sm:grid-cols-3 gap-3 ${className ?? ""}`}>
      {amenities.map((item, i) => {
        const Icon = item.icon
        return (
          <Card key={i} className="flex flex-col items-center gap-2 p-4 text-center">
            <Icon className="w-6 h-6" style={{ color: "var(--color-accent)" }} strokeWidth={1.5} />
            <span className="text-xs font-display uppercase text-[var(--color-text-primary)]">{item.title}</span>
          </Card>
        )
      })}
    </div>
  )
}
