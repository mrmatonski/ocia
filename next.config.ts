import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  devIndicators: false,
  async redirects() {
    return [
      {
        source: "/religious-education/learn",
        destination: "/religious-education/content",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
