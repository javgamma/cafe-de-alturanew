import React, { useContext } from "react";
import Image from "next/image";
import { Button } from "./ui/button";
import { CoffeeCloud } from "@/context/CoffeeCloud";

const CardCatalogue = ({ id, brand, img, price,available }) => {
  const { addToBasket } = useContext(CoffeeCloud);
  return (
    <div className="flex flex-col items-center justify-center text-center gap-6 w-[282px] min-h-[391.39px] border rounded-lg border-solid border-[#e3ded7]">
      <Image src={img} width={219.39} height={219.39} alt="coffe img" />
      <div className="flex flex-col gap-3 text-sm font-semibold leading-4">
        <p>{brand}</p>
        <p className="font-normal">{price.toFixed(2)} €</p>
      </div>
      <Button
        variant="buttonProductCard"
        onClick={() => addToBasket({ id, brand, img, price })}
      >
        Añadir
      </Button>
    </div>
  );
};
export default CardCatalogue;
