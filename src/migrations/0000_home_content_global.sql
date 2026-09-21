CREATE TYPE "public"."enum__events_v_version_admission" AS ENUM('free', 'paid');--> statement-breakpoint
CREATE TYPE "public"."enum__events_v_version_category" AS ENUM('all', 'karaoke', 'quiz', 'music', 'business', 'show');--> statement-breakpoint
CREATE TYPE "public"."enum__events_v_version_day_of_week" AS ENUM('Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье');--> statement-breakpoint
CREATE TYPE "public"."enum__events_v_version_schedule_type" AS ENUM('recurring', 'one-off');--> statement-breakpoint
CREATE TYPE "public"."enum__events_v_version_status" AS ENUM('draft', 'published');--> statement-breakpoint
CREATE TYPE "public"."enum__gallery_reports_v_version_admission" AS ENUM('free', 'paid');--> statement-breakpoint
CREATE TYPE "public"."enum__gallery_reports_v_version_category" AS ENUM('all', 'karaoke', 'quiz', 'music', 'business', 'show');--> statement-breakpoint
CREATE TYPE "public"."enum__gallery_reports_v_version_status" AS ENUM('draft', 'published');--> statement-breakpoint
CREATE TYPE "public"."enum__gallery_videos_v_version_status" AS ENUM('draft', 'published');--> statement-breakpoint
CREATE TYPE "public"."enum__menu_categories_v_version_group" AS ENUM('main', 'alcohol', 'non-alcohol');--> statement-breakpoint
CREATE TYPE "public"."enum__menu_categories_v_version_sections_dishes_badges_text" AS ENUM('Премиум', 'Веганское блюдо', 'Вегетарианское блюдо', 'Без добавленного сахара');--> statement-breakpoint
CREATE TYPE "public"."enum__menu_categories_v_version_status" AS ENUM('draft', 'published');--> statement-breakpoint
CREATE TYPE "public"."enum_events_admission" AS ENUM('free', 'paid');--> statement-breakpoint
CREATE TYPE "public"."enum_events_category" AS ENUM('all', 'karaoke', 'quiz', 'music', 'business', 'show');--> statement-breakpoint
CREATE TYPE "public"."enum_events_day_of_week" AS ENUM('Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье');--> statement-breakpoint
CREATE TYPE "public"."enum_events_schedule_type" AS ENUM('recurring', 'one-off');--> statement-breakpoint
CREATE TYPE "public"."enum_events_status" AS ENUM('draft', 'published');--> statement-breakpoint
CREATE TYPE "public"."enum_gallery_reports_admission" AS ENUM('free', 'paid');--> statement-breakpoint
CREATE TYPE "public"."enum_gallery_reports_category" AS ENUM('all', 'karaoke', 'quiz', 'music', 'business', 'show');--> statement-breakpoint
CREATE TYPE "public"."enum_gallery_reports_status" AS ENUM('draft', 'published');--> statement-breakpoint
CREATE TYPE "public"."enum_gallery_videos_status" AS ENUM('draft', 'published');--> statement-breakpoint
CREATE TYPE "public"."enum_menu_categories_group" AS ENUM('main', 'alcohol', 'non-alcohol');--> statement-breakpoint
CREATE TYPE "public"."enum_menu_categories_sections_dishes_badges_text" AS ENUM('Премиум', 'Веганское блюдо', 'Вегетарианское блюдо', 'Без добавленного сахара');--> statement-breakpoint
CREATE TYPE "public"."enum_menu_categories_status" AS ENUM('draft', 'published');--> statement-breakpoint
CREATE TABLE "_events_v" (
	"id" serial PRIMARY KEY NOT NULL,
	"parent_id" integer,
	"version_title" varchar,
	"version_subtitle" varchar,
	"version_slug" varchar,
	"version_description" varchar,
	"version_category" "enum__events_v_version_category" DEFAULT 'all',
	"version_date" varchar,
	"version_month" varchar,
	"version_day_of_week" "enum__events_v_version_day_of_week" DEFAULT 'Понедельник',
	"version_time" varchar DEFAULT '20:00',
	"version_schedule_type" "enum__events_v_version_schedule_type" DEFAULT 'recurring',
	"version_specific_date" varchar,
	"version_image_id" integer,
	"version_admission" "enum__events_v_version_admission" DEFAULT 'free',
	"version_hero_subtitle" varchar,
	"version_program_heading" varchar DEFAULT 'В ПРОГРАММЕ',
	"version_updated_at" timestamp(3) with time zone,
	"version_created_at" timestamp(3) with time zone,
	"version__status" "enum__events_v_version_status" DEFAULT 'draft',
	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
	"latest" boolean
);
--> statement-breakpoint
CREATE TABLE "_events_v_version_features" (
	"_order" integer NOT NULL,
	"_parent_id" integer NOT NULL,
	"id" serial PRIMARY KEY NOT NULL,
	"icon" varchar,
	"title" varchar,
	"desc" varchar,
	"_uuid" varchar
);
--> statement-breakpoint
CREATE TABLE "_events_v_version_hero_lines" (
	"_order" integer NOT NULL,
	"_parent_id" integer NOT NULL,
	"id" serial PRIMARY KEY NOT NULL,
	"line" varchar,
	"_uuid" varchar
);
--> statement-breakpoint
CREATE TABLE "_gallery_reports_v" (
	"id" serial PRIMARY KEY NOT NULL,
	"parent_id" integer,
	"version_title" varchar,
	"version_slug" varchar,
	"version_description" varchar,
	"version_category" "enum__gallery_reports_v_version_category" DEFAULT 'all',
	"version_report_date" varchar,
	"version_date" varchar,
	"version_month" varchar,
	"version_day_of_week" varchar,
	"version_time" varchar DEFAULT '20:00',
	"version_image_id" integer,
	"version_admission" "enum__gallery_reports_v_version_admission" DEFAULT 'free',
	"version_order" numeric DEFAULT 0,
	"version_updated_at" timestamp(3) with time zone,
	"version_created_at" timestamp(3) with time zone,
	"version__status" "enum__gallery_reports_v_version_status" DEFAULT 'draft',
	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
	"latest" boolean
);
--> statement-breakpoint
CREATE TABLE "_gallery_reports_v_version_photos" (
	"_order" integer NOT NULL,
	"_parent_id" integer NOT NULL,
	"id" serial PRIMARY KEY NOT NULL,
	"title" varchar,
	"image_id" integer,
	"_uuid" varchar
);
--> statement-breakpoint
CREATE TABLE "_gallery_videos_v" (
	"id" serial PRIMARY KEY NOT NULL,
	"parent_id" integer,
	"version_title" varchar,
	"version_video_id" varchar,
	"version_report_date" varchar,
	"version_date_key" varchar,
	"version_date_label" varchar,
	"version_order" numeric DEFAULT 0,
	"version_updated_at" timestamp(3) with time zone,
	"version_created_at" timestamp(3) with time zone,
	"version__status" "enum__gallery_videos_v_version_status" DEFAULT 'draft',
	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
	"latest" boolean
);
--> statement-breakpoint
CREATE TABLE "_gallery_videos_v_version_videos" (
	"_order" integer NOT NULL,
	"_parent_id" integer NOT NULL,
	"id" serial PRIMARY KEY NOT NULL,
	"title" varchar,
	"video_url" varchar,
	"video_id" varchar,
	"_uuid" varchar
);
--> statement-breakpoint
CREATE TABLE "_media_v" (
	"id" serial PRIMARY KEY NOT NULL,
	"parent_id" integer,
	"version_alt" varchar NOT NULL,
	"version_updated_at" timestamp(3) with time zone,
	"version_created_at" timestamp(3) with time zone,
	"version_url" varchar,
	"version_thumbnail_u_r_l" varchar,
	"version_filename" varchar,
	"version_mime_type" varchar,
	"version_filesize" numeric,
	"version_width" numeric,
	"version_height" numeric,
	"version_focal_x" numeric,
	"version_focal_y" numeric,
	"version_sizes_thumbnail_url" varchar,
	"version_sizes_thumbnail_width" numeric,
	"version_sizes_thumbnail_height" numeric,
	"version_sizes_thumbnail_mime_type" varchar,
	"version_sizes_thumbnail_filesize" numeric,
	"version_sizes_thumbnail_filename" varchar,
	"version_sizes_card_url" varchar,
	"version_sizes_card_width" numeric,
	"version_sizes_card_height" numeric,
	"version_sizes_card_mime_type" varchar,
	"version_sizes_card_filesize" numeric,
	"version_sizes_card_filename" varchar,
	"version_sizes_hero_url" varchar,
	"version_sizes_hero_width" numeric,
	"version_sizes_hero_height" numeric,
	"version_sizes_hero_mime_type" varchar,
	"version_sizes_hero_filesize" numeric,
	"version_sizes_hero_filename" varchar,
	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "_menu_categories_v" (
	"id" serial PRIMARY KEY NOT NULL,
	"parent_id" integer,
	"version_slug" varchar,
	"version_title" varchar,
	"version_subtitle" varchar,
	"version_image_id" integer,
	"version_group" "enum__menu_categories_v_version_group" DEFAULT 'main',
	"version_order" numeric DEFAULT 0,
	"version_updated_at" timestamp(3) with time zone,
	"version_created_at" timestamp(3) with time zone,
	"version__status" "enum__menu_categories_v_version_status" DEFAULT 'draft',
	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
	"latest" boolean
);
--> statement-breakpoint
CREATE TABLE "_menu_categories_v_version_sections" (
	"_order" integer NOT NULL,
	"_parent_id" integer NOT NULL,
	"id" serial PRIMARY KEY NOT NULL,
	"title" varchar,
	"subtitle" varchar,
	"_uuid" varchar
);
--> statement-breakpoint
CREATE TABLE "_menu_categories_v_version_sections_dishes" (
	"_order" integer NOT NULL,
	"_parent_id" integer NOT NULL,
	"id" serial PRIMARY KEY NOT NULL,
	"name" varchar,
	"description" varchar,
	"subtitle" varchar,
	"base" varchar,
	"composition" varchar,
	"weight" varchar,
	"price" varchar,
	"discount" numeric,
	"_uuid" varchar
);
--> statement-breakpoint
CREATE TABLE "_menu_categories_v_version_sections_dishes_badges" (
	"_order" integer NOT NULL,
	"_parent_id" integer NOT NULL,
	"id" serial PRIMARY KEY NOT NULL,
	"text" "enum__menu_categories_v_version_sections_dishes_badges_text",
	"_uuid" varchar
);
--> statement-breakpoint
CREATE TABLE "events" (
	"id" serial PRIMARY KEY NOT NULL,
	"title" varchar,
	"subtitle" varchar,
	"slug" varchar,
	"description" varchar,
	"category" "enum_events_category" DEFAULT 'all',
	"date" varchar,
	"month" varchar,
	"day_of_week" "enum_events_day_of_week" DEFAULT 'Понедельник',
	"time" varchar DEFAULT '20:00',
	"schedule_type" "enum_events_schedule_type" DEFAULT 'recurring',
	"specific_date" varchar,
	"image_id" integer,
	"admission" "enum_events_admission" DEFAULT 'free',
	"hero_subtitle" varchar,
	"program_heading" varchar DEFAULT 'В ПРОГРАММЕ',
	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
	"_status" "enum_events_status" DEFAULT 'draft'
);
--> statement-breakpoint
CREATE TABLE "events_features" (
	"_order" integer NOT NULL,
	"_parent_id" integer NOT NULL,
	"id" varchar PRIMARY KEY NOT NULL,
	"icon" varchar,
	"title" varchar,
	"desc" varchar
);
--> statement-breakpoint
CREATE TABLE "events_hero_lines" (
	"_order" integer NOT NULL,
	"_parent_id" integer NOT NULL,
	"id" varchar PRIMARY KEY NOT NULL,
	"line" varchar
);
--> statement-breakpoint
CREATE TABLE "gallery_reports" (
	"id" serial PRIMARY KEY NOT NULL,
	"title" varchar,
	"slug" varchar,
	"description" varchar,
	"category" "enum_gallery_reports_category" DEFAULT 'all',
	"report_date" varchar,
	"date" varchar,
	"month" varchar,
	"day_of_week" varchar,
	"time" varchar DEFAULT '20:00',
	"image_id" integer,
	"admission" "enum_gallery_reports_admission" DEFAULT 'free',
	"order" numeric DEFAULT 0,
	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
	"_status" "enum_gallery_reports_status" DEFAULT 'draft'
);
--> statement-breakpoint
CREATE TABLE "gallery_reports_photos" (
	"_order" integer NOT NULL,
	"_parent_id" integer NOT NULL,
	"id" varchar PRIMARY KEY NOT NULL,
	"title" varchar,
	"image_id" integer
);
--> statement-breakpoint
CREATE TABLE "gallery_videos" (
	"id" serial PRIMARY KEY NOT NULL,
	"title" varchar,
	"video_id" varchar,
	"report_date" varchar,
	"date_key" varchar,
	"date_label" varchar,
	"order" numeric DEFAULT 0,
	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
	"_status" "enum_gallery_videos_status" DEFAULT 'draft'
);
--> statement-breakpoint
CREATE TABLE "gallery_videos_videos" (
	"_order" integer NOT NULL,
	"_parent_id" integer NOT NULL,
	"id" varchar PRIMARY KEY NOT NULL,
	"title" varchar,
	"video_url" varchar,
	"video_id" varchar
);
--> statement-breakpoint
CREATE TABLE "home_content" (
	"id" serial PRIMARY KEY NOT NULL,
	"quick_nav_title" varchar DEFAULT 'БЫСТРАЯ НАВИГАЦИЯ',
	"menu_title" varchar DEFAULT 'МЕНЮ',
	"events_title" varchar DEFAULT 'РАСПИСАНИЕ НА НЕДЕЛЮ',
	"gallery_title" varchar DEFAULT 'ФОТО И ВИДЕООТЧЁТЫ',
	"updated_at" timestamp(3) with time zone,
	"created_at" timestamp(3) with time zone
);
--> statement-breakpoint
CREATE TABLE "home_content_quick_nav" (
	"_order" integer NOT NULL,
	"_parent_id" integer NOT NULL,
	"id" varchar PRIMARY KEY NOT NULL,
	"icon" varchar,
	"label" varchar NOT NULL,
	"desc" varchar NOT NULL,
	"href" varchar NOT NULL
);
--> statement-breakpoint
CREATE TABLE "home_content_services" (
	"_order" integer NOT NULL,
	"_parent_id" integer NOT NULL,
	"id" varchar PRIMARY KEY NOT NULL,
	"icon" varchar,
	"title" varchar NOT NULL,
	"description" varchar NOT NULL,
	"href" varchar NOT NULL
);
--> statement-breakpoint
CREATE TABLE "media" (
	"id" serial PRIMARY KEY NOT NULL,
	"alt" varchar NOT NULL,
	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
	"url" varchar,
	"thumbnail_u_r_l" varchar,
	"filename" varchar,
	"mime_type" varchar,
	"filesize" numeric,
	"width" numeric,
	"height" numeric,
	"focal_x" numeric,
	"focal_y" numeric,
	"sizes_thumbnail_url" varchar,
	"sizes_thumbnail_width" numeric,
	"sizes_thumbnail_height" numeric,
	"sizes_thumbnail_mime_type" varchar,
	"sizes_thumbnail_filesize" numeric,
	"sizes_thumbnail_filename" varchar,
	"sizes_card_url" varchar,
	"sizes_card_width" numeric,
	"sizes_card_height" numeric,
	"sizes_card_mime_type" varchar,
	"sizes_card_filesize" numeric,
	"sizes_card_filename" varchar,
	"sizes_hero_url" varchar,
	"sizes_hero_width" numeric,
	"sizes_hero_height" numeric,
	"sizes_hero_mime_type" varchar,
	"sizes_hero_filesize" numeric,
	"sizes_hero_filename" varchar
);
--> statement-breakpoint
CREATE TABLE "menu_categories" (
	"id" serial PRIMARY KEY NOT NULL,
	"slug" varchar,
	"title" varchar,
	"subtitle" varchar,
	"image_id" integer,
	"group" "enum_menu_categories_group" DEFAULT 'main',
	"order" numeric DEFAULT 0,
	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
	"_status" "enum_menu_categories_status" DEFAULT 'draft'
);
--> statement-breakpoint
CREATE TABLE "menu_categories_sections" (
	"_order" integer NOT NULL,
	"_parent_id" integer NOT NULL,
	"id" varchar PRIMARY KEY NOT NULL,
	"title" varchar,
	"subtitle" varchar
);
--> statement-breakpoint
CREATE TABLE "menu_categories_sections_dishes" (
	"_order" integer NOT NULL,
	"_parent_id" varchar NOT NULL,
	"id" varchar PRIMARY KEY NOT NULL,
	"name" varchar,
	"description" varchar,
	"subtitle" varchar,
	"base" varchar,
	"composition" varchar,
	"weight" varchar,
	"price" varchar,
	"discount" numeric
);
--> statement-breakpoint
CREATE TABLE "menu_categories_sections_dishes_badges" (
	"_order" integer NOT NULL,
	"_parent_id" varchar NOT NULL,
	"id" varchar PRIMARY KEY NOT NULL,
	"text" "enum_menu_categories_sections_dishes_badges_text"
);
--> statement-breakpoint
CREATE TABLE "payload_kv" (
	"id" serial PRIMARY KEY NOT NULL,
	"key" varchar NOT NULL,
	"data" jsonb NOT NULL
);
--> statement-breakpoint
CREATE TABLE "payload_locked_documents" (
	"id" serial PRIMARY KEY NOT NULL,
	"global_slug" varchar,
	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "payload_locked_documents_rels" (
	"id" serial PRIMARY KEY NOT NULL,
	"order" integer,
	"parent_id" integer NOT NULL,
	"path" varchar NOT NULL,
	"users_id" integer,
	"events_id" integer,
	"menu_categories_id" integer,
	"gallery_videos_id" integer,
	"gallery_reports_id" integer,
	"media_id" integer
);
--> statement-breakpoint
CREATE TABLE "payload_migrations" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" varchar,
	"batch" numeric,
	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "payload_preferences" (
	"id" serial PRIMARY KEY NOT NULL,
	"key" varchar,
	"value" jsonb,
	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "payload_preferences_rels" (
	"id" serial PRIMARY KEY NOT NULL,
	"order" integer,
	"parent_id" integer NOT NULL,
	"path" varchar NOT NULL,
	"users_id" integer
);
--> statement-breakpoint
CREATE TABLE "settings" (
	"id" serial PRIMARY KEY NOT NULL,
	"site_name" varchar DEFAULT 'POIDEM POZHREM!',
	"tagline" varchar DEFAULT 'Ресторан на Фукуоке, где каждый день что-то происходит!',
	"description" varchar DEFAULT 'Сообщество и поддержка русскоязычных на Фукуоке',
	"footer_heart" varchar DEFAULT 'POIDEM POZHREM — в этом ресторане реально жизнь становится вкусной!',
	"cuisines" varchar DEFAULT 'РУССКАЯ • КАВКАЗСКАЯ • ВОСТОЧНАЯ • ЕВРОПЕЙСКАЯ • АЗИАТСКАЯ КУХНЯ',
	"neon_slogan_line1" varchar DEFAULT 'Я ВЫБИРАЮ',
	"neon_slogan_accent1" varchar DEFAULT 'ВКУСНО',
	"neon_slogan_accent2" varchar DEFAULT 'ЖИТЬ!',
	"neon_slogan_subtitle" varchar DEFAULT 'И ЭТО ЛУЧШЕЕ РЕШЕНИЕ СЕГОДНЯ',
	"phone" varchar DEFAULT '+84 783 779 879',
	"phone_href" varchar DEFAULT 'tel:+84783779879',
	"email" varchar DEFAULT 'poidempozhrem@gmail.com',
	"address" varchar DEFAULT '97 Trần Hưng Đạo, Dương Đông, Phú Quốc',
	"address_full" varchar DEFAULT '97 Trần Hưng Đạo, Дương Đông, Phú Quốc, 2 этаж (вход через Holiday Center)',
	"telegram" varchar DEFAULT 'https://t.me/poidem_pozhrem',
	"telegram_bot" varchar DEFAULT 'https://t.me/poidem_pozhrem_bot',
	"whatsapp" varchar DEFAULT 'https://wa.me/84783779879',
	"instagram" varchar DEFAULT 'https://instagram.com/poidem_po_zhrem',
	"facebook" varchar DEFAULT 'https://facebook.com/PoidemPozhrem',
	"youtube" varchar DEFAULT 'https://youtube.com/@poidempozhrEM',
	"tiktok" varchar DEFAULT 'https://tiktok.com/@poidem_pozhrem',
	"zalo" varchar DEFAULT 'https://zalo.me/84783779879',
	"google_maps" varchar DEFAULT 'https://maps.google.com/?q=97+Tran+Hung+Dao+Duong+Dong+Phu+Quoc',
	"yandex_maps" varchar DEFAULT 'https://yandex.ru/maps/?pt=103.9530,10.2100&z=17&l=map',
	"grab" varchar DEFAULT 'https://r.grab.com/g/6-20260801_223246_0BD425829C55464F9ACF75301A16722E_MEXMPS-5-C76UNTW3VLBDTT',
	"working_hours_label" varchar DEFAULT 'Ежедневно',
	"working_hours_hours" varchar DEFAULT '24/7',
	"working_hours_highlighted" boolean DEFAULT true,
	"updated_at" timestamp(3) with time zone,
	"created_at" timestamp(3) with time zone
);
--> statement-breakpoint
CREATE TABLE "users" (
	"id" serial PRIMARY KEY NOT NULL,
	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
	"email" varchar NOT NULL,
	"reset_password_token" varchar,
	"reset_password_expiration" timestamp(3) with time zone,
	"salt" varchar,
	"hash" varchar,
	"login_attempts" numeric DEFAULT 0,
	"lock_until" timestamp(3) with time zone
);
--> statement-breakpoint
CREATE TABLE "users_sessions" (
	"_order" integer NOT NULL,
	"_parent_id" integer NOT NULL,
	"id" varchar PRIMARY KEY NOT NULL,
	"created_at" timestamp(3) with time zone,
	"expires_at" timestamp(3) with time zone NOT NULL
);
--> statement-breakpoint
ALTER TABLE "_events_v" ADD CONSTRAINT "_events_v_parent_id_events_id_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."events"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "_events_v" ADD CONSTRAINT "_events_v_version_image_id_media_id_fk" FOREIGN KEY ("version_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "_events_v_version_features" ADD CONSTRAINT "_events_v_version_features_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_events_v"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "_events_v_version_hero_lines" ADD CONSTRAINT "_events_v_version_hero_lines_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_events_v"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "_gallery_reports_v" ADD CONSTRAINT "_gallery_reports_v_parent_id_gallery_reports_id_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."gallery_reports"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "_gallery_reports_v" ADD CONSTRAINT "_gallery_reports_v_version_image_id_media_id_fk" FOREIGN KEY ("version_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "_gallery_reports_v_version_photos" ADD CONSTRAINT "_gallery_reports_v_version_photos_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "_gallery_reports_v_version_photos" ADD CONSTRAINT "_gallery_reports_v_version_photos_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_gallery_reports_v"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "_gallery_videos_v" ADD CONSTRAINT "_gallery_videos_v_parent_id_gallery_videos_id_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."gallery_videos"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "_gallery_videos_v_version_videos" ADD CONSTRAINT "_gallery_videos_v_version_videos_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_gallery_videos_v"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "_media_v" ADD CONSTRAINT "_media_v_parent_id_media_id_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "_menu_categories_v" ADD CONSTRAINT "_menu_categories_v_parent_id_menu_categories_id_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."menu_categories"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "_menu_categories_v" ADD CONSTRAINT "_menu_categories_v_version_image_id_media_id_fk" FOREIGN KEY ("version_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "_menu_categories_v_version_sections" ADD CONSTRAINT "_menu_categories_v_version_sections_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_menu_categories_v"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "_menu_categories_v_version_sections_dishes" ADD CONSTRAINT "_menu_categories_v_version_sections_dishes_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_menu_categories_v_version_sections"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "_menu_categories_v_version_sections_dishes_badges" ADD CONSTRAINT "_menu_categories_v_version_sections_dishes_badges_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_menu_categories_v_version_sections_dishes"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "events" ADD CONSTRAINT "events_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "events_features" ADD CONSTRAINT "events_features_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."events"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "events_hero_lines" ADD CONSTRAINT "events_hero_lines_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."events"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "gallery_reports" ADD CONSTRAINT "gallery_reports_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "gallery_reports_photos" ADD CONSTRAINT "gallery_reports_photos_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "gallery_reports_photos" ADD CONSTRAINT "gallery_reports_photos_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."gallery_reports"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "gallery_videos_videos" ADD CONSTRAINT "gallery_videos_videos_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."gallery_videos"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "home_content_quick_nav" ADD CONSTRAINT "home_content_quick_nav_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."home_content"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "home_content_services" ADD CONSTRAINT "home_content_services_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."home_content"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "menu_categories" ADD CONSTRAINT "menu_categories_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "menu_categories_sections" ADD CONSTRAINT "menu_categories_sections_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."menu_categories"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "menu_categories_sections_dishes" ADD CONSTRAINT "menu_categories_sections_dishes_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."menu_categories_sections"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "menu_categories_sections_dishes_badges" ADD CONSTRAINT "menu_categories_sections_dishes_badges_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."menu_categories_sections_dishes"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."payload_locked_documents"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_users_fk" FOREIGN KEY ("users_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_events_fk" FOREIGN KEY ("events_id") REFERENCES "public"."events"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_menu_categories_fk" FOREIGN KEY ("menu_categories_id") REFERENCES "public"."menu_categories"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_gallery_videos_fk" FOREIGN KEY ("gallery_videos_id") REFERENCES "public"."gallery_videos"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_gallery_reports_fk" FOREIGN KEY ("gallery_reports_id") REFERENCES "public"."gallery_reports"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_media_fk" FOREIGN KEY ("media_id") REFERENCES "public"."media"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "payload_preferences_rels" ADD CONSTRAINT "payload_preferences_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."payload_preferences"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "payload_preferences_rels" ADD CONSTRAINT "payload_preferences_rels_users_fk" FOREIGN KEY ("users_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "users_sessions" ADD CONSTRAINT "users_sessions_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
CREATE INDEX "_events_v_parent_idx" ON "_events_v" USING btree ("parent_id");--> statement-breakpoint
CREATE INDEX "_events_v_version_version_slug_idx" ON "_events_v" USING btree ("version_slug");--> statement-breakpoint
CREATE INDEX "_events_v_version_version_image_idx" ON "_events_v" USING btree ("version_image_id");--> statement-breakpoint
CREATE INDEX "_events_v_version_version_updated_at_idx" ON "_events_v" USING btree ("version_updated_at");--> statement-breakpoint
CREATE INDEX "_events_v_version_version_created_at_idx" ON "_events_v" USING btree ("version_created_at");--> statement-breakpoint
CREATE INDEX "_events_v_version_version__status_idx" ON "_events_v" USING btree ("version__status");--> statement-breakpoint
CREATE INDEX "_events_v_created_at_idx" ON "_events_v" USING btree ("created_at");--> statement-breakpoint
CREATE INDEX "_events_v_updated_at_idx" ON "_events_v" USING btree ("updated_at");--> statement-breakpoint
CREATE INDEX "_events_v_latest_idx" ON "_events_v" USING btree ("latest");--> statement-breakpoint
CREATE INDEX "_events_v_version_features_order_idx" ON "_events_v_version_features" USING btree ("_order");--> statement-breakpoint
CREATE INDEX "_events_v_version_features_parent_id_idx" ON "_events_v_version_features" USING btree ("_parent_id");--> statement-breakpoint
CREATE INDEX "_events_v_version_hero_lines_order_idx" ON "_events_v_version_hero_lines" USING btree ("_order");--> statement-breakpoint
CREATE INDEX "_events_v_version_hero_lines_parent_id_idx" ON "_events_v_version_hero_lines" USING btree ("_parent_id");--> statement-breakpoint
CREATE INDEX "_gallery_reports_v_parent_idx" ON "_gallery_reports_v" USING btree ("parent_id");--> statement-breakpoint
CREATE INDEX "_gallery_reports_v_version_version_slug_idx" ON "_gallery_reports_v" USING btree ("version_slug");--> statement-breakpoint
CREATE INDEX "_gallery_reports_v_version_version_image_idx" ON "_gallery_reports_v" USING btree ("version_image_id");--> statement-breakpoint
CREATE INDEX "_gallery_reports_v_version_version_updated_at_idx" ON "_gallery_reports_v" USING btree ("version_updated_at");--> statement-breakpoint
CREATE INDEX "_gallery_reports_v_version_version_created_at_idx" ON "_gallery_reports_v" USING btree ("version_created_at");--> statement-breakpoint
CREATE INDEX "_gallery_reports_v_version_version__status_idx" ON "_gallery_reports_v" USING btree ("version__status");--> statement-breakpoint
CREATE INDEX "_gallery_reports_v_created_at_idx" ON "_gallery_reports_v" USING btree ("created_at");--> statement-breakpoint
CREATE INDEX "_gallery_reports_v_updated_at_idx" ON "_gallery_reports_v" USING btree ("updated_at");--> statement-breakpoint
CREATE INDEX "_gallery_reports_v_latest_idx" ON "_gallery_reports_v" USING btree ("latest");--> statement-breakpoint
CREATE INDEX "_gallery_reports_v_version_photos_order_idx" ON "_gallery_reports_v_version_photos" USING btree ("_order");--> statement-breakpoint
CREATE INDEX "_gallery_reports_v_version_photos_parent_id_idx" ON "_gallery_reports_v_version_photos" USING btree ("_parent_id");--> statement-breakpoint
CREATE INDEX "_gallery_reports_v_version_photos_image_idx" ON "_gallery_reports_v_version_photos" USING btree ("image_id");--> statement-breakpoint
CREATE INDEX "_gallery_videos_v_parent_idx" ON "_gallery_videos_v" USING btree ("parent_id");--> statement-breakpoint
CREATE INDEX "_gallery_videos_v_version_version_updated_at_idx" ON "_gallery_videos_v" USING btree ("version_updated_at");--> statement-breakpoint
CREATE INDEX "_gallery_videos_v_version_version_created_at_idx" ON "_gallery_videos_v" USING btree ("version_created_at");--> statement-breakpoint
CREATE INDEX "_gallery_videos_v_version_version__status_idx" ON "_gallery_videos_v" USING btree ("version__status");--> statement-breakpoint
CREATE INDEX "_gallery_videos_v_created_at_idx" ON "_gallery_videos_v" USING btree ("created_at");--> statement-breakpoint
CREATE INDEX "_gallery_videos_v_updated_at_idx" ON "_gallery_videos_v" USING btree ("updated_at");--> statement-breakpoint
CREATE INDEX "_gallery_videos_v_latest_idx" ON "_gallery_videos_v" USING btree ("latest");--> statement-breakpoint
CREATE INDEX "_gallery_videos_v_version_videos_order_idx" ON "_gallery_videos_v_version_videos" USING btree ("_order");--> statement-breakpoint
CREATE INDEX "_gallery_videos_v_version_videos_parent_id_idx" ON "_gallery_videos_v_version_videos" USING btree ("_parent_id");--> statement-breakpoint
CREATE INDEX "_media_v_parent_idx" ON "_media_v" USING btree ("parent_id");--> statement-breakpoint
CREATE INDEX "_media_v_version_version_updated_at_idx" ON "_media_v" USING btree ("version_updated_at");--> statement-breakpoint
CREATE INDEX "_media_v_version_version_created_at_idx" ON "_media_v" USING btree ("version_created_at");--> statement-breakpoint
CREATE INDEX "_media_v_version_version_filename_idx" ON "_media_v" USING btree ("version_filename");--> statement-breakpoint
CREATE INDEX "_media_v_version_sizes_thumbnail_version_sizes_thumbnail_idx" ON "_media_v" USING btree ("version_sizes_thumbnail_filename");--> statement-breakpoint
CREATE INDEX "_media_v_version_sizes_card_version_sizes_card_filename_idx" ON "_media_v" USING btree ("version_sizes_card_filename");--> statement-breakpoint
CREATE INDEX "_media_v_version_sizes_hero_version_sizes_hero_filename_idx" ON "_media_v" USING btree ("version_sizes_hero_filename");--> statement-breakpoint
CREATE INDEX "_media_v_created_at_idx" ON "_media_v" USING btree ("created_at");--> statement-breakpoint
CREATE INDEX "_media_v_updated_at_idx" ON "_media_v" USING btree ("updated_at");--> statement-breakpoint
CREATE INDEX "_menu_categories_v_parent_idx" ON "_menu_categories_v" USING btree ("parent_id");--> statement-breakpoint
CREATE INDEX "_menu_categories_v_version_version_slug_idx" ON "_menu_categories_v" USING btree ("version_slug");--> statement-breakpoint
CREATE INDEX "_menu_categories_v_version_version_image_idx" ON "_menu_categories_v" USING btree ("version_image_id");--> statement-breakpoint
CREATE INDEX "_menu_categories_v_version_version_updated_at_idx" ON "_menu_categories_v" USING btree ("version_updated_at");--> statement-breakpoint
CREATE INDEX "_menu_categories_v_version_version_created_at_idx" ON "_menu_categories_v" USING btree ("version_created_at");--> statement-breakpoint
CREATE INDEX "_menu_categories_v_version_version__status_idx" ON "_menu_categories_v" USING btree ("version__status");--> statement-breakpoint
CREATE INDEX "_menu_categories_v_created_at_idx" ON "_menu_categories_v" USING btree ("created_at");--> statement-breakpoint
CREATE INDEX "_menu_categories_v_updated_at_idx" ON "_menu_categories_v" USING btree ("updated_at");--> statement-breakpoint
CREATE INDEX "_menu_categories_v_latest_idx" ON "_menu_categories_v" USING btree ("latest");--> statement-breakpoint
CREATE INDEX "_menu_categories_v_version_sections_order_idx" ON "_menu_categories_v_version_sections" USING btree ("_order");--> statement-breakpoint
CREATE INDEX "_menu_categories_v_version_sections_parent_id_idx" ON "_menu_categories_v_version_sections" USING btree ("_parent_id");--> statement-breakpoint
CREATE INDEX "_menu_categories_v_version_sections_dishes_order_idx" ON "_menu_categories_v_version_sections_dishes" USING btree ("_order");--> statement-breakpoint
CREATE INDEX "_menu_categories_v_version_sections_dishes_parent_id_idx" ON "_menu_categories_v_version_sections_dishes" USING btree ("_parent_id");--> statement-breakpoint
CREATE INDEX "_menu_categories_v_version_sections_dishes_badges_order_idx" ON "_menu_categories_v_version_sections_dishes_badges" USING btree ("_order");--> statement-breakpoint
CREATE INDEX "_menu_categories_v_version_sections_dishes_badges_parent_id_idx" ON "_menu_categories_v_version_sections_dishes_badges" USING btree ("_parent_id");--> statement-breakpoint
CREATE UNIQUE INDEX "events_slug_idx" ON "events" USING btree ("slug");--> statement-breakpoint
CREATE INDEX "events_image_idx" ON "events" USING btree ("image_id");--> statement-breakpoint
CREATE INDEX "events_updated_at_idx" ON "events" USING btree ("updated_at");--> statement-breakpoint
CREATE INDEX "events_created_at_idx" ON "events" USING btree ("created_at");--> statement-breakpoint
CREATE INDEX "events__status_idx" ON "events" USING btree ("_status");--> statement-breakpoint
CREATE INDEX "events_features_order_idx" ON "events_features" USING btree ("_order");--> statement-breakpoint
CREATE INDEX "events_features_parent_id_idx" ON "events_features" USING btree ("_parent_id");--> statement-breakpoint
CREATE INDEX "events_hero_lines_order_idx" ON "events_hero_lines" USING btree ("_order");--> statement-breakpoint
CREATE INDEX "events_hero_lines_parent_id_idx" ON "events_hero_lines" USING btree ("_parent_id");--> statement-breakpoint
CREATE UNIQUE INDEX "gallery_reports_slug_idx" ON "gallery_reports" USING btree ("slug");--> statement-breakpoint
CREATE INDEX "gallery_reports_image_idx" ON "gallery_reports" USING btree ("image_id");--> statement-breakpoint
CREATE INDEX "gallery_reports_updated_at_idx" ON "gallery_reports" USING btree ("updated_at");--> statement-breakpoint
CREATE INDEX "gallery_reports_created_at_idx" ON "gallery_reports" USING btree ("created_at");--> statement-breakpoint
CREATE INDEX "gallery_reports__status_idx" ON "gallery_reports" USING btree ("_status");--> statement-breakpoint
CREATE INDEX "gallery_reports_photos_order_idx" ON "gallery_reports_photos" USING btree ("_order");--> statement-breakpoint
CREATE INDEX "gallery_reports_photos_parent_id_idx" ON "gallery_reports_photos" USING btree ("_parent_id");--> statement-breakpoint
CREATE INDEX "gallery_reports_photos_image_idx" ON "gallery_reports_photos" USING btree ("image_id");--> statement-breakpoint
CREATE INDEX "gallery_videos_updated_at_idx" ON "gallery_videos" USING btree ("updated_at");--> statement-breakpoint
CREATE INDEX "gallery_videos_created_at_idx" ON "gallery_videos" USING btree ("created_at");--> statement-breakpoint
CREATE INDEX "gallery_videos__status_idx" ON "gallery_videos" USING btree ("_status");--> statement-breakpoint
CREATE INDEX "gallery_videos_videos_order_idx" ON "gallery_videos_videos" USING btree ("_order");--> statement-breakpoint
CREATE INDEX "gallery_videos_videos_parent_id_idx" ON "gallery_videos_videos" USING btree ("_parent_id");--> statement-breakpoint
CREATE INDEX "home_content_quick_nav_order_idx" ON "home_content_quick_nav" USING btree ("_order");--> statement-breakpoint
CREATE INDEX "home_content_quick_nav_parent_id_idx" ON "home_content_quick_nav" USING btree ("_parent_id");--> statement-breakpoint
CREATE INDEX "home_content_services_order_idx" ON "home_content_services" USING btree ("_order");--> statement-breakpoint
CREATE INDEX "home_content_services_parent_id_idx" ON "home_content_services" USING btree ("_parent_id");--> statement-breakpoint
CREATE INDEX "media_updated_at_idx" ON "media" USING btree ("updated_at");--> statement-breakpoint
CREATE INDEX "media_created_at_idx" ON "media" USING btree ("created_at");--> statement-breakpoint
CREATE UNIQUE INDEX "media_filename_idx" ON "media" USING btree ("filename");--> statement-breakpoint
CREATE INDEX "media_sizes_thumbnail_sizes_thumbnail_filename_idx" ON "media" USING btree ("sizes_thumbnail_filename");--> statement-breakpoint
CREATE INDEX "media_sizes_card_sizes_card_filename_idx" ON "media" USING btree ("sizes_card_filename");--> statement-breakpoint
CREATE INDEX "media_sizes_hero_sizes_hero_filename_idx" ON "media" USING btree ("sizes_hero_filename");--> statement-breakpoint
CREATE UNIQUE INDEX "menu_categories_slug_idx" ON "menu_categories" USING btree ("slug");--> statement-breakpoint
CREATE INDEX "menu_categories_image_idx" ON "menu_categories" USING btree ("image_id");--> statement-breakpoint
CREATE INDEX "menu_categories_updated_at_idx" ON "menu_categories" USING btree ("updated_at");--> statement-breakpoint
CREATE INDEX "menu_categories_created_at_idx" ON "menu_categories" USING btree ("created_at");--> statement-breakpoint
CREATE INDEX "menu_categories__status_idx" ON "menu_categories" USING btree ("_status");--> statement-breakpoint
CREATE INDEX "menu_categories_sections_order_idx" ON "menu_categories_sections" USING btree ("_order");--> statement-breakpoint
CREATE INDEX "menu_categories_sections_parent_id_idx" ON "menu_categories_sections" USING btree ("_parent_id");--> statement-breakpoint
CREATE INDEX "menu_categories_sections_dishes_order_idx" ON "menu_categories_sections_dishes" USING btree ("_order");--> statement-breakpoint
CREATE INDEX "menu_categories_sections_dishes_parent_id_idx" ON "menu_categories_sections_dishes" USING btree ("_parent_id");--> statement-breakpoint
CREATE INDEX "menu_categories_sections_dishes_badges_order_idx" ON "menu_categories_sections_dishes_badges" USING btree ("_order");--> statement-breakpoint
CREATE INDEX "menu_categories_sections_dishes_badges_parent_id_idx" ON "menu_categories_sections_dishes_badges" USING btree ("_parent_id");--> statement-breakpoint
CREATE UNIQUE INDEX "payload_kv_key_idx" ON "payload_kv" USING btree ("key");--> statement-breakpoint
CREATE INDEX "payload_locked_documents_global_slug_idx" ON "payload_locked_documents" USING btree ("global_slug");--> statement-breakpoint
CREATE INDEX "payload_locked_documents_updated_at_idx" ON "payload_locked_documents" USING btree ("updated_at");--> statement-breakpoint
CREATE INDEX "payload_locked_documents_created_at_idx" ON "payload_locked_documents" USING btree ("created_at");--> statement-breakpoint
CREATE INDEX "payload_locked_documents_rels_order_idx" ON "payload_locked_documents_rels" USING btree ("order");--> statement-breakpoint
CREATE INDEX "payload_locked_documents_rels_parent_idx" ON "payload_locked_documents_rels" USING btree ("parent_id");--> statement-breakpoint
CREATE INDEX "payload_locked_documents_rels_path_idx" ON "payload_locked_documents_rels" USING btree ("path");--> statement-breakpoint
CREATE INDEX "payload_locked_documents_rels_users_id_idx" ON "payload_locked_documents_rels" USING btree ("users_id");--> statement-breakpoint
CREATE INDEX "payload_locked_documents_rels_events_id_idx" ON "payload_locked_documents_rels" USING btree ("events_id");--> statement-breakpoint
CREATE INDEX "payload_locked_documents_rels_menu_categories_id_idx" ON "payload_locked_documents_rels" USING btree ("menu_categories_id");--> statement-breakpoint
CREATE INDEX "payload_locked_documents_rels_gallery_videos_id_idx" ON "payload_locked_documents_rels" USING btree ("gallery_videos_id");--> statement-breakpoint
CREATE INDEX "payload_locked_documents_rels_gallery_reports_id_idx" ON "payload_locked_documents_rels" USING btree ("gallery_reports_id");--> statement-breakpoint
CREATE INDEX "payload_locked_documents_rels_media_id_idx" ON "payload_locked_documents_rels" USING btree ("media_id");--> statement-breakpoint
CREATE INDEX "payload_migrations_updated_at_idx" ON "payload_migrations" USING btree ("updated_at");--> statement-breakpoint
CREATE INDEX "payload_migrations_created_at_idx" ON "payload_migrations" USING btree ("created_at");--> statement-breakpoint
CREATE INDEX "payload_preferences_key_idx" ON "payload_preferences" USING btree ("key");--> statement-breakpoint
CREATE INDEX "payload_preferences_updated_at_idx" ON "payload_preferences" USING btree ("updated_at");--> statement-breakpoint
CREATE INDEX "payload_preferences_created_at_idx" ON "payload_preferences" USING btree ("created_at");--> statement-breakpoint
CREATE INDEX "payload_preferences_rels_order_idx" ON "payload_preferences_rels" USING btree ("order");--> statement-breakpoint
CREATE INDEX "payload_preferences_rels_parent_idx" ON "payload_preferences_rels" USING btree ("parent_id");--> statement-breakpoint
CREATE INDEX "payload_preferences_rels_path_idx" ON "payload_preferences_rels" USING btree ("path");--> statement-breakpoint
CREATE INDEX "payload_preferences_rels_users_id_idx" ON "payload_preferences_rels" USING btree ("users_id");--> statement-breakpoint
CREATE INDEX "users_updated_at_idx" ON "users" USING btree ("updated_at");--> statement-breakpoint
CREATE INDEX "users_created_at_idx" ON "users" USING btree ("created_at");--> statement-breakpoint
CREATE UNIQUE INDEX "users_email_idx" ON "users" USING btree ("email");--> statement-breakpoint
CREATE INDEX "users_sessions_order_idx" ON "users_sessions" USING btree ("_order");--> statement-breakpoint
CREATE INDEX "users_sessions_parent_id_idx" ON "users_sessions" USING btree ("_parent_id");