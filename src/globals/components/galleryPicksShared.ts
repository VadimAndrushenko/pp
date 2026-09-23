"use client"

import type { CSSProperties } from "react"

export interface GalleryPick {
  reportId: string
  key: string
}

export interface GallerPickableItem {
  pickKey: string
  reportId: string
  key: string
  title: string
  src: string
  dateLabel: string
}

export const photoRowKey = (rowId: string | null | undefined, index: number): string => {
  if (rowId) return rowId
  return `idx-${index}`
}

export const isPicked = (value: GalleryPick[] | null | undefined, reportId: string, key: string): boolean =>
  (value ?? []).some((pick) => String(pick.reportId) === reportId && pick.key === key)

export const togglePick = (
  value: GalleryPick[] | null | undefined,
  reportId: string,
  key: string,
): GalleryPick[] => {
  const current = value ?? []
  const exists = current.some((pick) => String(pick.reportId) === reportId && pick.key === key)
  if (exists) {
    return current.filter((pick) => !(String(pick.reportId) === reportId && pick.key === key))
  }
  return [...current, { reportId, key }]
}

export const gridStyle: CSSProperties = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fill, minmax(120px, 1fr))",
  gap: 8,
  maxHeight: 480,
  overflowY: "auto",
  padding: 4,
}

export const pickBtnStyle = (selected: boolean): CSSProperties => ({
  position: "relative",
  display: "flex",
  flexDirection: "column",
  alignItems: "stretch",
  padding: 0,
  borderRadius: 6,
  overflow: "hidden",
  border: selected ? "2px solid var(--theme-success-500)" : "2px solid var(--theme-elevation-200)",
  background: selected ? "var(--theme-success-150)" : "var(--theme-elevation-50)",
  cursor: "pointer",
  boxSizing: "border-box",
})

export const thumbStyle: CSSProperties = {
  width: "100%",
  height: 90,
  objectFit: "cover",
  display: "block",
}

export const metaStyle: CSSProperties = {
  padding: "6px 8px",
  fontSize: 11,
  lineHeight: 1.3,
  color: "var(--theme-elevation-900)",
  textAlign: "left",
}

export const checkStyle: CSSProperties = {
  position: "absolute",
  top: 6,
  right: 6,
  width: 20,
  height: 20,
  borderRadius: "50%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontSize: 12,
  fontWeight: 700,
  color: "#fff",
  background: "var(--theme-success-500)",
  boxShadow: "0 1px 4px rgba(0,0,0,0.4)",
}

export const loadWrapStyle: CSSProperties = {
  padding: 16,
  fontSize: 13,
  color: "var(--theme-elevation-600)",
}