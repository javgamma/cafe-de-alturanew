import { ClipboardCheck, Gift, Truck } from 'lucide-react'
import React from 'react'
import cupCoffeBgCard from './../../../public/images/cupCoffeeBgCard.png'

const WrapperCardsHome = () => {

        const subtitleCards= "w-[316px] h-6 flex text-lg leading-6 font-semibold justify-center m-0 p-0"
        const textCard = "w-[268px] text-sm leading-4 m-0 p-0"
        const cardItem = "w-[316px] h-[230px] bg-white flex flex-col items-center justify-center content-center text-center border shadow-[0px_1px_4px_0px_#E3DED7CC] gap-4 m-0 rounded-lg border-solid border-[#F7F5F3]"
        const containerIconsCard = "w-16 h-16 flex justify-center content-center items-center rounded-[20px] text-white bg-[#2a5b45]"
        

  return (
    <>
    <div className="flex h-[380px] bg-cover bg-no-repeat bg-center flex-col items-center justify-center gap-6 content-center m-[0px]" style={{ backgroundImage: `url('/images/cupCoffeeBgCard.png')` }}>


    <p className="w-[350px] h-7 text-2xl leading-7 flex justify-center content-center items-center text-white font-medium m-0 p-0">Café con las mejores condiciones</p>
    <div className="w-[996px] h-[232px] flex gap-6 justify-center content-center items-center m-0">
      <div className={cardItem}>
        <div className={containerIconsCard}>
          <ClipboardCheck size={40}/>
        </div>
        <h3 className={subtitleCards}> Recibe tu pedido sin preocuparte</h3>
        <p className={textCard}>
          Tienes cosas más importantes en la cabeza, por eso con nuestra
          suscripción de café, nunca te quedarás sin tu taza de la mañana.{" "}
        </p>
      </div>
      <div className={cardItem}>
        <div className={containerIconsCard}>
          <Truck 
          size={40}/>
        </div>
        <h3 className={subtitleCards}>Envío en 24/48h</h3>
        <p className={textCard}>
          Pide tu café antes de las 12h y lo recibirás al día siguiente.
        </p>
      </div>
      <div className={cardItem}>
        <div className={containerIconsCard}>
          <Gift
          size={40}/>
        </div>
        <h3 className={subtitleCards}> Descuentos y beneficios</h3>
        <p className={textCard}>
          Cada dos meses, te regalamos una bolsa de un nuevo origen sorpresa,
          para que lo descubras junto a nosotros.
        </p>
      </div>
    </div>
  </div>
 
  </>
  )
}

export default WrapperCardsHome
