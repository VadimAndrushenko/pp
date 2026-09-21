"use client"

import { useField } from "@payloadcms/ui"
import { DynamicIcon, iconNames, type IconName } from "lucide-react/dynamic"
import React, { useMemo, useState } from "react"

const allIcons: IconName[] = [...iconNames].sort()

const fieldStyle: React.CSSProperties = {
  display: "flex",
  alignItems: "center",
  gap: 12,
  width: "100%",
  padding: "10px 12px",
  fontSize: 14,
  borderRadius: 4,
  border: "1px solid var(--theme-elevation-300)",
  background: "var(--theme-elevation-50)",
  boxSizing: "border-box",
  cursor: "pointer",
}

const previewWrap: React.CSSProperties = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: 40,
  height: 40,
  flexShrink: 0,
  border: "1px solid var(--theme-elevation-200)",
  borderRadius: 4,
  color: "var(--theme-elevation-900)",
  background: "var(--theme-elevation-100)",
}

const nameStyle: React.CSSProperties = {
  color: "var(--theme-elevation-900)",
  overflow: "hidden",
  textOverflow: "ellipsis",
  whiteSpace: "nowrap",
}

const modalStyle: React.CSSProperties = {
  position: "fixed",
  inset: 0,
  zIndex: 2000,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  padding: 24,
}

const overlayStyle: React.CSSProperties = {
  position: "absolute",
  inset: 0,
  background: "rgba(0,0,0,0.6)",
}

const panelStyle: React.CSSProperties = {
  position: "relative",
  width: "100%",
  maxWidth: 720,
  maxHeight: "80vh",
  display: "flex",
  flexDirection: "column",
  background: "var(--theme-elevation-50)",
  border: "1px solid var(--theme-elevation-300)",
  borderRadius: 8,
  boxShadow: "0 10px 40px rgba(0,0,0,0.4)",
}

const searchStyle: React.CSSProperties = {
  width: "100%",
  padding: "10px 12px",
  fontSize: 14,
  borderRadius: 4,
  border: "1px solid var(--theme-elevation-300)",
  background: "var(--theme-elevation-0)",
  color: "var(--theme-elevation-900)",
  boxSizing: "border-box",
}

const gridStyle: React.CSSProperties = {
  overflowY: "auto",
  padding: 12,
  display: "grid",
  gridTemplateColumns: "repeat(auto-fill, minmax(72px, 1fr))",
  gap: 6,
}

const iconBtnStyle = (selected: boolean): React.CSSProperties => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  gap: 4,
  padding: "8px 4px",
  borderRadius: 6,
  border: selected ? "1px solid var(--theme-success-500)" : "1px solid var(--theme-elevation-200)",
  background: selected ? "var(--theme-success-150)" : "transparent",
  color: "var(--theme-elevation-900)",
  cursor: "pointer",
  fontSize: 9,
  overflow: "hidden",
})

const clearBtnStyle: React.CSSProperties = {
  marginLeft: "auto",
  padding: "6px 12px",
  fontSize: 12,
  borderRadius: 4,
  border: "1px solid var(--theme-elevation-300)",
  background: "transparent",
  color: "var(--theme-elevation-700)",
  cursor: "pointer",
  flexShrink: 0,
}

export default function IconPickerField({ path }: { path: string }) {
  const { value, setValue } = useField<string>({ path })
  const [open, setOpen] = useState(false)
  const [query, setQuery] = useState("")

  const matches = useMemo(() => {
    const q = query.trim().toLowerCase()
    if (!q) return allIcons.slice(0, 120)
    return allIcons.filter((name) => name.includes(q)).slice(0, 120)
  }, [query])

  const selected = value && (allIcons as string[]).includes(value) ? (value as IconName) : undefined

  return (
    <>
      <div
        role="button"
        tabIndex={0}
        onClick={() => setOpen(true)}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault()
            setOpen(true)
          }
        }}
        style={fieldStyle}
      >
        <div style={previewWrap}>
          {selected ? <DynamicIcon name={selected} size={22} /> : <span style={{ fontSize: 11 }}>—</span>}
        </div>
        <span style={{ ...nameStyle, fontStyle: selected ? undefined : "italic" }}>
          {selected ?? "Выберите иконку"}
        </span>
        {selected && (
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation()
              setValue("")
            }}
            style={clearBtnStyle}
          >
            Сбросить
          </button>
        )}
      </div>

      {open && (
        <div style={modalStyle}>
          <div style={overlayStyle} onClick={() => setOpen(false)} />
          <div style={panelStyle}>
            <div style={{ padding: 12, display: "flex", gap: 8 }}>
              <input
                autoFocus
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Поиск иконки (например: music, mic, star, users…)"
                style={searchStyle}
              />
              <button type="button" onClick={() => setOpen(false)} style={clearBtnStyle}>
                Закрыть
              </button>
            </div>
            <div style={gridStyle}>
              {matches.map((name) => (
                <button
                  key={name}
                  type="button"
                  title={name}
                  onClick={() => {
                    setValue(name)
                    setOpen(false)
                  }}
                  style={iconBtnStyle(selected === name)}
                >
                  <DynamicIcon name={name} size={20} />
                  <span style={{ width: "100%", textOverflow: "ellipsis", overflow: "hidden" }}>{name}</span>
                </button>
              ))}
              {matches.length === 0 && (
                <div style={{ gridColumn: "1 / -1", padding: 24, textAlign: "center", color: "var(--theme-elevation-600)" }}>
                  Ничего не найдено
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  )
}