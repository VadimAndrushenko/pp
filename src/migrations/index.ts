import * as migration_20260920_161808_gallery_reports_videos_date_url from './20260920_161808_gallery_reports_videos_date_url';
import * as migration_20260920_200720_gallery_photos_videos_arrays from './20260920_200720_gallery_photos_videos_arrays';
import * as migration_20260922_gallery_featured from './20260922_gallery_featured';

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
];