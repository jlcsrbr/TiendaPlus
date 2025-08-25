import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, A11y, Keyboard, Mousewheel } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

import TarjetaProducto from "./TarjetaProducto";
import "../styles/CarruselProductos.css";

/* ------------------ Countdown ------------------ */
function Countdown({ target, onEnd }) {
  // normaliza el target a epoch ms
  const targetMs = React.useMemo(() => {
    if (target instanceof Date) return target.getTime();
    if (typeof target === "number") return target; // epoch ms
    const parsed = Date.parse(target);
    return Number.isNaN(parsed) ? Date.now() : parsed;
  }, [target]);

  const getLeft = React.useCallback(() => {
    const diff = Math.max(0, targetMs - Date.now());
    const dd = Math.floor(diff / 86400000);
    const hh = Math.floor((diff % 86400000) / 3600000);
    const mm = Math.floor((diff % 3600000) / 60000);
    const ss = Math.floor((diff % 60000) / 1000);
    return { total: diff, dd, hh, mm, ss };
  }, [targetMs]);

  const [left, setLeft] = React.useState(getLeft);

  React.useEffect(() => {
    const id = setInterval(() => {
      setLeft((prev) => {
        const nxt = getLeft();
        if (nxt.total === 0 && prev.total !== 0 && typeof onEnd === "function") onEnd();
        return nxt;
      });
    }, 1000);
    return () => clearInterval(id);
  }, [getLeft, onEnd]);

  const fmt = (n) => String(n).padStart(2, "0");

  return (
    <div className="countdown" role="timer" aria-live="polite">
      <div className="unit">
        <div className="label">Días</div>
        <div className="value">{fmt(left.dd)}</div>
      </div>
      <span className="colon">:</span>
      <div className="unit">
        <div className="label">Horas</div>
        <div className="value">{fmt(left.hh)}</div>
      </div>
      <span className="colon">:</span>
      <div className="unit">
        <div className="label">Minutos</div>
        <div className="value">{fmt(left.mm)}</div>
      </div>
      <span className="colon">:</span>
      <div className="unit">
        <div className="label">Segundos</div>
        <div className="value">{fmt(left.ss)}</div>
      </div>
    </div>
  );
}

/* --------------- Carrusel de productos --------------- */
const CarruselProductos = ({
  products = [],
  pillText = "Solo por hoy",
  sectionTitle = "Ofertas relámpago",
  showCountdown = false,
  countdownTo,              // Date | string | epoch ms (requerido si showCountdown = true)
  onCountdownEnd,           // opcional: callback cuando llegue a 0
}) => {
  if (!products?.length) return null;

  return (
    <div className="carrusel-wrapper ofertas-section">
      <div className="carrusel-header">
        <div className="header-left">
          {pillText ? <span className="pill">{pillText}</span> : null}
          {sectionTitle ? <h2 className="titulo-seccion">{sectionTitle}</h2> : null}
        </div>

        {showCountdown && countdownTo ? (
          <Countdown target={countdownTo} onEnd={onCountdownEnd} />
        ) : null}

        <div className="nav-buttons">
          <button className="nav-btn prev" aria-label="Anterior" />
          <button className="nav-btn next" aria-label="Siguiente" />
        </div>
      </div>

      <Swiper
        modules={[Navigation, A11y, Keyboard, Mousewheel]}
        navigation={{ prevEl: ".nav-btn.prev", nextEl: ".nav-btn.next" }}
        keyboard={{ enabled: true }}
        mousewheel={{ forceToAxis: true }}
        spaceBetween={24}
        slidesOffsetAfter={24}
        slidesPerView={1.1}
        breakpoints={{
          480: { slidesPerView: 1.5 },
          640: { slidesPerView: 2.2 },
          768: { slidesPerView: 3 },
          1024: { slidesPerView: 4 },
          1280: { slidesPerView: 5 },
        }}
        watchOverflow
        className="carrusel-swiper"
      >
        {products.map((product, idx) => (
          <SwiperSlide key={product.id ?? idx}>
            <TarjetaProducto product={product} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default CarruselProductos;
