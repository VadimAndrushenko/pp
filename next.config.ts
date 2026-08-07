import type { NextConfig } from "next"
// import { withPayload } from "@payloadcms/next/withPayload"

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "picsum.photos" },
      { protocol: "https", hostname: "images.unsplash.com" },
    ],
  },
}

// Админка Payload временно отключена. Чтобы вернуть — раскомментируй строки ниже.
// export default withPayload(nextConfig)
export default nextConfig