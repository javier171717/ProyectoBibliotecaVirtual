/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "http2.mlstatic.com" },
      { protocol: "https", hostname: "cdn-icons-png.flaticon.com" },
      { protocol: "https", hostname: "images.pexels.com" },
      { protocol: "https", hostname: "www.apple.com" },
      { protocol: "https", hostname: "m.media-amazon.com" },
      { protocol: "https", hostname: "tse2.mm.bing.net" }, // Dominio agregado
      { protocol: "https", hostname: "tse1.mm.bing.net" }, // También agrego este por seguridad
    ],
  },
  compiler: {
    styledComponents: true,
  },
};

export default nextConfig;




