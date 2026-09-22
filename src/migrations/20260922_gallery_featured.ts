import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
  ALTER TABLE "gallery_reports_photos" ADD COLUMN IF NOT EXISTS "featured" boolean;
  ALTER TABLE "_gallery_reports_v_version_photos" ADD COLUMN IF NOT EXISTS "featured" boolean;

  ALTER TABLE "gallery_videos_videos" ADD COLUMN IF NOT EXISTS "featured" boolean;
  ALTER TABLE "_gallery_videos_v_version_videos" ADD COLUMN IF NOT EXISTS "featured" boolean;
  `)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
  ALTER TABLE "gallery_reports_photos" DROP COLUMN IF EXISTS "featured";
  ALTER TABLE "_gallery_reports_v_version_photos" DROP COLUMN IF EXISTS "featured";

  ALTER TABLE "gallery_videos_videos" DROP COLUMN IF EXISTS "featured";
  ALTER TABLE "_gallery_videos_v_version_videos" DROP COLUMN IF EXISTS "featured";
  `)
}