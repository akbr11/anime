/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "cdn.myanimelist.net",
      },
      {
        hostname: "img.youtube.com",
      },
      {
        hostname: "www.youtube.com",
      },
    ],
  },
};

export default nextConfig;
