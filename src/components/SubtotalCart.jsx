"use client"
import Basket from "@/app/basket/Basket";
import { CoffeeCloud } from "@/context/CoffeeCloud";
import React, { useContext, useEffect } from "react";
import TotalCart from "./TotalCart";
import { Button } from "./ui/button";

const SubtotalCart = () => {

  const {totalItems,totalPrice} = useContext(CoffeeCloud);

  
  return (
    // <div className="min-h-[772px] gap-6 flex flex-col items-center mt-16 p-10 ">
    //   <span className=" h-7 text-2xl font-medium leading-7 text-[#2A5B45] m-0 p-0 flex">
    //     Cesta ({totalItems})
    //   </span>

    //   <div className="flex min-w-[1200px] min-h-[900px] justify-between ">
    //     <div className="flex w-[792px] h-[415.32px]  flex-col gap-6 box-border p-[5px]">
    //       <p className="w-[83px] h-6 text-lg font-semibold leading-6 text-left m-0">
    //         Productos
    //       </p>
         
    //       <Basket />
    //       <p id="selectShipping">Seleccionar Envío</p>
    //     </div>
    //     <div className="flex flex-col w-96 h-[280px] box-border items-center justify-center gap-4 bg-[#F7F5F3] rounded-lg">
    //       <div className="flex flex-col box-border gap-4">
    //         <div>
    //           <p className=" h-6 text-lg font-semibold leading-6 text-left border m-0 p-0 border-solid border-[saddlebrown]">
    //             Total del carrito
    //           </p>
    //         </div>
    //         <div className="w-[336px] h-4 flex justify-between">
    //           <p className="flex w-[70px] h-4 text-sm font-normal leading-4 text-left border m-0 p-0 ">
    //             SUBTOTAL{" "}
    //           </p>
    //           <p className="flex  h-4 text-sm font-semibold leading-4 text-left m-0 p-0">
    //             <span>{totalPrice.toFixed(2)} €</span>
    //           </p>
    //         </div>
    //         <div className="flex w-[336px] h-4 justify-between">
    //           <p className="w-[43px] h-4 text-sm font-normal leading-4 text-left m-0 p-0">
    //             ENVÍO
    //           </p>
    //           <p className="w-[49px] h-4 text-sm font-semibold leading-4 text-left m-0">
    //             <span>GRÁTIS</span>
    //           </p>
    //         </div>
    //         <div className="w-[336px] h-10 flex justify-between ">
    //           <p className="w-[45px] h-4 text-sm font-semibold leading-4 m-0 p-0">
    //             TOTAL
    //           </p>
    //           <div className="flex flex-col gap-2">
    //             <p className="w-[107px] h-10 text-sm font-semibold leading-4 text-right m-0 p-0">
    //               <span>18,00€</span>
    //             </p>
    //             <p className=" w-[107px] h-4 text-xs font-normal leading-4 text-right m-0 p-0">
    //               Incluye <span>3,78</span> de IVA
    //             </p>
    //           </div>
    //         </div>
    //       </div>
    //       <div className="w-[310px] h-10 flex gap-2">
    //         <Button variant="green">Ir a checkout</Button>
    //         {/* <div id="btnGoCheckout">Ir a checkout</div>
    //             <div id="btnContinuePurchase">Seguir comprando</div> */}
    //       </div>
    //     </div>
    //   </div>
    // </div>

    <TotalCart/>
  );
};

export default SubtotalCart;















// "use client"
// import Basket from "@/app/basket/Basket";
// import { CoffeeCloud } from "@/context/CoffeeCloud";
// import React, { useContext, useEffect, useState } from "react";
// import { Button } from "./ui/button";

// const SubtotalCart = () => {
//   const {basket, totalItems, totalPrice} = useContext(CoffeeCloud);
//   const [isClient, setIsClient] = useState(false);

//   useEffect(() => {
//     setIsClient(true);
//   }, []);

//   const displayTotalItems = isClient ? totalItems : 0;
//   const displayTotalPrice = isClient ? totalPrice.toFixed(2) : '0.00';

//   return (
//     <div className="min-h-[772px] gap-6 flex flex-col items-center mt-16 p-10 ">
//       <span className=" h-7 text-2xl font-medium leading-7 text-[#2A5B45] m-0 p-0 flex">
//         Cesta ({displayTotalItems})
//       </span>

//       <div className="flex min-w-[1200px] min-h-[900px] justify-between ">
//         <div className="flex w-[792px] h-[415.32px]  flex-col gap-6 box-border p-[5px]">
//           <p className="w-[83px] h-6 text-lg font-semibold leading-6 text-left m-0">
//             Productos
//           </p>
         
//           <Basket />
//           <p id="selectShipping">Seleccionar Envío</p>
//         </div>
//         <div className="flex flex-col w-96 h-[280px] box-border items-center justify-center gap-4 bg-[#F7F5F3] rounded-lg">
//           <div className="flex flex-col box-border gap-4">
//             <div>
//               <p className=" h-6 text-lg font-semibold leading-6 text-left border m-0 p-0 border-solid border-[saddlebrown]">
//                 Total del carrito
//               </p>
//             </div>
//             <div className="w-[336px] h-4 flex justify-between">
//               <p className="flex w-[70px] h-4 text-sm font-normal leading-4 text-left border m-0 p-0 ">
//                 SUBTOTAL{" "}
//               </p>
//               <p className="flex  h-4 text-sm font-semibold leading-4 text-left m-0 p-0">
//                 <span>{displayTotalPrice} €</span>
//               </p>
//             </div>
//             {/* Rest of the component remains the same */}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SubtotalCart;