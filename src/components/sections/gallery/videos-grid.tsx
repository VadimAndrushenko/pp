import Link from "next/link"
import { Card } from "@/components/ui/card"
import { Play, ArrowRight } from "lucide-react"

interface Video {
  id: string
  image: string
  title: string
  date: string
}

export function VideosGrid({ videos }: { videos: Video[] }) {
  return (
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
  )
}
