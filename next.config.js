/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  webpack: (cfg) => {
    cfg.module.rules.push(
      {
        test: /\.md$/,
        loader: 'frontmatter-markdown-loader',
        options: { mode: ['react-component'] }
      }
    )
    return cfg;
  },
  experimental: {
    appDir: true,
  },
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      // {
      //   protocol: 'http',
      //   hostname: 'localhost',
      //   port: '1337',
      //   pathname: '/uploads/**',
      // },
      {
        protocol: 'https',
        hostname: 'efficient-wonder-d953beb8f4.media.strapiapp.com',
      }
    ],
  },
}