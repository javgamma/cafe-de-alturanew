// "use client";
// import { createContext, useContext, useEffect, useState } from 'react';

// // 1. Crear el contexto
// export const CoffeeCloud = createContext(null);

// // Función para obtener la cesta desde localStorage
// const getBasketFromLocalStorage = () => {
//   if (typeof window !== 'undefined') {
//     // Solo se ejecuta en el cliente
//     const storedBasket = localStorage.getItem("basket");
//     return storedBasket ? JSON.parse(storedBasket) : [];
//   }
//   return []; // En el servidor, retorna un array vacío por defecto
// };

// // 2. Crear el proveedor del contexto
// const CoffeeCloudProvider = ({ children }) => {
//   const [products, setProducts] = useState([]); // Estado para almacenar los productos
//   const [error, setError] = useState(null); // Estado para almacenar errores
//   const [isLoading, setIsLoading] = useState(true);
//   const [showCart, setShowCart] = useState(false);
   
//   useEffect(() => {
//     const getCoffeFetch = async () => {
//       try {
//         const apiUrl = "https://cafe-de-alturanew.vercel.app/api/products";
//         const response = await fetch(apiUrl);
//         const data = await response.json();
//         setProducts(data);
//         setIsLoading(false);
//       } catch (error) {
//         console.log(error);
//         setError(error);
//         setIsLoading(false);
//       }
//     };

//     getCoffeFetch();
//   }, []);

//   useEffect(() => {
//     if (typeof window !== 'undefined') {
//       const storedBasket = localStorage.getItem("basket");
//       if (storedBasket) {
//         setBasket(JSON.parse(storedBasket));
//       }
//     }
//   }, []);

//   useEffect(() => {
//     if (typeof window !== 'undefined') {
//       localStorage.setItem("basket", JSON.stringify(basket));
//     }
//   }, []);
  

//   const getBasketFromLocalStorage = () => {
//     if (typeof window !== 'undefined') {
//       const storedBasket = localStorage.getItem("basket");
//       return storedBasket ? JSON.parse(storedBasket) : [];
//     }
//     return [];
//   };
//    // Estado para la cesta, inicializado con los datos de localStorage
//   // const [basket, setBasket] = useState(getBasketFromLocalStorage);
//   const [basket, setBasket] = useState(() => getBasketFromLocalStorage());



//   // Función para actualizar la cesta y sincronizar con localStorage
//   const updateBasketAndLocalStorage = (updatedBasket) => {
//     setBasket(updatedBasket);
//     if (typeof window !== 'undefined') {
//       localStorage.setItem("basket", JSON.stringify(updatedBasket));
//     }
//   };

//   // Función para añadir un producto a la cesta
//   // const addToBasket = (product) => {
//   //   setBasket((prevBasket) => {
//   //     const updatedCart = [...prevBasket];
//   //     const existingProductIndex = prevBasket.findIndex((item) => item.id === product.id);

//   //     if (existingProductIndex > -1) {
//   //       updatedCart[existingProductIndex].quantity += 1;
//   //     } else {
//   //       updatedCart.push({ ...product, quantity: 1 });
//   //     }

//   //     updateBasketAndLocalStorage(updatedCart); // Actualizar el localStorage
//   //     return updatedCart;
//   //   });
//   // };


//   const addToBasket = (product) => {
//     setBasket((prevBasket) => {
//       const existingProductIndex = prevBasket.findIndex((item) => item.id === product.id);
//       if (existingProductIndex > -1) {
//         const updatedCart = [...prevBasket];
//         updatedCart[existingProductIndex] = {
//           ...updatedCart[existingProductIndex],
//           quantity: updatedCart[existingProductIndex].quantity + 1
//         };
//         updateBasketAndLocalStorage(updatedCart);
//         console.log("producto añadido, prueba");
//         return updatedCart;
//       } else {
//         const updatedCart = [...prevBasket, { ...product, quantity: 1 }];
//         updateBasketAndLocalStorage(updatedCart);
//         return updatedCart;
//       }
//     });
//   };
//   // const addToBasket = (product) => {
//   //   setBasket((prevBasket) => {
//   //     const existingProductIndex = prevBasket.findIndex((item) => item.id === product.id);
//   //     if (existingProductIndex > -1) {
//   //       const updatedBasket = [...prevBasket];
//   //       updatedBasket[existingProductIndex].quantity += 1;
//   //       return updatedBasket;
//   //     } else {
//   //       return [...prevBasket, { ...product, quantity: 1 }];
//   //     }
//   //   });
//   // };

//   const removeFromBasket = (id) => {
//     setBasket((prevBasket) => {
//       const updatedCart = prevBasket.filter((item) => item.id !== id);
//       updateBasketAndLocalStorage(updatedCart);
//       return updatedCart;
//     });
//   };

//   const incrementProductQuantity = (id) => {
//     setBasket((prevBasket) => {
//       const updatedCart = prevBasket.map((item) =>
//         item.id === id ? { ...item, quantity: item.quantity + 1 } : item
//       );
//       updateBasketAndLocalStorage(updatedCart);
//       return updatedCart;
//     });
//   };

//   const decrementProductQuantity = (id) => {
//     setBasket((prevBasket) => {
//       const updatedCart = prevBasket
//         .map((item) =>
//           item.id === id ? { ...item, quantity: Math.max(0, item.quantity - 1) } : item
//         )
//         .filter((item) => item.quantity > 0);
//       updateBasketAndLocalStorage(updatedCart);
//       return updatedCart;
//     });
//   };

//   useEffect(() => {
//     const getCoffeFetch = async () => {
//       try {
//         const apiUrl = "https://cafe-de-alturanew.vercel.app/api/products";
//         const response = await fetch(apiUrl);
//         const data = await response.json();
//         setProducts(data);
//         setIsLoading(false);
//       } catch (error) {
//         console.error(error);
//         setError("Error al cargar los productos");
//         setIsLoading(false);
//       }
//     };
//     getCoffeFetch();
//   }, []);

//   // Función para eliminar un producto de la cesta
//   // const removeFromBasket = (id) => {
//   //   const updatedCart = basket.filter((item) => item.id !== id);
//   //   updateBasketAndLocalStorage(updatedCart);
//   // };


//   // Funciones para incrementar o decrementar la cantidad de un producto
//   // const incrementProductQuantity = (id) => {
//   //   const updatedCart = basket.map((item) =>
//   //     item.id === id ? { ...item, quantity: item.quantity + 1 } : item
//   //   );
//   //   updateBasketAndLocalStorage(updatedCart);
//   // };
  

//   // const decrementProductQuantity = (id) => {
//   //   const updatedCart = basket
//   //     .map((item) =>
//   //       item.id === id ? { ...item, quantity: Math.max(0, item.quantity - 1) } : item
//   //     )
//   //     .filter((item) => item.quantity > 0);
//   //   updateBasketAndLocalStorage(updatedCart);
//   // };


//   // Cargar la cesta desde localStorage al montar el componente
//   // useEffect(() => {
//   //   // Código para sincronizar `basket` con localStorage en el cliente
//   //   localStorage.setItem("basket", JSON.stringify(basket));
//   // }, [basket]);



//   return (
//     <CoffeeCloud.Provider
//       value={{
//         products,
//         setProducts,
//         error,
//         setError,
//         isLoading,
//         setIsLoading,
//         basket,
//         setBasket,
//         addToBasket,
//         removeFromBasket,
//         incrementProductQuantity,
//         decrementProductQuantity,
//         showCart,
//         setShowCart,
//       }}
//     >
//       {children}
//     </CoffeeCloud.Provider>
//   );
// };

// export default CoffeeCloudProvider;

"use client";
import { createContext, useContext, useEffect, useState, useCallback, useMemo } from 'react';

export const CoffeeCloud = createContext(null);

const getBasketFromLocalStorage = () => {
  if (typeof window !== 'undefined') {
    const storedBasket = localStorage.getItem("basket");
    return storedBasket ? JSON.parse(storedBasket) : [];
  }
  return [];
};

const CoffeeCloudProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [showCart, setShowCart] = useState(false);
  const [basket, setBasket] = useState(getBasketFromLocalStorage);

  const updateBasketAndLocalStorage = useCallback((updatedBasket) => {
    setBasket(updatedBasket);
    if (typeof window !== 'undefined') {
      localStorage.setItem("basket", JSON.stringify(updatedBasket));
    }
  }, []);

  const addToBasket = useCallback((product) => {
    setBasket((prevBasket) => {
      const existingProductIndex = prevBasket.findIndex((item) => item.id === product.id);
      if (existingProductIndex > -1) {
        const updatedCart = prevBasket.map((item, index) =>
          index === existingProductIndex ? { ...item, quantity: item.quantity + 1 } : item
        );
        updateBasketAndLocalStorage(updatedCart);
        return updatedCart;
      } else {
        const updatedCart = [...prevBasket, { ...product, quantity: 1 }];
        updateBasketAndLocalStorage(updatedCart);
        return updatedCart;
      }
    });
  }, [updateBasketAndLocalStorage]);

  const removeFromBasket = useCallback((id) => {
    setBasket((prevBasket) => {
      const updatedCart = prevBasket.filter((item) => item.id !== id);
      updateBasketAndLocalStorage(updatedCart);
      return updatedCart;
    });
  }, [updateBasketAndLocalStorage]);

  const incrementProductQuantity = useCallback((id) => {
    setBasket((prevBasket) => {
      const updatedCart = prevBasket.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      );
      updateBasketAndLocalStorage(updatedCart);
      return updatedCart;
    });
  }, [updateBasketAndLocalStorage]);

  const decrementProductQuantity = useCallback((id) => {
    setBasket((prevBasket) => {
      const updatedCart = prevBasket
        .map((item) =>
          item.id === id ? { ...item, quantity: Math.max(0, item.quantity - 1) } : item
        )
        .filter((item) => item.quantity > 0);
      updateBasketAndLocalStorage(updatedCart);
      return updatedCart;
    });
  }, [updateBasketAndLocalStorage]);

  useEffect(() => {
    const getCoffeFetch = async () => {
      try {
        const apiUrl = "https://cafe-de-alturanew.vercel.app/api/products";
        const response = await fetch(apiUrl);
        const data = await response.json();
        setProducts(data);
        setIsLoading(false);
      } catch (error) {
        console.error(error);
        setError("Error al cargar los productos");
        setIsLoading(false);
      }
    };
    getCoffeFetch();
  }, []);

  // const totalPrice = basket.reduce((total, product) => total + product.price * product.quantity, 0);

  const totalPrice = useMemo(() => {
    return basket.reduce((total, product) => total + product.price * product.quantity, 0);
  }, [basket]);

  const totalItems = useMemo(() => {
    return basket.reduce((sum, product) => sum + product.quantity, 0);
  }, [basket]);

  const contextValue = {
    products,
    setProducts,
    error,
    setError,
    isLoading,
    setIsLoading,
    basket,
    setBasket,
    addToBasket,
    removeFromBasket,
    incrementProductQuantity,
    decrementProductQuantity,
    showCart,
    setShowCart,
    totalPrice,
    totalItems
  };

  return (
    <CoffeeCloud.Provider value={contextValue}>
      {children}
    </CoffeeCloud.Provider>
  );
};

export default CoffeeCloudProvider;