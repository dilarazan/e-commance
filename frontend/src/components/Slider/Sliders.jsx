import { useState } from "react";
import SliderItem from "./SliderItem";
import "./Sliders.css";

const Sliders = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % 3);
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + 3) % 3);
  };

  return (
    <section className="slider">
      <div className="slider-elements">
        {currentSlide === 0 && <SliderItem imageSrc="img/Banner_Slider_Desktop_REAL_BRIDES_PR_24_1920x1080.webp" />}
        {currentSlide === 1 && <SliderItem imageSrc="img/aynalı.jpg" />}
        {currentSlide === 2 && <SliderItem imageSrc="img/grace-loves-lace-stockists_c0cc50c6-80f6-422a-bf8f-dedc5c7b9571.webp"/>}
        <div className="slider-buttons">
          <button onClick={prevSlide}>
            <i className="bi bi-chevron-left"></i>
          </button>
          <button onClick={nextSlide}>
            <i className="bi bi-chevron-right"></i>
          </button>
        </div>
        <div className="slider-dots">
          <button
            className={`slider-dot ${currentSlide === 0 ? "active" : ""}`}
            onClick={() => setCurrentSlide(0)}
          >
            <span></span>
          </button>
          <button
            className={`slider-dot ${currentSlide === 1 ? "active" : ""}`}
            onClick={() => setCurrentSlide(1)}
          >
            <span></span>
          </button>
          <button
            className={`slider-dot ${currentSlide === 2 ? "active" : ""}`}
            onClick={() => setCurrentSlide(2)}
          >
            <span></span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Sliders;