import { Button } from "@/components/ui/button"
import { links } from "@/config/links"
import { Phone } from "lucide-react"
import type { ReactNode } from "react"

interface BookingButtonProps {
  href?: string
  label?: string
  icon?: ReactNode
  size?: "sm" | "md" | "lg" | "full"
  className?: string
}

export function BookingButton({
  href = links.whatsapp,
  label = "Забронировать стол",
  icon = <Phone className="h-8 w-8 max-sm:h-6 max-sm:w-6" />,
  size = "full",
  className,
}: BookingButtonProps) {
  return (
    <Button
      variant="solid"
      size={size}
      as="a"
      href={href}
      className={"gap-3 " + (className ?? "")}
    >
      {icon}
      {label}
    </Button>
  )
}
