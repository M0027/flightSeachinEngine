import type { NextConfig } from "next";
import { Content } from "next/font/google";

const nextConfig: NextConfig = {
  images: {

    remotePatterns: [
      {
        protocol: "https",
        hostname: "content.airhex.com",
        pathname: "/content/logos/**",
      },
    ],
    domains: ['images.unsplash.com', 'unsplash.com', 'Content.airhex.com',],
    
  },
  /* config options here */
};

export default nextConfig;
