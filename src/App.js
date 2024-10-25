import './index.css'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home/Home';
import About from './pages/About/About'
import WhatsAppButton from './components/WhatsAppButton/WhatsAppButton';
import NotFound from './pages/NotFound/NotFound';
import React from 'react';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';
import Contact from './pages/Contact/Contact';
import Ambassadors from './pages/Ambassadors/Ambassadors';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import EventsPage from './pages/EventPage/EventsPage';
import ReactGA from 'react-ga';
import GoogleAnalytics from "./components/GoogleAnalytics/GoogleAnalytics"

function App() {

  ReactGA.initialize('G-DR4GK6WPCP');

  return (
    <div className="App">

      <ScrollToTop />

      <Header />

      <Routes>

        <Route Component={GoogleAnalytics}>
          <Route Component={Home} path='/' exact />

          <Route Component={About} path='/about-us' exact />

          <Route Component={Contact} path='/contact-us' exact />

          <Route Component={EventsPage} path='/events' exact />

          {/* <Route Component={Ambassadors} path='/ambassadors' exact /> */}

          <Route Component={NotFound} path='*' exact />
        </Route>


      </Routes>

      <Footer />
      <WhatsAppButton />

    </div>
  );
}

export default App;
