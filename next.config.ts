import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  devIndicators: false,
  // Prevent the .vercel.app preview URL from being indexed — only reevesestates.com should rank
  async headers() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "reeves-estates.vercel.app" }],
        headers: [{ key: "X-Robots-Tag", value: "noindex" }],
      },
    ];
  },
};

export default nextConfig;
