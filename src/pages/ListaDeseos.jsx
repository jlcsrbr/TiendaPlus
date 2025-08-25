import React from 'react';
import TarjetaProducto from '../components/TarjetaProducto';
import '../styles/ProductList.css'; 
import { usarListaDeseos } from '../context/ListaDeseosContexto';


const ListaDeseos = () => {
  const { laListaDeseos } = usarListaDeseos();
  return (
    <div className="product-list-container">
      <h2>Lista de Deseos</h2>
      <div className="product-grid">
  {laListaDeseos.length === 0 ? (
          <p>No tienes productos en tu lista de deseos.</p>
        ) : (
          laListaDeseos.map((product) => (
            <TarjetaProducto key={product.id} product={product} />
          ))
        )}
      </div>
    </div>
  );
};

export default ListaDeseos;

