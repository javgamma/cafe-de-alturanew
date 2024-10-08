/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "cafe-de-alturanew.vercel.app",
        port: "",
        pathname: "/**",
      },
    ],
    //domains: ["https://cafe-de-alturanew.vercel.app/"], // Add this line
    
  },
};
  
  export default nextConfig;