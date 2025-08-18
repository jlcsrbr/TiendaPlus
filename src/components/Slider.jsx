import React from "react";
// Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
//Imágenes
import iphone14 from "../assets/slider-iphone.png";
import applewatch from "../assets/slider-apple-watch.png";
import airpods from "../assets/slider-airpods.png";
// Iconos
import { FaApple } from "react-icons/fa6";

// Estilos del banner
import "../styles/Slider.css";

function Slider() {
  const slides = [
    {
      kicker: "iPhone 14 Series",
      titleLines: ["Cupón de", "hasta 10% de", "descuento"],
      cta: "Compra ahora",
      imageUrl: iphone14,
      bg: "#000000",
      accent: "#e11d48",
    },

    {
      kicker: "Apple Watch",
      titleLines: ["Controla tu", "salud desde", "tu muñeca"],
      cta: "Ver más",
      imageUrl: applewatch,
      bg: "#0b0b0b",
      accent: "#e11d48",
    },
    {
      kicker: "AirPods Pro",
      titleLines: ["Sonido", "inmersivo", "de otro nivel"],
      cta: "Explorar",
      imageUrl: airpods,
      bg: "#000000",
      accent: "#e11d48",
    },
  ];

  const pagination = {
    clickable: true
  };

  return (
    <Swiper
      pagination={pagination}
      modules={[Pagination]}
      className="mySwiper"
    >
      {slides.map((s, idx) => (
        <SwiperSlide key={idx}>
          <section
            className="banner-slide"
            style={{ backgroundColor: s.bg }}
            aria-label={s.kicker}
          >
            <div className="banner-left">
              <div className="apple">
                <span className="apple-circle"><FaApple /></span>
                <span className="kicker">{s.kicker}</span>
              </div>

              <h1 className="title">
                {s.titleLines.map((line, i) => (
                  <span key={i} className="block">
                    {line}
                  </span>
                ))}
              </h1>

              <a href="#" className="cta">
                {s.cta} <span aria-hidden>→</span>
              </a>
            </div>

            <div className="banner-right">
              <img src={s.imageUrl} alt={s.kicker} />
            </div>
          </section>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default Slider;
