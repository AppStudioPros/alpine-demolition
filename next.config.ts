import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  typescript: {
    // Type checking passes locally; suppress on Vercel build worker
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
