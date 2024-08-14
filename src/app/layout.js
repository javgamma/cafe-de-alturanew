import Navbar from "@/components/LinksforNavbar";
import { Outfit } from "next/font/google";
import "./globals.css";
import CoffeeCloudProvider from '@/context/CoffeeCloud';
import LinksforNavbar from "@/components/LinksforNavbar";

const outfit = Outfit({ 
  subsets: ["latin"]
  // weight: ['100','200','300','400','500','600','700','800','900'] 
});

export const metadata = {
  title: "Café de altura",
  description: "El mejor café del mundo",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={outfit.className}>
        <CoffeeCloudProvider>
      
        {children}
        </CoffeeCloudProvider>
        </body>
    </html>
  );
}
