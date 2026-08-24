"use client"

import { useCallback, useEffect, useRef, useState } from "react"
import { MapContainer, TileLayer, useMap, useMapEvents } from "react-leaflet"
import type { Map as LeafletMap } from "leaflet"
import { Crosshair, Loader2, LocateFixed, Search } from "lucide-react"
import "leaflet/dist/leaflet.css"

export interface MapPickerInnerProps {
  initial?: { lat: number; lng: number } | null
  initialAddress?: string | null
  onPick: (lat: number, lng: number, address: string) => void
}

const DEFAULT_CENTER: [number, number] = [10.2899, 123.8854] // Duong Dong, Phu Quoc

interface SearchResult {
  display_name: string
  lat: string
  lon: string
}

function shortenAddress(displayName: string): string {
  return displayName.split(", ").slice(0, 4).join(", ")
}

function CenterTracker({ onSettle }: { onSettle: (lat: number, lng: number) => void }) {
  useMapEvents({
    moveend(event) {
      const center = event.target.getCenter()
      onSettle(center.lat, center.lng)
    },
  })
  return null
}

function MapReady({ onReady }: { onReady: (map: LeafletMap) => void }) {
  const map = useMap()
  useEffect(() => {
    onReady(map)
  }, [map, onReady])
  return null
}

export default function MapPickerInner({ initial, initialAddress, onPick }: MapPickerInnerProps) {
  const mapRef = useRef<LeafletMap | null>(null)
  const reverseTimer = useRef<number | null>(null)
  const searchTimer = useRef<number | null>(null)
  const abortRef = useRef<AbortController | null>(null)

  const [query, setQuery] = useState("")
  const [results, setResults] = useState<SearchResult[]>([])
  const [searching, setSearching] = useState(false)
  const [resolving, setResolving] = useState(false)
  const [resolved, setResolved] = useState<string | null>(initialAddress ?? null)
  const [geoError, setGeoError] = useState<string | null>(null)

  const handleMapReady = useCallback(
    (map: LeafletMap) => {
      mapRef.current = map
      if (initial) map.setView([initial.lat, initial.lng], 16)
    },
    [initial],
  )

  const runReverse = useCallback(
    (lat: number, lng: number) => {
      abortRef.current?.abort()
      const controller = new AbortController()
      abortRef.current = controller
      setResolving(true)
      fetch(
        `https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${lat}&lon=${lng}&accept-language=ru`,
        { signal: controller.signal },
      )
        .then((res) => res.json())
        .then((data) => {
          if (controller.signal.aborted) return
          const name =
            typeof data?.display_name === "string"
              ? shortenAddress(data.display_name)
              : `${lat.toFixed(5)}, ${lng.toFixed(5)}`
          setResolved(name)
          onPick(lat, lng, name)
        })
        .catch(() => {})
        .finally(() => {
          if (!controller.signal.aborted) setResolving(false)
        })
    },
    [onPick],
  )

  const scheduleReverse = useCallback(
    (lat: number, lng: number) => {
      if (reverseTimer.current) window.clearTimeout(reverseTimer.current)
      reverseTimer.current = window.setTimeout(() => runReverse(lat, lng), 650)
    },
    [runReverse],
  )

  const runSearch = useCallback((text: string) => {
    const q = text.trim()
    if (q.length < 3) {
      setResults([])
      setSearching(false)
      return
    }
    abortRef.current?.abort()
    const controller = new AbortController()
    abortRef.current = controller
    setSearching(true)
    // viewbox biases results toward Phu Quoc island without hard-restricting them
    fetch(
      `https://nominatim.openstreetmap.org/search?format=jsonv2&limit=5&accept-language=ru&viewbox=103.7,10.8,104.6,9.7&q=${encodeURIComponent(q)}`,
      { signal: controller.signal },
    )
      .then((res) => res.json())
      .then((data) => {
        if (controller.signal.aborted) return
        setResults(Array.isArray(data) ? data : [])
      })
      .catch(() => {})
      .finally(() => {
        if (!controller.signal.aborted) setSearching(false)
      })
  }, [])

  const handleQueryChange = (value: string) => {
    setQuery(value)
    setGeoError(null)
    if (searchTimer.current) window.clearTimeout(searchTimer.current)
    searchTimer.current = window.setTimeout(() => runSearch(value), 600)
  }

  const flyTo = (lat: number, lng: number, zoom = 16) => {
    mapRef.current?.flyTo([lat, lng], zoom, { duration: 0.8 })
  }

  const handleLocate = () => {
    setGeoError(null)
    if (!navigator.geolocation) {
      setGeoError("Геолокация не поддерживается браузером")
      return
    }
    navigator.geolocation.getCurrentPosition(
      (pos) => flyTo(pos.coords.latitude, pos.coords.longitude, 17),
      () => setGeoError("Не удалось определить местоположение"),
      { enableHighAccuracy: true, timeout: 10000 },
    )
  }

  useEffect(
    () => () => {
      if (reverseTimer.current) window.clearTimeout(reverseTimer.current)
      if (searchTimer.current) window.clearTimeout(searchTimer.current)
      abortRef.current?.abort()
    },
    [],
  )

  return (
    <div className="space-y-2">
      <div className="relative">
        <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-accent pointer-events-none" strokeWidth={2.2} />
        <input
          value={query}
          onChange={(e) => handleQueryChange(e.target.value)}
          placeholder="Поиск: дом, улица, отель…"
          className="w-full py-2.5 pl-10 pr-10 rounded-full bg-bg/70 border border-accent/40 text-sm text-text-primary placeholder:text-text-muted outline-none transition-all duration-300 focus:border-accent focus:shadow-[0_0_16px_rgba(255,106,0,0.35)]"
        />
        {searching && (
          <Loader2 className="absolute right-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-accent animate-spin" />
        )}
        {results.length > 0 && (
          <ul className="absolute left-0 right-0 top-full mt-1.5 z-[1100] rounded-xl border border-border/50 bg-surface shadow-[0_12px_32px_rgba(0,0,0,0.6)] overflow-hidden">
            {results.map((r) => (
              <li key={`${r.lat}-${r.lon}`}>
                <button
                  onClick={() => {
                    setQuery(r.display_name.split(", ").slice(0, 3).join(", "))
                    setResults([])
                    const lat = Number(r.lat)
                    const lng = Number(r.lon)
                    flyTo(lat, lng)
                    runReverse(lat, lng)
                  }}
                  className="w-full text-left px-4 py-2.5 text-xs text-text-muted hover:bg-accent/10 hover:text-accent transition-colors duration-150 border-b border-border/20 last:border-b-0"
                >
                  {r.display_name}
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>

      <div className="relative rounded-xl overflow-hidden border border-border/50">
        <MapContainer
          center={initial ? [initial.lat, initial.lng] : DEFAULT_CENTER}
          zoom={13}
          className="h-[50vh] min-h-[300px] w-full"
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="https://carto.com/">CARTO</a>'
            url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
          />
          <CenterTracker onSettle={scheduleReverse} />
          <MapReady onReady={handleMapReady} />
        </MapContainer>

        {/* fixed center pin — Grab style */}
        <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-[500]">
          <div className="pp-map-pin" />
        </div>

        <button
          onClick={handleLocate}
          aria-label="Моя геолокация"
          title="Моя геолокация"
          className="absolute right-3 bottom-3 z-[600] flex items-center justify-center w-10 h-10 rounded-full bg-surface border border-border/50 text-accent shadow-[0_4px_14px_rgba(0,0,0,0.5)] transition-all duration-200 hover:border-accent hover:shadow-[0_0_16px_rgba(255,106,0,0.4)] active:scale-90"
        >
          <LocateFixed className="w-5 h-5" strokeWidth={2} />
        </button>

        {(resolving || resolved || geoError) && (
          <div className="absolute left-3 right-3 top-3 z-[600] flex items-center gap-2 px-3 py-2 rounded-lg bg-black/80 backdrop-blur-sm border border-border/40">
            {resolving ? (
              <>
                <Loader2 className="w-3.5 h-3.5 shrink-0 text-accent animate-spin" />
                <span className="text-xs text-text-muted truncate">Определяем адрес…</span>
              </>
            ) : geoError ? (
              <>
                <Crosshair className="w-3.5 h-3.5 shrink-0 text-neon-red" />
                <span className="text-xs text-neon-red truncate">{geoError}</span>
              </>
            ) : (
              <span className="text-xs text-text-muted truncate">{resolved}</span>
            )}
          </div>
        )}
      </div>
    </div>
  )
}
