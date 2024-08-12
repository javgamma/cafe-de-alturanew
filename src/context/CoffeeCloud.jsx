"use client"

import { createContext, useContext } from 'react';

// 1. Crear el contexto
export const CoffeeCloud = createContext(null);

// 2. Crear el proveedor del contexto
const CoffeeCloudProvider = ({ children }) => {
  return (
    <CoffeeCloud.Provider value={{ /* Aquí puedes colocar el valor del contexto */ }}>
      {children}
    </CoffeeCloud.Provider>
  );
};

export default CoffeeCloudProvider;


