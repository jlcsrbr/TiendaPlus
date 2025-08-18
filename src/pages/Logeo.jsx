import React from 'react';
import '../styles/Registrarse.css';
import carritoImg from '../assets/registrarse-carrito.png';

const Logeo = () => {
  return (
    <div className="registro-outer">
      <div className="registro-container">
        <div className="registro-img-section">
          <img src={carritoImg} alt="Carrito y móvil" />
        </div>
        <div className="registro-form-section">
          <h2>Inicie sesion</h2>
          <p className="registro-subtitle">Ingrese sus datos</p>
          <form className="registro-form">
            <input type="text" placeholder="Email or Phone Number" />
            <input type="password" placeholder="Password" />
            <div className="logeo-btn-row">
              <button type="submit" className="btn-acceso">Acceso</button>
              <a href="#" className="olvidar-link">Olvidar Contraseña?</a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Logeo;