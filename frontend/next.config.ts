import type { NextConfig } from "next";

const BACKEND_URL = process.env.BACKEND_URL ?? "http://localhost:8080";

const nextConfig: NextConfig = {
  reactCompiler: true,
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: `${BACKEND_URL}/api/:path*`,
      },
      {
        source: "/oauth2/:path*",
        destination: `${BACKEND_URL}/oauth2/:path*`,
      },
      {
        source: "/login/:path*",
        destination: `${BACKEND_URL}/login/:path*`,
      },
    ];
  },
};

export default nextConfig;
