/**
 * Синхронизирует `export const revalidate` во всех страницах сайта
 * со значением из `src/config/isr.ts`.
 *
 * Зачем: Next.js требует, чтобы route segment config был числовым
 * ЛИТЕРАЛОМ в файле — импортировать константу нельзя (сборка падает с
 * "Invalid segment configuration export detected"). Поэтому источник истины
 * один, а скрипт раскладывает значение по страницам перед сборкой.
 *
 * Запуск: `pnpm revalidate:sync` (или автоматически через `prebuild`).
 */
import { readFileSync, writeFileSync, readdirSync, statSync } from "node:fs"
import { join, relative } from "node:path"
import { fileURLToPath } from "node:url"

const root = join(fileURLToPath(new URL(".", import.meta.url)), "..")
const isrConfigPath = join(root, "src/config/isr.ts")
const siteDir = join(root, "src/app/(site)")

const isrSource = readFileSync(isrConfigPath, "utf8")
const match = isrSource.match(/REVALIDATE_SECONDS\s*=\s*(\d+)/)
if (!match) {
  console.error("[revalidate] Не нашёл REVALIDATE_SECONDS в src/config/isr.ts")
  process.exit(1)
}
const value = Number(match[1])

const REVALIDATE_LINE = `export const revalidate = ${value}`

/** Рекурсивно собирает все page.tsx */
function collectPages(dir) {
  const result = []
  for (const entry of readdirSync(dir)) {
    const full = join(dir, entry)
    const stat = statSync(full)
    if (stat.isDirectory()) {
      result.push(...collectPages(full))
    } else if (entry === "page.tsx") {
      result.push(full)
    }
  }
  return result
}

/** Индекс строки, после которой заканчивается блок импортов */
function importsEndIndex(lines) {
  let last = -1
  lines.forEach((line, i) => {
    const trimmed = line.trim()
    if (/^import\b/.test(trimmed) || /^}\s*from\s+["']/.test(trimmed)) {
      last = i
    }
  })
  return last
}

let updated = 0
let added = 0

for (const file of collectPages(siteDir)) {
  const source = readFileSync(file, "utf8")

  // Не трогаем динамические страницы (force-dynamic) — там revalidate бессмыслен.
  if (/export const dynamic\b/.test(source)) continue

  const rel = relative(root, file)

  if (/export const revalidate\s*=/.test(source)) {
    const next = source.replace(/export const revalidate\s*=\s*\d+/, REVALIDATE_LINE)
    if (next !== source) {
      writeFileSync(file, next)
      updated += 1
      console.log(`[revalidate] обновлено  ${rel} → ${value}`)
    }
  } else {
    const lines = source.split("\n")
    const idx = importsEndIndex(lines)
    const next =
      idx === -1
        ? `${REVALIDATE_LINE}\n${source}`
        : [...lines.slice(0, idx + 1), "", REVALIDATE_LINE, ...lines.slice(idx + 1)].join("\n")
    writeFileSync(file, next)
    added += 1
    console.log(`[revalidate] добавлено  ${rel} → ${value}`)
  }
}

console.log(`[revalidate] Готово. Обновлено: ${updated}, добавлено: ${added}. Значение: ${value} сек.`)
