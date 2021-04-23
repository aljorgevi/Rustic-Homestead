import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home/Home';
import Availability from './pages/Availability/Availability';
import Footer from './components/Layout/Footer/Footer';
import Header from './components/Layout/Header/Header';
import ScrollToTop from './components/ScrollToTop';
import Cabins from './pages/cabins/Cabins';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/cabins" component={Cabins} />
        <Route path="/contacto" component={Availability} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
