"use client";

import React, { useContext, useEffect } from 'react';
import Image from 'next/image';
import { CoffeeCloud } from '@/context/CoffeeCloud';
import CardCatalogue from '@/components/CardCatalogue';
import NewsSection from '../(main)/NewsSection';

const Shop = ({quantity,titleCatalogue,margin}) => {
  

  return (
  <NewsSection quantity={8} titleCatalogue={"Últimos orígenes"} margin={true} />
  );
};

export default Shop;
