import { useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Hero from './sections/Hero';
import Timeline from './sections/Timeline';
import LoveLetter from './sections/LoveLetter';
import Gallery from './sections/Gallery';
import Dashboard from './sections/Dashboard';
import Reasons from './sections/Reasons';
import BucketList from './sections/BucketList';
import Footer from './sections/Footer';
import FloatingHearts from './components/FloatingHearts';
import MusicPlayer from './components/MusicPlayer';

function App() {
  const { scrollYProgress } = useScroll();
  const progressBarWidth = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-rose-50 via-pink-50 to-purple-50 overflow-x-hidden">
      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 h-1 bg-gradient-to-r from-rose-400 via-pink-500 to-purple-500 z-50"
        style={{ width: progressBarWidth }}
      />

      {/* Floating Hearts Background */}
      <FloatingHearts />

      {/* Music Player */}
      <MusicPlayer />

      {/* Navigation Dots */}
      <NavigationDots />

      {/* Main Content */}
      <main className="relative z-10">
        <Hero />
        <Timeline />
        <LoveLetter />
        <Gallery />
        <Dashboard />
        <Reasons />
        <BucketList />
        <Footer />
      </main>
    </div>
  );
}

// Navigation Dots Component
function NavigationDots() {
  const [activeSection, setActiveSection] = useState(0);
  const sections = ['hero', 'timeline', 'love-letter', 'gallery', 'dashboard', 'reasons', 'bucket-list', 'footer'];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 2;
      
      sections.forEach((section, index) => {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(index);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (index: number) => {
    const element = document.getElementById(sections[index]);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="fixed right-6 top-1/2 -translate-y-1/2 z-40 hidden lg:flex flex-col gap-3">
      {sections.map((_, index) => (
        <button
          key={index}
          onClick={() => scrollToSection(index)}
          className={`w-3 h-3 rounded-full transition-all duration-300 ${
            activeSection === index
              ? 'bg-rose-500 scale-125 shadow-lg shadow-rose-500/50'
              : 'bg-rose-300 hover:bg-rose-400'
          }`}
        />
      ))}
    </div>
  );
}

export default App;
