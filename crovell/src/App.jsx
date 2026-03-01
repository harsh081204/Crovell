import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import About from './components/About';
import Collections from './components/Collections';
import Contact from './components/Contact';
import Footer from './components/Footer';

const CrovellWebsite = () => {
  return (
    <div className="min-h-screen bg-[#f3e9dc]">
      <Navbar />
      <Hero />
      <Features />
      <About />
      <Collections />
      <Contact />
      <Footer />
    </div>
  );
};

export default CrovellWebsite;