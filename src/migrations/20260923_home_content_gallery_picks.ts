import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
  ALTER TABLE "home_content" ADD COLUMN IF NOT EXISTS "gallery_photo_picks" jsonb;
  ALTER TABLE "home_content" ADD COLUMN IF NOT EXISTS "gallery_video_picks" jsonb;
  `)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
  ALTER TABLE "home_content" DROP COLUMN IF EXISTS "gallery_photo_picks";
  ALTER TABLE "home_content" DROP COLUMN IF EXISTS "gallery_video_picks";
  `)
}