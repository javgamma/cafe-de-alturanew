import ProductInBasket from '@/app/basket/ProductInBasket'
import React from 'react'
import { Button } from './ui/button'

const SubtotalCart = () => {
  return (
    <div className="h-[772px] gap-6 flex flex-col items-center mt-16 p-10 border-[5px] border-solid border-[orange]">
    <p className="w-[94px] h-7 text-2xl font-medium leading-7 text-[#2A5B45] m-0 p-0">
      Cesta (<span>2</span>)
    </p>

            <div className="flex w-[1200px] h-[415.32px] border justify-between border-solid border-[blue]">
            <div className="flex w-[792px] h-[415.32px] border flex-col gap-6 box-border p-[5px] border-dashed border-[red]">
                <p className='w-[83px] h-6 text-lg font-semibold leading-6 text-left m-0'>Productos</p>
                <div className='w-[159.32] border border-solid border-[fuchsia]'>hola!</div>
                <p id="selectShipping">Seleccionar Envío</p>
                <ProductInBasket/>
            </div>
            <div className='flex flex-col w-96 h-[280px] box-border items-center justify-center gap-4 bg-[#F7F5F3] border-2 border-solid border-[rgb(19,109,32)]'>
                <div className='flex flex-col box-border gap-4'>
                <div>
                    <p className='w-[129px] h-6 text-lg font-semibold leading-6 text-left border m-0 p-0 border-solid border-[saddlebrown]'>Total del Car</p>
                </div>
                <div className='w-[336px] h-4 flex justify-between'>
                    <p className='flex w-[70px] h-4 text-sm font-normal leading-4 text-left border m-0 p-0 border-dashed border-[orchid]'>SUBTOTAL </p>
                    <p className='flex w-12 h-4 text-sm font-semibold leading-4 text-left m-0 p-0'>
                    <span id="spanSubtotal">18,00€</span>
                    </p>
                </div>
                <div className='flex w-[336px] h-4 justify-between'>
                    <p className='w-[43px] h-4 text-sm font-normal leading-4 text-left m-0 p-0'>ENVÍO</p>
                    <p className='w-[49px] h-4 text-sm font-semibold leading-4 text-left m-0'>
                    <span>GRÁTIS</span>
                    </p>
                </div>
                <div className='w-[336px] h-10 flex justify-between border border-solid border-[greenyellow]'>
                    <p className='w-[45px] h-4 text-sm font-semibold leading-4 m-0 p-0'>TOTAL</p>
                    <div className='flex flex-col gap-2'>
                    <p className="w-[107px] h-10 text-sm font-semibold leading-4 text-right m-0 p-0">
                        <span>18,00€</span>
                    </p>
                    <p className=' w-[107px] h-4 text-xs font-normal leading-4 text-right m-0 p-0'>
                        Incluye <span>3,78</span> de IVA
                    </p>
                    </div>
                </div>
                </div>
                <div className='w-[310px] h-10 flex gap-2'>
                    <Button variant="green" >Ir a checkout</Button>
                {/* <div id="btnGoCheckout">Ir a checkout</div>
                <div id="btnContinuePurchase">Seguir comprando</div> */}
                </div>
            </div>
            </div>
  </div>
  
  )
}

export default SubtotalCart
