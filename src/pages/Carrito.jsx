// src/pages/Carrito.jsx
import React, { useMemo } from "react";
import { useNavigate, Link } from "react-router-dom";
import "../styles/Carrito.css";
import { useCarrito } from "../context/CarritoContexto";

const money = (valor, divisa = "S/") =>
  `${divisa} ${Number(valor || 0).toFixed(2)}`;

export default function Carrito() {
  const navigate = useNavigate();
  const { carrito, actualizarCantidad, vaciarCarrito } = useCarrito();

  // Normaliza filas con precio unitario (aplica descuento si existe)
  const filas = useMemo(() => {
    return carrito.map((item) => {
      const unit =
        item.descuento && item.descuento > 0
          ? item.precio - (item.precio * item.descuento) / 100
          : item.precio;
      const subtotal = unit * item.cantidad;
      return { ...item, unit, subtotal };
    });
  }, [carrito]);

  const divisa = carrito[0]?.divisa || "S/";

  const { subtotal, envio, total } = useMemo(() => {
    const sub = filas.reduce((acc, it) => acc + it.subtotal, 0);
    const env = 0; // Gratis
    return { subtotal: sub, envio: env, total: sub + env };
  }, [filas]);

  return (
    <div className="carrito-container">
      {/* Ruta Inicio / Carrito, al seleccionar () Inicio deberia regresarme a la pagina de inicio */}

      <div className="breadcrumb"><span className="inicio" onClick={() => navigate("/")}>Inicio</span> / <span>Carrito</span></div>

      {/* Tabla del carrito */}
      <div className="cart-table">
        <table>
          <thead>
            <tr>
              <th>Producto</th>
              <th>Precio</th>
              <th>Cantidad</th>
              <th>Subtotal</th>
            </tr>
          </thead>
          <tbody>
            {filas.length === 0 ? (
              <tr>
                <td colSpan="4" style={{ padding: "40px 0" }}>
                  Tu carrito está vacío.
                </td>
              </tr>
            ) : (
              filas.map((item) => (
                <tr key={item.id}>
                  <td className="product">
                    <img
                      src={item.imagenProducto}
                      alt={item.nombreProducto}
                    />
                    {item.nombreProducto}
                  </td>
                  <td>{money(item.unit, item.divisa || divisa)}</td>
                  <td>
                    <select
                      value={item.cantidad}
                      onChange={(e) =>
                        actualizarCantidad(item.id, e.target.value)
                      }
                    >
                      {Array.from({ length: 10 }, (_, i) => i + 1).map((n) => (
                        <option key={n} value={n}>
                          {String(n).padStart(2, "0")}
                        </option>
                      ))}
                    </select>
                  </td>
                  <td>{money(item.subtotal, item.divisa || divisa)}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {/* Código de descuento y total */}
      <div className="cart-summary">
        <div className="discount">
          <input type="text" placeholder="Código de descuento" />
          <button>Aplicar código</button>
        </div>
        <div className="total-box">
          <p>Subtotal: {money(subtotal, divisa)}</p>
          <p>Envío: Gratis</p>
          <p>Total: {money(total, divisa)}</p>
          <Link to="/carrito/finalizarcompra" ><button className="finalizar">Finalizar Compra</button></Link>
          {filas.length > 0 && (
            <button
              className="finalizar"
              style={{ marginTop: 10, background: "#333" }}
              onClick={vaciarCarrito}
            >
              Vaciar carrito
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
