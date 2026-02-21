import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Heart, ChevronDown, Sparkles } from 'lucide-react';

export default function Hero() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const scrollToNext = () => {
    const element = document.getElementById('timeline');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/hero-bg.jpg"
          alt="Romantic background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-rose-900/40 via-pink-900/30 to-purple-900/50" />
        <div className="absolute inset-0 bg-gradient-to-t from-rose-50 via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        {/* Sparkles decoration */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={isLoaded ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex justify-center mb-6"
        >
          <Sparkles className="w-12 h-12 text-yellow-300 animate-pulse" />
        </motion.div>

        {/* Main Title */}
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={isLoaded ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.4 }}
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-4 drop-shadow-2xl"
          style={{ fontFamily: 'Playfair Display, serif' }}
        >
          Our Love Story
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={isLoaded ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.6 }}
          className="text-xl sm:text-2xl md:text-3xl text-rose-100 mb-8 font-light"
        >
          A journey of two hearts becoming one
        </motion.p>

        {/* Decorative Line */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={isLoaded ? { scaleX: 1 } : {}}
          transition={{ duration: 1, delay: 0.8 }}
          className="flex items-center justify-center gap-4 mb-8"
        >
          <div className="h-px w-24 bg-gradient-to-r from-transparent to-rose-300" />
          <Heart className="w-6 h-6 text-rose-400 fill-rose-400 animate-pulse" />
          <div className="h-px w-24 bg-gradient-to-l from-transparent to-rose-300" />
        </motion.div>

        {/* Names */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isLoaded ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 1 }}
          className="flex items-center justify-center gap-4 sm:gap-8 text-white"
        >
          <span className="text-2xl sm:text-3xl md:text-4xl font-semibold" style={{ fontFamily: 'Playfair Display, serif' }}>
            You
          </span>
          <Heart className="w-6 h-6 sm:w-8 sm:h-8 text-rose-400 fill-rose-400 animate-pulse" />
          <span className="text-2xl sm:text-3xl md:text-4xl font-semibold" style={{ fontFamily: 'Playfair Display, serif' }}>
            Your Love
          </span>
        </motion.div>

        {/* Date Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isLoaded ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="mt-10 inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/20 backdrop-blur-md border border-white/30"
        >
          <Heart className="w-5 h-5 text-rose-300 fill-rose-300" />
          <span className="text-white text-lg">Together since [Your Date]</span>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.button
        onClick={scrollToNext}
        initial={{ opacity: 0 }}
        animate={isLoaded ? { opacity: 1 } : {}}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/80 hover:text-white transition-colors"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-sm tracking-wider">Scroll to explore</span>
          <ChevronDown className="w-6 h-6" />
        </motion.div>
      </motion.button>

      {/* Corner Decorations */}
      <div className="absolute top-10 left-10 w-20 h-20 border-l-2 border-t-2 border-white/30 rounded-tl-3xl" />
      <div className="absolute top-10 right-10 w-20 h-20 border-r-2 border-t-2 border-white/30 rounded-tr-3xl" />
      <div className="absolute bottom-10 left-10 w-20 h-20 border-l-2 border-b-2 border-white/30 rounded-bl-3xl" />
      <div className="absolute bottom-10 right-10 w-20 h-20 border-r-2 border-b-2 border-white/30 rounded-br-3xl" />
    </section>
  );
}
