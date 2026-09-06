import path from "path"
import { fileURLToPath } from "url"

import { postgresAdapter } from "@payloadcms/db-postgres"
import { lexicalEditor } from "@payloadcms/richtext-lexical"
import { buildConfig, type Config } from "payload"
import sharp from "sharp"

import { Users } from "./src/collections/Users"
import { Settings } from "./src/collections/Settings"
import { Services } from "./src/collections/Services"
import { Events } from "./src/collections/Events"
import { MenuCategories } from "./src/collections/MenuCategories"
import { GalleryPhotos } from "./src/collections/GalleryPhotos"
import { GalleryVideos } from "./src/collections/GalleryVideos"

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
  admin: {
    user: Users.slug,
    importMap: {
      baseDir: path.resolve(dirname),
    },
  },
  collections: [Users, Services, Events, MenuCategories, GalleryPhotos, GalleryVideos],
  globals: [Settings],
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
  sharp: sharp as unknown as Config["sharp"],
})
