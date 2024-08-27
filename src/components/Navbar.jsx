
"use client"
import React, { useContext, useEffect, useState } from 'react'
import LinksforNavbar from './LinksforNavbar.jsx'
import Logotype from './Logotype.jsx'
import { CoffeeCloud } from '@/context/CoffeeCloud'
import { Phone, ShoppingCart as ShoppingCartIcon } from 'lucide-react';
import ShoppingCart from './ShoppingCart.jsx';
import { Button } from './ui/button.jsx';
import classNames from 'classnames';

const Navbar = () => {
  const { basket, showCart, setShowCart,totalItems} = useContext(CoffeeCloud);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const toggleCartVisibility = () => {
    setShowCart(!showCart);
  };
 
  const liStyle = "hover:bg-[#F7F5F31A] rounded-sm p-2 cursor-pointer";


  // const toggleCartVisibility = () => {
  //   if(showCart){
  //     setShowCart(false)
  //   }else {
  //       setShowCart(true)
  //     }
  //   };

  return (
    

    <>
      <div className="flex bg-[#2B2A2B] text-white h-16 items-center justify-around w-full fixed z-[1000] top-0">
        <Logotype />
        <LinksforNavbar />
        <div className="flex items-center">
          <div className='flex items-center gap-6 h-16'>
          <div className={classNames('flex  gap-2 items-center', liStyle)}>
            <Phone className="text-white" size={24}/>
            <p className='font-medium leading-4 text-sm items-center'>+34 919 49 05 18</p>
          </div>
          <Button variant="login" className="mr-4">
            Iniciar Sesion
          </Button>
          </div>
          <button
            onClick={toggleCartVisibility}
            className="relative bg-transparent border-none cursor-pointer p-2"
          >
            <ShoppingCartIcon className="text-white" size={24} />
            {isMounted && basket.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                {totalItems}
              </span>
            )}
          </button>
        </div>
      <ShoppingCart toggleCartVisibility={toggleCartVisibility}/>
      </div>
    </>
  );
}

export default Navbar