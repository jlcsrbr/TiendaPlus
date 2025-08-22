import React, { useMemo } from "react";
import "../styles/FinalizarCompra.css";
import { useCarrito } from "../context/CarritoContexto";

const money = (valor, divisa = "S/") =>
  `${divisa} ${Number(valor || 0).toFixed(2)}`;

const FinalizarCompra = () => {
  const { carrito } = useCarrito();

  if (!carrito || carrito.length === 0) {
    return (
      <div className="checkout-container">
        <div className="breadcrumb">
          Cuenta / Mi Cuenta / Producto / Ver carrito / Finalizar compra
        </div>
        <main className="checkout-main">
          <section className="billing-form">
            <h3>Detalles de facturación</h3>
            <p>Tu carrito está vacío. Regresa a la tienda para agregar productos.</p>
          </section>
          <section className="order-summary">
            <h3>Tu pedido</h3>
            <p>No hay productos.</p>
          </section>
        </main>
      </div>
    );
  }

  // Normaliza filas (aplica descuento a unitario y calcula subtotal)
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
    const env = 0; // Envío gratis por defecto
    return { subtotal: sub, envio: env, total: sub + env };
  }, [filas]);

  return (
    <div className="checkout-container">
      <div className="breadcrumb">
        Cuenta / Mi Cuenta / Producto / Ver carrito / Finalizar compra
      </div>

      <main className="checkout-main">
        {/* Mantén tu formulario como lo tenías */}
        <section className="billing-form">
          <h3>Detalles de facturación</h3>
          <form>
            <input type="text" placeholder="Nombre*" />
            <input type="text" placeholder="Nombre de la empresa" />
            <input type="text" placeholder="Dirección*" />
            <input type="text" placeholder="Departamento, piso, etc. (opcional)" />
            <input type="text" placeholder="Ciudad / Localidad*" />
            <input type="text" placeholder="Número de teléfono*" />
            <input type="email" placeholder="Correo electrónico*" />
            <label>
              <input type="checkbox" defaultChecked /> Guardar esta información para acelerar futuras compras
            </label>
          </form>
        </section>

        {/* Resumen del pedido */}
        <section className="order-summary">
          <h3>Tu pedido</h3>

          {/* Lista de productos en una sola línea: mini foto + nombre x cant + subtotal a la derecha */}
          <div className="order-list">
            {filas.map((it) => (
              <div className="order-line" key={it.id}>
                <div className="line-left">
                  <img className="thumb" src={it.imagenProducto} alt={it.nombreProducto} />
                  <span className="title" title={it.nombreProducto}>{it.nombreProducto}</span>
                  <span className="qty">x {it.cantidad}</span>
                </div>
                <div className="line-right">
                  <span className="line-total">{money(it.subtotal, it.divisa || divisa)}</span>
                </div>
              </div>
            ))}
          </div>

          <hr />

          {/* Resumen general */}
          <p>
            Subtotal: <span>{money(subtotal, divisa)}</span>
          </p>
          <p>
            Envío: <span>Gratis</span>
          </p>
          <p className="total-row">
            <strong>Total:</strong> <span>{money(total, divisa)}</span>
          </p>

          {/* Métodos de pago / cupón (como tu diseño) */}
          <div className="payment">
            <label><input type="radio" name="payment" /> Banco</label>
            <label><input type="radio" name="payment" defaultChecked /> Cash on delivery</label>
          </div>

          <div className="coupon">
            <input type="text" placeholder="Código de descuento" />
            <button>Aplicar código</button>
          </div>

          <button className="checkout-btn">Realizar pedido</button>
        </section>
      </main>
    </div>
  );
};

export default FinalizarCompra;
