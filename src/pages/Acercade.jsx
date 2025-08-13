import React from 'react';
import '../styles/AcercaDe.css';

const AcercaDe = () => {
  return (
    <div className="acerca-container">
      <h1>Nuestra historia</h1>
      
      <div className="historia-section">
        <p>
          Izmano, en 2016, inició el rol principal de empresas en línea del sur de A&amp;G con una presencia activa de transportes. 
          Con el tiempo, el grupo ha desarrollado una amplia gama de estrategias de marketing, datos y servicios personalizados, 
          contando con más de 500 vendedores y 300 minoristas, además de 2 millones de clientes en todo el territorio.
        </p>
        
        <p>
          Actualmente tenemos más de 1 millón de productos para ofrecer, con un crecimiento muy rápido. 
          Ofrecemos una amplia variedad de surtidos en categorías que van directo al consumidor.
        </p>
      </div>

      <div className="divider"></div>

      <div className="estadisticas-container">
        <div className="estadistica-item">
          <h2>10.5k</h2>
          <p>Vendedores activos en nuestro sitio</p>
        </div>
        
        <div className="estadistica-item">
          <h2>3.3k</h2>
          <p>Venta mensual de producción</p>
        </div>
        
        <div className="estadistica-item">
          <h2>45.5k</h2>
          <p>Clientes activos en nuestro sitio</p>
        </div>
        
        <div className="estadistica-item">
          <h2>25k</h2>
          <p>Venta horas anual en nuestra SID</p>
        </div>
      </div>

      <div className="divider"></div>

      <h2 className="equipo-title">Nuestro equipo</h2>
      <div className="equipo-container">
        <div className="miembro-equipo">
          <div className="avatar-placeholder"></div>
          <h3>Tom Cruise</h3>
          <p>Fundador y Presidente</p>
          <div className="redes-sociales">
            <span className="social-icon">☑</span>
            <span className="social-icon">☐</span>
            <span className="social-icon">In</span>
          </div>
        </div>
        
        <div className="miembro-equipo">
          <div className="avatar-placeholder"></div>
          <h3>Emma Watson</h3>
          <p>Directora General</p>
          <div className="redes-sociales">
            <span className="social-icon">☑</span>
            <span className="social-icon">☐</span>
            <span className="social-icon">In</span>
          </div>
        </div>
        
        <div className="miembro-equipo">
          <div className="avatar-placeholder"></div>
          <h3>Will Smith</h3>
          <p>Director de producción</p>
          <div className="redes-sociales">
            <span className="social-icon">☑</span>
            <span className="social-icon">☐</span>
            <span className="social-icon">In</span>
          </div>
        </div>
      </div>

      <div className="divider"></div>

      <div className="beneficios-container">
        <div className="beneficio-item">
          <h3>Entrega Gratis</h3>
          <p>Entrega gratuita para todas las pedidos superiores a $50</p>
        </div>
        
        <div className="beneficio-item">
          <h3>Servicio al Cliente 24/7</h3>
          <p>Atención completa al cliente 24/7</p>
        </div>
        
        <div className="beneficio-item">
          <h3>Garantía de devolución de dinero</h3>
          <p>Devoluciones al cliente en 30 días</p>
        </div>
      </div>
    </div>
  );
};

export default AcercaDe;