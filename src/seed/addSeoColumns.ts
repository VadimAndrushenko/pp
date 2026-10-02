import "dotenv/config"
import { Client } from "pg"

/**
 * Точечное добавление SEO-колонок.
 * Полный `payload db push` трогает чужие enum-типы (лефтоверы booking/services/gallery_photos),
 * поэтому добавляем только нужные колонки и ничего не удаляем.
 */
const TABLES = ["events", "menu_categories", "home_content"]

const COLUMN_TYPES: Record<string, string> = {
  seo_title: "varchar",
  seo_description: "text",
  seo_keywords: "varchar",
}

const run = async () => {
  const client = new Client({ connectionString: process.env.DATABASE_URI })
  await client.connect()

  try {
    for (const table of TABLES) {
      for (const [column, type] of Object.entries(COLUMN_TYPES)) {
        const { rowCount } = await client.query(
          `ALTER TABLE ${table} ADD COLUMN IF NOT EXISTS ${column} ${type}`,
        )
        console.log(`   ${table}.${column} (${type})`)
      }
    }
    console.log("✅ SEO-колонки на месте.")
  } finally {
    await client.end()
  }
}

run()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error("❌ Ошибка:", error.message)
    process.exit(1)
  })