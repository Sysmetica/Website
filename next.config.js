/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  // trailingSlash: true,
  webpack: (cfg) => {
    cfg.module.rules.push(
      {
        test: /\.md$/,
        loader: 'frontmatter-markdown-loader',
        options: { mode: ['react-component'] }
      },
      {
        test: /\.svg$/i,
        issuer: /\.[jt]sx?$/,
        resourceQuery: { not: [/url/] }, // exclude react component if *.svg?url
        use: [
          {
            loader: "@svgr/webpack",
            options: {
              // icon: true,
              svgo: {
                plugins: [{ removeViewBox: false }],
              },
            },
          },
        ],
      }
    )
    return cfg;
  },
  experimental: {
    appDir: true,
    scrollRestoration: true,
  },
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      {
        protocol: 'http',
        hostname: '127.0.0.1',
        port: '1337',
        pathname: '/uploads/**',
      },
      // {
      //   protocol: 'https',
      //   hostname: 'efficient-wonder-d953beb8f4.media.strapiapp.com',
      // },
      {
        protocol: 'https',
        hostname: 'strapi.intech-solutions.io',
      },
      {
        protocol: 'https',
        hostname: 'strapi.sysmetica.io',
      }
    ],
  },
}
