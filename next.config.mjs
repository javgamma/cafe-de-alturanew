/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    // Agrega otras configuraciones válidas aquí
   
      // images: {
      //   domains: ['res.cloudinary.com'],
      // },


      
        images: {
          remotePatterns: [
            {
              protocol: 'https',
              hostname: 'res.cloudinary.com',
              port: '',
              pathname: '/**',
            },
          ],
        },
        env: {
          MONGODB_URI: process.env.MONGODB_URI,
        },
      
    
    
  }
  
  export default nextConfig;