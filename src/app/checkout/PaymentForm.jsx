"use client"
import React from 'react'
import { useForm } from 'react-hook-form';
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
import SubtotalCart from '@/components/SubtotalCart';
import TotalCart from '@/components/TotalCart';
import Image from 'next/image';

const PaymentForm = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data) => {
      console.log(data);
      // Aquí iría la lógica para procesar el pago
    };
  
    return (
      <div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col w-[784px] min-h-[407.32px] "
        >
          <p className="font-semibold text-lg leading-6">
            Seleccionar método de pago
          </p>
          <Accordion
            type="single"
            collapsible
            className="flex flex-col  justify-center "
          >
            <AccordionItem
              value="item-1"
              className="flex flex-col  w-[668px] gap-4 bg-[white]  text-[#2b2a2b] rounded-[10px] overflow-hidden"
            >
              <AccordionTrigger className="custom-no-arrow hover:no-underline">
                <div className=" flex w-[665px] no-underline hover:no-underline">
                  <label className="flex items-center">
                    <input
                      type="radio"
                      value="debit"
                      {...register("paymentMethod", { required: true })}
                      className="mr-2"
                    />
                    <div className="flex flex-col ml-4">
                      <p className="flex">Tarjeta de débito</p>
                      <p className="flex font-normal text-sm">
                        Opcion estándar sin seguimiento
                      </p>
                    </div>
                  </label>
                </div>
              </AccordionTrigger>
              <AccordionContent className=" w-[279px] h-auto font-normal text-xs leading-4 text-[#2b2a2b] ">
                {/* Campos de tarjeta de débito */}
                <div className="mb-4 w-[279px]">
                  <label className="block mb-2">Titular</label>
                  <input
                    type="text"
                    {...register("cardHolder", { required: true })}
                    className="w-full p-2 border rounded"
                  />
                </div>
                <div className="mb-4">
                  <label className="block mb-2">Número de la tarjeta</label>
                  <input
                    type="text"
                    {...register("cardNumber", {
                      required: true,
                      pattern: /^\d{16}$/,
                    })}
                    className="w-full p-2 border rounded"
                  />
                </div>

                <div className="flex mb-4">
                  <div className="w-1/2 mr-2">
                    <label className="block mb-2">Fecha de caducidad</label>
                    <input
                      type="text"
                      {...register("expiryDate", {
                        required: true,
                        pattern: /^(0[1-9]|1[0-2])\/\d{2}$/,
                      })}
                      placeholder="MM/YY"
                      className="w-full p-2 border rounded"
                    />
                  </div>
                  <div className="w-1/2 ml-2">
                    <label className="block mb-2">CVC</label>
                    <input
                      type="text"
                      {...register("cvc", {
                        required: true,
                        pattern: /^\d{3}$/,
                        maxLength: 3,
                      })}
                      placeholder="123"
                      maxLength={3}
                      inputMode="numeric"
                      className="w-full p-2 border rounded"
                      onInput={(e) => {
                        // Asegura que solo se ingresen números
                        e.target.value = e.target.value.replace(/\D/g, "");
                      }}
                    />
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              value="item-2"
              className="flex flex-col  w-[668px] gap-4 bg-[white]  text-[#2b2a2b] rounded-[10px] overflow-hidden"
            >
              <AccordionTrigger className="custom-no-arrow hover:no-underline">
                <div className=" flex w-[665px] no-underline hover:no-underline">
                  <label className="flex items-center">
                    <input
                      type="radio"
                      value="transfer"
                      {...register("paymentMethod", { required: true })}
                      className="mr-2"
                    />
                    <div className="flex flex-col ml-4">
                      <p className="flex">
                        Transferencia bancaria a la cuenta ES12 1234 1234
                        123457890
                      </p>
                    </div>
                  </label>
                </div>

              </AccordionTrigger>
                      <AccordionContent>
                      <p className="flex font-normal text-sm">
                        Será necesario recibir el comprobante de la
                        transferencia para preparar tu pedido
                      </p>
                      </AccordionContent>

            </AccordionItem>

            <AccordionItem
              value="item-3"
              className="flex flex-col  w-[668px] gap-4 bg-[white]  text-[#2b2a2b] rounded-[10px] overflow-hidden"
            >
              <AccordionTrigger className="custom-no-arrow hover:no-underline">
                <div className=" flex w-[665px]  ">
                  <label className="flex items-center">
                    <input
                      type="radio"
                      value="bizum"
                      {...register("paymentMethod", { required: true })}
                      className="mr-2"
                    />
                    <div className="flex gap-4">
                      <p>Bizum</p>
                      <Image
                        src={"/images/bizum.png"}
                        width={69.23}
                        height={30}
                        alt={"Bizum logotype"}
                      />
                    </div>
                  </label>
                </div>
              </AccordionTrigger>
            </AccordionItem>
          </Accordion>

          {/* Dirección de envío */}
          <div className="flex w-[521px] h-[433px] flex-col gap-2">
            <div className="flex flex-col w-[521px] gap-[3px]">
              <h3 className="text-lg font-semibold leading-6">
                Dirección de envío
              </h3>

              <div>
                <label className="mb-2">Nombre</label>
                <input
                  type="text"
                  {...register("name", { required: true })}
                  className="w-full h-[36px] border rounded-[6px] shadow-[0px1px_2px_0px#0000000d] border-solid box-border pl-[17px] hover:border  hover:border-solid hover:border-[#9b9ea3]  focus:outline-none focus:border-2 focus:border-solid focus:border-[#3f8f6b]"
                />
              </div>
            </div>

            <div>
              <label className="mb-2">Apellidos</label>
              <input
                type="text"
                {...register("lastName", { required: true })}
                className="w-full h-[36px] border rounded-[6px] shadow-[0px1px_2px_0px#0000000d] border-solid box-border pl-[17px] hover:border  hover:border-solid hover:border-[#9b9ea3]  focus:outline-none focus:border-2 focus:border-solid focus:border-[#3f8f6b]"
              />
            </div>

            <div>
              <label className="mb-2">Teléfono</label>
              <input
                type="tel"
                {...register("phone", { required: true })}
                className="w-full h-[36px] border rounded-[6px] shadow-[0px1px_2px_0px#0000000d] border-solid box-border pl-[17px] hover:border  hover:border-solid hover:border-[#9b9ea3]  focus:outline-none focus:border-2 focus:border-solid focus:border-[#3f8f6b]"
              />
            </div>
            <div>
              <label>Email</label>
              <input
                type="email"
                {...register("email", {
                  required: true,
                  pattern: /^\S+@\S+$/i,
                })}
                className="w-full h-[36px] border rounded-[6px] shadow-[0px1px_2px_0px#0000000d] border-solid box-border pl-[17px] hover:border  hover:border-solid hover:border-[#9b9ea3]  focus:outline-none focus:border-2 focus:border-solid focus:border-[#3f8f6b]"
              />
            </div>
            <div className="mb-2">
              <label>País</label>
              <select
                {...register("country", { required: true })}
                className="w-full h-[36px] border rounded-[6px] shadow-[0px1px_2px_0px#0000000d] border-solid box-border pl-[17px] hover:border  hover:border-solid hover:border-[#9b9ea3]  focus:outline-none focus:border-2 focus:border-solid focus:border-[#3f8f6b]"
              >
                <option value="">Seleccionar</option>
                <option value="ES">España</option>
                <option value="US">Estados Unidos</option>
                <option value="VEN">Venezuela</option>
              </select>
            </div>

            <div className="flex items-center gap-[3px] justify-between">
              <div className=" flex flex-col w-[248px]">
                <label className="mb-2">Población</label>
                <input
                  type="text"
                  {...register("city", { required: true })}
                  className="w-full h-[36px] border rounded-[6px] shadow-[0px1px_2px_0px#0000000d] border-solid box-border pl-[17px] hover:border  hover:border-solid hover:border-[#9b9ea3]  focus:outline-none focus:border-2 focus:border-solid focus:border-[#3f8f6b]"
                />
              </div>
              <div className="flex flex-col w-[248px]">
                <label className="mb-2">CP</label>
                <input
                  type="text"
                  {...register("postalCode", {
                    required: true,
                    pattern: /^\d{5}$/,
                  })}
                  maxLength={5}
                  inputMode="numeric"
                  onInput={(e) => {
                    // Asegura que solo se ingresen números
                    e.target.value = e.target.value.replace(/\D/g, "");
                  }}
                  className="w-full h-[36px] border rounded-[6px] shadow-[0px1px_2px_0px#0000000d] border-solid box-border pl-[17px] hover:border hover:border-solid hover:border-[#9b9ea3] focus:outline-none focus:border-2 focus:border-solid focus:border-[#3f8f6b]"
                />
              </div>
            </div>

            <div className="flex items-center justify-around">
              <div className="w-[112.25px] flex-col">
                <label className="mb-2">Calle</label>
                <input
                  type="text"
                  {...register("street", { required: true })}
                  className="w-full h-[36px] border rounded-[6px] shadow-[0px1px_2px_0px#0000000d] border-solid box-border pl-[17px] hover:border  hover:border-solid hover:border-[#9b9ea3]  focus:outline-none focus:border-2 focus:border-solid focus:border-[#3f8f6b]"
                />
              </div>
              <div className="flex">
                <div className="w-[112.25px] flex-col">
                  <label className="mb-2">Nº</label>
                  <input
                    type="text"
                    {...register("number", { required: true })}
                    className="w-full h-[36px] border rounded-[6px] shadow-[0px1px_2px_0px#0000000d] border-solid box-border pl-[17px] hover:border  hover:border-solid hover:border-[#9b9ea3]  focus:outline-none focus:border-2 focus:border-solid focus:border-[#3f8f6b]"
                  />
                </div>
              </div>
              <div className="w-[112.25px] flex-col">
                <label className="mb-2">Piso</label>
                <input
                  type="text"
                  {...register("floor")}
                  className="w-full h-[36px] border rounded-[6px] shadow-[0px1px_2px_0px#0000000d] border-solid box-border pl-[17px] hover:border  hover:border-solid hover:border-[#9b9ea3]  focus:outline-none focus:border-2 focus:border-solid focus:border-[#3f8f6b]"
                />
              </div>
              <div className="w-[112.25px] flex-col">
                <label className="mb-2">Puerta</label>
                <input
                  type="text"
                  {...register("door")}
                  className="w-full h-[36px] border rounded-[6px] shadow-[0px1px_2px_0px#0000000d] border-solid box-border pl-[17px] hover:border  hover:border-solid hover:border-[#9b9ea3]  focus:outline-none focus:border-2 focus:border-solid focus:border-[#3f8f6b]"
                />
              </div>
            </div>
          </div>
        </form>
        {/* <button
            type="submit"
            className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
          >
            Realizar pedido
          </button> */}
      </div>
    );
  };
  

export default PaymentForm
