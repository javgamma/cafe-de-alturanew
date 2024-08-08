import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <div className='bg-black text-white h-[60px] flex justify-center items-center'>
      <ul className='flex gap-5'>
        <li>
           <Link href="/">Tienda</Link> 
        </li>

        <li>
            <Link href="/subscription">Suscripcion</Link>
        </li>
        <li>
        <Link href="/contactUs">Para Empresas</Link>
        </li>
        <li>
        <Link href="/aboutUs">Sobre Nosotros</Link>
        </li>
        <li>
        <Link href="/checkout">Contacto</Link>
        </li>
      </ul>
    </div>
  )
}

export default Navbar
