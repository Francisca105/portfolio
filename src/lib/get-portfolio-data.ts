import fs from "node:fs";
import path from "node:path";
import { cache } from "react";
import { type PortfolioData, portfolioSchema } from "@/lib/portfolio-schema";

// me.json is a local file bundled with the app (public/me.json), so it can be
// read directly on the server instead of fetched over the network on the client.
export const getPortfolioData = cache((): PortfolioData => {
  const filePath = path.join(process.cwd(), "public", "me.json");
  const raw = fs.readFileSync(filePath, "utf-8");
  return portfolioSchema.parse(JSON.parse(raw));
});
