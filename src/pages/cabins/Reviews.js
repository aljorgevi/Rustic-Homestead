import React, { useState, useRef, useEffect } from 'react';
import { TweenLite, Power3 } from 'gsap';
import leftArrow from '../../assets/review/arrow-left.svg';
import rightArrow from '../../assets/review/arrow-right.svg';
import image01 from '../../assets/review/image.jpg';
import image02 from '../../assets/review/image2.jpg';
import image03 from '../../assets/review/image3.jpg';
import '../../styles/pages/Cabins/Reviews.scss';

const testimonials = [
  {
    name: 'Geoffrey',
    title: '5 mar. - 8 de mar. de 2020',
    cabin: 'Studio, Puerto Montt',
    image: 'image.jpg',
    quote:
      '¡Un apartamento perfecto, tranquilo, limpio y muy agradable! Excelente ubicación, cerca del centro de la ciudad',
  },
  {
    name: 'Carolina',
    title: '17 feb. - 19 de feb. de 2020',
    cabin: 'Studio, Puerto Montt',
    image: 'image2.jpg',
    quote:
      'Excelente comunicación y flexibilidad.Transporte cerca, todo limpio y ordenado. 100% recomendado.',
  },
  {
    name: 'Karolay',
    title: '5 mar. - 8 de mar. de 2020',
    cabin: 'Studio, Puerto Montt',
    image: 'image3.jpg',
    quote:
      'Excelente ubicación, locomoción colectiva cerca y una inmejorable limpieza',
  },
];

function Reviews() {
  let imageList = useRef(null);
  let testimonialList = useRef(null);
  const [Disable, setDisable] = useState(false);
  const [state, setState] = useState({
    isActive1: true,
    isActive2: false,
    isActive3: false,
  });

  let imageWidth = 340;

  // var viewportWidth = window.innerWidth || document.documentElement.clientWidth;
  // if (viewportWidth < 500) {
  //   imageWidth = 300;
  // }

  useEffect(() => {
    TweenLite.to(testimonialList.children[0], 0, {
      opacity: 1,
    });
  }, []);

  //Image transition
  const slideLeft = (index, duration, multiplied = 1) => {
    TweenLite.to(imageList.children[index], duration, {
      x: -imageWidth * multiplied,
      ease: Power3.easeOut,
    });
  };

  const slideRight = (index, duration, multiplied = 1) => {
    TweenLite.to(imageList.children[index], duration, {
      x: imageWidth * multiplied,
      ease: Power3.easeOut,
    });
  };

  const scale = (index, duration) => {
    TweenLite.from(imageList.children[index], duration, {
      scale: 1.2,
      ease: Power3.easeOut,
    });
  };

  //Content transition

  const fadeOut = (index, duration) => {
    TweenLite.to(testimonialList.children[index], duration, {
      opacity: 0,
    });
  };

  const fadeIn = (index, duration) => {
    TweenLite.to(testimonialList.children[index], duration, {
      opacity: 1,
      delay: 1,
    });
  };

  const nextSlide = () => {
    setDisable(true);
    if (Disable) {
      return;
    }
    setTimeout(() => {
      setDisable(false);
    }, 1000);

    if (imageList.children[0].classList.contains('active')) {
      setState({ isActive1: false, isActive2: true });
      //Image transition
      slideLeft(0, 1);
      slideLeft(1, 1);
      scale(1, 1);
      slideLeft(2, 1);
      slideLeft(2, 0);
      fadeOut(0, 1);
      fadeIn(1, 1);
    } else if (imageList.children[1].classList.contains('active')) {
      setState({ isActive2: false, isActive3: true });
      //Image transition
      slideRight(0, 1);
      slideLeft(1, 1, 2);
      slideLeft(2, 1, 2);
      scale(2, 1);
      //content transition
      fadeOut(1, 1);
      fadeIn(2, 1);
    } else if (imageList.children[2].classList.contains('active')) {
      setState({ isActive1: true, isActive3: false });
      //Image transition
      slideLeft(2, 1, 3);
      slideLeft(0, 1, 0);
      slideLeft(1, 0, 0);
      scale(0, 1);
      //content transition
      fadeOut(2, 1);
      fadeIn(0, 1);
    }
  };

  const prevSlide = () => {
    setDisable(true);
    if (Disable) {
      return;
    }
    setTimeout(() => {
      setDisable(false);
    }, 1000);

    if (imageList.children[0].classList.contains('active')) {
      setState({ isActive1: false, isActive3: true });
      //Image transition
      slideLeft(2, 0, 3);
      slideLeft(2, 1, 2);
      scale(2, 1);
      slideRight(0, 1);
      slideRight(1, 1);
      //content transtion
      fadeOut(0, 1);
      fadeIn(2, 1);
    } else if (imageList.children[1].classList.contains('active')) {
      setState({ isActive2: false, isActive1: true });
      //Image transition
      slideLeft(0, 0);
      slideRight(0, 1, 0);
      slideRight(1, 1, 0);
      slideRight(2, 1, 2);
      scale(0, 1);
      //content transtion
      fadeOut(1, 1);
      fadeIn(0, 1);
    } else if (imageList.children[2].classList.contains('active')) {
      setState({ isActive2: true, isActive3: false });
      slideLeft(2, 1);
      slideLeft(1, 0, 2);
      slideLeft(1, 1);
      scale(1, 1);
      //content transtion
      fadeOut(2, 1);
      fadeIn(1, 1);
    }
  };

  return (
    <div className="container mb-300">
      <div className="testimonial-section">
        <div className="testimonial-container">
          <div onClick={prevSlide} className="arrows left">
            <span>
              <img className="arrow-left" src={leftArrow} alt="left arrow" />
            </span>
          </div>

          <div className="inner row">
            <div className="t-image col-12 col-lg-6">
              <ul ref={(el) => (imageList = el)}>
                <li className={state.isActive1 ? 'active' : ''}>
                  <img src={image01} alt={testimonials[0].name} />
                </li>
                <li className={state.isActive2 ? 'active' : ''}>
                  <img src={image02} alt={testimonials[1].name} />
                </li>
                <li className={state.isActive3 ? 'active' : ''}>
                  <img src={image03} alt="reviews" />
                </li>
              </ul>
            </div>
            <div className="t-content col-12 col-lg-6">
              <ul ref={(el) => (testimonialList = el)}>
                <li className={state.isActive1 ? 'active' : ''}>
                  <div className="content-inner">
                    <p className="quote">{testimonials[0].quote}</p>
                    <h3 className="name">{testimonials[0].name}</h3>
                    <h4 className="title">{testimonials[0].cabin}</h4>
                    <h4 className="title">{testimonials[0].title}</h4>
                  </div>
                </li>
                <li className={state.isActive2 ? 'active' : ''}>
                  <div className="content-inner">
                    <p className="quote">{testimonials[1].quote}</p>
                    <h3 className="name">{testimonials[1].name}</h3>
                    <h4 className="title">{testimonials[0].cabin}</h4>
                    <h4 className="title">{testimonials[1].title}</h4>
                  </div>
                </li>
                <li className={state.isActive3 ? 'active' : ''}>
                  <div className="content-inner">
                    <p className="quote">{testimonials[2].quote}</p>
                    <h3 className="name">{testimonials[2].name}</h3>
                    <h4 className="title">{testimonials[0].cabin}</h4>
                    <h4 className="title">{testimonials[2].title}</h4>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <div className="arrows right" onClick={nextSlide}>
            <span>
              <img className="arrow-right" src={rightArrow} alt="right arrow" />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Reviews;
