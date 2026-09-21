import type { NextConfig } from "next"
import { withPayload } from "@payloadcms/next/withPayload"

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "picsum.photos" },
      { protocol: "https", hostname: "images.unsplash.com" },
    ],
  },
  experimental: {
    cpus: 2,
    staticGenerationRetryCount: 1,
    staticGenerationMinPagesPerWorker: 25,
  },
}

export default withPayload(nextConfig)
