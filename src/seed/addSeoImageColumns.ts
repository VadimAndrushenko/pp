import "dotenv/config"
import { Client } from "pg"

/**
 * Точечное добавление поля картинки превью (OG) в главную.
 * Полный `payload db push` трогает чужие enum-типы (лефтоверы booking/services/gallery_photos),
 * поэтому добавляем только нужную колонку и ничего не удаляем.
 */
const run = async () => {
  const client = new Client({ connectionString: process.env.DATABASE_URI })
  await client.connect()

  try {
    const { rowCount } = await client.query(
      `ALTER TABLE home_content ADD COLUMN IF NOT EXISTS seo_image_id integer`,
    )
    console.log(`   home_content.seo_image_id (integer) — изменений: ${rowCount}`)

    const { rows } = await client.query(
      `SELECT column_name, data_type FROM information_schema.columns
       WHERE table_schema='public' AND table_name='home_content' AND column_name='seo_image_id'`,
    )
    console.log(rows.length ? "✅ Поле на месте." : "❌ Колонка не появилась.")
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