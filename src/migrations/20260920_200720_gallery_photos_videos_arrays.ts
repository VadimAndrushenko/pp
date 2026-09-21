import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
  CREATE TABLE "gallery_videos_videos" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"video_url" varchar,
  	"video_id" varchar
  );

  CREATE TABLE "_gallery_videos_v_version_videos" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"video_url" varchar,
  	"video_id" varchar,
  	"_uuid" varchar
  );

  CREATE TABLE "gallery_reports_photos" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"image_id" integer
  );

  CREATE TABLE "_gallery_reports_v_version_photos" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"image_id" integer,
  	"_uuid" varchar
  );

  CREATE INDEX "gallery_videos_videos_order_idx" ON "gallery_videos_videos" USING btree ("_order");
  CREATE INDEX "gallery_videos_videos_parent_id_idx" ON "gallery_videos_videos" USING btree ("_parent_id");

  CREATE INDEX "_gallery_videos_v_version_videos_order_idx" ON "_gallery_videos_v_version_videos" USING btree ("_order");
  CREATE INDEX "_gallery_videos_v_version_videos_parent_id_idx" ON "_gallery_videos_v_version_videos" USING btree ("_parent_id");

  CREATE INDEX "gallery_reports_photos_order_idx" ON "gallery_reports_photos" USING btree ("_order");
  CREATE INDEX "gallery_reports_photos_parent_id_idx" ON "gallery_reports_photos" USING btree ("_parent_id");
  CREATE INDEX "gallery_reports_photos_image_idx" ON "gallery_reports_photos" USING btree ("image_id");

  CREATE INDEX "_gallery_reports_v_version_photos_order_idx" ON "_gallery_reports_v_version_photos" USING btree ("_order");
  CREATE INDEX "_gallery_reports_v_version_photos_parent_id_idx" ON "_gallery_reports_v_version_photos" USING btree ("_parent_id");
  CREATE INDEX "_gallery_reports_v_version_photos_image_idx" ON "_gallery_reports_v_version_photos" USING btree ("image_id");

  ALTER TABLE "gallery_videos_videos" ADD CONSTRAINT "gallery_videos_videos_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."gallery_videos"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_gallery_videos_v_version_videos" ADD CONSTRAINT "_gallery_videos_v_version_videos_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_gallery_videos_v"("id") ON DELETE cascade ON UPDATE no action;

  ALTER TABLE "gallery_reports_photos" ADD CONSTRAINT "gallery_reports_photos_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "gallery_reports_photos" ADD CONSTRAINT "gallery_reports_photos_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."gallery_reports"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_gallery_reports_v_version_photos" ADD CONSTRAINT "_gallery_reports_v_version_photos_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_gallery_reports_v_version_photos" ADD CONSTRAINT "_gallery_reports_v_version_photos_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_gallery_reports_v"("id") ON DELETE cascade ON UPDATE no action;
  `)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
  DROP TABLE "_gallery_reports_v_version_photos" CASCADE;
  DROP TABLE "gallery_reports_photos" CASCADE;
  DROP TABLE "_gallery_videos_v_version_videos" CASCADE;
  DROP TABLE "gallery_videos_videos" CASCADE;
  `)
}