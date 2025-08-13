import React, { useState } from 'react';
import '../styles/Contacto.css';

const Contacto = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    telefono: '',
    mensaje: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí iría la lógica para enviar el formulario
    console.log('Formulario enviado:', formData);
    alert('Mensaje enviado. Nos contactaremos contigo en 24 horas.');
    // Resetear el formulario
    setFormData({
      nombre: '',
      email: '',
      telefono: '',
      mensaje: ''
    });
  };

  return (
    <div className="contacto-container">
      <h1>Lidmanos</h1>
      
      <div className="contacto-section">
        <p>Estamos disponibles 24/7, 7 días a la semana.</p>
        <p className="contacto-info">Teléfono: <a href="tel:+88018112222">+88018112222</a></p>
      </div>

      <div className="contacto-divider"></div>

      <div className="contacto-section">
        <h2>Escríbenos</h2>
        <p>Llena el formulario y nos contactaremos contigo en 24 horas</p>
        <p className="contacto-info">
          Emails: <a href="mailto:customer@tlendoplus.com">customer@tlendoplus.com</a><br />
          Emails: <a href="mailto:support@tlendoplus.com">support@tlendoplus.com</a>
        </p>
      </div>

      <form onSubmit={handleSubmit} className="contacto-form">
        <div className="form-group">
          <label htmlFor="nombre">Tu Nombre *</label>
          <input
            type="text"
            id="nombre"
            name="nombre"
            value={formData.nombre}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Tu Email *</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="telefono">Tu Teléfono *</label>
          <input
            type="tel"
            id="telefono"
            name="telefono"
            value={formData.telefono}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="mensaje">Tu Mensaje</label>
          <textarea
            id="mensaje"
            name="mensaje"
            value={formData.mensaje}
            onChange={handleChange}
            rows="4"
          />
        </div>

        <button type="submit" className="submit-btn">Enviar Mensaje</button>
      </form>
    </div>
  );
};

export default Contacto;