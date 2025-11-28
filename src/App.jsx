import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

// Import Pages
import Home from './pages/Home';
import About from './pages/About';
import Productions from './pages/Productions';
import Apiculture from './pages/Apiculture';
import Transformation from './pages/Transformation';
import Development from './pages/Development';
import Impact from './pages/Impact';
import Partnerships from './pages/Partnerships';
import Resources from './pages/Resources';
import Contact from './pages/Contact';

const App = () => {
  return (
    <div className="flex flex-col min-h-screen font-sans text-gray-800 bg-gbc-light">
      <Navbar />
      <ScrollToTop />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/productions" element={<Productions />} />
          <Route path="/apiculture" element={<Apiculture />} />
          <Route path="/transformation" element={<Transformation />} />
          <Route path="/development" element={<Development />} />
          <Route path="/impact" element={<Impact />} />
          <Route path="/partnerships" element={<Partnerships />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
};

export default App;


