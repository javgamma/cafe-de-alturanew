import Link from 'next/link'
import React from 'react'

const LinksforNavbar = ({way}) => {

   const row = "flex gap-5"
  //  const col = "flex flex-col gap-5"
  const col = " h-36 gap-4 flex flex-col absolute no-underline text-sm leading-4 left-[577px]"


   if(way==="col"){
    return (<div>
    <ul className={col}>
      <li>
         <Link href="/shop">Tienda</Link> 
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
  </div>)
   }else{
    return (
      <div className='flex'>
      <ul className ={row}>
        <li>
           <Link href="/shop">Tienda</Link> 
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
  
}

export default LinksforNavbar
