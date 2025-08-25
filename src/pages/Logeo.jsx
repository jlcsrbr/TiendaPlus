import React from 'react';
import '../styles/Registrarse.css';
import carritoImg from '../assets/registrarse-carrito.png';
import { Link } from 'react-router-dom'

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
            <input type="text" placeholder="Correo o número de telefono" />
            <input type="password" placeholder="Contraseña" />
            <div className="logeo-btn-row">
              <Link to="/"><button type="submit" className="btn-acceso">Acceso</button></Link>
              <p>Olvidaste la Contraseña?</p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Logeo;