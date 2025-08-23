import React, { createContext, useContext, useState } from "react";

const ListaDeseosContexto = createContext();

export function ListaDeseosProvider({ children }) {
  const [laListaDeseos, establecerListaDeseos] = useState([]);

  const agregarListaDeseos = (product) => {
    establecerListaDeseos((prev) => {
      if (prev.find((item) => item.id === product.id)) return prev;
      return [...prev, product];
    });
  };

  const eliminarListaDeseos = (productId) => {
    establecerListaDeseos((prev) => prev.filter((item) => item.id !== productId));
  };

  const EstaEnListaDeseos = (productId) => {
    return laListaDeseos.some((item) => item.id === productId);
  };

  return (
    <ListaDeseosContexto.Provider value={{ laListaDeseos, agregarListaDeseos, eliminarListaDeseos, EstaEnListaDeseos }}>
      {children}
    </ListaDeseosContexto.Provider>
  );
}

export function usarListaDeseos() {
  return useContext(ListaDeseosContexto);
}
