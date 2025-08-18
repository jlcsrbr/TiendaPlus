// Productos.jsx
import React, { useMemo, useState } from "react";
import { productos } from "../data/productos.js"; // tu array largo
import TarjetaProducto from "../components/TarjetaProducto.jsx";
import "../styles/Productos.css";

// Orden fijo (opcional). Si prefieres derivarlo del array, ver más abajo.
const categorias = [
  "Moda Femenina",
  "Moda Masculina",
  "Electrónicos",
  "Hogar & Estilo",
  "Medicina",
  "Bebes & Juguetes",
  "Mascotas",
  "Salud & Belleza",
  "Deportes & Actividades"
];

const Productos = () => {
  const [selectedCats, setSelectedCats] = useState(new Set());
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");

  const toggleCat = (cat) =>
    setSelectedCats(prev => {
      const next = new Set(prev);
      next.has(cat) ? next.delete(cat) : next.add(cat);
      return next;
    });

  const list = useMemo(() => {
    const min = minPrice === "" ? -Infinity : Number(minPrice);
    const max = maxPrice === "" ?  Infinity : Number(maxPrice);

    return productos.filter(p =>
      (selectedCats.size === 0 || selectedCats.has(p.categoria)) &&
      p.precio >= min &&
      p.precio <= max
    );
  }, [selectedCats, minPrice, maxPrice]);

  return (
    <section className="productos-page">
      <aside className="filtros">
        <h4>Categorías</h4>
        <ul className="filtros-categorias">
          {categorias.map(cat => (
            <li key={cat}>
              <label>
                <input
                  type="checkbox"
                  checked={selectedCats.has(cat)}
                  onChange={() => toggleCat(cat)}
                />
                <span>{cat}</span>
              </label>
            </li>
          ))}
        </ul>

        <h4>Precio</h4>
        <div className="filtro-precio">
          <input
            type="number"
            placeholder="Desde"
            value={minPrice}
            onChange={(e) => setMinPrice(e.target.value)}
          />
          <span>—</span>
          <input
            type="number"
            placeholder="Hasta"
            value={maxPrice}
            onChange={(e) => setMaxPrice(e.target.value)}
          />
        </div>
      </aside>
      {/*El grip-productos deberia ser solo <TarjetaProducto product={product} />*/}
      <main className="grid-productos">
        {list.length === 0 ? (
          <p>No se encontraron productos que coincidan con los filtros.</p>
        ) : (
          list.map(product => (
            <TarjetaProducto key={product.id} product={product} />
          ))
        )}
      </main>
    </section>
  );
};

export default Productos;
