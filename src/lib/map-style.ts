// Тёмная тема карты в стиле текущего «CARTO dark» — нейтральный угольный фон
// с акцентами на дорогах, чтобы не спорил с фирменным оформлением сайта.
export const GOOGLE_MAP_DARK_STYLE: google.maps.MapTypeStyle[] = [
  { elementType: "geometry", stylers: [{ color: "#16161a" }] },
  { elementType: "labels.text.fill", stylers: [{ color: "#8b8b92" }] },
  { elementType: "labels.text.stroke", stylers: [{ color: "#16161a" }] },
  { featureType: "administrative", elementType: "geometry", stylers: [{ color: "#2a2a30" }] },
  { featureType: "administrative.country", elementType: "geometry", stylers: [{ color: "#8b7355" }] },
  { featureType: "administrative.locality", elementType: "labels.text.fill", stylers: [{ color: "#c9c9cf" }] },
  { featureType: "poi", elementType: "labels.text.fill", stylers: [{ color: "#6e6e76" }] },
  { featureType: "poi.park", elementType: "geometry", stylers: [{ color: "#1d241d" }] },
  { featureType: "road", elementType: "geometry", stylers: [{ color: "#26262c" }] },
  { featureType: "road", elementType: "geometry.stroke", stylers: [{ color: "#1c1c21" }] },
  { featureType: "road.arterial", elementType: "labels.text.fill", stylers: [{ color: "#9a9aa3" }] },
  { featureType: "road.highway", elementType: "geometry", stylers: [{ color: "#2e2e36" }] },
  { featureType: "road.highway", elementType: "geometry.stroke", stylers: [{ color: "#26262c" }] },
  { featureType: "road.local", elementType: "labels.text.fill", stylers: [{ color: "#75757d" }] },
  { featureType: "transit", elementType: "labels.text.fill", stylers: [{ color: "#5f5f67" }] },
  { featureType: "transit.line", elementType: "geometry", stylers: [{ color: "#232329" }] },
  { featureType: "water", elementType: "geometry", stylers: [{ color: "#0f2433" }] },
  { featureType: "water", elementType: "labels.text.fill", stylers: [{ color: "#4b6b80" }] },
]