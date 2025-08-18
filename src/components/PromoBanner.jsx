import React, { useEffect, useState } from "react";
import "../styles/PromoBanner.css";

/* --- subcomponentes internos --- */
const TimePill = ({ label, value }) => (
  <div className="time-pill">
    <div className="num">{String(value).padStart(2, "0")}</div>
    <div className="label">{label}</div>
  </div>
);

const Countdown = ({ target }) => {
  const calc = () => {
    const end = new Date(target).getTime();
    const now = Date.now();
    const diff = Math.max(0, end - now);
    return {
      days: Math.floor(diff / (1000 * 60 * 60 * 24)),
      hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((diff / (1000 * 60)) % 60),
      seconds: Math.floor((diff / 1000) % 60),
      done: diff <= 0,
    };
  };

  const [t, setT] = useState(calc());

  useEffect(() => {
    if (t.done) return;
    const id = setInterval(() => setT(calc()), 1000);
    return () => clearInterval(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [target, t.done]);

  return (
    <div className="promo-timer">
      <TimePill label="Días" value={t.days} />
      <TimePill label="Horas" value={t.hours} />
      <TimePill label="Minutos" value={t.minutes} />
      <TimePill label="Segundos" value={t.seconds} />
    </div>
  );
};

/* --- componente reutilizable --- */
const PromoBanner = (props) => {
  const {
    eyebrow = "Oferta Especial",            // texto pequeño arriba (pill)
    titulo = "Mejora tu experiencia Musical",
    ctaTexto = "¡Compra ahora!",
    ctaHref = "#",                           // a dónde va el botón (anchor)
    onCtaClick,                              // si prefieres manejar click manual
    imagenSrc,                               // imagen del producto
    imagenAlt = "Producto",
    mostrarContador = true,                  // mostrar/ocultar contador
    fechaObjetivo = "2025-12-31T23:59:59-05:00",
    className = "",                          // clases extra opcionales
  } = props;

  const CTA = onCtaClick ? (
    <button className="promo-cta" onClick={onCtaClick}>{ctaTexto}</button>
  ) : (
    <a className="promo-cta" href={ctaHref}>{ctaTexto}</a>
  );

  return (
    <section className={`promoBanner-section ${className}`}>
      <div className="promo-banner">
        <div className="promo-copy">
          {eyebrow && <div className="promo-pill">{eyebrow}</div>}
          <h2 className="promo-title">{titulo}</h2>
          {mostrarContador && <Countdown target={fechaObjetivo} />}
          {ctaTexto && CTA}
        </div>

        {imagenSrc && (
          <div className="promo-media">
            <img src={imagenSrc} alt={imagenAlt} />
          </div>
        )}
      </div>
    </section>
  );
};

export default PromoBanner;
