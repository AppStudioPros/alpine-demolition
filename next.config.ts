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
      { source: "/blog", destination: "/news", permanent: true },
      { source: "/blog/", destination: "/news", permanent: true },
      { source: "/category/alpine-in-the-news", destination: "/news", permanent: true },
      { source: "/category/alpine-in-the-news/", destination: "/news", permanent: true },
      { source: "/9-news-denver-demolition-coverage", destination: "/news/9-news-denver-demolition-coverage", permanent: true },
      { source: "/9-news-denver-demolition-coverage/", destination: "/news/9-news-denver-demolition-coverage", permanent: true },
      { source: "/denver-post-demolition-coverage", destination: "/news/denver-post-demolition-coverage", permanent: true },
      { source: "/denver-post-demolition-coverage/", destination: "/news/denver-post-demolition-coverage", permanent: true },
      { source: "/longmont-times-call-demolition-coverage", destination: "/news/longmont-times-call-demolition-coverage", permanent: true },
      { source: "/longmont-times-call-demolition-coverage/", destination: "/news/longmont-times-call-demolition-coverage", permanent: true },
    ];
  },
};

export default nextConfig;
