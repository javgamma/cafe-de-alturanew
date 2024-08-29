import { Mail, Phone } from "lucide-react";
import Link from "next/link";
import React from "react";
import FormForHomepage from "./FormForHomepage";

// import { useForm } from 'react-hook-form';

const FormHome = () => {
  return (
    <div className="h-full  flex justify-center m-0 p-0 bg-[#e3ded7]">
      <div className="w-[1200px] h-[552px] flex items-center justify-between justify-items-center">
        <div className="w-[588px] h-80 flex flex-col  justify-center text-gray-500 gap-6 text-sm">
          <div className="flex flex-col gap-3 w-[588px] h-[68px] m-0">
            <h3 className="w-[588px] h-6 text-lg leading-6 font-semibold text-gray-900 flex m-0 ">
              Entra en contacto con nosotros
            </h3>
            <p className="w-[588px] h-8 text-sm leading-4 m-0 p-0">
              Si tienes dudas, ponte en contacto con nosotros a través del
              formulario y te responderemos lo antes posible.
            </p>
          </div>
          <div className="w-[588px] h-[220px] flex flex-col  gap-6 text-gray-500 m-0 p-0">
            <p id="w-[588px] h-[37px] text-sm font-normal leading-4 flex m-0">
              También puedes ponerte en contacto con nostros en nuestra
              dirección o a través del teléfono de la tienda.
            </p>
            <div className="flex flex-col w-[344px] h-[27px] pb-8 ">
              <div className="flex flex-col m-0 p-0">
                <p className="flex m-0 p-0">742 Evergreen Terrace</p>
                <p className="flex ">Springfield, OR 12345</p>
              </div>
            </div>
            <div className="flex flex-col w-[588px] h-[60px] gap-3">
              <div className="flex  w-[552px] h-6 text-sm leading-4 content-center items-center gap-3">
                <Phone size={24} className=" text-[#6B7280] " />
                <p className="w-[552px] h-4 m-0 p-0">+1 (555) 123-4567</p>
              </div>
              <div>
                <div className="flex w-[552px] h-6 text-sm leading-4 content-center items-center gap-3">
                  <Mail size={24} />
                  <p>support@example.com</p>
                </div>
              </div>
            </div>
            <Link className=" cursor-pointer flex gap-4" href="/">
              <p className=" flex mb-0 no-underline text-none  text-sm leading-4 font-normal">
                ¿Buscas un trabajo?
              </p>

              <p className="flex underline font-semibold text-sm text-[#262368] ">
                Ver nuestras ofertas
              </p>
            </Link>
          </div>
        </div>
        <FormForHomepage />
      </div>
    </div>

    // export default function App() {
    //   const { register, handleSubmit, formState: { errors } } = useForm();
    //   const onSubmit = data => console.log(data);
    //   console.log(errors);

    //   return (
    //     <form onSubmit={handleSubmit(onSubmit)}>
    //       <input type="text" placeholder="Nombre completo" {...register("Nombre completo", {required: true})} />
    //       <input type="text" placeholder="Email" {...register("Email", {required: true, pattern: /^\S+@\S+$/i})} />
    //       <input type="tel" placeholder="Telefono" {...register("Telefono", {required: true})} />
    //       <textarea {...register("LabelDelTextarea", {required: true, maxLength: 500})} />
    //       <input type="checkbox" placeholder="Acepto la Política de Privacidad y los Términos y condiciones." {...register("Acepto la Política de Privacidad y los Términos y condiciones.", {required: true})} />

    //       <input type="submit" />
    //     </form>
    //   );
    // }
  );
};

export default FormHome;
