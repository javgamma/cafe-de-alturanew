import React from 'react'
import LinksforNavbar from './LinksforNavbar'
import Logotype from './logotype'

const Navbar = () => {
  return (
    <div className='flex bg-[#2B2A2B] text-white h-16 items-center justify-around w-full fixed z-[1000] top-0'>
      <Logotype />
      <LinksforNavbar/>
    </div>
  );
}

export default Navbar
