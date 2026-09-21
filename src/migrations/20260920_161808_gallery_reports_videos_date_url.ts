import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "public"."gallery_reports" ADD COLUMN "report_date" varchar;
   ALTER TABLE "public"."_gallery_reports_v" ADD COLUMN "version_report_date" varchar;
   ALTER TABLE "public"."gallery_videos" ADD COLUMN "video_url" varchar;
   ALTER TABLE "public"."gallery_videos" ADD COLUMN "report_date" varchar;
   ALTER TABLE "public"."_gallery_videos_v" ADD COLUMN "version_video_url" varchar;
   ALTER TABLE "public"."_gallery_videos_v" ADD COLUMN "version_report_date" varchar;`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "public"."_gallery_videos_v" DROP COLUMN IF EXISTS "version_report_date";
   ALTER TABLE "public"."_gallery_videos_v" DROP COLUMN IF EXISTS "version_video_url";
   ALTER TABLE "public"."gallery_videos" DROP COLUMN IF EXISTS "report_date";
   ALTER TABLE "public"."gallery_videos" DROP COLUMN IF EXISTS "video_url";
   ALTER TABLE "public"."_gallery_reports_v" DROP COLUMN IF EXISTS "version_report_date";
   ALTER TABLE "public"."gallery_reports" DROP COLUMN IF EXISTS "report_date";`)
}