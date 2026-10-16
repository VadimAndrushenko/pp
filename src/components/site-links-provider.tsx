"use client"

import { createContext, useContext } from "react"
import type { SiteSettings } from "@/lib/transformData"
import { links as linksFallback } from "@/config/links"

// Контакты/ссылки из настроек (Payload → settings), доступные клиентским компонентам.
// Значения прокидывает серверный layout, поэтому данные берутся из CMS,
// а не хардкодятся в компонентах.
const SiteLinksContext = createContext<SiteSettings["links"]>(linksFallback)

export function SiteLinksProvider({
  links,
  children,
}: {
  links: SiteSettings["links"]
  children: React.ReactNode
}) {
  return <SiteLinksContext.Provider value={links}>{children}</SiteLinksContext.Provider>
}

export function useSiteLinks(): SiteSettings["links"] {
  return useContext(SiteLinksContext)
}
