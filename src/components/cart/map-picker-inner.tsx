"use client"

import { useCallback, useEffect, useRef, useState } from "react"
import type { ReactNode } from "react"
import { Crosshair, Loader2, LocateFixed, Maximize2, MapPinOff, Search } from "lucide-react"
import { getGoogleMaps, DUONG_DONG } from "@/lib/google-maps"
import { GOOGLE_MAP_DARK_STYLE } from "@/lib/map-style"
import { MapFullscreen } from "./map-fullscreen"

export interface MapPickerInnerProps {
  initial?: { lat: number; lng: number } | null
  initialAddress?: string | null
  onPick: (lat: number, lng: number, address: string) => void
}

const REVERSE_DELAY = 650
const SEARCH_DELAY = 600
const PICK_ZOOM = 16
const LOCATE_ZOOM = 17

function shortenAddress(value: string): string {
  return value.split(", ").slice(0, 4).join(", ")
}

function coordsFallback(lat: number, lng: number): string {
  return `${lat.toFixed(5)}, ${lng.toFixed(5)}`
}

function MapCanvas({
  initial,
  onSettle,
  mapRef,
  className = "",
  overlay,
}: {
  initial: { lat: number; lng: number } | null
  onSettle: (lat: number, lng: number) => void
  mapRef: { current: google.maps.Map | null }
  className?: string
  overlay?: ReactNode
}) {
  const containerRef = useRef<HTMLDivElement | null>(null)
  const settleRef = useRef(onSettle)
  const initialCenterRef = useRef<google.maps.LatLngLiteral | null>(null)

  useEffect(() => {
    settleRef.current = onSettle
  })

  useEffect(() => {
    initialCenterRef.current = initial ?? DUONG_DONG
  }, [initial])

  useEffect(() => {
    let cancelled = false
    let map: google.maps.Map | null = null
    const listeners: google.maps.MapsEventListener[] = []

    getGoogleMaps().then((g) => {
      if (!g || cancelled) return
      const el = containerRef.current
      if (!el) return

      map = new g.maps.Map(el, {
        center: initialCenterRef.current ?? DUONG_DONG,
        zoom: 13,
        styles: GOOGLE_MAP_DARK_STYLE,
        disableDefaultUI: true,
        zoomControl: false,
        streetViewControl: false,
        mapTypeControl: false,
        fullscreenControl: false,
        clickableIcons: false,
        gestureHandling: "greedy",
        backgroundColor: "#16161a",
      })
      mapRef.current = map
      listeners.push(
        map.addListener("center_changed", () => {
          if (!map) return
          const center = map.getCenter()
          if (center) settleRef.current(center.lat(), center.lng())
        }),
      )
    })

    return () => {
      cancelled = true
      listeners.forEach((l) => l.remove())
      if (mapRef.current === map) mapRef.current = null
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps -- карта инициализируется один раз за маунт
  }, [])

  return (
    <div className={`relative overflow-hidden ${className}`}>
      <div ref={containerRef} className="absolute inset-0" />
      {overlay}
    </div>
  )
}

function MapFallback() {
  return (
    <div className="flex flex-col items-center justify-center gap-3 h-[50vh] min-h-[300px] rounded-xl border border-border/50 bg-bg/40">
      <MapPinOff className="w-10 h-10 text-text-muted/50" strokeWidth={1.5} />
      <p className="text-sm text-text-muted text-center px-6">
        Карта недоступна. Проверьте ключ Google Maps API.
      </p>
    </div>
  )
}

export default function MapPickerInner({ initial, initialAddress, onPick }: MapPickerInnerProps) {
  const mapRef = useRef<google.maps.Map | null>(null)
  const autocompleteRef = useRef<google.maps.places.AutocompleteService | null>(null)
  const geocoderRef = useRef<google.maps.Geocoder | null>(null)
  const placesRef = useRef<google.maps.places.PlacesService | null>(null)
  const placesHostRef = useRef<HTMLDivElement | null>(null)
  const reverseTimer = useRef<number | null>(null)
  const searchTimer = useRef<number | null>(null)
  const seqRef = useRef(0)

  const [query, setQuery] = useState("")
  const [predictions, setPredictions] = useState<google.maps.places.AutocompletePrediction[]>([])
  const [searching, setSearching] = useState(false)
  const [resolving, setResolving] = useState(false)
  const [resolved, setResolved] = useState<string | null>(initialAddress ?? null)
  const [geoError, setGeoError] = useState<string | null>(null)
  const [ready, setReady] = useState<boolean | null>(null)
  const [fullscreenOpen, setFullscreenOpen] = useState(false)

  useEffect(() => {
    let cancelled = false
    getGoogleMaps().then((g) => {
      if (cancelled) return
      if (!g) {
        setReady(false)
        return
      }
      autocompleteRef.current = new g.maps.places.AutocompleteService()
      geocoderRef.current = new g.maps.Geocoder()
      if (placesHostRef.current) {
        placesRef.current = new g.maps.places.PlacesService(placesHostRef.current)
      }
      setReady(true)
    })
    return () => {
      cancelled = true
    }
  }, [])

  useEffect(
    () => () => {
      if (reverseTimer.current) window.clearTimeout(reverseTimer.current)
      if (searchTimer.current) window.clearTimeout(searchTimer.current)
    },
    [],
  )

  const flyTo = useCallback((lat: number, lng: number, zoom: number) => {
    const map = mapRef.current
    if (!map) return
    map.setZoom(zoom)
    map.panTo({ lat, lng })
  }, [])

  const runReverse = useCallback(
    (lat: number, lng: number) => {
      const geocoder = geocoderRef.current
      if (!geocoder) return
      setResolving(true)
      setGeoError(null)
      geocoder.geocode({ location: { lat, lng } }, (results, status) => {
        setResolving(false)
        if (status === "OK" && results?.[0]) {
          const address = shortenAddress(results[0].formatted_address)
          setResolved(address)
          onPick(lat, lng, address)
        } else if (status === "ZERO_RESULTS") {
          const address = coordsFallback(lat, lng)
          setResolved(address)
          onPick(lat, lng, address)
        } else {
          setGeoError("Не удалось определить адрес")
        }
      })
    },
    [onPick],
  )

  const scheduleReverse = useCallback(
    (lat: number, lng: number) => {
      if (reverseTimer.current) window.clearTimeout(reverseTimer.current)
      reverseTimer.current = window.setTimeout(() => runReverse(lat, lng), REVERSE_DELAY)
    },
    [runReverse],
  )

  const runSearch = useCallback((text: string, id: number) => {
    const service = autocompleteRef.current
    if (!service || text.trim().length < 3) return
    service.getPlacePredictions(
      {
        input: text,
        language: "ru",
        locationBias: { center: DUONG_DONG, radius: 60000 },
      },
      (results, status) => {
        if (id !== seqRef.current) return
        setSearching(false)
        setPredictions(status === "OK" && results ? results : [])
      },
    )
  }, [])

  const handleQueryChange = (value: string) => {
    setQuery(value)
    setGeoError(null)
    if (searchTimer.current) window.clearTimeout(searchTimer.current)
    const next = value.trim()
    const id = ++seqRef.current
    if (next.length < 3) {
      setSearching(false)
      setPredictions([])
      return
    }
    setSearching(true)
    searchTimer.current = window.setTimeout(() => runSearch(next, id), SEARCH_DELAY)
  }

  const handleSelectPrediction = (prediction: google.maps.places.AutocompletePrediction) => {
    const service = placesRef.current
    if (!service) return
    ++seqRef.current
    setPredictions([])
    setQuery(shortenAddress(prediction.description))
    setSearching(false)
    setGeoError(null)
    service.getDetails(
      { placeId: prediction.place_id, fields: ["geometry", "formatted_address"] },
      (place, status) => {
        const location = place?.geometry?.location
        if (status !== "OK" || !location) {
          setGeoError("Не удалось найти выбранное место")
          return
        }
        const lat = location.lat()
        const lng = location.lng()
        const address = shortenAddress(place.formatted_address ?? coordsFallback(lat, lng))
        flyTo(lat, lng, PICK_ZOOM)
        setResolved(address)
        onPick(lat, lng, address)
      },
    )
  }

  const handleLocate = () => {
    setGeoError(null)
    if (!navigator.geolocation) {
      setGeoError("Геолокация не поддерживается браузером")
      return
    }
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords
        flyTo(latitude, longitude, LOCATE_ZOOM)
      },
      () => setGeoError("Не удалось определить местоположение"),
      { enableHighAccuracy: true, timeout: 10000 },
    )
  }

  const handleSettle = useCallback(
    (lat: number, lng: number) => {
      scheduleReverse(lat, lng)
    },
    [scheduleReverse],
  )

  const searchBox = (
    <div className="relative">
      <Search
        className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-accent pointer-events-none"
        strokeWidth={2.2}
      />
      <input
        value={query}
        onChange={(e) => handleQueryChange(e.target.value)}
        placeholder="Поиск: дом, улица, отель…"
        className="w-full py-2.5 pl-10 pr-10 rounded-full bg-bg/70 border border-accent/40 text-sm text-text-primary placeholder:text-text-muted outline-none transition-all duration-300 focus:border-accent focus:shadow-[0_0_16px_rgba(255,106,0,0.35)]"
      />
      {searching && (
        <Loader2 className="absolute right-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-accent animate-spin" />
      )}
      {predictions.length > 0 && (
        <ul className="absolute left-0 right-0 top-full mt-1.5 z-[1100] rounded-xl border border-border/50 bg-surface shadow-[0_12px_32px_rgba(0,0,0,0.6)] overflow-hidden">
          {predictions.map((prediction) => (
            <li key={prediction.place_id}>
              <button
                onClick={() => handleSelectPrediction(prediction)}
                className="w-full text-left px-4 py-2.5 text-xs text-text-muted hover:bg-accent/10 hover:text-accent transition-colors duration-150 border-b border-border/20 last:border-b-0"
              >
                {prediction.description}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  )

  const mapOverlay = (
    <>
      <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-[500]">
        <div className="pp-map-pin" />
      </div>

      <div className="absolute top-3 right-3 z-[600] flex flex-col gap-2">
        {!fullscreenOpen && (
          <button
            onClick={() => setFullscreenOpen(true)}
            aria-label="Открыть карту на весь экран"
            title="Открыть карту на весь экран"
            className="flex items-center justify-center w-10 h-10 rounded-full bg-surface border border-border/50 text-accent shadow-[0_4px_14px_rgba(0,0,0,0.5)] transition-all duration-200 hover:border-accent hover:shadow-[0_0_16px_rgba(255,106,0,0.4)] active:scale-90"
          >
            <Maximize2 className="w-5 h-5" strokeWidth={2} />
          </button>
        )}
        <button
          onClick={handleLocate}
          aria-label="Моя геолокация"
          title="Моя геолокация"
          className="flex items-center justify-center w-10 h-10 rounded-full bg-surface border border-border/50 text-accent shadow-[0_4px_14px_rgba(0,0,0,0.5)] transition-all duration-200 hover:border-accent hover:shadow-[0_0_16px_rgba(255,106,0,0.4)] active:scale-90"
        >
          <LocateFixed className="w-5 h-5" strokeWidth={2} />
        </button>
      </div>

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
    </>
  )

  if (fullscreenOpen) {
    return (
      <>
        <MapFullscreen open={fullscreenOpen} onClose={() => setFullscreenOpen(false)}>
          <div className="absolute inset-0 flex flex-col">
            <div className="px-5 pt-4 max-w-3xl w-full mx-auto space-y-2">{searchBox}</div>
            <div className="flex-1 min-h-0 relative m-4">
              {ready === false ? (
                <MapFallback />
              ) : (
                <MapCanvas
                  key="fullscreen-map"
                  initial={initial ?? null}
                  onSettle={handleSettle}
                  mapRef={mapRef}
                  className="h-full w-full"
                  overlay={mapOverlay}
                />
              )}
            </div>
          </div>
        </MapFullscreen>
        <div ref={placesHostRef} className="hidden" aria-hidden="true" />
      </>
    )
  }

  return (
    <div className="space-y-2">
      {searchBox}
      <div ref={placesHostRef} className="hidden" aria-hidden="true" />
      {ready === false ? (
        <MapFallback />
      ) : (
        <MapCanvas
          key="inline-map"
          initial={initial ?? null}
          onSettle={handleSettle}
          mapRef={mapRef}
          className="h-[50vh] min-h-[300px] w-full rounded-xl border border-border/50"
          overlay={mapOverlay}
        />
      )}
    </div>
  )
}