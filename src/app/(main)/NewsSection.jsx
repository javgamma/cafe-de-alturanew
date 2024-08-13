"use client"
import { CoffeeCloud } from '@/context/CoffeeCloud'
import React, { useContext, useEffect } from 'react'
import Image from 'next/image';
import CardCatalogue from '@/components/CardCatalogue';
import Link from 'next/link';
import { MoveRight } from 'lucide-react';

const NewsSection = () => {
    const {dataCoffee,setDataCoffee, products, setProducts,error,setError,isLoading,setIsLoading} = useContext(CoffeeCloud);

    const fetchProducts = async () => {
      setIsLoading(true);  // Indicar que la carga de datos ha comenzado
      try {
        const response = await fetch("https://cafe-de-alturanew.vercel.app/api/products");
        console.log(response);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setProducts(data);  // Guardar los productos en el estado
        console.log(data);
      } catch (error) {
        console.error("Error fetching products:", error);
        setError(error.message);  // Guardar el mensaje de error en el estado
      } finally {
        setIsLoading(false);  // Indicar que la carga de datos ha terminado
      }
    };
    console.log(products);

     // Hook useEffect para llamar a fetchProducts cuando se monte el componente
  useEffect(() => {
    fetchProducts();
  }, []);

  // Renderizar el contenido dependiendo del estado
  if (isLoading) return <div>Loading products...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!products || products.length === 0) return <div>No products found.</div>;


  return (
    // <div className="p-6">
    //   <h1 className="text-4xl font-bold text-center mb-8">Novedades</h1>
    //   <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
    //     {Array.isArray(products) && products.slice(0,4).map((product) => (
    //       <div key={product.brand} className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
    //         <div className="relative w-full h-48">
    //           <Image
    //             src={product.img_url} // Usando la clave correcta 'img_url'
    //             alt={product.brand} // Usando la clave correcta 'brand' para el texto alternativo
    //             layout="fill"
    //             objectFit="cover"
    //           />
    //         </div>
    //         <div className="p-4">
    //           <h2 className="text-xl font-semibold mb-2">{product.brand}</h2> {/* Usando la clave correcta 'brand' */}
    //           <p className="text-lg font-bold text-gray-900">Price: ${product.price.toFixed(2)}</p> {/* Usando la clave correcta 'price' */}
    //           <p className={`text-sm font-semibold ${product.available ? 'text-green-600' : 'text-red-600'}`}>
    //             {product.available ? 'Available' : 'Out of Stock'}
    //           </p>
    //         </div>
    //       </div>
    //     ))}
    //   </div>
    // </div>

    <div className="flex flex-col items-center justify-center min-h-[603.39px] gap-10 mt-16">
          <h2 className="text-[#2a5b45] text-2xl font-bold ">Novedades</h2>
          <div className="flex flex-wrap justify-center min-h-[391.39px] gap-6">
            {products.slice(0, 4).map((coffe, i) => {
              return (
                <CardCatalogue
                  key={i}
                  brand={coffe.brand}
                  img={coffe.img_url}
                  price={coffe.price}
                />
              );
            })}
          </div>
          <div className="flex underline gap-4 items-center">
            <Link className=" text-black font-semibold leading-4" href="/shop">
              Ver todos
            </Link>
            <MoveRight/>
          
          </div>
        </div>
  )
}

export default NewsSection
