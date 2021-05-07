import React, { useState } from 'react';
import { RiArrowRightSLine, RiArrowLeftSLine } from 'react-icons/ri';

import './ImageSlider.scss';

const ImageSlider = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };
  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  console.log(slides);
  console.log(current);

  return (
    <section className="slider">
      <RiArrowLeftSLine className="left-arrow" onClick={prevSlide} />
      <RiArrowRightSLine className="right-arrow" onClick={nextSlide} />
      {slides.map((slide, index) => {
        return (
          <div
            className={index === current ? 'slide active' : 'slide'}
            key={slide.id}
          >
            {index === current && (
              <img
                src={`/images/${slide.image}`}
                alt="slider"
                className="imageslider"
              />
            )}
          </div>
        );
      })}
    </section>
  );
};

export default ImageSlider;
