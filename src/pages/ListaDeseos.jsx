import React from 'react';
import TarjetaProducto from '../components/TarjetaProducto';
import '../styles/ProductList.css'; 


const ListaDeseos = () => {
  return (
    <div className="product-list-container">
      <h2>Lista de Deseos</h2>
      <div className="product-grid">
        {products.map((product) => (
          <TarjetaProducto key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ListaDeseos;

