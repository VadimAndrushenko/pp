import path from "path"
import { fileURLToPath } from "url"

import { postgresAdapter } from "@payloadcms/db-postgres"
import { lexicalEditor } from "@payloadcms/richtext-lexical"
import { cloudStoragePlugin } from "@payloadcms/plugin-cloud-storage"
import { buildConfig } from "payload"

import { Users } from "./src/collections/Users"
import { Settings } from "./src/collections/Settings"
import { HomeContent } from "./src/globals/HomeContent"
import { Events } from "./src/collections/Events"
import { MenuCategories } from "./src/collections/MenuCategories"
import { GalleryVideos } from "./src/collections/GalleryVideos"
import { GalleryReports } from "./src/collections/GalleryReports"
import { Media } from "./src/collections/Media"
import { vercelBlobPrivateAdapter } from "./src/lib/blobAdapter"

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
    cloudStoragePlugin({
      collections: {
        media: {
          adapter: vercelBlobPrivateAdapter,
        },
      },
    }),
  ],
})