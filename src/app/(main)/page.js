"use client"
import React, { useEffect, useState } from 'react'

const Homepage = () => {
  const [coffee, setCoffee] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const getCoffee = async () => {
    setIsLoading(true);
    try {
      const response = await fetch("https://cafe-de-alturanew.vercel.app/api/products");
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      setCoffee(data);
    } catch (error) {
      console.error("Fetch error:", error);
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    getCoffee();
  }, []);

  if (isLoading) return <div>Cargando los cafes...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!coffee) return <div>No se encontraron cafés.</div>;

  return (
    <div>
      {/* Renderiza tus datos de café aquí */}
      {Array.isArray(coffee) && coffee.map(item => (
  <div key={item.id}>{item.name}</div>
))}

    </div>
  )
}

export default Homepage