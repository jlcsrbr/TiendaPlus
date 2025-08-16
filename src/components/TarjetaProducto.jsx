import React, { useState } from 'react';
import '../styles/TarjetaProducto.css';
import { FaEye, FaRegHeart } from "react-icons/fa";

const TarjetaProducto = ({ product }) => {
  const { nombreProducto, imagenProducto, precio, descuento, divisa, valorizacion, resenas, esNuevo, colores } = product;

  const precioFinal = descuento ? precio - (precio * descuento / 100) : precio;

  // Estado para controlar la visibilidad del modal de vista rápida
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <div className="tarjeta-producto">
        <div className="product-image-container">
          {esNuevo && <span className="producto-tag nuevo-tag">Nuevo</span>}
          <img className="imagen-producto" src={imagenProducto} alt={nombreProducto} />
          <div className="producto-acciones">
            <button className="icono-boton" onClick={handleOpenModal}><FaEye /></button>
            <button className="icono-boton"><FaRegHeart /></button>
          </div>
          <button className="boton-anadir-producto-al-carrito">Añadir al carrito</button>
        </div>
        <div className="producto-detalles">
          <h3 className="producto-nombre">{nombreProducto}</h3>
          <div className="producto-valorizacion">
            <span className="cantidad-valorizacion">★★★★☆</span>
            <span className="cantidad-resenas">({resenas})</span>
          </div>
          <div className="producto-precio">
            {descuento > 0 && (
              <>
                <span className="precio-original">{divisa} {precio}</span>
                <span className="descuento-tag">-{descuento}%</span>
              </>
            )}
            <span className="precio-final">{divisa} {precioFinal.toFixed(2)}</span>
          </div>
          
          {colores && colores.length > 0 && (
            <div className="producto-colores">
              {colores.map((color, index) => (
                <span key={index} className="color-circulo" style={{ backgroundColor: color }}></span>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Modal de vista rápida */}
      {isModalOpen && (
        <div className="modal-overlay" onClick={handleCloseModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close-btn" onClick={handleCloseModal}>&times;</button>
            <img className="modal-image" src={imagenProducto} alt={nombreProducto} />
          </div>
        </div>
      )}
    </>
  );
};

export default TarjetaProducto;



