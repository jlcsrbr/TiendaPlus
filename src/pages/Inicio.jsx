// Inicio.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Inicio.css";
import Slider from "../components/Slider.jsx";
import CarruselProductos from "../components/CarruselProductos.jsx";
import PromoBanner from "../components/PromoBanner.jsx";
import imgJBLBanner from "../assets/JBL_BOOMBOX_2_HERO.png";
import { productosOferta, productosMasVendidos, productosNuevos } from "../data/productos";

const categorias = [
  "Moda Femenina",
  "Moda Masculina",
  "Electrónicos",
  "Hogar & Estilo",
  "Medicina",
  "Bebes & Juguetes",
  "Mascotas",
  "Salud & Belleza",
];

const Inicio = () => {
  const navigate = useNavigate();
  const irACategoria = (cat) => {
    navigate(`/productos?categoria=${encodeURIComponent(cat)}`);
  };

  return (
    <div className="inicio-main">
      <div className="categorias-bar">
        <ul>
          {categorias.map((cat) => (
            <li key={cat}>
              <button className="cat-link" onClick={() => irACategoria(cat)}>
                {cat}
              </button>
            </li>
          ))}
        </ul>
      </div>

      <div className="slider-section">
        <Slider />
      </div>

      <div className="ofertas-section">
        <main style={{ padding: 16 }}>
          <CarruselProductos
            products={productosOferta}
            pillText="Solo por hoy"
            sectionTitle="Ofertas relámpago"
            showCountdown
            countdownTo="2025-08-31T23:59:59-05:00"
            onCountdownEnd={() => console.log("¡Se acabó la oferta!")}
          />
        </main>
      </div>

      <div className="ofertaEspecial-section">
        <PromoBanner
          eyebrow="Oferta Especial"
          titulo={<>Mejora tu <br/>experiencia <br/>Musical</>}
          imagenSrc={imgJBLBanner}
          imagenAlt="Parlante JBL"
          ctaTexto="¡Compra ahora!"
          // manda a productos ya filtrado:
          ctaHref="/producto/1007"
          mostrarContador
          fechaObjetivo="2025-09-30T23:59:59-05:00"
        />
      </div>

      <div className="masVendidos-section">
        <main style={{ padding: 16 }}>
          <CarruselProductos
            products={productosMasVendidos}
            pillText="Este mes"
            sectionTitle="Productos más vendidos"
          />
        </main>
      </div>

      <div className="nuevosProductos-section">
        <main style={{ padding: 16 }}>
          <CarruselProductos
            products={productosNuevos}
            pillText="Nuevos Productos"
            sectionTitle="Explore Nuestros Nuevos Productos"
          />
        </main>
      </div>
    </div>
  );
};

export default Inicio;
