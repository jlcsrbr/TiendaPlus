import React from 'react';
import TarjetaProducto from '../components/TarjetaProducto';
import '../styles/ProductList.css'; 
import { useListaDeseos } from '../context/ListaDeseosContexto';


const ListaDeseos = () => {
  const { wishlist } = useListaDeseos();
  return (
    <div className="product-list-container">
      <h2>Lista de Deseos</h2>
      <div className="product-grid">
        {wishlist.length === 0 ? (
          <p>No tienes productos en tu lista de deseos.</p>
        ) : (
          wishlist.map((product) => (
            <TarjetaProducto key={product.id} product={product} />
          ))
        )}
      </div>
    </div>
  );
};

export default ListaDeseos;

