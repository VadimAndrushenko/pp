import type { NextConfig } from "next"
import { withPayload } from "@payloadcms/next/withPayload"

const nextConfig: NextConfig = {
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
