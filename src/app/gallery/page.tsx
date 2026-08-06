import { Breadcrumb } from "@/components/layout/breadcrumb"
import { Button } from "@/components/ui/button"
import { HeroCards } from "@/components/sections/gallery/hero-cards"
import { RestaurantVideo } from "@/components/ui/restaurant-video"

export default function GalleryPage() {
  return (
    <>
      <Breadcrumb />

      <h1 className="text-3xl md:text-4xl font-display font-bold uppercase tracking-tight text-text-primary mb-2">
        Как у нас
      </h1>

      <RestaurantVideo className="py-6" />

      <h2 id="reports" className="section-heading scroll-mt-20 font-display font-bold uppercase tracking-tight text-text-primary mb-2 mt-8">
        Фото и видеоотчёты
      </h2>
      <p className="text-sm font-display uppercase tracking-wider mb-6 text-accent" >
        Что происходит в нашем ресторане
      </p>

        <HeroCards className="py-6" />
    </>
  )
}
