// falmeida.dev serves the site at the root; GitHub Pages serves the same build
// under /portfolio. next.config.ts reads NEXT_PUBLIC_BASE_PATH (set in
// .github/workflows/nextjs.yml) and next/link prefixes it automatically, but a
// plain <a href="/cv.pdf"> or <img src="/..."> does not, so links to files in
// /public go through this helper.
export const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export function assetPath(path: string): string {
  return `${BASE_PATH}${path.startsWith("/") ? path : `/${path}`}`;
}
