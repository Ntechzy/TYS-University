import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        port: "",
        pathname: "/dhlqc0ymy/image/upload/**",
        search: "",
      },
    ],
  },
};

export default nextConfig;
