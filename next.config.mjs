/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "tapaksuci.or.id",
      },
      {
        hostname: "media.suara.com",
      },
      {
        hostname: "zonanews.id",
      },
      {
        hostname: "akcdn.detik.net.id",
      },
      {
        hostname: "images.unsplash.com",
      },
      {
        hostname: "news.ums.ac.id",
      },
      {
        hostname: "www.umm.ac.id",
      },
    ],
  },
};

export default nextConfig;
