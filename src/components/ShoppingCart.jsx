"use client";
import React, { useContext, useEffect, useState } from 'react';
import { CircleX, X } from 'lucide-react';
import SelectedProduct from '@/app/shop/SelectedProduct';
import { CoffeeCloud } from '@/context/CoffeeCloud';

const ShoppingCart = ( ) => {

    // const {basket, showCart,setShowCart} = useContext(CoffeeCloud);
  const {
    basket,
    incrementProductQuantity,
    decrementProductQuantity,
    removeFromBasket,
    showCart,
    setShowCart,
    totalPrice
  } = useContext(CoffeeCloud);

  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    // Indica que el componente ya se ha montado
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
    className={`bg-white p-4 w-[500px] min-h-[270px] overflow-y-auto text-black absolute right-5 top-16 transition-opacity duration-300 ${
      showCart ? 'opacity-100 visible' : 'opacity-0 invisible'
    }`}
    >
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold">Carrito de Compras</h2>
        <button
          onClick={toggleCartVisibility}
          className="border-none cursor-pointer p-2"
        >
          <CircleX size={24} />
        </button>
      </div>
      {basket.length === 0 ? (
        <div>El carrito está vacío</div>
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
            />
          ))}
          <div className="mt-4">
            <div className="font-bold">
            Total: ${totalPrice.toFixed(2)}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ShoppingCart;
