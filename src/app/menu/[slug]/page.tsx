import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { Breadcrumb } from "@/components/layout/breadcrumb"
import { MenuHero } from "@/components/sections/menu/menu-hero"
import { MenuNav } from "@/components/sections/menu/menu-nav"
import { MenuSection } from "@/components/sections/menu/menu-section"
import { BookingButton } from "@/components/ui/booking-button"
import { menuData } from "@/config/menu-data"
import { links } from "@/config/links"
import { Phone } from "lucide-react"

export function generateStaticParams() {
  return menuData.map((menu) => ({ slug: menu.id }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const menu = menuData.find((m) => m.id === slug)
  if (!menu) return {}
  return {
    title: `${menu.title} — Меню | POIDEM POZHREM!`,
    description: `${menu.subtitle}. ${links.address}`,
  }
}

export default async function MenuCategoryPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const menu = menuData.find((m) => m.id === slug)

  if (!menu) {
    notFound()
  }

  const menuIndex = menuData.findIndex((m) => m.id === slug)

  return (
    <>
      <Breadcrumb items={[{ label: "Меню", href: "/menu" }, { label: menu.title }]} />

      <MenuHero menu={menu} />
      <MenuNav sections={menu.sections} />

      <div>
        {menu.sections.map((section) => (
          <MenuSection key={section.id} section={section} index={menuIndex} />
        ))}
      </div>
    </>
  )
}