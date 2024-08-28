

"use client";
import {
  createContext,
  useEffect,
  useState,
  useCallback,
  useMemo,
} from "react";

export const CoffeeCloud = createContext(null);

const getBasketFromLocalStorage = () => {
  if (typeof window !== "undefined") {
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
    //setBasket(updatedBasket);
    if (typeof window !== "undefined") {
      localStorage.setItem("basket", JSON.stringify(updatedBasket));
    }
  }, []);

  // const addToBasket = (product) => {
  //   setBasket((prevBasket) => {
  //     const existingProductIndex = prevBasket.findIndex(
  //       (item) => item.id === product.id);

  //     if (existingProductIndex > -1) {
  //       const updatedCart = prevBasket.map((item, index) =>
  //         index === existingProductIndex
  //           ? { ...item, quantity: item.quantity + 1 }
  //           : item
  //       );
  //       updateBasketAndLocalStorage(updatedCart);
  //       return updatedCart;
  //     }

  //     const updatedCart = [...prevBasket, { ...product, quantity: 1 }];
  //     updateBasketAndLocalStorage(updatedCart);
  //     return updatedCart;
  //   });
  // };

  const addToBasket = (product) => {
    if (!product || typeof product !== 'object' || !product.id) {
      console.error('Invalid product:', product);
      return;
    }

    setBasket((prevBasket) => {
      const existingProductIndex = prevBasket.findIndex(
        (item) => item.id === product.id
      );

      if (existingProductIndex > -1) {
        const updatedCart = prevBasket.map((item, index) =>
          index === existingProductIndex
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
        updateBasketAndLocalStorage(updatedCart);
        return updatedCart;
      }

      const updatedCart = [...prevBasket, { ...product, quantity: 1 }];
      updateBasketAndLocalStorage(updatedCart);
      return updatedCart;
    });
  };





  // const addToBasket = useCallback(
  //   (product) => {
  //     setBasket((prevBasket) => {
  //       const existingProductIndex = prevBasket.findIndex(
  //         (item) => item.id === product.id
  //       );

  //       if (existingProductIndex > -1) {
  //         const updatedCart = prevBasket.map((item, index) =>
  //           index === existingProductIndex
  //             ? { ...item, quantity: item.quantity + 1 }
  //             : item
  //         );
  //         updateBasketAndLocalStorage(updatedCart);
  //         return updatedCart;
  //       } else {
  //         const updatedCart = [...prevBasket, { ...product, quantity: 1 }];
  //         updateBasketAndLocalStorage(updatedCart);
  //         return updatedCart;
  //       }
  //     });
  //   },
  //   [updateBasketAndLocalStorage]
  // );

  const removeFromBasket = useCallback(
    (id) => {
      setBasket((prevBasket) => {
        const updatedCart = prevBasket.filter((item) => item.id !== id);
        updateBasketAndLocalStorage(updatedCart);
        return updatedCart;
      });
    },
    [updateBasketAndLocalStorage]
  );

  const incrementProductQuantity = useCallback(
    (id) => {
      setBasket((prevBasket) => {
        const updatedCart = prevBasket.map((item) =>
          item.id === id ? { ...item, quantity: item.quantity + 1 } : item
        );
        updateBasketAndLocalStorage(updatedCart);
        return updatedCart;
      });
    },
    [updateBasketAndLocalStorage]
  );

  const decrementProductQuantity = useCallback(
    (id) => {
      setBasket((prevBasket) => {
        const updatedCart = prevBasket
          .map((item) =>
            item.id === id
              ? { ...item, quantity: Math.max(0, item.quantity - 1) }
              : item
          )
          .filter((item) => item.quantity > 0);
        updateBasketAndLocalStorage(updatedCart);
        return updatedCart;
      });
    },
    [updateBasketAndLocalStorage]
  );

  useEffect(() => {
    const getCoffeFetch = async () => {
      try {
        const apiUrl = "https://cafe-de-alturanew.vercel.app/api/products";
        const response = await fetch(apiUrl);
        const data = await response.json();
        setProducts(data);
        setIsLoading(false);
      } catch (error) {
        console.error("ERROR FETCH:", error);
        setError("Error al cargar los productos");
        setIsLoading(false);
      }
    };
    getCoffeFetch();
  }, []);

  // const totalPrice = basket.reduce((total, product) => total + product.price * product.quantity, 0);

  const totalPrice = useMemo(() => {
    return basket.reduce(
      (total, product) => total + product.price * product.quantity,
      0
    );
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
    totalItems,
  };

  return (
    <CoffeeCloud.Provider value={contextValue}>{children}</CoffeeCloud.Provider>
  );
};

export default CoffeeCloudProvider;
