// src/pages/ProductoPage.jsx
import { useParams, useNavigate } from "react-router-dom";
import { useState, useMemo } from "react";
import { productos } from "../data/productos";
import CarruselProductos from "../components/CarruselProductos";
import { useCarrito } from "../context/CarritoContexto";    
import "../styles/ProductoPage.css";

const ProductoPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { agregarAlCarrito } = useCarrito();

  const product = useMemo(
    () => productos.find((p) => String(p.id) === String(id)),
    [id]
  );

  if (!product) return <h2>Producto no encontrado</h2>;

  // otros productos para el carrusel
  const otros = useMemo(
    () => productos.filter((p) => String(p.id) !== String(id)),
    [id]
  );

  const [cantidad, setCantidad] = useState(1);

  const stepDown = () => setCantidad((prev) => Math.max(0, prev - 1));
  const stepUp = () => setCantidad((prev) => Math.min(99, prev + 1));

  // 👇 Handlers de botones
  const handleAddToCart = () => {
    const qty = Math.max(1, Number(cantidad) || 0); // fuerza mínimo 1
    agregarAlCarrito({ ...product, cantidad: qty });
  };

  const handleBuyNow = () => {
    const qty = Math.max(1, Number(cantidad) || 0);
    agregarAlCarrito({ ...product, cantidad: qty });
    navigate("/carrito/finalizarcompra");
  };

  // Precio mostrado (si tienes descuento puedes ajustarlo aquí)
  const precioMostrado = product.precio;

  return (
    <div style={{ padding: " 20px 10%" }}>
      <div className="producto-page">
        {/* Imagen */}
        <div className="producto-imagen">
          <img src={product.imagenProducto} alt={product.nombreProducto} />
        </div>

        {/* Info */}
        <div className="producto-info">
          <h1 className="producto-page-nombre">{product.nombreProducto}</h1>
          <p className="producto-page-precio">Precio: {product.divisa} {precioMostrado}</p>

          <p className="producto-page-descripcion">
            {product.descripcion ?? "Sin descripción"}
          </p>

          {/* Colores */}
          {Array.isArray(product.colores) && product.colores.length > 0 && (
            <div className="producto-page-colores">
              {product.colores.map((color, i) => (
                <span
                  key={i}
                  className="producto-page-color-circulo"
                  style={{ backgroundColor: color }}
                />
              ))}
            </div>
          )}

          {/* Cantidad */}
          <div className="incrementButton">
            <button onClick={stepDown}>-</button>
            <input value={cantidad}
              type="number"
              step={1}
              min={0}
              max={99}
              readOnly
            />
            <button onClick={stepUp}>+</button>
          </div>

          {/* Botones */}
          <div className="producto-page-botones">
            <button
              className="producto-page-btn-comprar"
              onClick={handleBuyNow}
            >
              Comprar ahora
            </button>
            <button
              className="producto-page-btn-carrito"
              onClick={handleAddToCart}
            >
              Añadir al carrito
            </button>
          </div>

          {/* Beneficios */}
          <div className="producto-beneficios">
            <div className="beneficio">
              🚚 Envío gratis <br />
              <small>Ingresa tu código postal para verificar disponibilidad</small>
            </div>
            <div style={{ border: "solid 2px #cdcdcdff" }}></div>
            <div className="beneficio">
              ↩️ Devolución <br />
              <small>Devoluciones gratuitas durante 30 días</small>
            </div>
          </div>
        </div>
      </div>

      <h2>Otros productos que podrían interesarte</h2>
      <CarruselProductos
        products={otros}
        sectionTitle="También te puede gustar"
      />
    </div>
  );
};

export default ProductoPage;
