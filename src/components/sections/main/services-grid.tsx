"use client"

import { ServiceCard } from "@/components/ui/service-card"
import { StaggerGrid, StaggerItem } from "@/components/ui/stagger-grid"
import { services } from "@/config/services"
import {
  UtensilsCrossed,
  CalendarClock,
  Phone,
  MapPin,
  PartyPopper,
  Percent,
  Cigarette,
  Truck,
  Camera,
  Banknote,
  MessageCircleQuestion,
  Building,
  Users,
  Globe,
  type LucideIcon,
} from "lucide-react"

const iconMap: Record<string, LucideIcon> = {
  "utensils-crossed": UtensilsCrossed,
  "calendar-clock": CalendarClock,
  "phone": Phone,
  "map-pin": MapPin,
  "party-popper": PartyPopper,
  "percent": Percent,
  "cigarette": Cigarette,
  "truck": Truck,
  "camera": Camera,
  "banknote": Banknote,
  "message-circle-question": MessageCircleQuestion,
  "building": Building,
  "users": Users,
  "globe": Globe,
}

export function ServicesGrid() {
  return (
    <section className="px-5 py-8">
      <div className="max-w-7xl mx-auto">
        <StaggerGrid className="grid grid-cols-1 sm:grid-cols-2 gap-3" staggerDelay={0.03}>
          {services.map((service) => {
            const Icon = iconMap[service.icon]
            return (
              <StaggerItem key={service.id}>
                <ServiceCard
                  icon={Icon}
                  title={service.title}
                  description={service.description}
                  href={service.href}
                />
              </StaggerItem>
            )
          })}
        </StaggerGrid>

      </div>
    </section>
  )
}
