/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Benefits from './components/Benefits';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ThreeBackground from './components/ThreeBackground';

export default function App() {
  useEffect(() => {
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        if (!targetId || targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          targetElement.scrollIntoView({
            behavior: 'smooth'
          });
        }
      });
    });
  }, []);

  return (
    <div className="relative min-h-screen font-sans selection:bg-gold/30 selection:text-gold">
      {/* 3D Background Layer */}
      <ThreeBackground />

      {/* Content Layers */}
      <div className="relative z-10">
        <Navbar />
        
        <main>
          <Hero />
          
          <div className="bg-gradient-to-b from-transparent via-deep-black to-deep-black">
            <About />
            <Benefits />
            <Contact />
          </div>
        </main>

        <Footer />
      </div>

      {/* Global decorative elements */}
      <div className="fixed top-0 left-0 w-full h-32 bg-gradient-to-b from-deep-black to-transparent pointer-events-none z-20" />
      <div className="fixed bottom-0 left-0 w-full h-32 bg-gradient-to-t from-deep-black to-transparent pointer-events-none z-20" />
    </div>
  );
}
