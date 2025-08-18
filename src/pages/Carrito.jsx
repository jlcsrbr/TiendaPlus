import React from "react";
import "../styles/Carrito.css";

function App() {
  return (
    <div className="carrito-container">
      {/* Ruta */}
      <div className="breadcrumb">Inicio / Carrito</div>

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
            <tr>
              <td className="product">
                <img src="/monitor.jpg" alt="LCD Monitor" />
                LCD Monitor
              </td>
              <td>$650</td>
              <td>
                <select>
                  <option>01</option>
                  <option>02</option>
                  <option>03</option>
                </select>
              </td>
              <td>$650</td>
            </tr>
            <tr>
              <td className="product">
                <img src="/gamepad.jpg" alt="HI Gamepad" />
                HI Gamepad
              </td>
              <td>$550</td>
              <td>
                <select defaultValue="02">
                  <option>01</option>
                  <option>02</option>
                  <option>03</option>
                </select>
              </td>
              <td>$1100</td>
            </tr>
          </tbody>
        </table>

        <div className="cart-buttons">
          <button>Regresar a la Tienda</button>
          <button>Actualizar carrito</button>
        </div>
      </div>

      {/* Código de descuento y total */}
      <div className="cart-summary">
        <div className="discount">
          <input type="text" placeholder="Código de descuento" />
          <button>Aplicar código</button>
        </div>
        <div className="total-box">
          <p>Subtotal: $1750</p>
          <p>Envío: Gratis</p>
          <p>Total: $1750</p>
          <button className="finalizar">Finalizar Compra</button>
        </div>
      </div>
    </div>
  );
}

export default App;
