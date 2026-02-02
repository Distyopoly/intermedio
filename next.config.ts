import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  experimental: {
    optimizePackageImports: ["@chakra-ui/react"],
  },
  devIndicators: {
    position: "bottom-right",
  },
  // Allow zrok origin for development
  allowedDevOrigins: ["sgdu4rm2e7mr.share.zrok.io"],
};

export default nextConfig;
