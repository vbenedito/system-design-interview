import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        port: "",
        pathname: "/photo-1531297484001-80022131f5a1",
        search: "",
      },
    ],
  },
};

export default nextConfig;
