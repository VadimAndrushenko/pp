import { setOptions, importLibrary } from "@googlemaps/js-api-loader"

const API_KEY = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY?.trim()

let pending: Promise<typeof google | null> | null = null

/**
 * Лениво загружает Google Maps JS API (синглтон).
 * Возвращает `null`, если ключ не задан или загрузка не удалась —
 * такие случаи обрабатываются в UI как «карта недоступна».
 */
export function getGoogleMaps(): Promise<typeof google | null> {
  if (!API_KEY) return Promise.resolve(null)

  if (!pending) {
    setOptions({ key: API_KEY, v: "quarterly", language: "ru", region: "VN" })
    const promise = Promise.all([
      importLibrary("core"),
      importLibrary("maps"),
      importLibrary("places"),
      importLibrary("geocoding"),
    ])
      .then(() => window.google)
      .catch(() => null)
    pending = promise
  }
  return pending
}

export const DUONG_DONG: google.maps.LatLngLiteral = { lat: 10.2899, lng: 123.8854 }