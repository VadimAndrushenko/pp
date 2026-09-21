import type { QuickNavItemData } from "@/lib/transformData/homeContentTransform"
import { AppIcon } from "@/components/ui/app-icon"
import { StaggerGrid, StaggerItem } from "@/components/ui/stagger-grid"

interface QuickNavProps {
  items: QuickNavItemData[]
}

export function QuickNav({ items }: QuickNavProps) {
  return (
    <StaggerGrid className="grid grid-cols-2 lg:grid-cols-4 gap-4" staggerDelay={0.08}>
      {items.map((item) => (
        <StaggerItem key={item.href + item.label} className="h-full">
          <a
            href={item.href}
            className="
              group flex flex-col items-center justify-center gap-4 p-5 h-full rounded-card border 
              border-border bg-transparent transition-all duration-300 hover:-translate-y-2 
              hover:shadow-[0_0_40px_rgba(255,106,0,0.18)] hover:border-accent hover:bg-surface/50 
              focus-visible:ring-2 focus-visible:ring-accent
              
              max-sm:p-3 max-sm:gap-2 
              "
          >
            <AppIcon
              name={item.icon}
              className="
                w-12 h-12 text-accent transition-all duration-300 group-hover:scale-125 
                group-hover:drop-shadow-[0_0_10px_rgba(255,106,0,0.5)] 
                
                max-sm:w-10 max-sm:h-10
              "
              strokeWidth={1.5}
            />
            <span
              className="
                text-xl font-display font-bold uppercase tracking-wide text-text-primary 
                text-center leading-tight transition-colors duration-200 group-hover:text-accent
                max-md:text-lg max-sm:text-base 
              "
            >
              {item.label}
            </span>
            <span
              className="
                text-sm uppercase tracking-wide leading-snug text-text-muted text-center 
                transition-colors duration-200 group-hover:text-text-secondary 

                max-md:text-xs max-sm:text-[10px]
              "
            >
              {item.desc}
            </span>
          </a>
        </StaggerItem>
      ))}
    </StaggerGrid>
  )
}