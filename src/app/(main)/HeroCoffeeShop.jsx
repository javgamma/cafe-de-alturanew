import { ArrowRight, MoveRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const HeroCoffeeShop = () => {
  return (
    <div className="bg-[#F7F5F3] flex justify-center items-center pt-[44.61px] pb-[44.61px]">
    <div className="w-[1200px] h-[390px] flex justify-between items-center left-10">
      <div className="w-[457px] h-[116px] flex gap-4 flex-col justify-center">
        <h2 className='w-[340px] h-7 text-2xl font-medium leading-7 text-[#2A5B45] m-0'>Pruebalo en nuestro coffee shop</h2>
        <p className='w-[457px] text-sm leading-4 m-0'>
          Visita nuestra cafetería en el centro de la ciudad para probar los
          granos de café antes de hacer tu pedido y llévate un descuento
        </p>
        <div className="w-[118px] h-6 flex items-center gap-4 text-sm font-semibold leading-4 justify-center m-0">
          <Link className='underline' href="/">Cómo llegar</Link>
          <MoveRight/>
        </div>
      </div>
      <Image
        className='rounded-5'
        src={"/images/coffeeShop.png"}
        width={588}
        height={390}
        alt={"fotografía de la barra de una cafetería de la marca"}
      />
    </div>
  </div>
  )
}

export default HeroCoffeeShop
