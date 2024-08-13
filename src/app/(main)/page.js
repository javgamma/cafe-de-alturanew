// "use client"
// import React, { useEffect, useState } from 'react'

import { MoveRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import AskFreq from "./AskFreq"
import Hero from "./Hero"
import NewsSection from "./NewsSection"
import WrapperCardsHome from "./WrapperCardsHome"

const Homepage = () => {


  return (
    <div>
      <Hero />
      <WrapperCardsHome />
      <NewsSection quantity={4} titleCatalogue={"Novedades"} margin={false} />
      <div className="flex underline gap-4 justify-center">
        <Link className=" text-black font-semibold leading-4" href="/shop">
          Ver todos
        </Link>
        <MoveRight/>
      </div>
        <AskFreq/>
    </div>
  );
}

export default Homepage
