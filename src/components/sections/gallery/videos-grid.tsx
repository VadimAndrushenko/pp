"use client"

import { useEffect, useMemo, useRef, useState } from "react"
import type { GalleryVideo } from "@/types"
import { Card } from "@/components/ui/card"
import { VideoLightbox } from "@/components/ui/video-lightbox"
import { Play } from "lucide-react"

interface AlbumGroup {
  dateKey: string
  dateLabel: string
  videos: GalleryVideo[]
}

function groupByDate(videos: GalleryVideo[]): AlbumGroup[] {
  const map = new Map<string, AlbumGroup>()
  for (const video of videos) {
    const group = map.get(video.dateKey) ?? { dateKey: video.dateKey, dateLabel: video.dateLabel, videos: [] }
    group.videos.push(video)
    map.set(video.dateKey, group)
  }
  return [...map.values()].sort((a, b) => (a.dateKey < b.dateKey ? 1 : -1))
}

function scrollToDate(dateKey: string) {
  document.getElementById(`album-${dateKey}`)?.scrollIntoView({ behavior: "smooth", block: "start" })
}

function VideoThumb({ video, onClick }: { video: GalleryVideo; onClick: () => void }) {
  return (
    <Card
      className="relative cursor-pointer overflow-hidden p-0"
      onClick={onClick}
    >
      {/* 16:9 — натуральные пропорции превью YouTube; карточка растягивается на всю
          ячейку грида, всё лишнее обрезается за пределами контейнера overflow-hidden */}
      <div className="relative w-full aspect-video overflow-hidden bg-surface">
        <img
          src={`https://i.ytimg.com/vi/${video.videoId}/hqdefault.jpg`}
          alt={video.title}
          width={480}
          height={270}
          className="block h-full w-full"
          style={{ objectFit: "cover", objectPosition: "center" }}
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div
            className="w-10 h-10 rounded-full flex items-center justify-center"
            style={{ backgroundColor: "rgba(255, 255, 255, 0.2)" }}
          >
            <Play className="w-5 h-5 text-white ml-0.5" fill="white" />
          </div>
        </div>
      </div>
      <div className="border-t border-border bg-surface p-3">
        <p className="font-display uppercase leading-tight text-text-primary">{video.title}</p>
        <p className="text-xs text-text-muted">{video.dateLabel}</p>
      </div>
    </Card>
  )
}

export function VideoAlbums({ videos }: { videos: GalleryVideo[] }) {
  const [activeAlbum, setActiveAlbum] = useState<{ videos: GalleryVideo[]; index: number } | null>(null)
  const albums = useMemo(() => groupByDate(videos), [videos])
  const deepLinkHandled = useRef(false)

  useEffect(() => {
    if (deepLinkHandled.current) return
    const hash = decodeURIComponent(window.location.hash.replace(/^#/, ""))
    const release = new URLSearchParams(window.location.search).get("release") || ""
    if (!hash || !release) return

    const target = albums.find((a) => `album-${a.dateKey}` === hash && a.dateKey === release)
    if (!target) return

    deepLinkHandled.current = true
    const timer = window.setTimeout(() => {
      window.document.getElementById(`album-${target.dateKey}`)?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      })
      setActiveAlbum({ videos: target.videos, index: 0 })
    }, 100)

    return () => window.clearTimeout(timer)
  }, [albums])

  return (
    <section id="videos" className="section-py">
      <h2 className="section-heading font-display font-bold uppercase text-text-primary mb-2">
        Видео отчёты
        
        <p className="text-sm font-display uppercase tracking-wider mb-6 mt-2 text-accent">
          Все видео с наших мероприятий
        </p>
      </h2>

      <div className="flex flex-col gap-10">
        {albums.map((album) => (
          <div key={album.dateKey} id={`album-${album.dateKey}`}>
            <h3 className="section-heading font-display font-bold uppercase text-text-primary mb-6">
              {album.dateLabel}
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {album.videos.map((video, index) => (
                <VideoThumb
                  key={video.id}
                  video={video}
                  onClick={() => {
                    scrollToDate(album.dateKey)
                    setActiveAlbum({ videos: album.videos, index })
                  }}
                />
              ))}
            </div>
          </div>
        ))}
      </div>

      {activeAlbum && (
        <VideoLightbox
          key={`${activeAlbum.index}-${activeAlbum.videos.length}`}
          videos={activeAlbum.videos}
          initialIndex={activeAlbum.index}
          onClose={() => setActiveAlbum(null)}
        />
      )}
    </section>
  )
}
