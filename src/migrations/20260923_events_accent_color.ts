import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
  ALTER TABLE "events" ADD COLUMN IF NOT EXISTS "accent_color" varchar;
  ALTER TABLE "_events_v" ADD COLUMN IF NOT EXISTS "version_accent_color" varchar;
  `)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
  ALTER TABLE "events" DROP COLUMN IF EXISTS "accent_color";
  ALTER TABLE "_events_v" DROP COLUMN IF EXISTS "version_accent_color";
  `)
}