
"use client"
import { CoffeeCloud } from '@/context/CoffeeCloud'
import { CirclePlus, MinusCircle, Trash2 } from 'lucide-react'
import Image from 'next/image'
import React, { useContext } from 'react'

const SelectedProduct = ( {id, 
  brand, 
  img, 
  price, 
  quantity, 
  removeFromBasket, 
  incrementProductQuantity, 
  addToBasket,
  decrementProductQuantity} ) => {
  return (
   

    <div className="flex items-center justify-between bg-white p-4 rounded-lg border border-gray-200 mb-4">
    <div className="flex items-center">
      <Image src={img} width={50} height={50} alt={`${brand} coffee`} className="mr-4" />
      <div>
        <h3 className="font-bold">{brand}</h3>
        <p className="text-sm text-gray-600">Precio: {price.toFixed(2)} €</p>
      </div>
    </div>
    <div className="flex items-center">
      <button
        onClick={() => decrementProductQuantity(id)}
        className="p-1 hover:bg-gray-100 rounded-full"
      >
        <MinusCircle size={20} />
      </button>
      <span className="mx-2 font-medium">{quantity}</span>
      <button
        
        onClick={() => incrementProductQuantity(id)}
        className="p-1 hover:bg-gray-100 rounded-full"
      >
        <CirclePlus size={20} />
      </button>
      <button
        onClick={() => removeFromBasket(id)}
        className="ml-4 p-1 hover:bg-gray-100 rounded-full text-red-500"
      >
        <Trash2 size={20} />
      </button>
    </div>
  </div>
  );
}

export default SelectedProduct
