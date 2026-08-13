import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  agentRules: false,
  experimental: {
    globalNotFound: true,
  },
  images: {
    formats: ["image/avif", "image/webp"],
    qualities: [75, 88],
  },
  async redirects() {
    return [
      {
        source: "/crude-oil-trading",
        destination: "/offshore-crude-oil-trading",
        permanent: true,
      },
      {
        source: "/tr/crude-oil-trading",
        destination: "/tr/offshore-crude-oil-trading",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
