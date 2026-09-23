"use client"

import { useField } from "@payloadcms/ui"
import React, { useEffect, useState } from "react"
import type { GalleryVideo } from "@payload-types"
import {
  checkStyle,
  gridStyle,
  isPicked,
  loadWrapStyle,
  metaStyle,
  pickBtnStyle,
  thumbStyle,
  togglePick,
  type GallerPickableItem,
  type GalleryPick,
} from "./galleryPicksShared"

const videoKey = (rowId: string | null | undefined, index: number): string => {
  if (rowId) return rowId
  return `idx-${index}`
}

export default function GalleryVideoPickField({ path }: { path: string }) {
  const { value, setValue } = useField<GalleryPick[]>({ path })
  const [items, setItems] = useState<GallerPickableItem[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState("")

  useEffect(() => {
    let cancelled = false
    const load = async () => {
      try {
        const res = await fetch("/api/gallery-videos?limit=100&depth=2&draft=true")
        if (!res.ok) throw new Error(`HTTP ${res.status}`)
        const data = (await res.json()) as { docs?: GalleryVideo[] }
        if (cancelled) return
        const all: GallerPickableItem[] = []
        for (const album of data.docs ?? []) {
          const reportId = String(album.id)
          const albumTitle = album.title || "Без названия"
          const dateLabel = album.dateLabel || album.dateKey || ""
          for (const [index, video] of (album.videos ?? []).entries()) {
            const key = videoKey(video.id, index)
            all.push({
              pickKey: `${reportId}:${key}`,
              reportId,
              key,
              title: video.title || albumTitle,
              src: video.videoId
                ? `https://i.ytimg.com/vi/${video.videoId}/hqdefault.jpg`
                : "",
              dateLabel,
            })
          }
        }
        all.sort((a, b) => b.dateLabel.localeCompare(a.dateLabel))
        setItems(all)
        setError("")
      } catch (err) {
        if (!cancelled) setError(String(err instanceof Error ? err.message : err))
      } finally {
        if (!cancelled) setLoading(false)
      }
    }
    load()
    return () => {
      cancelled = true
    }
  }, [])

  const selectedCount = (value ?? []).length

  return (
    <div>
      {loading && <div style={loadWrapStyle}>Загружаю видео из отчётов…</div>}
      {!loading && error && (
        <div style={loadWrapStyle}>Не удалось загрузить видеоотчёты: {error}</div>
      )}
      {!loading && !error && (
        <>
          <div style={{ fontSize: 12, color: "var(--theme-elevation-600)", margin: "0 0 8px" }}>
            {items.length} видео • выбрано: {selectedCount}
          </div>
          <div style={gridStyle}>
            {items.map((item) => {
              const selected = isPicked(value, item.reportId, item.key)
              return (
                <button
                  key={item.pickKey}
                  type="button"
                  style={pickBtnStyle(selected)}
                  onClick={() => setValue(togglePick(value, item.reportId, item.key))}
                  title={`${item.title} — ${item.dateLabel}`}
                >
                  {item.src ? (
                    <img src={item.src} alt={item.title} style={thumbStyle} loading="lazy" />
                  ) : (
                    <div style={{ ...thumbStyle, background: "var(--theme-elevation-100)" }} />
                  )}
                  <div style={metaStyle}>
                    <div style={{ fontWeight: 600 }}>{item.title}</div>
                    <div style={{ color: "var(--theme-elevation-600)" }}>{item.dateLabel}</div>
                  </div>
                  {selected && <div style={checkStyle}>✓</div>}
                </button>
              )
            })}
            {items.length === 0 && (
              <div style={loadWrapStyle}>В видеоотчётах пока нет роликов.</div>
            )}
          </div>
        </>
      )}
    </div>
  )
}