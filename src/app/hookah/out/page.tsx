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
      <HookahOutHero className="py-8" />
      <HookahOutPricing className="py-10" />
      <HookahOutIncluded className="py-10" />
      <HookahOutSteps className="py-10" />
      <BookingButton label="Заказать выездной кальян" className="py-6 text-3xl lg:text-4xl" />
    </>
  )
}