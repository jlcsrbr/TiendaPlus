import React from "react";
import qrImage from "../assets/qr1.PNG";
import googlePlay from "../assets/googleplay1.PNG";
import appStore from "../assets/appstore1.PNG";
import facebookIcon from "../assets/facebookIcon.png";
import twitterIcon from "../assets/twitterIcon.png";
import instagramIcon from "../assets/instagramIcon.png";
import linkedinIcon from "../assets/linkedinIcon.png";
import "../styles/Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Exclusivo */}
        <div className="footer-section">
          <h3>Exclusivo</h3>
          <p className="subtitle">Suscríbete</p>
          <p>Obtén 10% de descuento en tu primer pedido</p>
          <div className="subscribe">
            <input type="email" placeholder="Ingresa tu email" />
            <button>➤</button>
          </div>
        </div>

        {/* Soporte */}
        <div className="footer-section">
          <h3>Soporte</h3>
          <p>111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.</p>
          <p>exclusivo@gmail.com</p>
          <p>+88015-88888-9999</p>
        </div>

        {/* Cuenta */}
        <div className="footer-section">
          <h3>Cuenta</h3>
          <ul>
            <li>Mi cuenta</li>
            <li>Iniciar sesión / Registrarse</li>
            <li>Carrito</li>
            <li>Lista de deseos</li>
            <li>Tienda</li>
          </ul>
        </div>

        {/* Enlaces rápidos */}
        <div className="footer-section">
          <h3>Enlaces rápidos</h3>
          <ul>
            <li>Política de privacidad</li>
            <li>Términos de uso</li>
            <li>Preguntas frecuentes</li>
            <li>Contacto</li>
          </ul>
        </div>

        {/* Descargar app */}
        <div className="footer-section">
          <h3>Descargar app</h3>
          <p>Ahorra $3 con la app – Solo para nuevos usuarios</p>
          <div className="store-section">
            <img src={qrImage} alt="QR Code" className="qr" />
            <div className="store-buttons">
              <img src={googlePlay} alt="Google Play" />
              <img src={appStore} alt="App Store" />
            </div>
          </div>
          <div className="socials">
            <img src={facebookIcon} alt="Facebook" />
            <img src={twitterIcon} alt="Twitter" />
            <img src={instagramIcon} alt="Instagram" />
            <img src={linkedinIcon} alt="LinkedIn" />
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© Copyright Rimel 2022. Todos los derechos reservados</p>
      </div>
    </footer>
  );
}

export default Footer;
