import {
  HookahIcon,
  TobaccoJarIcon,
  CoalCubesIcon,
  DeliveryTruckIcon,
  ToolsIcon,
  ChatPersonIcon,
} from "@/components/sections/hookah-out/icons"

const items = [
  { icon: HookahIcon, label: "Кальян" },
  { icon: TobaccoJarIcon, label: "Премиальный табак" },
  { icon: CoalCubesIcon, label: "Уголь и розжиг" },
  { icon: DeliveryTruckIcon, label: "Доставка" },
  { icon: ToolsIcon, label: "Установка и сборка" },
  { icon: ChatPersonIcon, label: "Инструктаж и советы" },
]

// сколько колонок в сетке на каждом брейкпоинте — единственный источник правды,
// разделители считаются от этих же чисел, так что не могут разъехаться с раскладкой
const COLS = { base: 2, sm: 3, lg: 6 }

function dividerClass(index: number, total: number) {
  const showAt = (cols: number) => index % cols !== cols - 1 && index < total - 1

  const base = showAt(COLS.base)
  const sm = showAt(COLS.sm)
  const lg = showAt(COLS.lg)

  const classes = [base ? "block" : "hidden"]
  if (sm !== base) classes.push(sm ? "sm:block" : "sm:hidden")
  if (lg !== sm) classes.push(lg ? "lg:block" : "lg:hidden")
  return classes.join(" ")
}

export function HookahOutIncluded({ className }: { className?: string }) {
  return (
    <div className={className}>
      <h2 className="text-center font-display font-bold uppercase tracking-wide text-5xl max-xl:text-4xl max-sm:text-3xl text-[var(--color-text-primary)] mb-8">
        Что входит в услугу
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-y-10">
        {items.map(({ icon: Icon, label }, i) => (
          <div key={label} className="relative flex flex-col items-center gap-3 px-6 text-center max-sm:px-3">
            <Icon
              className="w-20 h-20 max-xl:w-16 max-xl:h-16 max-sm:w-14 max-sm:h-14 text-[var(--color-accent)]"
              strokeWidth={1.5}
            />
            <p className="text-2xl max-xl:text-xl max-sm:text-lg font-medium leading-tight">
              {label}
            </p>
            <div
              className={`absolute top-0 right-0 w-px h-full bg-[var(--color-border)] ${dividerClass(i, items.length)}`}
            />
          </div>
        ))}
      </div>
    </div>
  )
}