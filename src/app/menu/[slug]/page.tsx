import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { Breadcrumb } from "@/components/layout/breadcrumb"
import { MenuHero } from "@/components/sections/menu/menu-hero"
import { MenuNav } from "@/components/sections/menu/menu-nav"
import { MenuSection } from "@/components/sections/menu/menu-section"
import { StarDivider } from "@/components/ui/star-divider"
import { allMenuData } from "@/config/menu-data"
import { getMenuNumber } from "@/config/menu-data"
import { links } from "@/config/links"

export function generateStaticParams() {
  return allMenuData.map((menu) => ({ slug: menu.id }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const menu = allMenuData.find((m) => m.id === slug)
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
  const menu = allMenuData.find((m) => m.id === slug)

  if (!menu) {
    notFound()
  }

  const menuIndex = allMenuData.findIndex((m) => m.id === slug)
  const menuNumber = getMenuNumber(menu.id)
  const sectionStarts = menu.sections.reduce<number[]>((acc, section) => {
    const prev = acc[acc.length - 1] ?? 0
    acc.push(prev + (section.numbered === false ? 0 : section.dishes.length))
    return acc
  }, [])

  return (
    <>
      <Breadcrumb items={[{ label: "Меню", href: "/menu" }, { label: menu.title }]} />

      <MenuHero menu={menu} index={menuNumber != null ? menuNumber - 1 : menuIndex} />
      {menu.sections.length === 1 && <StarDivider className="mb-8" />}
      <MenuNav sections={menu.sections} />

      <div>
        {menu.sections.map((section, i) => (
          <MenuSection key={section.id} section={section} heading={menu.sections.length > 1} startIndex={i === 0 ? 0 : sectionStarts[i - 1]} />
        ))}
      </div>
    </>
  )
}