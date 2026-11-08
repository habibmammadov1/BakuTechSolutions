import type { NextConfig } from "next";

// Static export: `npm run build` writes a plain HTML site to ./out,
// which can be uploaded to any static host (Spaceship, etc.).
const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: { unoptimized: true },
};

export default nextConfig;
