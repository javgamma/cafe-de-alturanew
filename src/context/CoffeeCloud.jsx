"use client"

import { createContext, useContext, useState } from 'react';

// 1. Crear el contexto
export const CoffeeCloud = createContext(null);

//2. Metiendo contenido al context




// 3. Crear el proveedor del contexto
const CoffeeCloudProvider = ({ children }) => {
  const [dataCoffee, setDataCoffee] = useState([]);
  const [products, setProducts] = useState(null);  // Estado para almacenar los productos
  const [error, setError] = useState(null);  // Estado para almacenar errores
  const [isLoading, setIsLoading] = useState(true);
  
  return (
    <CoffeeCloud.Provider value={{ dataCoffee, setDataCoffee, products,setProducts,error, setError, isLoading,setIsLoading}}>
      {children}
    </CoffeeCloud.Provider>
  );
};

export default CoffeeCloudProvider;


