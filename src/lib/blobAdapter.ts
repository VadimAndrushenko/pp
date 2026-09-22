import { del, get, put } from "@vercel/blob"
import type { Adapter } from "@payloadcms/plugin-cloud-storage/types"

const token = process.env.BLOB_READ_WRITE_TOKEN

export const vercelBlobPrivateAdapter: Adapter = ({ collection }) => {
  const slug = collection.slug

  return {
    name: "vercel-blob-private",

    generateURL: ({ data, filename, prefix }) => {
      if (data?.url && !data.url.startsWith("/api/")) {
        return data.url
      }
      const key = [slug, prefix, filename].filter(Boolean).join("/")
      return `/api/blob/${key}`
    },

    handleUpload: async ({ data, file: { buffer, filename, mimeType } }) => {
      const key = [slug, data.prefix, filename].filter(Boolean).join("/")
      await put(key, buffer, {
        access: "private",
        token,
        contentType: mimeType,
        addRandomSuffix: false,
        allowOverwrite: true,
      })
      return data
    },

    handleDelete: async ({ doc, filename }) => {
      const key = [slug, (doc as unknown as Record<string, unknown>).prefix, filename]
        .filter(Boolean)
        .join("/")
      await del(key, { token })
    },

    staticHandler: async (_req, { params }) => {
      const { filename, prefix: urlPrefix } = params
      const key = [slug, urlPrefix, filename].filter(Boolean).join("/")
      const result = await get(key, { access: "private" })
      if (!result?.stream) {
        return new Response("Not found", { status: result?.statusCode ?? 404 })
      }
      return new Response(result.stream, {
        headers: {
          "Content-Type": result.blob.contentType ?? "application/octet-stream",
          "Cache-Control": "public, max-age=31536000, immutable",
          ETag: result.blob.etag,
        },
      })
    },
  }
}