// "use client"
// import React, { useEffect, useState } from 'react'

import Navbar from "@/components/Navbar"
import { MoveRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import AskFreq from "./AskFreq"
import Copyright from "./Copyright"
import Footer from "./Footer"
import FormHome from "./FormHome"
import Hero from "./Hero"
import HeroCoffeeShop from "./HeroCoffeeShop"
import NewsSection from "./NewsSection"
import WrapperCardsHome from "./WrapperCardsHome"

const Homepage = () => {


  return (
    <div>
      
      <Hero />
      <WrapperCardsHome />
      <NewsSection quantity={4} titleCatalogue={"Novedades"} margin={false} />
      <AskFreq/>
      <HeroCoffeeShop/>
      <FormHome/>
      <Footer/>
      <Copyright/>

    </div>
  );
}

export default Homepage
