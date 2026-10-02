import "dotenv/config"
import { Client } from "pg"

/**
 * Точечное добавление полей картинок в главную (SEO).
 * Полный `payload db push` трогает чужие enum-типы (лефтоверы booking/services/gallery_photos),
 * поэтому добавляем только нужные колонки и ничего не удаляем.
 */
const COLUMNS: Record<string, string> = {
  // Картинка превью ссылки (OG)
  seo_image_id: "integer",
  // Иконка вкладки браузера (favicon)
  seo_favicon_id: "integer",
}

const run = async () => {
  const client = new Client({ connectionString: process.env.DATABASE_URI })
  await client.connect()

  try {
    for (const [column, type] of Object.entries(COLUMNS)) {
      await client.query(`ALTER TABLE home_content ADD COLUMN IF NOT EXISTS ${column} ${type}`)
      console.log(`   home_content.${column} (${type})`)
    }

    const { rows } = await client.query(
      `SELECT column_name, data_type FROM information_schema.columns
       WHERE table_schema='public' AND table_name='home_content'
         AND column_name = ANY($1) ORDER BY column_name`,
      [Object.keys(COLUMNS)],
    )
    console.log(
      rows.length === Object.keys(COLUMNS).length
        ? "✅ Все поля на месте."
        : `❌ Ожидали ${Object.keys(COLUMNS).length}, найдено ${rows.length}.`,
    )
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