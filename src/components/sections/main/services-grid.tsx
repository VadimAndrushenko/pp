"use client"

import { ServiceCard } from "@/components/ui/service-card"
import { StaggerGrid, StaggerItem } from "@/components/ui/stagger-grid"
import { services as servicesFallback } from "@/config/services"
import type { ServiceItem } from "@/types"

interface ServicesGridProps {
  services?: ServiceItem[]
  title?: string
}

export function ServicesGrid({ services = servicesFallback, title }: ServicesGridProps) {
  return (
    <section className="section-py">
      {title && (
        <div className="flex items-center justify-between mb-8">
          <h2 className="section-heading font-display font-bold uppercase tracking-tight text-text-primary">
            {title}
          </h2>
          <a href="/services" className="text-sm uppercase tracking-wider link-underline text-accent shrink-0">
            Все услуги
          </a>
        </div>
      )}
      <StaggerGrid className="grid grid-cols-1 sm:grid-cols-2 gap-3" staggerDelay={0.03}>
          {services.map((service) => (
              <StaggerItem key={service.id}>
                <ServiceCard
                  icon={service.icon}
                  title={service.title}
                  description={service.description}
                  href={service.href}
                />
              </StaggerItem>
            ))}
        </StaggerGrid>
    </section>
  )
}