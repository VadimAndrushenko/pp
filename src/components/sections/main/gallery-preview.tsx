"use client"

import { useState } from "react"
import Link from "next/link"
import { MotionDiv } from "@/components/ui/motion-div"
import { ArrowRight, Clock, Play } from "lucide-react"

const galleryItems = [
  { id: "1", image: "https://picsum.photos/seed/poidem-photo-1/400/500", title: "Караоке батл", date: "24 мая", dayOfWeek: "Пятница", type: "photo" as const, videoSrc: "" },
  { id: "2", image: "https://picsum.photos/seed/poidem-photo-2/400/500", title: "DJ вечеринка", date: "26 мая", dayOfWeek: "Воскресенье", type: "photo" as const, videoSrc: "" },
  { id: "3", image: "https://picsum.photos/seed/poidem-video-1/400/500", title: "Живая музыка", date: "30 мая", dayOfWeek: "Среда", type: "video" as const, videoSrc: "https://www.w3schools.com/html/mov_bbb.mp4" },
  { id: "4", image: "https://picsum.photos/seed/poidem-photo-3/400/500", title: "Квиз", date: "25 мая", dayOfWeek: "Суббота", type: "photo" as const, videoSrc: "" },
  { id: "5", image: "https://picsum.photos/seed/poidem-photo-4/400/500", title: "Кулинарный мастер-класс", date: "2 июня", dayOfWeek: "Понедельник", type: "photo" as const, videoSrc: "" },
]

export function GalleryPreview() {
  const [playingVideo, setPlayingVideo] = useState<string | null>(null)

  return (
    <section>
      <MotionDiv direction="up" delay={0.05}>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl md:text-3xl font-display font-bold uppercase tracking-tight text-[var(--color-text-primary)]">
              Фото и видеоотчёты
            </h2>
            <Link
              href="/gallery"
              className="text-xs font-display uppercase tracking-wider flex items-center gap-1 link-underline"
              style={{ color: "var(--color-accent)" }}
            >
              Смотреть всё
              <ArrowRight className="w-3 h-3" />
            </Link>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-5 gap-4 justify-items-center">
            {galleryItems.map((item, i) => {
              const isPlaying = playingVideo === item.id

              return (
                <MotionDiv key={item.id} direction="up" delay={0.1 + i * 0.08}>
                  <div
                    onClick={() => {
                      if (item.type === "video" && !isPlaying) {
                        setPlayingVideo(item.id)
                      }
                    }}
                    className="group block shrink-0 w-[180px] sm:w-[200px] md:w-[210px] lg:w-[240px] border border-transparent transition-all duration-200 hover:-translate-y-1.5 hover:shadow-[0_0_30px_rgba(255,106,0,0.35)] hover:border-[var(--color-accent)] focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] focus-visible:outline-none rounded-[var(--radius-card)] cursor-pointer"
                  >
                    <div
                      className="relative w-full aspect-[4/5] rounded-[var(--radius-card)] overflow-hidden bg-cover bg-center"
                      style={{
                        backgroundImage: isPlaying ? "none" : `url(${item.image})`,
                        backgroundColor: "var(--color-surface)",
                      }}
                    >
                      {isPlaying ? (
                        <video
                          className="w-full h-full object-cover"
                          controls
                          autoPlay
                          poster={item.image}
                        >
                          <source src={item.videoSrc} type="video/mp4" />
                        </video>
                      ) : (
                        <>
                          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                          {item.type === "video" && (
                            <div className="absolute inset-0 flex items-center justify-center">
                              <div className="bg-black/60 rounded-full w-12 h-12 flex items-center justify-center transition-transform duration-200 group-hover:scale-110">
                                <Play className="w-6 h-6 text-white ml-0.5" fill="white" />
                              </div>
                            </div>
                          )}
                          <div className="absolute top-2 left-2 bg-black/80 rounded-md px-2 py-1.5 text-center min-w-[44px]">
                            <div className="text-base font-display font-bold leading-none text-[var(--color-text-primary)]">
                              {item.date.split(" ")[0]}
                            </div>
                            <div className="text-[9px] uppercase tracking-wide text-[var(--color-text-muted)] mt-0.5">
                              {item.date.split(" ")[1]}
                            </div>
                          </div>
                        </>
                      )}
                    </div>
                    <div className="pt-3 pb-3 px-2 text-center">
                      <h3 className="text-sm font-display font-bold uppercase leading-snug text-[var(--color-text-primary)] line-clamp-2 min-h-[2.2em]">
                        {item.title}
                      </h3>
                      <div className="flex items-center justify-center gap-1 mt-1.5 text-xs text-[var(--color-text-muted)] uppercase tracking-wide">
                        <Clock className="w-3 h-3 shrink-0" />
                        <span>{item.dayOfWeek}</span>
                      </div>
                    </div>
                  </div>
                </MotionDiv>
              )
            })}
          </div>
        </MotionDiv>
    </section>
  )
}
