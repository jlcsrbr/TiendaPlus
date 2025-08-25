import React, { createContext, useContext, useState, useEffect } from "react";

const CarritoContexto = createContext();

export function CarritoProvider({ children }) {
  const [carrito, setCarrito] = useState([]);

  // Cargar carrito desde localStorage al iniciar
  useEffect(() => {
    try {
      const carritoGuardado = localStorage.getItem("carrito");
      if (carritoGuardado) {
        setCarrito(JSON.parse(carritoGuardado));
      }
    } catch (error) {
      console.error("Failed to parse cart from localStorage", error);
      setCarrito([]); // Iniciar con un carrito vacío si hay error
    }
  }, []);

  // Guardar carrito en localStorage cada vez que cambie
  useEffect(() => {
    try {
      localStorage.setItem("carrito", JSON.stringify(carrito));
    } catch (error) {
      console.error("Failed to save cart to localStorage", error);
    }
  }, [carrito]);

  const agregarAlCarrito = (producto) => {
    setCarrito((prev) => {
      const productoExistente = prev.find((item) => item.id === producto.id);
      if (productoExistente) {
        // Si el producto ya existe, incrementa la cantidad
        return prev.map((item) =>
          item.id === producto.id
            ? { ...item, cantidad: item.cantidad + 1 }
            : item
        );
      } else {
        // Si es un producto nuevo, lo añade con cantidad 1
        return [...prev, { ...producto, cantidad: 1 }];
      }
    });
  };

  const eliminarDelCarrito = (productoId) => {
    setCarrito((prev) => prev.filter((item) => item.id !== productoId));
  };

  const actualizarCantidad = (productoId, nuevaCantidad) => {
    const cantidad = Number(nuevaCantidad);
    if (isNaN(cantidad) || cantidad < 1) {
      // Si la cantidad no es válida o es menor a 1, elimina el producto
      eliminarDelCarrito(productoId);
      return;
    }
    setCarrito((prev) =>
      prev.map((item) =>
        item.id === productoId ? { ...item, cantidad: cantidad } : item
      )
    );
  };
  
  const vaciarCarrito = () => {
    setCarrito([]);
  };

  const totalItems = carrito.reduce((sum, item) => sum + item.cantidad, 0);

  return (
    <CarritoContexto.Provider
      value={{
        carrito,
        agregarAlCarrito,
        eliminarDelCarrito,
        actualizarCantidad,
        vaciarCarrito,
        totalItems,
      }}
    >
      {children}
    </CarritoContexto.Provider>
  );
}

export function useCarrito() {
  const context = useContext(CarritoContexto);
  if (!context) {
    throw new Error("useCarrito debe ser usado dentro de un CarritoProvider");
  }
  return context;
}
