import { useParams} from "react-router-dom";
import { useState } from "react";
import { productos } from "../data/productos"; 
import CarruselProductos from "../components/CarruselProductos";
import "../styles/ProductoPage.css";

const ProductoPage = () => {
  const { id } = useParams(); //obtenemos el id desde la URL
  const product = productos.find((p) => String(p.id) === id);

  if (!product) {
    return <h2>Producto no encontrado</h2>;
  }

  // otros productos para el carrusel
  const otros = productos.filter((p) => String(p.id) !== id);

  const[cantidad , setCantidad] = useState(0);
  const stepDown=() =>{
    setCantidad((prev) => Math.max(0, prev - 1));
  }
  const stepUp=() =>{
    setCantidad((prev) => Math.min(99, prev + 1));
  }
  return (
    <div style={{ padding: " 20px 10%" }}>
      <div className="producto-page">
        {/* Imagen a la izquierda */}
        <div className="producto-imagen">
          <img src={product.imagenProducto} alt={product.nombreProducto} />
        </div>

        {/* Detalles a la derecha */}
        <div className="producto-info">
          <h1 className="producto-page-nombre">{product.nombreProducto}</h1>

          <p className="producto-page-precio">Precio: S/ {product.precio}</p>

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
          {/*boton incremento*/}
          <div className="incrementButton">
            <button  onClick={stepDown}>-</button>
            <input value={cantidad} type="number" step={1} min={0} max={99} readOnly />
            <button  onClick={stepUp}>+</button>
          </div>
          {/* Botones */}
          <div className="producto-page-botones">
            
            <button className="producto-page-btn-comprar">Comprar ahora</button>
            <button className="producto-page-btn-carrito">
              Añadir al carrito
            </button>
          </div>
          {/* Beneficios */}
          <div className="producto-beneficios">
            <div className="beneficio">
              🚚 Envío gratis <br />
              <small>Ingresa tu código postal para verificar disponibilidad</small>
            </div>
            <div style={{border:"solid 2px #cdcdcdff"}}></div>
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
