"use client";
import React, { useContext, useEffect, useState } from 'react';
import { CircleX, X } from 'lucide-react';
import SelectedProduct from '@/app/shop/SelectedProduct';
import { CoffeeCloud } from '@/context/CoffeeCloud';
import { Button } from './ui/button';
import Link from 'next/link';

const ShoppingCart = ( ) => {

  const {
    basket,
    addToBasket,
    incrementProductQuantity,
    decrementProductQuantity,
    removeFromBasket,
    showCart,
    setShowCart,
    totalPrice
  } = useContext(CoffeeCloud);

  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null}

  const toggleCartVisibility = () => {
    setShowCart(!showCart);
  };


  // const totalPrice = basket.reduce((total, product) => total + product.price * product.quantity, 0);

  return (
    <div
    className={`bg-white p-4 w-[500px] min-h-[270px] overflow-y-auto text-black absolute right-5 top-16 border  rounded-lg transition-opacity duration-300 ${
      showCart ? 'opacity-100 visible' : 'opacity-0 invisible'
    }`}
    >
      <div className="flex justify-between items-center mb-4 mt-2 ">
        <h2 className="text-xl font-bold">Carrito de Compras</h2>
        <button
          onClick={toggleCartVisibility}
          className="border-none cursor-pointer p-2"
        >
          <CircleX size={24} />
        </button>
      </div>
      {basket.length === 0 ? (
        <div className='text-center'>El carrito está vacío</div>
      ) : (
        <div>
          {basket.map((product) => (
            <SelectedProduct
              key={product.id}
              id={product.id}
              brand={product.brand}
              img={product.img}
              price={product.price}
              quantity={product.quantity}
              incrementProductQuantity={incrementProductQuantity}
              decrementProductQuantity={decrementProductQuantity}
              removeFromBasket={removeFromBasket}
              addToBasket={addToBasket}
            />
          ))}
          <div className=" flex  flex-col mt-6  border-t">
            <div className="flex font-bold justify-end mt-4">
            Total: €{totalPrice.toFixed(2)}
          </div>
            <div className='flex gap-4'>
            <Link href="/basket">
              <Button variant="green" > checkout</Button>
            </Link>
            <Link href="/basket">
              <Button variant="red" > Vaciar cesta</Button>
            </Link>
            </div>
            </div>
        </div>
      )}
    </div>
  );
};

export default ShoppingCart;
