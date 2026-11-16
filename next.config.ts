import type { NextConfig } from "next";

// GitHub Pages serves the site under /portfolio, falmeida.dev at the root. The
// Pages workflow sets NEXT_PUBLIC_BASE_PATH; every other build leaves it empty.
// The same variable feeds assetPath() in src/lib/paths.ts.
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || undefined;

const nextConfig: NextConfig = {
  // GitHub Pages only serves static files, so the whole app is exported to ./out.
  output: "export",
  basePath,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
