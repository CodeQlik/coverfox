import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ["upload.wikimedia.org", "cdn.jsdelivr.net"],
  },
  // ...other config options
};

export default nextConfig;
