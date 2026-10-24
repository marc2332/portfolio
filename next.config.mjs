import remarkGfm from "remark-gfm";
import createMDX from "@next/mdx";
import rehypeHighlight from "rehype-highlight";
import remarkBreaks from "remark-breaks";

/** @type {import('next').NextConfig} */
const nextConfig = {
  distDir: process.env.NODE_ENV === "development" ? ".next-dev" : ".next",
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
  env: {
    NEXT_PUBLIC_SITE_URL:
      process.env.VERCEL_ENV === "preview" && process.env.VERCEL_URL
        ? `https://${process.env.VERCEL_BRANCH_URL || process.env.VERCEL_URL}`
        : "https://mespin.me",
  },
  async rewrites() {
    return [
      {
        source: "/.well-known/atproto-did",
        destination: "/api/atproto-did",
      },
    ];
  },
};

const withMDX = createMDX({
  options: {
    remarkPlugins: [remarkGfm, remarkBreaks],
    rehypePlugins: [rehypeHighlight],
  },
});

export default withMDX(nextConfig);
