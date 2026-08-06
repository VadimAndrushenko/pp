import { Breadcrumb } from "@/components/layout/breadcrumb"
import { HookahOutHero } from "@/components/sections/hookah-out/hookah-out-hero"
import { HookahOutPricing } from "@/components/sections/hookah-out/hookah-out-pricing"
import { HookahOutIncluded } from "@/components/sections/hookah-out/hookah-out-included"
import { HookahOutSteps } from "@/components/sections/hookah-out/hookah-out-steps"
import { BookingButton } from "@/components/ui/booking-button"

export default function HookahOutPage() {
  return (
    <>
      <Breadcrumb />
      <HookahOutHero className="section-py" />
      <HookahOutPricing className="section-py" />
      <HookahOutIncluded className="section-py" />
      <HookahOutSteps className="section-py" />
      <BookingButton label="Заказать выездной кальян" className="py-6 text-4xl max-lg:text-3xl max-sm:text-lg max-sm:py-3" />
    </>
  )
}