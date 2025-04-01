import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: '/',
        destination: '/dashboard',
        permanent: true, 
      },
    ];
  },
  async rewrites() {
    return [
      {
        source: "/api/:path*", 
        destination: "http://localhost:5000/:path*",
      },
    ];
  },
};

export default nextConfig;