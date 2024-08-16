import { Minus, Plus } from "lucide-react";
import Image from "next/image";
import React from "react";

const ProductInBasket = () => {
  return (
    <div className="flex gap-6 w-[776px] h-[55.66px]border border border-[fuchsia]">
      <div className="flex gap-2">
        <Minus size={24} />
        <div className="rounded-[50%] bg-[#2A5B451A] opacity-[10px] w-[24px] h-[24px] flex items-center justify-center">
          <span className="text-xs font-normal leading-4 text-center">1</span>
        </div>
        <Plus size={24} />
      </div>
      <Image className="border" width={55.66} height={55.66} />
      <div className="w-[506.34px] h-[36px] gap-1">
        <p className="text-sm leading-4 font-semibold text-left border">
          title
        </p>

        <p className="text-sm leading-4 font-normal text-left border">
          description
        </p>
      </div>
      <span className="border w-[54px] h-[24px] font-semibold leading-6 text-left">
        9,00€
      </span>
    </div>
  );
};

export default ProductInBasket;
