import { Coffee } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Logotype = () => {
  return (
    <div className='flex'>
    <Link className='flex h-fit text-2xl leading-8 gap-2 items-center font-light' href="/">
      cafedealtura.com
    <Image src={"/images/ps_coffee-hot.svg"} width={20.53} height={24.94} alt="CoffeeIcon" className='flex'/>
    </Link>
  </div>
  )
}

export default Logotype
