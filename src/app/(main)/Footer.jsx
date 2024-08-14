import LinksforNavbar from "@/components/LinksforNavbar";
import Logotype from "@/components/logotype";
import { Mail, Phone } from "lucide-react";
import Link from "next/link";
import React from "react";

const Footer = ({ way }) => {
  return (
    <footer className="h-[270px] bg-[#1F1815] flex justify-between items-center flex-col box-border text-white ">
      <div className="flex w-[1200px] h-[204px] gap-4 flex-col mt-[28.61px]">
        <Logotype />
        <div className="flex justify-between w-[1132px] h-[152px] relative">
          <div className="w-[255.33px] h-[152px] flex flex-col gap-4">
            <p className="w-[131px] h-6 font-semibold text-lg leading-6 m-0">
              Te ayudamos en{" "}
            </p>
            <div className="w-[182px] h-12 flex gap-2 justify-center items-center flex-row rounded bg-[#515051]">
              <Phone />
              <Link href="">+34 919 49 05 18</Link>
            </div>
            <div className="w-[232px] h-12 flex gap-2 justify-center items-center flex-row rounded bg-[#515051]">
              <Mail />
              <a id="buttonMailFooter" href="">
                hola@cafedealtura.com
              </a>
            </div>
          </div>
          <LinksforNavbar way={"col"} />
          <ul
            className="flex flex-col absolute w-[255.33px] h-20 gap-4 text-sm  leading-4 no-underline m-0 p-0 left-[800px] top-[3px];
                list-style: none"
          >
            <li>
              <a href="">Politica de privacidad</a>
            </li>
            <li>
              <a href="">Politica de cookies</a>
            </li>
            <li>
              <a href="">Terminos y condiciones</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
