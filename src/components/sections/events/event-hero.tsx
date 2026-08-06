import Image from "next/image"
import { Clock } from "lucide-react"
import type { EventItem } from "@/types"

interface EventHeroProps {
  event: Pick<EventItem, "dayOfWeek" | "time">
  titleLine1: string
  titleLine2?: string
  titleLine3?: string
  subtitle: string
}

export function EventHero({
  event,
  titleLine1,
  titleLine2,
  titleLine3,
  subtitle,
}: EventHeroProps) {
  return (
    <div
      className="relative flex items-center section-py min-h-[320px] max-md:min-h-[auto] min-[550px]:max-md:min-h-[250px]"
    >
      <div className="space-y-2.5 w-[40%] max-lg:w-[60%]">
        <div className="w-fit space-y-1 lg:space-y-2">
          <span className="block font-display font-extrabold uppercase tracking-wider text-accent text-xl lg:text-4xl">
            {event.dayOfWeek.toUpperCase()}
          </span>
          <div className="neon-card inline-flex w-fit items-center gap-2 rounded-full border border-border px-4 py-2 lg:px-6 lg:py-3">
            <Clock className="h-4 w-4 text-accent lg:h-5 lg:w-5" />
            <span className="font-display font-bold text-[10px] text-text-primary lg:text-base">
              {event.time}
            </span>
          </div>
        </div>
        <h1 className="text-8xl font-display font-bold uppercase tracking-tight text-text-primary mb-7 max-md:mb-0 max-lg:text-7xl max-md:text-5xl max-sm:text-5xl">
          {titleLine1}
          {titleLine2 ? <br /> : null}
          {titleLine2}
          {titleLine3 ? <br /> : null}
          {titleLine3}
        </h1>
        <p className="text-5xl text-accent font-display uppercase tracking-wider mb-5 max-md:mb-0 max-lg:text-3xl max-md:text-xl max-sm:text-lg">
          {subtitle}
        </p>
      </div>
      <div className="absolute left-0 right-0 top- h-[150%] rounded-card -z-10">
        <Image
          src="/images/events/monday-afterparty.png"
          alt=""
          fill
          className="lg:object-contain max-lg:object-cover"
        />
      </div>
    </div>
  )
}