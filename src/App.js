import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import AvailabilityCard from './components/Layout/Availability-card/AvailabilityCard';
import Header from './components/Layout/Header/Header';
import Hero from './components/Layout/Hero/Hero';
import Quote from './components/Layout/Quote/Quote';
import Services from './components/Layout/Services/Services';

function App() {
  return (
    <Router>
      <Header />
      <Hero />
      <Quote />
      <AvailabilityCard />
      <Services />
    </Router>
  );
}

export default App;
