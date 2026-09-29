import { postgresAdapter } from '@payloadcms/db-postgres'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import { vercelBlobStorage } from '@payloadcms/storage-vercel-blob'
import path from 'path'
import { buildConfig } from 'payload'
import { fileURLToPath } from 'url'
import sharp from 'sharp'

import { Users } from './collections/Users'
import { Settings } from './collections/Settings'
import { HomeContent } from './globals/HomeContent'
import { Events } from './collections/Events'
import { MenuCategories } from './collections/MenuCategories'
import { GalleryVideos } from './collections/GalleryVideos'
import { GalleryReports } from './collections/GalleryReports'
import { Media } from './collections/Media'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

const rootDir = path.resolve(dirname, '..')

type SharpDependency = NonNullable<Parameters<typeof buildConfig>[0]['sharp']>

export default buildConfig({
  admin: {
    user: Users.slug,
    importMap: {
      baseDir: rootDir,
    },
  },
  collections: [Users, Events, MenuCategories, GalleryVideos, GalleryReports, Media],
  globals: [Settings, HomeContent],
  editor: lexicalEditor(),
  secret: process.env.PAYLOAD_SECRET || '',
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  db: postgresAdapter({
    pool: {
      connectionString: process.env.DATABASE_URI || process.env.DATABASE_URL || '',
    },
    push: process.env.DATABASE_PUSH === 'true',
  }),
  sharp: sharp as unknown as SharpDependency,
  plugins: [
    vercelBlobStorage({
      collections: {
        media: true,
      },
      token: process.env.BLOB_READ_WRITE_TOKEN,
    }),
  ],
})
