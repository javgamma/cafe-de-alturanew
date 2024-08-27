"use client"
import TotalCart from '@/components/TotalCart'
import { Button } from '@/components/ui/button'
import React from 'react'
import Basket from '../basket/Basket'
import PaymentForm from './PaymentForm'

const Checkout = ({price, quantity}) => {

  return (
    <div className="min-h-[772px] gap-6 flex flex-col items-center mt-16 p-10 ">
      <p className="w-[231px] h-7 text-2xl font-medium leading-7 text-[#2A5B45] m-0 p-0">
        Checkout
      </p>

      <div className="flex w-[1200px] min-h-[1108px] justify-between ">
        <div className="flex w-[792px] min-h-[415.32px] flex-col gap-6 box-border p-2 ">
          <PaymentForm />
        </div>
        <TotalCart />
      </div>
    </div>
  );
}

export default Checkout
