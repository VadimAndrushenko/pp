"use client"

import { useField } from "@payloadcms/ui"
import React from "react"
import {
  DAYS_OF_WEEK,
  HOURS,
  MINUTES,
  computeDateForDayOfWeek,
  computePartsFromIsoDate,
  formatISODate,
} from "./dateTimeUtils"

const labelStyle: React.CSSProperties = {
  display: "block",
  fontSize: 12,
  fontWeight: 600,
  marginBottom: 8,
}

const selectStyle: React.CSSProperties = {
  width: "100%",
  minWidth: 150,
  padding: "10px 34px 10px 12px",
  fontSize: 14,
  borderRadius: 4,
  border: "1px solid var(--theme-elevation-300)",
  background: "var(--theme-elevation-50)",
  color: "var(--theme-elevation-900)",
  WebkitAppearance: "none",
  appearance: "none",
}

const readOnlyStyle: React.CSSProperties = {
  width: "100%",
  padding: "10px 12px",
  fontSize: 14,
  borderRadius: 4,
  border: "1px solid var(--theme-elevation-200)",
  background: "var(--theme-elevation-100)",
  color: "var(--theme-elevation-600)",
  boxSizing: "border-box",
}

const dateInputStyle: React.CSSProperties = {
  width: "100%",
  minWidth: 150,
  padding: "10px 12px",
  fontSize: 14,
  borderRadius: 4,
  border: "1px solid var(--theme-elevation-300)",
  background: "var(--theme-elevation-50)",
  color: "var(--theme-elevation-900)",
  boxSizing: "border-box",
  appearance: "auto",
}

export default function EventDateTimeField() {
  const scheduleTypeField = useField<string>({ path: "scheduleType" })
  const dayField = useField<string>({ path: "dayOfWeek" })
  const dateField = useField<string>({ path: "date" })
  const monthField = useField<string>({ path: "month" })
  const timeField = useField<string>({ path: "time" })
  const specificDateField = useField<string>({ path: "specificDate" })

  const scheduleType = scheduleTypeField.value || "recurring"
  const dayOfWeek = dayField.value || "Понедельник"
  const specificDate = specificDateField.value || ""
  const time = timeField.value || "20:00"

  const [hour, minute] = time.split(":")

  const computedDate =
    scheduleType === "one-off" && specificDate
      ? (computePartsFromIsoDate(specificDate) ?? null)
      : null

  const shownDate = computedDate
    ? `${computedDate.date} ${computedDate.month} (${computedDate.dayOfWeek})`
    : (() => {
        const computed = computeDateForDayOfWeek(dayOfWeek)
        return computed.date ? `${computed.date} ${computed.month}` : `${dateField.value || ""} ${monthField.value || ""}`.trim() || "—"
      })()

  const handleTypeChange = (value: string) => {
    scheduleTypeField.setValue(value)
    if (value === "one-off" && !specificDate) {
      const today = formatISODate(new Date())
      handleSpecificDateChange(today)
    }
  }

  const handleSpecificDateChange = (value: string) => {
    specificDateField.setValue(value)
    const parts = computePartsFromIsoDate(value)
    if (parts) {
      dateField.setValue(parts.date)
      monthField.setValue(parts.month)
      dayField.setValue(parts.dayOfWeek)
    }
  }

  const handleDayChange = (value: string) => {
    dayField.setValue(value)
    const next = computeDateForDayOfWeek(value)
    dateField.setValue(next.date)
    monthField.setValue(next.month)
  }

  const handleHourChange = (value: string) => timeField.setValue(`${value}:${minute || "00"}`)
  const handleMinuteChange = (value: string) => timeField.setValue(`${hour || "20"}:${value}`)

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
      <div style={{ display: "flex", flexWrap: "wrap", gap: 16, alignItems: "flex-end" }}>
        <div style={{ flex: "1 1 220px" }}>
          <label style={labelStyle}>Тип</label>
          <select
            value={scheduleType}
            onChange={(e) => handleTypeChange(e.target.value)}
            style={selectStyle}
          >
            <option value="recurring">Постоянное (каждую неделю)</option>
            <option value="one-off">Одноразовое (в конкретную дату)</option>
          </select>
        </div>

        {scheduleType === "one-off" ? (
          <div style={{ flex: "1 1 220px" }}>
            <label style={labelStyle}>Дата проведения</label>
            <input
              type="date"
              value={specificDate}
              onChange={(e) => handleSpecificDateChange(e.target.value)}
              style={dateInputStyle}
            />
          </div>
        ) : (
          <div style={{ flex: "1 1 220px" }}>
            <label style={labelStyle}>День недели</label>
            <select value={dayOfWeek} onChange={(e) => handleDayChange(e.target.value)} style={selectStyle}>
              {DAYS_OF_WEEK.map((day) => (
                <option key={day} value={day}>
                  {day}
                </option>
              ))}
            </select>
          </div>
        )}

        <div style={{ flex: "1 1 220px" }}>
          <label style={labelStyle}>Дата (автоматически)</label>
          <div style={readOnlyStyle}>{shownDate}</div>
        </div>

        <div style={{ flex: "1 1 120px" }}>
          <label style={labelStyle}>Часы</label>
          <select value={hour || "20"} onChange={(e) => handleHourChange(e.target.value)} style={selectStyle}>
            {HOURS.map((h) => (
              <option key={h} value={h}>
                {h}
              </option>
            ))}
          </select>
        </div>

        <div style={{ flex: "1 1 120px" }}>
          <label style={labelStyle}>Минуты</label>
          <select
            value={minute || "00"}
            onChange={(e) => handleMinuteChange(e.target.value)}
            style={selectStyle}
          >
            {MINUTES.map((m) => (
              <option key={m} value={m}>
                {m}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  )
}