// "use client"
// import React, { useEffect, useState } from 'react'

const Homepage = () => {


  return (
    <header className="heroMain">
    <div className="wrapperHeader">
      <div className="copyHeroleftSection">
        <h3>De la planta a tu casa</h3>
        <h1>El mejor café del mundo, ahora en tu casa</h1>
        <p>
          Trabajamos con agricultores de todo el mundo para seleccionar los
          mejores granos de café y que puedas viajar desde la comunidad de tu
          hogar
        </p>
        <div className="containerButtonsLeftSectionHero">
          <a id="buttonDiscoverCtALeftSection" href="">
            Descubrir origenes
          </a>
          <a id="buttonCtAbuyCoffeeLeftSection" href="">
            Comprar café
          </a>
        </div>
      </div>
      <img
        id="coffeeHarvest"
        src="/assets/img/cosechaCafe.png"
        alt="mano de una persona cosechando café"
      />
    </div>
  </header>
  )
}

export default Homepage
