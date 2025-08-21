import React, { useState, useMemo } from "react";
import "../styles/TarjetaProducto.css";
import { FaEye, FaRegHeart } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const TarjetaProducto = (props) => {
  const {
    product = {},
    // callbacks opcionales (no cambian estilos):
    onAddToCart,
    onWishlist,
    onPreview,
    // flags opcionales por si quieres ocultar acciones/botón sin tocar CSS
    showActions = true,
    showAddButton = true,
  } = props;
  const navigate = useNavigate();
  const {
    id,
    nombreProducto = "",
    imagenProducto = "",
    precio = 0,
    descuento = 0,
    divisa = "S/",
    valorizacion = 0,   // 0..5
    resenas = 0,
    esNuevo = false,
    colores = [],
  } = product;

  const precioFinal = useMemo(
    () => (descuento ? precio - (precio * descuento) / 100 : precio),
    [precio, descuento]
  );

  // Modal de vista rápida
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleOpenModal = () => {
    setIsModalOpen(true);
    if (typeof onPreview === "function") onPreview(product);
  };
  const handleCloseModal = () => setIsModalOpen(false);

  // Helpers
  const formatMoney = (num) =>
    `${divisa} ${Number(num).toFixed(2)}`;

  const handleAddToCart = () => {
    if (typeof onAddToCart === "function") onAddToCart(product);
  };
  const handleWishlist = () => {
    if (typeof onWishlist === "function") onWishlist(product);
  };

  // Render de estrellas con los mismos caracteres que tu CSS admite
  const estrellasTexto = () => {
    const filled = Math.round(Number(valorizacion) || 0); // entero 0..5
    const empty = Math.max(0, 5 - filled);
    return "★".repeat(filled) + "☆".repeat(empty);
  };

  return (
    <>
      <div className="tarjeta-producto">
        <div className="product-image-container">
          {esNuevo && <span className="producto-tag nuevo-tag">Nuevo</span>}

          <img
            className="imagen-producto"
            src={imagenProducto}
            alt={nombreProducto}
            loading="lazy"
            draggable="false"
            onClick={() => navigate(`/producto/${id}`)} //  manda al detalle
          />

          {showActions && (
            <div className="producto-acciones">
              <button className="icono-boton" onClick={handleOpenModal} aria-label="Vista rápida">
                <FaEye />
              </button>
              <button className="icono-boton" onClick={handleWishlist} aria-label="Agregar a favoritos">
                <FaRegHeart />
              </button>
            </div>
          )}

          {showAddButton && (
            <button
              className="boton-anadir-producto-al-carrito"
              onClick={handleAddToCart}
            >
              Añadir al carrito
            </button>
          )}
        </div>

        <div className="producto-detalles">
          <h3 className="producto-nombre">{nombreProducto}</h3>

          <div className="producto-valorizacion">
            <span className="cantidad-valorizacion">{estrellasTexto()}</span>
            <span className="cantidad-resenas">({resenas})</span>
          </div>

          <div className="producto-precio">
            {descuento > 0 && (
              <>
                <span className="precio-original">
                  {formatMoney(precio)}
                </span>
                <span className="descuento-tag">-{descuento}%</span>
              </>
            )}
            <span className="precio-final">{formatMoney(precioFinal)}</span>
          </div>

          {Array.isArray(colores) && colores.length > 0 && (
            <div className="producto-colores">
              {colores.map((color, index) => (
                <span
                  key={index}
                  className="color-circulo"
                  style={{ backgroundColor: color }}
                  title={color}
                />
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Modal de vista rápida (mismo estilo/clases del CSS actual) */}
      {isModalOpen && (
        <div className="modal-overlay" onClick={handleCloseModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button
              className="modal-close-btn"
              onClick={handleCloseModal}
              aria-label="Cerrar"
            >
              &times;
            </button>
            <img className="modal-image" src={imagenProducto} alt={nombreProducto} />
          </div>
        </div>
      )}
    </>
  );
};

export default TarjetaProducto;
