import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import AcercaDe from "./pages/Acercade";
import Contacto from "./pages/Contacto";
import ListaDeseos from "./pages/ListaDeseos";

function App() {
  return (
    <Router>
      <Header />
      
      <Routes>
        <Route path="/" element={<h1>Inicio</h1>} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/acerca-de" element={<AcercaDe />} />
        <Route path="/registrarse" element={<h1>Registro</h1>} />
        <Route path="/lista-deseos" element={<ListaDeseos />} /> {/* Ruta para la lista de deseos añadido---jorge bobadilla */}
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
