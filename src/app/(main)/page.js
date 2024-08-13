// "use client"
// import React, { useEffect, useState } from 'react'
import Image from "next/image"
import Hero from "./Hero"
import NewsSection from "./NewsSection"
import WrapperCardsHome from "./WrapperCardsHome"

const Homepage = () => {


  return (
    <>

  <Hero/>
  <WrapperCardsHome/>
  <NewsSection quantity={4} titleCatalogue={"Novedades"} margin={false}/>
  </>
  )
}

export default Homepage
