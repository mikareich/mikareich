/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/about-me',
        destination: '/',
        permanent: true,
      },
    ]
  },
  async rewrites() {
    return [
      {
        source: '/',
        destination: '/about-me',
      },
    ]
  },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.mdx$/,
      type: 'asset/source',
    })

    return config
  },
}

module.exports = nextConfig
