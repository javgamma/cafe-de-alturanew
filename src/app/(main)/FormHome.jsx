import { Mail, Phone } from "lucide-react";
import Link from "next/link";
import React from "react";
// import { useForm } from 'react-hook-form';

const FormHome = () => {
  return (
    <div className="h-full  flex justify-center m-0 p-0 bg-[#e3ded7]">
      <div className="w-[1200px] h-[552px] flex items-center justify-between justify-items-center">
        <div className="w-[588px] h-80 flex flex-col content-center justify-center text-gray-500 gap-6">
          <div className="flex flex-col gap-3 w-[588px] h-[68px] m-0">
            <p className="w-[588px] h-6 text-lg leading-6 font-semibold text-gray-900 flex m-0">Entra en contacto con nosotros</p>
            <p className="w-[588px] h-8 text-sm leading-4 m-0 p-0">
              Si tienes dudas, ponte en contacto con nosotros a través del
              formulario y te responderemos lo antes posible.
            </p>
          </div>
          <div className="w-[588px] h-[220px] flex flex-col gap-6 content-center text-gray-500 m-0 p-0">
            <p id="w-[588px] h-[37px] text-sm font-normal leading-4 flex gap-3 m-0">
              También puedes ponerte en contacto con nostros en nuestra
              dirección o a través del teléfono de la tienda.
            </p>
            <div className="flex flex-col w-[344px] h-[27px]">
              <p className="flex gap-3 m-0 p-0">
                742 Evergreen Terrace <br />
                Springfield, OR 12345
              </p>
            </div>
            <div className="flex flex-col w-[588px] h-[60px] gap-3">
              <div className="flex  w-[552px] h-6 text-sm leading-4 content-center items-center gap-3">
                <Phone/>
                <p className="w-[552px] h-4 m-0 p-0">+1 (555) 123-4567</p>
              </div>
              <div>
                <div className="flex w-[552px] h-6 text-sm leading-4 content-center items-center gap-3">
                  <Mail/>
                  <p>support@example.com</p>
                </div>
              </div>
            </div>
            <p className="mb-0">
              ¿Buscas un trabajo?
              <Link className="underline cursor-pointer" href="/">Ver nuestras ofertas.</Link>
            </p>
          </div>
        </div>
        <div className="h-[552px] w-[588px] flex justify-center items-center text-gray-700 bg-white box-border flex-col m-0">
          <form className="w-[470px] h-[488px] flex gap-6 flex-col bg-[white] justify-items-center box-border m-0" action="">
            <div className="flex flex-col w-[470px] min-h-[54px] gap-1 box-border shadow-[0px_1px_2px_0px_#0000000D]">
              <label htmlFor="fullnameUser">Nombre Completo</label>
              <input className="fullnameUser" id="fullnameUser" type="text" />
            </div>
            <div className="boxEmailUser">
              <label htmlFor="emailUser">Email</label>
              <input className="emailUser" id="emailUser" type="email" />
            </div>
            <div className="boxPhoneUser">
              <label htmlFor="codPhoneUser">Telefono</label>
              <div id="containerPhoneAndText">
                <select
                  className="codPhoneUser"
                  id="codPhoneUser"
                  name="codPhoneUser"
                  type="tel"
                >
                  <option value={+1}>US</option>
                  <option value={+34}>ES</option>
                  <option value={+58}>VEN</option>
                </select>
                <input
                  id="phoneUserText"
                  type="text"
                  placeholder="+1 (555)987-6543"
                />
              </div>
            </div>
            <div className="containerTextArea">
              <label htmlFor="comments" />
              <textarea
                name="comments"
                id="comments"
                placeholder="¿En qué podemos ayudarte?"
                defaultValue={""}
              />
            </div>
            <div id="privacyAndTerms">
              <input type="checkbox" name="" id="" />
              <label className="agreeTerms" htmlFor="">
                {" "}
                Acepto la{" "}
                <span>
                  <a href="">Politica de Privacidad</a> y los{" "}
                  <a href=""> Términos y condiciones</a>
                </span>
              </label>
            </div>
            <input id="containerSubmit" type="submit" defaultValue="Enviar" />
          </form>
        </div>
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
