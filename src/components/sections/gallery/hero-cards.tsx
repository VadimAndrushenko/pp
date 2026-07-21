import { Card } from "@/components/ui/card"
import { Play } from "lucide-react"

export function HeroCards() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
      <Card as="a" href="#photos" className="p-0 overflow-hidden">
        <div
          className="w-full h-48 bg-cover bg-center"
          style={{ backgroundImage: "url('https://picsum.photos/seed/poidem-collage-photo/600/400')", backgroundColor: "var(--color-surface)" }}
        />
        <div className="p-4">
          <h3 className="text-lg font-display uppercase text-[var(--color-text-primary)]">Фото отчёты</h3>
        </div>
      </Card>
      <Card as="a" href="#videos" className="p-0 overflow-hidden">
        <div
          className="w-full h-48 bg-cover bg-center relative"
          style={{ backgroundImage: "url('https://picsum.photos/seed/poidem-collage-video/600/400')", backgroundColor: "var(--color-surface)" }}
        >
          <div className="absolute inset-0 flex items-center justify-center">
            <div
              className="w-12 h-12 rounded-full flex items-center justify-center"
              style={{ backgroundColor: "rgba(255, 255, 255, 0.2)" }}
            >
              <Play className="w-6 h-6 text-white ml-0.5" fill="white" />
            </div>
          </div>
        </div>
        <div className="p-4">
          <h3 className="text-lg font-display uppercase text-[var(--color-text-primary)]">Видео отчёты</h3>
        </div>
      </Card>
    </div>
  )
}
