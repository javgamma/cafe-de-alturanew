import { CoffeeCloud } from '@/context/CoffeeCloud';
import React, { useContext, useEffect } from 'react';
import CardCatalogue from './CardCatalogue'; // Importa el componente CardCatalogue
import Link from 'next/link'; // Importa el componente Link
import { MoveRight } from 'lucide-react'; // Importa el icono MoveRight

const NewsSection = ({ titleCatalogue, quantity, margin }) => {
  const { products, error, isLoading } = useContext(CoffeeCloud);

  // Renderizar el contenido dependiendo del estado
  if (isLoading) return <div>Loading products...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!products || products.length === 0) return <div>No products found.</div>;

  const className = margin ? "flex flex-col items-center justify-center min-h-[603.39px] gap-10 mt-16 p-[40px] font-semibold" : "flex flex-col items-center justify-center min-h-[603.39px] gap-10";

  return (
    <div className={className}>
      <h2 className="flex text-[#2a5b45] text-2xl font-normal">{titleCatalogue}</h2>
      <div className="flex flex-wrap justify-center min-h-[391.39px] gap-6 ${products.available}">
        {products.slice(0, quantity).map((coffee,i) => (
          <CardCatalogue
            key={i}
            id={coffee._id}
            brand={coffee.brand}
            img={coffee.img_url}
            price={coffee.price}
            available={coffee.available}
            // onAddToBasket={() => addToBasket(coffee)}
          />
        ))}
      </div>
      {!margin && (
        <div className="flex underline gap-4 items-center">
          <Link className="text-black font-semibold leading-4" href="/shop">
            Ver todos
          </Link>
          <MoveRight />
        </div>
      )}
    </div>
  );
};

export default NewsSection;