import { get } from "@vercel/blob"
import { NextRequest, NextResponse } from "next/server"

export const runtime = "nodejs"

export async function GET(_req: NextRequest, ctx: { params: Promise<{ path: string[] }> }) {
  const { path } = await ctx.params
  const rawPath = path.join("/")

  let blobKey = rawPath
  let result = await get(blobKey, { access: "private" })

  if (!result && !rawPath.startsWith("pp/")) {
    blobKey = "pp/" + rawPath
    result = await get(blobKey, { access: "private" })
  }

  if (!result) {
    return new NextResponse("Not found", { status: 404 })
  }

  if (result.statusCode === 304 || !result.stream) {
    return new NextResponse("Not modified", { status: result.statusCode })
  }

  return new Response(result.stream, {
    headers: {
      "Content-Type": result.blob.contentType ?? "application/octet-stream",
      "Cache-Control": "public, max-age=31536000, immutable",
      ETag: result.blob.etag,
      "Content-Length": String(result.blob.size ?? 0),
      "X-Blob-Pathname": result.blob.pathname,
    },
  })
}