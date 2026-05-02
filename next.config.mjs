import remarkGfm from 'remark-gfm'
import createMDX from '@next/mdx'
import rehypeHighlight from 'rehype-highlight'
import remarkBreaks from 'remark-breaks'
 
/** @type {import('next').NextConfig} */
const nextConfig = {
  // Allow .mdx extensions for files
  pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
  async rewrites() {
    return [
      {
        source: '/.well-known/atproto-did',
        destination: '/api/atproto-did',
      },
    ]
  },
}
 
const withMDX = createMDX({
  // Add markdown plugins here, as desired
  options: {
    remarkPlugins: [remarkGfm, remarkBreaks],
    rehypePlugins: [rehypeHighlight],
  },
})
 
// Combine MDX and Next.js config
export default withMDX(nextConfig)