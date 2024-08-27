import Link from 'next/link';
import React from 'react';

const LinksforNavbar = ({ way }) => {
  const row = "flex gap-5";
  const col = "h-36  flex flex-col absolute no-underline text-sm leading-4 left-[577px]";

  const liStyle = "hover:bg-[#F7F5F31A] rounded-sm p-2 cursor-pointer";

  if (way === "col") {
    return (
      <div>
        <ul className={col}>
          <li className={liStyle}>
            <Link href="/shop">Tienda</Link>
          </li>

          <li className={liStyle}>
            <Link href="/subscription">Suscripcion</Link>
          </li>
          <li className={liStyle}>
            <Link href="/contactUs">Para Empresas</Link>
          </li>
          <li className={liStyle}>
            <Link href="/aboutUs">Sobre Nosotros</Link>
          </li>
          <li className={liStyle}>
            <Link href="/checkout">Contacto</Link>
          </li>
        </ul>
      </div>
    );
  } else {
    return (
      <div className="flex">
        <ul className={row}>
          <li className={liStyle}>
            <Link href="/shop">Tienda</Link>
          </li>

          <li className={liStyle}>
            <Link href="/subscription">Suscripcion</Link>
          </li>
          <li className={liStyle}>
            <Link href="/contactUs">Para Empresas</Link>
          </li>
          <li className={liStyle}>
            <Link href="/aboutUs">Sobre Nosotros</Link>
          </li>
          <li className={liStyle}>
            <Link href="/checkout">Contacto</Link>
          </li>
        </ul>
      </div>
    );
  }
};

export default LinksforNavbar;