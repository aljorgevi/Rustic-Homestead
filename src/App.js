import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home/Home';
import Availability from './pages/Availability/Availability';
import Tinaja from './pages/Tinaja/Tinaja';
import Footer from './components/Layout/Footer/Footer';
import Header from './components/Layout/Header/Header';
import ScrollToTop from './components/ScrollToTop';
import Cabins from './pages/cabins/Cabins';
import FireWood from './pages/Firewood/FireWood';
import Lenca from './pages/cabins/Lenca/Lenca';
import Studio from './pages/cabins/PuertoMontt/Studio';
import Bariloche from './pages/cabins/Bariloche/Bariloche';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/cabins" component={Cabins} />
        <Route exact path="/cabins/lenca" component={Lenca} />
        <Route exact path="/cabins/studio" component={Studio} />
        <Route exact path="/cabins/bariloche" component={Bariloche} />
        <Route path="/contacto" component={Availability} />
        <Route path="/firewood" component={FireWood} />
        <Route path="/tinaja" component={Tinaja} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
