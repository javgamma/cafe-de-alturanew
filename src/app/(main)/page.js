"use client"
import React, { useEffect, useState } from 'react'

const Homepage = () => {
  const [coffee, setCoffee] = useState(null);
  const [error, setError] = useState(null);

  const getCoffee = async () => {
    console.log("Fetching data...");
    try {
      const response = await fetch("https://cafe-de-alturanew-snyr-d3h5kjij7-javmirs-projects.vercel.app/api/products");
      console.log("Response status:", response.status);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      console.log("Data received:", data);
      setCoffee(data);
    } catch (error) {
      console.error("Fetch error:", error);
      setError(error);
    }
  }

  useEffect(() => {
    getCoffee();
  }, []);

  if (error) return <div>Error: {error.message}</div>;
  if (!coffee) return <div>Cargando los cafes... Loading...</div>;

  return (
    <div>
      <h1>Lista de Cafés:</h1>
      <ul>
        {coffee.map((item) => (
          <li key={item._id}>{item.brand} - ${item.price}</li>
        ))}
      </ul>
    </div>
  )
}

export default Homepage