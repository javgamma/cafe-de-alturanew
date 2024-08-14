import { Coffee } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const Logotype = () => {
  return (
    <div className='flex'>
    <Link className='flex h-fit text-2xl leading-8 gap-2 items-center font-light' href="/">
      cafedealtura.com
    <Coffee className='flex'/>
    </Link>
  </div>
  )
}

export default Logotype
