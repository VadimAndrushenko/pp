import { Card } from "@/components/ui/card"

const zones = [
  {
    key: "center",
    title: "Центр (Дуонг Донг)",
    price: "50.000 – 90.000",
    time: "≈ 45–60 мин",
  },
  {
    key: "north",
    title: "Север острова",
    price: "150.000",
    time: "≈ 90–120 мин",
  },
  {
    key: "south",
    title: "Юг острова",
    price: "150.000",
    time: "≈ 90–120 мин",
  },
] as const

function PinShape({ opacity = 1 }: { opacity?: number }) {
  return (
    <>
      <path
        d="M9 11a3 3 0 1 0 6 0a3 3 0 0 0 -6 0"
        className="stroke-accent"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity={opacity}
      />
      <path
        d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0"
        className="stroke-accent"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity={opacity}
      />
    </>
  )
}

function RouteIcon() {
  return (
    <svg viewBox="0 0 160 160" className="h-28 w-28 sm:h-32 sm:w-32" fill="none">
      {/* пунктирный маршрут между точками */}
      <path
        d="M44 146c48-4 -6-30 26-46 32-16 -18-34 8-56 10-9 16-13 20-16"
        className="stroke-accent"
        strokeWidth="2.5"
        strokeDasharray="1 9"
        strokeLinecap="round"
        fill="none"
        opacity="0.9"
      />

      {/* большой пин, ближняя точка */}
      <g transform="translate(6 108) scale(2.05)">
        <PinShape />
      </g>

      {/* маленький пин, дальняя точка */}
      <g transform="translate(88 14) scale(1.35)">
        <PinShape />
      </g>
    </svg>
  )
}

export function DeliveryZones() {
  return (
    <section className="section-py">
      <Card
        className="neon-card flex flex-col sm:flex-row items-center sm:items-start gap-6 sm:gap-10 rounded-card px-6 py-8 sm:px-10 sm:py-9 border-[1.5px] border-solid border-accent"
      >
        <div className="flex shrink-0 items-center justify-center">
          <RouteIcon />
        </div>

        <div className="w-full flex-1">
          <h2
            className="section-heading mb-6 text-center font-display font-bold uppercase tracking-tight sm:text-left text-accent"
          >
            Зоны доставки и стоимость
          </h2>

          <div className="grid grid-cols-1 divide-y divide-white/10 text-center sm:grid-cols-3 sm:divide-x sm:divide-y-0 sm:text-left">
            {zones.map((z, i) => (
              <div
                key={z.key}
                className={`py-4 sm:py-0 ${i > 0 ? "sm:pl-8" : ""} ${
                  i < zones.length - 1 ? "sm:pr-8" : ""
                }`}
              >
                <h3 className="mb-2 font-display text-base font-bold uppercase tracking-wide text-text-primary sm:text-lg">
                  {z.title}
                </h3>
                <p className="mb-1 text-xl font-semibold text-text-primary sm:text-2xl">
                  {z.price} <span className="text-success">đ</span>
                </p>
                <p className="text-sm text-text-secondary">{z.time}</p>
              </div>
            ))}
          </div>
        </div>
      </Card>
    </section>
  )
}