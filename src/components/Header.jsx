import React from "react";
import { Link } from "react-router-dom";
import "../styles/Header.css";
import { FaSearch, FaRegHeart, FaShoppingCart, FaRegUser } from "react-icons/fa";

function Header() {
  return (
    <header>
      {/* Barra superior */}
      <div className="top-bar">
        <p>
          Oferta de Verano para todos los Trajes de Baño y Entrega Exprés
          GRATUITA; ¡50 % de Descuento! <a href="#">Comprar ahora</a>
        </p>
        <div className="language-selector">
          <span>Spanish</span> ▼
        </div>
      </div>

      {/* Barra principal */}
      <div className="main-header">
        {/* Logo */}
        <div className="logo">TiendaPlus</div>

        {/* Menú */}
        <nav className="nav-links">
          <Link to="/">Inicio</Link>
          <Link to="/productos">Productos</Link>
          <Link to="/contacto">Contacto</Link>
          <Link to="/acerca-de">Acerca de</Link>
          <Link to="/registrarse">Registrarse</Link>
        </nav>

        {/* Buscador */}
        <div className="search-bar">
          <input type="text" placeholder="¿Qué estás buscando?" />
          <button>
            <FaSearch />
          </button>
        </div>

        {/* Iconos */}
        <div className="icons">
          <Link to="/lista-deseos"><FaRegHeart size={20} /></Link> {/* Icono de lista de deseos modificado para link de pagina lista de deseos---jorge bobadilla*/}
          <FaShoppingCart size={20}/>
          <Link to="/logeo"><FaRegUser size={20}/></Link>
        </div>
      </div>
      <hr style={{border: "none",height: "2px",backgroundColor: "gray" ,opacity: 0.5}}
      />
    </header>
  );
}

export default Header;
