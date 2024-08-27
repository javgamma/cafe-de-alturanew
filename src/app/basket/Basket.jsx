"use client";
import { useContext } from "react";
import { CoffeeCloud } from "@/context/CoffeeCloud"; // Asegúrate de importar el contexto correctamente
import Image from "next/image";
import { Minus, MinusCircle, Plus, PlusCircle } from "lucide-react";

const Basket = ({price, quantity}) => {
  const {basket, removeFromBasket, incrementProductQuantity, decrementProductQuantity } =
    useContext(CoffeeCloud);

    if (!Array.isArray(basket)) {
      return <p>Error: La cesta no es válida.</p>;
    }    

console.log(basket);

  return (
    <div>
      {basket.length > 0 ? (
        basket.map((product) => (
          <div
            key={product.id}
            className="flex gap-6 w-[776px] h-[55.66px]"
          >
            <div className="flex gap-2 items-center">
              <button
                onClick={() =>
                  decrementProductQuantity(product.id)
                }
              >
                <Minus size={20}/>
              </button>
              <div className="rounded-full bg-[#2A5B451A] w-[24px] h-[24px] flex items-center justify-center">
                <span className="text-xs font-normal leading-4 text-center">
                  {product.quantity}
                </span>
              </div>
              <button
                onClick={() => incrementProductQuantity(product.id)}
              >
                <Plus size={20}/>
              </button>
            </div>
            <Image
              src={product.img || "/fallback-image.png"} // Añade una imagen de respaldo si no se carga correctamente
              width={55.66}
              height={55.66}
              alt={product.brand ? `Imagen de ${product.brand}` : "Producto"}
              
            />
            <div className="w-[506.34px] h-[36px] gap-1">
              <p className="text-sm leading-4 font-semibold text-left">
                {product.brand || "Producto desconocido"}
              </p>
              <p className="text-sm leading-4 font-normal text-left">
                {product.price ? `${product.price.toFixed(2)} €` : "Precio no disponible"}
              </p>
            </div>
            <span>{product.price ? (product.price).toFixed(2) : "0.00"} €</span>
            {/* <button onClick={() => removeFromBasket(product.id)}>Eliminar</button> */}
          </div>
        ))
      ) : (
        <p>Tu cesta está vacía.</p>
      )}
    </div>
    
  );
};

export default Basket;
