import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { HeroBanner } from './components/HeroBanner';
import { AboutSection } from './components/AboutSection';
import { TechStackGrid } from './components/TechStackGrid';
import { FeaturedProjects } from './components/FeaturedProjects';
import { StatsShowcase } from './components/StatsShowcase';
import { PhilosophySection } from './components/PhilosophySection';
import { ContactSection } from './components/ContactSection';
import { ContactModal } from './components/ContactModal';
import { Footer } from './components/Footer';
import { ArrowUp } from 'lucide-react';

export function App() {
  const [darkMode, setDarkMode] = useState<boolean>(true);
  const [isContactOpen, setIsContactOpen] = useState<boolean>(false);
  const [showScrollTop, setShowScrollTop] = useState<boolean>(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      document.documentElement.classList.remove('light');
    } else {
      document.documentElement.classList.remove('dark');
      document.documentElement.classList.add('light');
    }
  }, [darkMode]);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className={`min-h-screen ${darkMode ? 'bg-[#090d13] text-slate-100' : 'bg-slate-50 text-slate-900'} transition-colors duration-300`}>
      {/* Top sticky Navigation Header */}
      <Header
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        onOpenContact={() => setIsContactOpen(true)}
      />

      {/* Main Content Area */}
      <main>
        <HeroBanner
          darkMode={darkMode}
          onOpenContact={() => setIsContactOpen(true)}
        />

        <AboutSection />

        <TechStackGrid />

        <FeaturedProjects />

        <StatsShowcase darkMode={darkMode} />

        <PhilosophySection />

        <ContactSection onOpenModal={() => setIsContactOpen(true)} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Contact Interactive Modal */}
      <ContactModal
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
      />

      {/* Scroll to Top floating pill */}
      {showScrollTop && (
        <button
          id="scroll-to-top-btn"
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-40 p-3 rounded-full bg-pink-500 text-white shadow-xl shadow-pink-500/30 hover:bg-pink-600 hover:scale-110 active:scale-95 transition-all"
          title="Scroll to top"
          aria-label="Scroll to top"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      )}
    </div>
  );
}

export default App;
