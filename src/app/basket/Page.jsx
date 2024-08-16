import SubtotalCart from '@/components/SubtotalCart'
import React from 'react'
import WrapperCardsHome from '../(main)/WrapperCardsHome'

const Basket = () => {
  return (
    <div>
      <WrapperCardsHome/>
      <p>EStas en la cesta ahora mismo</p>
      <SubtotalCart/>
    </div>
  )
}

export default Basket
