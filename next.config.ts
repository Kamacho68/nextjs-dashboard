import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  experimental: {
    ppr: "incremental", // Enabling incremental prerendering
  },
};

export default nextConfig;
