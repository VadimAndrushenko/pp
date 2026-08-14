import { Star } from "lucide-react"
import { cn } from "@/components/lib/utils"

export function StarDivider({ className }: { className?: string }) {
  return (
    <div className={cn("flex items-center gap-3", className)}>
      <span className="flex-1 h-[1px] xl:h-[3px] bg-accent/60" />
      <Star className="w-4 h-4 text-accent fill-accent shrink-0" />
      <span className="flex-1 h-[1px] xl:h-[3px] bg-accent/60" />
    </div>
  )
}