import type { NextConfig } from "next"
import { withPayload } from "@payloadcms/next/withPayload"
import { randomUUID } from "crypto"

console.log(
  "[SA-KEY]",
  "set:", Boolean(process.env.NEXT_SERVER_ACTIONS_ENCRYPTION_KEY),
  "len:", process.env.NEXT_SERVER_ACTIONS_ENCRYPTION_KEY?.length,
  "first8:", process.env.NEXT_SERVER_ACTIONS_ENCRYPTION_KEY?.slice(0, 8),
  "last8:", process.env.NEXT_SERVER_ACTIONS_ENCRYPTION_KEY?.slice(-8),
)

const nextConfig: NextConfig = {
  // Идентификатор деплоя: при смене сборки клиент обнаружит несовпадение
  // и сделает полный reload вместо вызова Server Function со старым ID
  // ("Failed to find Server Action"). На Vercel берётся коммит, локально — новый UUID на сборку.
  deploymentId: process.env.VERCEL_GIT_COMMIT_SHA ?? randomUUID(),
  // Временное решение для payload#16824: в dev Strict Mode дважды выполняет
  // mount-эффекты, из-за чего ListDrawerContent в медиа-пикере шлёт второй
  // render-list server action со stale action ID.
  // В production этот флаг ни на что не влияет, там помогает NEXT_SERVER_ACTIONS_ENCRYPTION_KEY.
  reactStrictMode: false,
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "picsum.photos" },
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "*.public.blob.vercel-storage.com" },
      { protocol: "https", hostname: "*.private.blob.vercel-storage.com" },
    ],
  },
  experimental: {
    cpus: 2,
    staticGenerationRetryCount: 1,
    staticGenerationMinPagesPerWorker: 25,
  },
}

export default withPayload(nextConfig)
