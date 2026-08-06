import { EVENT_ICONS } from "./event-icons"

interface EventInfoProps {
  time: string
  dayOfWeek: string
}

export function EventInfo({ time, dayOfWeek }: EventInfoProps) {
  const items = [
    { icon: "Clock", label: "СТАРТ", value: time },
    { icon: "Calendar", label: "ДЕНЬ", value: dayOfWeek.toUpperCase() },
    { icon: "MapPin", label: "МЕСТО", value: "POIDEM POZHREM" },
    { icon: "ShieldCheck", label: "ВОЗРАСТ", value: "18+" },
  ]

  return (
    <div className="section-py">
      <div className="neon-card grid grid-cols-2 gap-y-4 rounded-card border border-border py-5 sm:grid-cols-4 lg:py-8">
      {items.map((item, i) => {
        const Icon = EVENT_ICONS[item.icon]
        return (
          <div
            key={item.label}
            className={`flex flex-col items-center gap-1 px-2 text-center lg:gap-2 ${
              i % 2 === 1 ? "border-l border-border" : ""
            } ${i >= 2 ? "border-t border-border sm:border-t-0 pt-2 " : ""} ${
              i > 0 ? "sm:border-l sm:border-border" : ""
            }`}
          >
            <Icon className="h-5 w-5 text-accent lg:h-8 lg:w-8" strokeWidth={1.5} />
            <span className="text-[10px] uppercase tracking-wide text-text-secondary lg:text-sm">
              {item.label}
            </span>
            <span className="font-display font-bold text-xs uppercase text-text-primary lg:text-xl">
              {item.value}
            </span>
          </div>
        )
      })}
      </div>
    </div>
  )
}