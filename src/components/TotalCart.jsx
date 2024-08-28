"use client"
import { CoffeeCloud } from '@/context/CoffeeCloud'
import React, { useContext } from 'react'
import { Button } from './ui/button'

const TotalCart = () => {

const {basket,totalItems,totalPrice} = useContext(CoffeeCloud);

  return (
  
    <div className="flex flex-col w-96 h-[280px] box-border items-center justify-center gap-4 bg-[#F7F5F3]  rounded-lg">
    <div className="flex flex-col box-border gap-4">
      <div>
        <p className="min-w-[129px] h-6 text-lg font-semibold leading-6 text-left border m-0 p-0 ">
          Total del carrito
        </p>
      </div>
      <div className="w-[336px] h-4 flex justify-between">
        <p className="flex w-[70px] h-4 text-sm font-normal leading-4 text-left border m-0 p-0 ">
          SUBTOTAL
        </p>
        <p className="flex w-16 h-4 text-sm font-semibold leading-4 text-right justify-end m-0 p-0">
          <span>{`${totalPrice.toFixed(2)} €`}</span>
        </p>
      </div>
      <div className="flex w-[336px] h-4 justify-between">
        <p className="w-[43px] h-4 text-sm font-normal leading-4 text-left m-0 p-0">
          ENVÍO
        </p>
        <p className="w-[49px] h-4 text-sm font-semibold leading-4 text-left m-0">
          <span>GRÁTIS</span>
        </p>
      </div>
      <div className="w-[336px] h-10 flex justify-between ]">
        <p className="w-[45px] h-4 text-sm font-semibold leading-4 m-0 p-0">
          TOTAL
        </p>
        <div className="flex flex-col gap-2">
          <p className="w-[107px] h-10 text-sm font-semibold leading-4 text-right m-0 p-0">
            <span>{totalPrice}</span>
          </p>
          <p className=" w-[107px] h-4 text-xs font-normal leading-4 text-right m-0 p-0">
            Incluye <span>3,78</span> de IVA
          </p>
        </div>
      </div>
    </div>
    <div className="w-[310px] h-10 flex gap-2">
      <Button variant="payAndBuy">Pagar y realizar pedido</Button>
      {/* <div id="btnGoCheckout">Ir a checkout</div>
          <div id="btnContinuePurchase">Seguir comprando</div> */}
    </div>
  </div>
  
  )
}

export default TotalCart
