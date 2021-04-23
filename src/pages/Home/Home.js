import React, { Fragment } from 'react';
import AvailabilityCard from '../../components/Layout/Availability-card/AvailabilityCard';
import ContactUs from '../../components/Layout/Contact-us/ContactUs';
import Hero from '../../components/Layout/Hero/Hero';
import Quote from '../../components/Layout/Quote/Quote';
import Services from '../../components/Layout/Services/Services';

const Home = () => {
  return (
    <Fragment>
      <Hero />
      <Quote />
      <AvailabilityCard />
      <Services />
      <ContactUs />
    </Fragment>
  );
};

export default Home;
