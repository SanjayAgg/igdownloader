/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  basePath: '/ig-reel-downloader',
  images : {
    domains : ['igdownloader.smartrr.me', 'localhost'],
    formats: ['image/avif','image/webp'],
    unoptimized: true,
    // path: '/',
  },
  // add exportPathMap with basePath 
  assetPrefix: '/ig-reel-downloader/',
  exportPathMap: async function (
    defaultPathMap,
    { dev, dir, outDir, distDir, buildId }
  ) {
    return {
      '/': { page: '/' },
    }
  },
 
}

module.exports = nextConfig



// /** @type {import('next').NextConfig} */
// const apiURL = new URL(process.env.NEXT_PUBLIC_API_URI);
// const allowedImageDomains = process.env.NEXT_PUBLIC_ALLOWED_IMAGE_DOMAINS
//   ? process.env.NEXT_PUBLIC_ALLOWED_IMAGE_DOMAINS.split(",")
//   : [];
// const imageConversionFormats = process.env.NEXT_PUBLIC_IMAGE_CONVERSION_FORMATS
//   ? process.env.NEXT_PUBLIC_IMAGE_CONVERSION_FORMATS.split(",")
//   : [];
// const nextConfig = {
//   reactStrictMode: true,
//   images: {
//     domains: [apiURL.hostname, ...allowedImageDomains],
//     formats: imageConversionFormats,
//     unoptimized: true,

//   },

// }

// module.exports = nextConfig
// const withImages = require('next-images')
// module.exports = withImages();