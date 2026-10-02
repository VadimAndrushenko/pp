import "dotenv/config"
import config from "@payload-config"
import { getPayload } from "payload"
import { services } from "../config/services"

const slugify = (value: string) =>
  value
    .toLowerCase()
    .replace(/ё/g, "е")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "")

export async function seedHomeServices() {
  const payload = await getPayload({ config })

  const current = await payload.findGlobal({ slug: "home-content", depth: 0 })
  const existing = (current?.services ?? []) as { id?: string | number; title: string }[]

  if (existing.length > 0) {
    console.log(`⏭️  Услуги уже загружены (${existing.length} шт.). Пропускаю.`)
    console.log(
      existing.map((s, i) => `   ${i + 1}. ${s.title}`).join("\n"),
    )
    return
  }

  const rows = services.map((service) => ({
    id: slugify(service.title),
    icon: service.icon,
    title: service.title,
    description: service.description,
    href: service.href,
  }))

  await payload.updateGlobal({
    slug: "home-content",
    data: { services: rows },
    depth: 0,
  })

  console.log(`✅ Загружено услуг: ${rows.length}`)
  console.log(rows.map((r, i) => `   ${i + 1}. ${r.title} → ${r.href}`).join("\n"))
}

seedHomeServices()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error("❌ Ошибка:", error)
    process.exit(1)
  })