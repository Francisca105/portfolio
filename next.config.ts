import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // GitHub Pages only serves static files, so the whole app is exported to ./out.
  output: "export",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
