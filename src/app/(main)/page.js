"use client"
import React, { useEffect, useState } from 'react'

const Homepage = () => {
  const [coffee, setCoffee] = useState(null);
  const [error, setError] = useState(null);

<<<<<<< Updated upstream
  // const getCoffee = async () => {
  //   console.log("Fetching data...");
  //   try {
  //     const response = await fetch("https://cafe-de-alturanew-javmirs-projects.vercel.app/api/products");
  //     console.log("Response received:", response);
  //     const data = await response.json();
  //     console.log("Data parsed:", data);
  //     setCoffee(data);
  //   } catch (error) {
  //     console.error("Fetch error:", error);
  //     setError(error);
  //   }
  // }

  const getCoffee = async () => {
    console.log("Fetching data...");
    try {
      const response = await fetch("https://cafe-de-alturanew.vercel.app/api/products");
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
=======
//probando merge
const getCoffee = async () => {
  setIsLoading(true);
  try {
    const response = await fetch("https://cafe-de-alturanew.vercel.app/api/products");
    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.error || `HTTP error! status: ${response.status}`);
>>>>>>> Stashed changes
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
    console.log("Running useEffect...");
    getCoffee();
  }, []);

  if (error) return <div>Error: {error.message}</div>;
  if (!coffee) return <div>Cargando los cafes... Loading...</div>;

  return (
    <div>
      <h1>Lista de Cafés:</h1>
      <pre>{JSON.stringify(coffee, null, 2)}</pre>
    </div>
  )
}

export default Homepage
