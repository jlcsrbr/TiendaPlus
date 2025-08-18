import React from "react";
import "../styles/FinalizarCompra.css";

function App() {
  return (
    <div className="checkout-container">
      {/* Ruta */}
      <div className="breadcrumb">Cuenta / Mi Cuenta / Producto / Ver carrito / Finalizar compra</div>

      {/* Contenido principal */}
      <main className="checkout-main">
        {/* Formulario */}
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
          <div className="order-items">
            <p>LCD Monitor <span>s/ 650</span></p>
            <p>H1 Gamepad <span>s/ 1100</span></p>
          </div>
          <hr />
          <p>Subtotal: <span>s/ 1750</span></p>
          <p>Envío: <span>Gratis</span></p>
          <p><strong>Total:</strong> <span>s/ 1750</span></p>

          {/* Métodos de pago */}
          <div className="payment">
            <label><input type="radio" name="payment" /> Banco</label>
            <label><input type="radio" name="payment" defaultChecked /> Cash on delivery</label>
          </div>

          {/* Cupón */}
          <div className="coupon">
            <input type="text" placeholder="Código de descuento" />
            <button>Aplicar código</button>
          </div>

          {/* Botón Final */}
          <button className="checkout-btn">Realizar pedido</button>
        </section>
      </main>
    </div>
  );
}

export default App;