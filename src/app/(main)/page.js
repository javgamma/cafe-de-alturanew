// "use client"
// import React, { useEffect, useState } from 'react'

import Navbar from "@/components/Navbar"
import { MoveRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import AskFreq from "./AskFreq"
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
      {/* <div className="flex underline gap-4 justify-center">
        <Link className="flex text-black font-semibold leading-4 m-0 pb-10" href="/shop">
          Ver todos
        </Link>
        <MoveRight/>
      </div> */}
        <AskFreq/>
        <HeroCoffeeShop/>
    </div>
  );
}

export default Homepage
