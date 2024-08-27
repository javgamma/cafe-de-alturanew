"use client"
import React, { useContext, useEffect, useState } from'react';
import Basket from '../basket/Basket.jsx';
import SubtotalCart from'@/components/SubtotalCart';
import { CoffeeCloud } from '@/context/CoffeeCloud.jsx';

const BasketPage = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <div>
   
      <SubtotalCart />
      </div>
  );
};

export default BasketPage;
