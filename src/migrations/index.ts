import * as migration_20260920_161808_gallery_reports_videos_date_url from './20260920_161808_gallery_reports_videos_date_url';
import * as migration_20260920_200720_gallery_photos_videos_arrays from './20260920_200720_gallery_photos_videos_arrays';
import * as migration_20260922_gallery_featured from './20260922_gallery_featured';
import * as migration_20260922_drop_gallery_featured from './20260922_drop_gallery_featured';
import * as migration_20260923_events_accent_color from './20260923_events_accent_color';
import * as migration_20260923_home_content_gallery_picks from './20260923_home_content_gallery_picks';

export const migrations = [
  {
    up: migration_20260920_161808_gallery_reports_videos_date_url.up,
    down: migration_20260920_161808_gallery_reports_videos_date_url.down,
    name: '20260920_161808_gallery_reports_videos_date_url',
  },
  {
    up: migration_20260920_200720_gallery_photos_videos_arrays.up,
    down: migration_20260920_200720_gallery_photos_videos_arrays.down,
    name: '20260920_200720_gallery_photos_videos_arrays'
  },
  {
    up: migration_20260922_gallery_featured.up,
    down: migration_20260922_gallery_featured.down,
    name: '20260922_gallery_featured'
  },
  {
    up: migration_20260922_drop_gallery_featured.up,
    down: migration_20260922_drop_gallery_featured.down,
    name: '20260922_drop_gallery_featured'
  },
  {
    up: migration_20260923_events_accent_color.up,
    down: migration_20260923_events_accent_color.down,
    name: '20260923_events_accent_color'
  },
  {
    up: migration_20260923_home_content_gallery_picks.up,
    down: migration_20260923_home_content_gallery_picks.down,
    name: '20260923_home_content_gallery_picks'
  },
];