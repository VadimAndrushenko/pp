"use client"

import { useState } from "react"
import type { GalleryVideo } from "@/types"
import { Card } from "@/components/ui/card"
import { VideoLightbox } from "@/components/ui/video-lightbox"
import { Play } from "lucide-react"

interface VideoGroup {
  dateKey: string
  dateLabel: string
  videos: GalleryVideo[]
}

function groupByDate(videos: GalleryVideo[]): VideoGroup[] {
  const map = new Map<string, VideoGroup>()
  for (const video of videos) {
    const group = map.get(video.dateKey) ?? { dateKey: video.dateKey, dateLabel: video.dateLabel, videos: [] }
    group.videos.push(video)
    map.set(video.dateKey, group)
  }
  return [...map.values()].sort((a, b) => (a.dateKey < b.dateKey ? 1 : -1))
}

export function VideoAlbums({ videos }: { videos: GalleryVideo[] }) {
  const [activeAlbum, setActiveAlbum] = useState<{ videos: GalleryVideo[]; index: number } | null>(null)
  const albums = groupByDate(videos)

  return (
    <section id="videos" className="section-py">
      <h2 className="section-heading font-display font-bold uppercase text-text-primary mb-2">
        Видео отчёты
        
        <p className="text-sm font-display uppercase tracking-wider mb-6 mt-2 text-accent" >
          Все видео с наших мероприятий
        </p>
      </h2>
      
      <div className="flex flex-col gap-10">
        {albums.map((album) => (
          <div key={album.dateKey}>
            <h3 className="section-heading font-display font-bold uppercase text-text-primary mb-6">
              {album.dateLabel}
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {album.videos.map((video, index) => (
                <Card
                  key={video.id}
                  className="relative cursor-pointer overflow-hidden p-0"
                  onClick={() => setActiveAlbum({ videos: album.videos, index })}
                >
                  <div className="relative aspect-square w-full">
                    <div
                      className="w-full h-full bg-cover bg-center bg-surface"
                      style={{
                        backgroundImage: `url(https://i.ytimg.com/vi/${video.videoId}/hqdefault.jpg)`,
                      }}
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
                    <p className="text-base font-display uppercase leading-tight text-text-primary">
                      {video.title}
                    </p>
                    <p className="text-xs text-text-muted">{video.dateLabel}</p>
                  </div>
                </Card>
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
