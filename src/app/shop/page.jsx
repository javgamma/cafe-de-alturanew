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
    <div>
      <h1>Our Coffee Products</h1>
      <div>
        {Array.isArray(products) && products.map((product) => (
          <div key={product.id}>
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <p>Price: ${product.price}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Shop
