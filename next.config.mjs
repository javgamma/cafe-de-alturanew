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
      
    
    
  }
  
  export default nextConfig;