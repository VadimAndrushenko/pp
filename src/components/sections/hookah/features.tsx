import { Card } from "@/components/ui/card"
import { Gem, Leaf, Snowflake, Clock, RefreshCw, ShieldCheck, type LucideIcon } from "lucide-react"

interface Feature {
  icon: LucideIcon
  title: string
  description: string
}

const features: Feature[] = [
  { icon: Gem, title: "Премиальный табак", description: "Must Have, Darkside, Black Burn и другие" },
  { icon: Leaf, title: "Более 40 вкусов", description: "Классика и авторские миксы" },
  { icon: Snowflake, title: "Колба со льдом", description: "Прохладный дым и мягкая тяга" },
  { icon: Clock, title: "Готовность 5–7 минут", description: "Быстро и без долгого ожидания" },
  { icon: RefreshCw, title: "Замена в первые 3 минуты", description: "Если вкус не подошёл — бесплатно" },
  { icon: ShieldCheck, title: "Чистота и гигиена", description: "Одноразовые мундштуки, чистые принадлежности" },
]

export function HookahFeatures() {
  return (
    <section className="section-py">
      <h2 className="section-heading font-display font-bold uppercase tracking-tight text-text-primary mb-6 lg:mb-10 max-sm:mb-4">
        Почему у нас лучшие кальяны?
      </h2>
      <div className="grid grid-cols-3 lg:grid-cols-6 max-md:grid-cols-2 gap-3 lg:gap-4 max-sm:gap-2">
        {features.map((feature, i) => {
          const Icon = feature.icon
          return (
            <Card key={i} className="flex flex-col items-center text-center gap-2 lg:gap-3 p-4 lg:p-6 max-sm:gap-1 max-sm:p-3">
              <Icon className="w-16 h-16 max-sm:w-10 max-sm:h-10 text-accent"  strokeWidth={1.5} />
              <h3 className="text-2xl font-display uppercase text-text-primary leading-tight max-sm:text-base">{feature.title}</h3>
              <p className="text-lg text-text-secondary leading-tight max-sm:text-xs">{feature.description}</p>
            </Card>
          )
        })}
      </div>
    </section>
  )
}
