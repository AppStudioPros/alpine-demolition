import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  async redirects() {
    return [
      { source: "/company-profile/", destination: "/company-profile", permanent: true },
      { source: "/working-with-us", destination: "/company-profile", permanent: true },
      { source: "/working-with-us/", destination: "/company-profile", permanent: true },
      { source: "/safety/", destination: "/safety", permanent: true },
      { source: "/portfolio/", destination: "/portfolio", permanent: true },
    ];
  },
};

export default nextConfig;
