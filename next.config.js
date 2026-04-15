/** @type {import('next').NextConfig} */
// Only apply the base path if we are in production AND NOT running on Vercel.
// Vercel serves the app from the domain root, whereas GitHub Pages serves from /Desgy.
const isGithubPages = process.env.NODE_ENV === "production" && process.env.VERCEL !== "1";

const nextConfig = {
  basePath: isGithubPages ? "/Desgy" : "",
  assetPrefix: isGithubPages ? "/Desgy/" : "",
  output: "export",
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
