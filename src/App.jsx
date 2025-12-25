import React, { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import { LanguageProvider } from './context/LanguageContext';

// Lazy-loaded pages to reduce initial bundle
const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Productions = lazy(() => import('./pages/Productions'));
const Apiculture = lazy(() => import('./pages/Apiculture'));
const Transformation = lazy(() => import('./pages/Transformation'));
const Development = lazy(() => import('./pages/Development'));
const Impact = lazy(() => import('./pages/Impact'));
const Partnerships = lazy(() => import('./pages/Partnerships'));
const Resources = lazy(() => import('./pages/Resources'));
const Contact = lazy(() => import('./pages/Contact'));

const App = () => {
  return (
    <LanguageProvider>
      <div className="flex flex-col min-h-screen font-sans text-gray-800 bg-gbc-light">
        <Navbar />
        <ScrollToTop />
        <main className="flex-grow">
          <Suspense fallback={<div className="min-h-[50vh] flex items-center justify-center">Chargement...</div>}>
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
          </Suspense>
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
};

export default App;









