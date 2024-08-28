"use client";

import React from 'react';
import { CoffeeCloud } from '@/context/CoffeeCloud';
import CardCatalogue from '@/components/CardCatalogue';
import NewsSection from '../../components/NewsSection';
import WrapperCardsHome from '../(main)/WrapperCardsHome';
import Footer from '../(main)/Footer';

const Shop = () => {
  

  return (
    <div>
      <NewsSection
        quantity={8}
        titleCatalogue={"Últimos orígenes"}
        margin={true}
      />
      <WrapperCardsHome />
      <Footer/>
    </div>
  );
};

export default Shop;
