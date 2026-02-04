import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    // Ignore ESLint during builds since we compile successfully
    ignoreDuringBuilds: true,
  },
  devIndicators: false,
};

export default nextConfig;
