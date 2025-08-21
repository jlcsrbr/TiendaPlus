import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import AcercaDe from "./pages/Acercade";
import Contacto from "./pages/Contacto";
import ListaDeseos from "./pages/ListaDeseos";
import Registrase from "./pages/Registrarse";
import Logeo from "./pages/Logeo";
import Inicio from './pages/Inicio';
import Productos from './pages/Productos';
import Carrito from './pages/Carrito';
import ProductoPage from "./pages/ProductoPage";

function App() {
  return (
    <Router>
      <Header />
      
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/productos" element={<Productos />} /> 
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/acerca-de" element={<AcercaDe />} />
        <Route path="/registrarse" element={<Registrase />} />
        <Route path="/logeo" element={<Logeo />} />
        <Route path="/lista-deseos" element={<ListaDeseos />} /> {/* Ruta para la lista de deseos añadido---jorge bobadilla */}
        <Route path="/carrito" element={<Carrito />} />

        {/**/}
        <Route path="/producto/:id" element={<ProductoPage />} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
