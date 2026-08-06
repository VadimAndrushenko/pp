import { EVENT_ICONS } from "./event-icons"

interface EventProgramProps {
  heading: string
  features: Array<{ icon: string; title: string; desc: string }>
}

export function EventProgram({ heading, features }: EventProgramProps) {
  return (
    <div className="section-py">
      <h3 className="mb-6 max-lg:mb-4 font-display font-bold uppercase text-4xl tracking-wide text-text-primary">
        {heading}
      </h3>
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5 lg:gap-5">
        {features.map((f) => {
          const Icon = EVENT_ICONS[f.icon]
          return (
            <div
              key={f.title}
              className="hover-lift neon-card flex flex-col items-center gap-2 rounded-card border border-border p-4 text-center lg:gap-4 lg:p-8"
            >
              <Icon className="h-12 w-12 max-lg:h-8 max-lg:w-8 text-accent" strokeWidth={1.5} />
              <span className="font-display font-bold uppercase text-lg max-lg:text-sm leading-tight text-text-primary">
                {f.title}
              </span>
              <span className="text-base max-lg:text-xs leading-snug text-text-secondary">
                {f.desc}
              </span>
            </div>
          )
        })}
      </div>
    </div>
  )
}