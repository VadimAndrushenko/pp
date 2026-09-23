"use client"

import { useField } from "@payloadcms/ui"
import React, { useEffect, useState } from "react"
import type { GalleryReport } from "@payload-types"
import { resolveImageUrl } from "@/lib/transformData/resolveImageUrl"
import {
  checkStyle,
  gridStyle,
  isPicked,
  loadWrapStyle,
  metaStyle,
  photoRowKey,
  pickBtnStyle,
  thumbStyle,
  togglePick,
  type GallerPickableItem,
  type GalleryPick,
} from "./galleryPicksShared"

export default function GalleryPhotoPickField({ path }: { path: string }) {
  const { value, setValue } = useField<GalleryPick[]>({ path })
  const [items, setItems] = useState<GallerPickableItem[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState("")

  useEffect(() => {
    let cancelled = false
    const load = async () => {
      try {
        const res = await fetch("/api/gallery-reports?limit=100&depth=2&draft=true")
        if (!res.ok) throw new Error(`HTTP ${res.status}`)
        const data = (await res.json()) as { docs?: GalleryReport[] }
        if (cancelled) return
        const all: GallerPickableItem[] = []
        for (const report of data.docs ?? []) {
          const reportId = String(report.id)
          const reportTitle = report.title || "Без названия"
          const dateLabel = report.reportDate || ""
          for (const [index, photo] of (report.photos ?? []).entries()) {
            all.push({
              pickKey: `${reportId}:${photoRowKey(photo.id, index)}`,
              reportId,
              key: photoRowKey(photo.id, index),
              title: photo.title || reportTitle,
              src: resolveImageUrl(photo.image),
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
      {loading && <div style={loadWrapStyle}>Загружаю фото из отчётов…</div>}
      {!loading && error && (
        <div style={loadWrapStyle}>Не удалось загрузить фотоотчёты: {error}</div>
      )}
      {!loading && !error && (
        <>
          <div style={{ fontSize: 12, color: "var(--theme-elevation-600)", margin: "0 0 8px" }}>
            {items.length} фото • выбрано: {selectedCount}
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
              <div style={loadWrapStyle}>В фотоотчётах пока нет фотографий.</div>
            )}
          </div>
        </>
      )}
    </div>
  )
}