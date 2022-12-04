/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  reactStrictMode: true,
  images: {
    domains: [
      "lh3.googleusercontent.com",
      "yt3.ggpht.com",
      "cdn.pixabay.com",
      "p16-amd-va.tiktokcdn.com",
      "image.shutterstock.com",
      "encrypted-tbn0.gstatic.com",
    ],
  },
  swcMinify: false, // it should be false by default
};

module.exports = nextConfig;
