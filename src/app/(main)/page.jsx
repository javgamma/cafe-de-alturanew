"use client";
import React, { useEffect, useState } from "react";
import AskFreq from "./AskFreq";
import Footer from "./Footer";
import FormHome from "./FormHome";
import Hero from "./Hero";
import HeroCoffeeShop from "./HeroCoffeeShop";
import NewsSection from "@/components/NewsSection";
import WrapperCardsHome from "./WrapperCardsHome";

const Homepage = () => {
  return (
    <div>
      <Hero />
      <WrapperCardsHome />
      <NewsSection quantity={4} titleCatalogue={"Novedades"} margin={false} />
      <AskFreq />
      <HeroCoffeeShop />
      <FormHome />
      <Footer />
    </div>
  );
};

export default Homepage;
