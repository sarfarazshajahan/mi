import React from 'react';
import { ThemeProvider } from './contexts/ThemeContext';
import SEOHead from './components/SEOHead';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <ThemeProvider>
      <SEOHead />
      <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
        <Header />
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;