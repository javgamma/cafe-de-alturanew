"use client"
import { CoffeeCloud } from '@/context/CoffeeCloud'
import React, { useCallback, useContext, useEffect } from 'react'
import Image from 'next/image';
import CardCatalogue from '@/components/CardCatalogue';
import Link from 'next/link';
import { MoveRight } from 'lucide-react';
import { withRouter } from 'next/router';

const NewsSection = ({quantity,titleCatalogue, margin}) => {
    const {products, setProducts,error,setError,isLoading,setIsLoading} = useContext(CoffeeCloud);

  

    const fetchProducts = useCallback(async () => {
      setIsLoading(true);
      try {
        const response = await fetch("https://cafe-de-alturanew.vercel.app/api/products");
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    }, [setProducts, setIsLoading, setError]);



  useEffect(() => {
    if (!products) {
      fetchProducts();
    }
  }, [products, fetchProducts]);

  // Renderizar el contenido dependiendo del estado
  if (isLoading) return <div>Loading products...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!products || products.length === 0) return <div>No products found.</div>;


  const withMargin = "flex flex-col items-center justify-center min-h-[603.39px] gap-10  p-[40px] font-thin"
  const withoutMargin = "flex flex-col items-center justify-center min-h-[603.39px] gap-10 m-0 pt-0"
  return (

    <div className={margin?withMargin:withoutMargin}>
          <h2 className="text-[#2a5b45] text-2xl font-normal ">{titleCatalogue}</h2>
          <div className="flex flex-wrap justify-center min-h-[391.39px] gap-6">
            {products.slice(0, quantity).map((coffe, i) => {
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
          {/* <div className="flex underline gap-4 items-center">
            <Link className=" text-black font-semibold leading-4" href="/shop">
              Ver todos
            </Link>
            <MoveRight/>
          
          </div> */}
        </div>
  )
}

export default NewsSection
