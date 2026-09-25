import path from "path"
import { fileURLToPath } from "url"

import { postgresAdapter } from "@payloadcms/db-postgres"
import { lexicalEditor } from "@payloadcms/richtext-lexical"
import { vercelBlobStorage } from "@payloadcms/storage-vercel-blob"
import { buildConfig } from "payload"
import sharp from "sharp"

import { Users } from "./src/collections/Users"
import { Settings } from "./src/collections/Settings"
import { HomeContent } from "./src/globals/HomeContent"
import { Events } from "./src/collections/Events"
import { MenuCategories } from "./src/collections/MenuCategories"
import { GalleryVideos } from "./src/collections/GalleryVideos"
import { GalleryReports } from "./src/collections/GalleryReports"
import { Media } from "./src/collections/Media"

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
  admin: {
    user: Users.slug,
    importMap: {
      baseDir: path.resolve(dirname),
    },
  },
  collections: [
    Users,
    Events,
    MenuCategories,
    GalleryVideos,
    GalleryReports,
    Media,
  ],
  globals: [Settings, HomeContent],
  editor: lexicalEditor(),
  secret: process.env.PAYLOAD_SECRET || "",
  sharp,
  typescript: {
    outputFile: path.resolve(dirname, "payload-types.ts"),
  },
  db: postgresAdapter({
    pool: {
      connectionString: process.env.DATABASE_URI || "",
    },
    push: process.env.DATABASE_PUSH === "true",
  }),
  plugins: [
    vercelBlobStorage({
      collections: {
        media: true,
      },
      token: process.env.BLOB_READ_WRITE_TOKEN,
    }),
  ],
})