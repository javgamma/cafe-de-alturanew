import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Button } from './ui/button'

const PageContruction = () => {
  return (
    <div className=' flex flex-col items-start p-10 justify-center'
      style={{
        height: '100vh',
        width: '100vw',
      }}
    >
      <Image 
        src={"/images/orderNow.png"}
        layout="fill"
        objectFit='cover'
        objectPosition='center'
        alt='Fondo de pagina en construccion'
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
        }}
      />

      <div className=" relative p-10 flex flex-col  bg-white text-[#2B2A2B] w-[600px] h-[500px] rounded-3xl"
        style={{
          zIndex: 1, // Esto asegura que el div se muestre encima de la imagen
        }}>
        <h1 className='text-8xl'>Página en contrucción</h1>
        <p className='text-4xl mt-14'>¿Vamos por un café?</p>
        <Link href={"/shop"}>
        <Button variant="green" className="flex mt-10 cursor-pointer" >Ir a tienda</Button>
        </Link>
      </div>

    </div>
  )
}

export default PageContruction
