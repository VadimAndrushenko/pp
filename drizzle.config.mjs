import { defineConfig } from "drizzle-kit"
export default defineConfig({
  dialect: "postgresql",
  schema: "./src/payload-generated-schema.ts",
  out: "./src/migrations",
  dbCredentials: { url: "postgresql://neondb_owner:npg_WYhR92LkdBHe@ep-lively-cell-b3ezho1f-pooler.c-4.ap-southeast-1.aws.neon.tech/neondb?channel_binding=require&sslmode=require" },
})
