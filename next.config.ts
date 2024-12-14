import type { NextConfig } from "next"

const nextConfig: NextConfig = {
  /* config options here */
  redirects: async () => [
    {
      source: "/home",
      destination: "/",
      permanent: true,
    },
  ],
  rewrites: async () => [
    {
      source: "/",
      destination: "/home",
    },
  ],
}

export default nextConfig
