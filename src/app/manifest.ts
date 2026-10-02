import type { MetadataRoute } from "next"
import { DEFAULT_OG_IMAGE, SITE_NAME } from "@/lib/seo/config"

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${SITE_NAME} — ресторан на Фукуоке`,
    short_name: SITE_NAME,
    description:
      "Ресторан русской, кавказской и восточной кухни на Фукуоке. Большие порции, живая музыка, кальяны, мероприятия и доставка.",
    start_url: "/",
    display: "standalone",
    background_color: "#000000",
    theme_color: "#FF6A00",
    lang: "ru",
    dir: "ltr",
    categories: ["food", "lifestyle"],
    icons: [
      {
        src: "/logo.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "any",
      },
    ],
    screenshots: [
      {
        src: DEFAULT_OG_IMAGE,
        sizes: "1200x630",
        type: "image/jpeg",
        form_factor: "wide",
        label: `${SITE_NAME} — ресторан на Фукуоке`,
      },
    ],
  }
}