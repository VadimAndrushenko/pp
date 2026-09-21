"use client"

import { useField } from "@payloadcms/ui"
import React from "react"
import { computePartsFromIsoDate } from "./dateTimeUtils"

const labelStyle: React.CSSProperties = {
  display: "block",
  fontSize: 12,
  fontWeight: 600,
  marginBottom: 8,
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

export default function ReportDateField() {
  const reportDateField = useField<string>({ path: "reportDate" })
  const dayField = useField<string>({ path: "date" })
  const monthField = useField<string>({ path: "month" })
  const dayOfWeekField = useField<string>({ path: "dayOfWeek" })

  const reportDate = reportDateField.value || ""

  const handleDateChange = (value: string) => {
    reportDateField.setValue(value)
    const parts = computePartsFromIsoDate(value)
    if (parts) {
      dayField.setValue(parts.date)
      monthField.setValue(parts.month)
      dayOfWeekField.setValue(parts.dayOfWeek)
    }
  }

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
      <label style={labelStyle}>Дата отчёта</label>
      <input
        type="date"
        value={reportDate}
        onChange={(e) => handleDateChange(e.target.value)}
        style={dateInputStyle}
      />
      <div
        style={{
          fontSize: 12,
          color: "var(--theme-elevation-600)",
        }}
      >
        День, месяц и день недели подставятся автоматически.
      </div>
    </div>
  )
}