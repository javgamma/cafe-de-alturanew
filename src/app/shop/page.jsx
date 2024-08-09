"use client"
import React, { useEffect, useState } from 'react'

const Shop = () => {
  const [products, setProducts] = useState(null);  // Estado para almacenar los productos
  const [error, setError] = useState(null);  // Estado para almacenar errores
  const [isLoading, setIsLoading] = useState(true);  


  const fetchProducts = async () => {
    setIsLoading(true);  // Indicar que la carga de datos ha comenzado
    try {
      const response = await fetch("https://cafe-de-alturanew.vercel.app/api/products");
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      setProducts(data);  // Guardar los productos en el estado
    } catch (error) {
      console.error("Error fetching products:", error);
      setError(error.message);  // Guardar el mensaje de error en el estado
    } finally {
      setIsLoading(false);  // Indicar que la carga de datos ha terminado
    }
  };

  // Hook useEffect para llamar a fetchProducts cuando se monte el componente
  useEffect(() => {
    fetchProducts();
  }, []);

  // Renderizar el contenido dependiendo del estado
  if (isLoading) return <div>Loading products...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!products || products.length === 0) return <div>No products found.</div>;


  return (
    <div className="p-6">
      <h1 className="text-4xl font-bold text-center mb-8">Our Coffee Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {Array.isArray(products) && products.map((product) => (
          <div key={product.id} className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">{product.name}</h2>
              <p className="text-gray-600 mb-4">{product.description}</p>
              <p className="text-lg font-bold text-gray-900">Price: ${product.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Shop
