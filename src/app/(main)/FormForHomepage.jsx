import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

const FormForHomepage = () => {
  return (
    <div className="h-[552px] w-[588px] flex justify-center items-center text-gray-700 bg-white box-border flex-col m-0">
      <form
        className="w-[470px] h-[488px] flex gap-6 flex-col bg-[white] justify-items-center box-border m-0"
        action=""
      >
        <div className="flex flex-col w-[470px] min-h-[54px] gap-1 box-border shadow-[0px_1px_2px_0px_#0000000D]">
          <label htmlFor="fullnameUser">Nombre Completo</label>
          <input
            className="w-[470px] h-[34px] border border-gray-300 box-border flex pl-2.5 rounded-md border-solid hover:border-solid hover:border-[#9b9ea3]  focus:outline-none focus:border-2 focus:border-solid focus:border-[#3f8f6b]"
            id="fullnameUser"
            type="text"
          />
        </div>
        <div className="flex flex-col w-[470px] min-h-[54px] gap-1 box-border shadow-[0px_1px_2px_0px_#0000000D]">
          <label htmlFor="emailUser">Email</label>
          <input
            className="flex border border-gray-300 shadow-[0px1px_2px_0px#0000000d] h-[34px] rounded-md border-solid box-border pl-[17px] hover:border  hover:border-solid hover:border-[#9b9ea3]  focus:outline-none focus:border-2 focus:border-solid focus:border-[#3f8f6b] "
            id="emailUser"
            type="email"
          />
        </div>
        <div className="w-[470px] h-[58px]">
          <label htmlFor="codPhoneUser">Telefono</label>
          <div
            className="w-[470px] h-[34px] border border-gray-300 flex items-center box-border shadow-[0px_1px_2px_0px_#0000000D] m-0 p-0 rounded-md border-solid 
          
          focus-within:border-[2px] focus-within:border-solid focus-within:border-[#3F8F6B] focus:outline-none
           hover:border  hover:border-solid hover:border-[#9b9ea3]"
          >
            <select
              className="w-[68px] h-7 text-center rounded-l-md border-none focus:ring-0 outline-none"
              id="codPhoneUser"
              name="codPhoneUser"
              type="tel"
            >
              <option value={+1}>US</option>
              <option value={+34}>ES</option>
              <option value={+58}>VEN</option>
            </select>
            <input
              className="w-[402px] h-7 box-border pl-2.5 border-none focus:ring-0 outline-none"
              type="text"
              placeholder="+1 (555)987-6543"
            />
          </div>
        </div>
        <div className="h-[142px] rounded-md">
          <label htmlFor="comments" />
          <textarea
            name="comments"
            className="w-[470px] min-h-[122px] border border-gray-300 shadow-[0px_1px_2px_0px_#0000000D] box-border rounded-md border-solid hover:border-solid hover:border-[#9b9ea3]  focus:outline-none focus:border-2 focus:border-solid focus:border-[#3f8f6b]"
            placeholder="¿En qué podemos ayudarte?"
            defaultValue={""}
          />
        </div>
        <div className="text-sm leading-4 font-normal flex gap-2.5 content-center accent-[#2A5B45]">
          <input type="checkbox" name="" id="" />
          <label className="agreeTerms" htmlFor="">
            {" "}
            Acepto la{" "}
            <span className="font-semibold">
              <a className="visited:text-gray-700" href="">
                Politica de Privacidad
              </a>{" "}
              y los{" "}
              <a className="visited:text-gray-700" href="">
                {" "}
                Términos y condiciones
              </a>
            </span>
          </label>
        </div>

        <Button variant="green" type="submit">
          {" "}
          Enviar
        </Button>
      </form>
    </div>
  );
};

export default FormForHomepage;
