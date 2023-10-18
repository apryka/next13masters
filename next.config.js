/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		domains: ["images.unsplash.com", "naszsklep-api.vercel.app"],
	},
	experimental: {
		typedRoutes: true,
		mdxRs: true,
	},
  async redirects() {
    return [
      {
        source: '/products',
        destination: '/products/1',
        permanent: true,
      },
    ]
  },
};

const withMDX = require("@next/mdx")();
module.exports = withMDX(nextConfig);
