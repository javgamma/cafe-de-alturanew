"use client"
import React, { useContext } from 'react';
import { CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { CoffeeCloud } from '@/context/CoffeeCloud';

const OrderConfirmation = ({id,img,brand,quantity}) => {

    const {basket} = useContext(CoffeeCloud)

  return (
    <div className='flex flex-col items-center justify-center'>
    <div className="mt-16 min-h-[1054px] p-10 bg-whit flex flex-col items-center">
      <div className="flex flex-col items-center mb-6">
        <div className="bg-green-700 p-3 rounded-full mb-4">
          <Clipboard className="text-white" size={24} />
        </div>
        <h1 className="text-xl font-bold text-green-700 mb-2">El pedido ha sido realizado con éxito</h1>
        <p className="text-center text-gray-600">
          El pedido #12387 se encuentra en preparación.
          <br />
          Lo recibirás dentro de las fechas acordadas en tu envío.
          <br />
          Hemos enviado un ticket a tu correo electrónico.
        </p>
      </div>

      <div className="bg-[#F7F5F3] p-6 rounded-lg mb-6 min-w-[1200px] min-h-[391px] items-center justify-center">
        <h2 className="text-lg font-semibold mb-4">Tu pedido</h2>
        <div className="space-y-4">
          {basket.map((item) => (
            <div key={item.id} className="flex justify-between items-center">
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gray-300 rounded mr-4"></div>
                <div>
                  <p className="font-semibold">{item.brand}</p>
                  <p className="text-sm text-gray-600">{item}</p>
                </div>
              </div>
              <p className="font-semibold">{item.price}</p>
            </div>
          ))}
        </div>
      

      <div className="space-y-2 mb-6">
        <div className="flex justify-between">
          <p>SUBTOTAL</p>
          <p className="font-semibold">18,00 €</p>
        </div>
        <div className="flex justify-between">
          <p>ENVÍO</p>
          <p className="font-semibold text-green-600">GRATIS</p>
        </div>
        <div className="flex justify-between text-lg font-bold">
          <p>TOTAL</p>
          <p>18,00 €</p>
        </div>
        <p className="text-right text-sm text-gray-600">Incluye 3,78€ de IVA</p>
      </div>
      </div>
    
    <Link href="/shop">
      <Button variant="backToStore" href="/basket" >
        Volver a la tienda
      </Button>
    </Link>
    </div>
    </div>
  );
};

export default OrderConfirmation;