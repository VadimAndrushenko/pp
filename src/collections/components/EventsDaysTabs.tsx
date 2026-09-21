"use client"

import { useListQuery } from "@payloadcms/ui"
import React from "react"
import { DAYS_OF_WEEK } from "./dateTimeUtils"

const tabsWrap: React.CSSProperties = {
  overflowX: "auto",
  overflowY: "hidden",
  marginBottom: 16,
}

const tabs: React.CSSProperties = {
  borderBottom: "1px solid var(--theme-elevation-100)",
  display: "inline-flex",
  minWidth: "100%",
  verticalAlign: "bottom",
}

const tabButton: React.CSSProperties = {
  background: "none",
  border: "none",
  fontFamily: "inherit",
  fontSize: 16,
  fontWeight: 600,
  padding: "0 0 12px",
  margin: 0,
  marginRight: 24,
  cursor: "pointer",
  opacity: 0.5,
  position: "relative",
  whiteSpace: "nowrap",
  flexShrink: 0,
  color: "var(--theme-elevation-900)",
}

const tabButtonActive: React.CSSProperties = {
  ...tabButton,
  opacity: 1,
}

const activeUnderline: React.CSSProperties = {
  content: "",
  position: "absolute",
  right: 0,
  bottom: -1,
  left: 0,
  height: 2,
  background: "var(--theme-elevation-800)",
}

export default function EventsDaysTabs() {
  const { query, handleWhereChange } = useListQuery()

  const activeDay =
    query?.where && "dayOfWeek" in query.where && "equals" in query.where.dayOfWeek
      ? String(query.where.dayOfWeek.equals)
      : null

  const selectDay = (day: string | null) => {
    if (!handleWhereChange) return
    void handleWhereChange(day ? { dayOfWeek: { equals: day } } : {})
  }

  return (
    <div style={tabsWrap}>
      <div style={tabs}>
        <button
          type="button"
          style={activeDay === null ? tabButtonActive : tabButton}
          onClick={() => selectDay(null)}
        >
          Все
          {activeDay === null && <span style={activeUnderline} />}
        </button>
        {DAYS_OF_WEEK.map((day) => (
          <button
            key={day}
            type="button"
            style={activeDay === day ? tabButtonActive : tabButton}
            onClick={() => selectDay(day)}
          >
            {day}
            {activeDay === day && <span style={activeUnderline} />}
          </button>
        ))}
      </div>
    </div>
  )
}