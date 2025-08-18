import React from 'react';
import '../styles/Registrarse.css';
import carritoImg from '../assets/registrarse-carrito.png';
import { FcGoogle } from 'react-icons/fc'; // <-- Agrega esta línea

const Registrarse = () => {
  return (
    <div className="registro-outer">
      <div className="registro-container">
        <div className="registro-img-section">
          <img src={carritoImg} alt="Carrito y móvil" />
        </div>
        <div className="registro-form-section">
          <h2>Crear una cuenta</h2>
          <p className="registro-subtitle">Ingresa tus datos a continuación</p>
          <form className="registro-form">
            <input type="text" placeholder="Nombre" />
            <input type="text" placeholder="Email o número de Teléfono" />
            <input type="password" placeholder="Contraseña" />
            <button type="submit" className="btn-rojo">Crear Cuenta</button>
          </form>
          <button className="btn-google">
            <span className="google-icon"><FcGoogle /></span> Registrarse con Google
          </button>
          <div className="registro-login-link">
            ¿Ya tienes cuenta? <a href="#">Ingresar</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registrarse;