
import path from 'path';
import { fileURLToPath } from 'url';
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
      
         
          webpack: (config) => {
            const __dirname = path.dirname(fileURLToPath(import.meta.url));
            config.resolve.alias['@'] = path.resolve(__dirname, 'src');
            return config;
          },
        
    
  }
  export default nextConfig;
  


