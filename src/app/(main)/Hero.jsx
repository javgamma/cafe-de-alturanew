import React from 'react'
import Image from 'next/image'

const Hero = () => {
  return (
    <header className="h-[486px] flex justify-center items-center pt-16">
    <div className="flex justify-center items-center gap-6">
      <div className="w-[588px] max-h-[232px] flex flex-col justify-items-center gap-4">
        <h3 className="text-lg font-semibold leading-6 text-[#2A5B45] h-6 m-0">De la planta a tu casa</h3>
        <h1 className="w-[588px] h-[88px] text-[40px] font-semibold leading-[44px] m-0">El mejor café del mundo, ahora en tu casa</h1>
        <p className="h-8 text-sm leading-4 font-normal m-0">
          Trabajamos con agricultores de todo el mundo para seleccionar los
          mejores granos de café y que puedas viajar desde la comunidad de tu
          hogar
        </p>
        <div className="w-[321px] h-10 flex gap-4">
          <button className="w-[168px] h-10 no-underline text-white flex items-center justify-center text-sm leading-4 rounded bg-[#1f1815]">
            Descubrir origenes
          </button>
          <button className="w-[137px] h-10 no-underline text-white flex items-center justify-center text-sm leading-4 rounded  bg-[#2a5b45]">
            Comprar café
          </button>
        </div>
      </div>
      <Image
        className="rounded-[20px]"
        width={588}
        height={390}
        src={"/images/cosechaCafe.png"}  // Ruta correcta para acceder a la imagen
        alt={"mano de una persona cosechando café"}
      />
      </div>
  </header>
  )
}

export default Hero
