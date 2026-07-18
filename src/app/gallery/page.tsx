import { Breadcrumb } from "@/components/layout/breadcrumb"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Play, Send, ArrowRight } from "lucide-react"
import Link from "next/link"

const photos = [
  { id: "p1", image: "https://picsum.photos/seed/poidem-photo-1/400/400", title: "Караоке батл", date: "24 мая" },
  { id: "p2", image: "https://picsum.photos/seed/poidem-photo-2/400/400", title: "DJ вечеринка", date: "26 мая" },
  { id: "p3", image: "https://picsum.photos/seed/poidem-photo-3/400/400", title: "Квиз", date: "25 мая" },
  { id: "p4", image: "https://picsum.photos/seed/poidem-photo-4/400/400", title: "Бизнес-завтрак", date: "28 мая" },
]

const videos = [
  { id: "v1", image: "https://picsum.photos/seed/poidem-video-1/400/400", title: "Живая музыка", date: "30 мая" },
  { id: "v2", image: "https://picsum.photos/seed/poidem-video-2/400/400", title: "DJ сет", date: "26 мая" },
  { id: "v3", image: "https://picsum.photos/seed/poidem-video-3/400/400", title: "Караоке", date: "24 мая" },
  { id: "v4", image: "https://picsum.photos/seed/poidem-video-4/400/400", title: "Интервью", date: "20 мая" },
]

export default function GalleryPage() {
  return (
    <div className="px-5 py-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-start justify-between mb-6">
          <div>
            <Breadcrumb />
          </div>
          <Button variant="outline" size="sm">
            📷 Добавить свои фото
          </Button>
        </div>

        <h1 className="text-3xl md:text-4xl font-display font-bold uppercase tracking-tight text-[var(--color-text-primary)] mb-2">
          Как у нас
        </h1>
        <p className="text-sm font-display uppercase tracking-wider mb-6" style={{ color: "var(--color-accent)" }}>
          Фото и видеоотчёты
        </p>

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

        <section id="photos" className="mb-10">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-display font-bold uppercase text-[var(--color-text-primary)]">Последние фото</h2>
            <Link
              href="#"
              className="text-xs font-display uppercase flex items-center gap-1"
              style={{ color: "var(--color-accent)" }}
            >
              Смотреть все фото
              <ArrowRight className="w-3 h-3" />
            </Link>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {photos.map((p) => (
              <Card key={p.id} className="relative overflow-hidden p-0 aspect-square">
                <div
                  className="w-full h-full bg-cover bg-center"
                  style={{ backgroundImage: `url(${p.image})`, backgroundColor: "var(--color-surface)" }}
                />
                <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/80 to-transparent">
                  <p className="text-xs font-display uppercase text-white">{p.title}</p>
                  <p className="text-[10px] text-[var(--color-text-muted)]">{p.date}</p>
                </div>
              </Card>
            ))}
          </div>
        </section>

        <section id="videos" className="mb-10">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-display font-bold uppercase text-[var(--color-text-primary)]">Последние видео</h2>
            <Link
              href="#"
              className="text-xs font-display uppercase flex items-center gap-1"
              style={{ color: "var(--color-accent)" }}
            >
              Смотреть все видео
              <ArrowRight className="w-3 h-3" />
            </Link>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {videos.map((v) => (
              <Card key={v.id} className="relative overflow-hidden p-0 aspect-square cursor-pointer">
                <div
                  className="w-full h-full bg-cover bg-center"
                  style={{ backgroundImage: `url(${v.image})`, backgroundColor: "var(--color-surface)" }}
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center"
                    style={{ backgroundColor: "rgba(255, 255, 255, 0.2)" }}
                  >
                    <Play className="w-5 h-5 text-white ml-0.5" fill="white" />
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/80 to-transparent">
                  <p className="text-xs font-display uppercase text-white">{v.title}</p>
                  <p className="text-[10px] text-[var(--color-text-muted)]">{v.date}</p>
                </div>
              </Card>
            ))}
          </div>
        </section>

        <Card className="p-5 text-center mb-8">
          <p className="text-sm text-[var(--color-text-secondary)] mb-4">
            Хочешь оставить своё фото или видео? Отмечай нас в соцсетях или отправляй в директ!
          </p>
          <div className="flex justify-center gap-3">
            <a
              href="https://instagram.com/poidem_pozhrem"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-[var(--radius-sm)] text-xs font-display uppercase"
              style={{ borderColor: "var(--color-border)", border: "1px solid", color: "var(--color-text-secondary)" }}
            >
              <span className="w-4 h-4 flex items-center justify-center text-xs" style={{ color: "var(--color-accent)" }}>📷</span>
              Instagram
            </a>
            <a
              href="https://t.me/poidem_pozhrem"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-[var(--radius-sm)] text-xs font-display uppercase"
              style={{ borderColor: "var(--color-border)", border: "1px solid", color: "var(--color-text-secondary)" }}
            >
              <Send className="w-4 h-4" style={{ color: "var(--color-telegram)" }} />
              Telegram
            </a>
          </div>
        </Card>
      </div>
    </div>
  )
}
