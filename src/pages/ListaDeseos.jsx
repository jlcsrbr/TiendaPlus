import React from 'react';
import TarjetaProducto from '../components/TarjetaProducto';
import '../styles/ProductList.css'; 
// Importar las imágenes desde tu carpeta de assets
import camaraImg from '../assets/camara.png'; 
import zapatillasImg from '../assets/zapatillas.png';
import chaquetaImg from '../assets/chaqueta.png';
import comidaPerroImg from '../assets/comidaPerro.png';

const products = [
  {
    id: 1,
    nombreProducto: "Cámara réflex digital CANON EOS",
    // Usar la variable importada
    imagenProducto: camaraImg,
    precio: 360,
    descuento: 0,
    divisa: "S/",
    valorizacion: 4.5,
    resenas: 95,
    esNuevo: false,
    colores: [],
  },
  {
    id: 2,
    nombreProducto: "Jr. Zoom Soccer Cleats",
    // Usar la variable importada
    imagenProducto: zapatillasImg,
    precio: 1160,
    descuento: 15,
    divisa: "S/",
    valorizacion: 4.0,
    resenas: 35,
    esNuevo: false,
    colores: ["#FFFF00", "#000000"],
  },
  {
    id: 3,
    nombreProducto: "Chaqueta Satin acolchada",
    // Usar la variable importada
    imagenProducto: chaquetaImg,
    precio: 660,
    descuento: 20,
    divisa: "S/",
    valorizacion: 4.5,
    resenas: 55,
    esNuevo: true,
    colores: ["#084234", "#dc3545"],
  },
  {
    id: 4,
    nombreProducto: "Comida seca para perros",
    // Usar la variable importada
    imagenProducto: comidaPerroImg,
    precio: 35.5,
    descuento: 0,
    divisa: "S/",
    valorizacion: 4.8,
    resenas: 200,
    esNuevo: false,
    colores: [],
  },
];

const ListaDeseos = () => {
  return (
    <div className="product-list-container">
      <h2>Lista de Deseos</h2>
      <div className="product-grid">
        {products.map((product) => (
          <TarjetaProducto key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ListaDeseos;

