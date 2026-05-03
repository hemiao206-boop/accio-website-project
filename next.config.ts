import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'media.thereformation.com',
      },
      {
        protocol: 'https',
        hostname: 'www.bebe.com',
      },
      {
        protocol: 'https',
        hostname: 'bcbg.com',
      },
      {
        protocol: 'https',
        hostname: 'int.claudiepierlot.com',
      },
      {
        protocol: 'https',
        hostname: 'www.rouje.com',
      },
    ],
  },
};

export default nextConfig;
