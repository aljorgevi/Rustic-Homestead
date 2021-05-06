import React, { Fragment } from 'react';
import AvailabilityCard from '../../components/Layout/Availability-card/AvailabilityCard';
import ContactUs from '../../components/Layout/Contact-us/ContactUs';
import Hero from '../../components/Layout/Hero/Hero';
import Quote from '../../components/Layout/Quote/Quote';
import Services from '../../components/Layout/Services/Services';

const h3title = (
  <span>
    ¡Comunícate con nosotros y comienza a disfrutar de un paseo increíble!
  </span>
);

const pcontent = (
  <span>
    Si tienes pensado viajar al sur de Chile, o simplemente quieres un fin de
    semana de descanso cerca del mar. Visita nuestro formulario de contacto o
    escríbenos en las redes sociales.
  </span>
);

const Home = () => {
  return (
    <Fragment>
      <Hero />
      <Quote />
      <AvailabilityCard />
      <Services />
      <ContactUs title={h3title} content={pcontent} />
    </Fragment>
  );
};

export default Home;
