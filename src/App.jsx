import React from 'react';
import { ListaDeseosProvider } from "./context/ListaDeseosContexto";
import { CarritoProvider } from "./context/CarritoContexto";
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
import FinalizarCompra from './pages/FinalizarCompra';

function App() {
  return (
  <CarritoProvider>
  <ListaDeseosProvider>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/productos" element={<Productos />} /> 
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/acerca-de" element={<AcercaDe />} />
          <Route path="/registrarse" element={<Registrase />} />
          <Route path="/logeo" element={<Logeo />} />
          <Route path="/lista-deseos" element={<ListaDeseos />} />
          <Route path="/carrito" element={<Carrito />} />
          <Route path="/producto/:id" element={<ProductoPage />} />
          <Route path="/carrito/finalizarcompra" element={<FinalizarCompra />} />
        </Routes>
        <Footer />
      </Router>
  </ListaDeseosProvider>
  </CarritoProvider>
  );
}

export default App;
