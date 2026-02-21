import { useRef, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { Heart, Sparkles, ChevronLeft, ChevronRight } from 'lucide-react';

const reasons = [
  {
    number: '01',
    title: 'Your Beautiful Smile',
    description: 'The way your eyes light up when you smile can brighten even my darkest days. It is the first thing I fell in love with.',
  },
  {
    number: '02',
    title: 'Your Kind Heart',
    description: 'You care so deeply about everyone around you. Your compassion and empathy make the world a better place.',
  },
  {
    number: '03',
    title: 'Your Laugh',
    description: 'The sound of your laughter is my favorite melody. It is genuine, infectious, and fills my heart with joy.',
  },
  {
    number: '04',
    title: 'Your Strength',
    description: 'You face challenges with grace and determination. Your resilience inspires me to be stronger every day.',
  },
  {
    number: '05',
    title: 'The Way You Love',
    description: 'You love with your whole heart, without reservation. Being loved by you is the greatest gift I have ever received.',
  },
  {
    number: '06',
    title: 'Your Intelligence',
    description: 'Your mind fascinates me. The way you think, your curiosity, and your wisdom never cease to amaze me.',
  },
  {
    number: '07',
    title: 'Your Sense of Humor',
    description: 'You make me laugh until my sides hurt. Life with you is an adventure filled with joy and laughter.',
  },
  {
    number: '08',
    title: 'Your Support',
    description: 'You are always there for me, believing in me even when I do not believe in myself. You are my biggest cheerleader.',
  },
  {
    number: '09',
    title: 'Your Touch',
    description: 'The comfort of your embrace, the warmth of your hand in mine - your touch feels like home.',
  },
  {
    number: '10',
    title: 'You Are You',
    description: 'Simply put, I love you for being authentically, beautifully, perfectly you. Every part of you is loved.',
  },
];

export default function Reasons() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextReason = () => {
    setCurrentIndex((prev) => (prev + 1) % reasons.length);
  };

  const prevReason = () => {
    setCurrentIndex((prev) => (prev - 1 + reasons.length) % reasons.length);
  };

  return (
    <section id="reasons" className="py-20 sm:py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-rose-200 rounded-full blur-3xl opacity-30" />
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-purple-200 rounded-full blur-3xl opacity-30" />
      </div>

      <div ref={ref} className="max-w-5xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <Sparkles className="w-6 h-6 text-rose-500" />
            <span className="text-rose-500 font-medium tracking-wider uppercase text-sm">Countless Reasons</span>
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gradient mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
            Why I Love You
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            There are infinite reasons why my heart chose you. Here are just a few that make you so incredibly special.
          </p>
        </motion.div>

        {/* Reasons Carousel */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          {/* Main Card */}
          <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 sm:p-12 shadow-2xl shadow-rose-200/50 border border-rose-100 min-h-[400px] flex flex-col justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.4 }}
                className="text-center"
              >
                {/* Number */}
                <div className="text-6xl sm:text-8xl font-bold text-rose-100 mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
                  {reasons[currentIndex].number}
                </div>
                
                {/* Title */}
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>
                  {reasons[currentIndex].title}
                </h3>
                
                {/* Description */}
                <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
                  {reasons[currentIndex].description}
                </p>

                {/* Hearts decoration */}
                <div className="flex justify-center gap-2 mt-8">
                  {[...Array(5)].map((_, i) => (
                    <Heart
                      key={i}
                      className={`w-5 h-5 ${i <= (currentIndex % 5) ? 'text-rose-500 fill-rose-500' : 'text-rose-200'}`}
                    />
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation */}
            <div className="flex items-center justify-between mt-8">
              <button
                onClick={prevReason}
                className="w-12 h-12 rounded-full bg-rose-100 hover:bg-rose-200 flex items-center justify-center transition-colors"
              >
                <ChevronLeft className="w-6 h-6 text-rose-600" />
              </button>

              {/* Progress dots */}
              <div className="flex gap-2">
                {reasons.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      index === currentIndex ? 'w-8 bg-rose-500' : 'bg-rose-200 hover:bg-rose-300'
                    }`}
                  />
                ))}
              </div>

              <button
                onClick={nextReason}
                className="w-12 h-12 rounded-full bg-rose-100 hover:bg-rose-200 flex items-center justify-center transition-colors"
              >
                <ChevronRight className="w-6 h-6 text-rose-600" />
              </button>
            </div>
          </div>

          {/* Decorative elements */}
          <div className="absolute -top-4 -left-4 w-24 h-24 bg-gradient-to-br from-rose-300 to-pink-300 rounded-full opacity-50 blur-xl" />
          <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-gradient-to-br from-purple-300 to-pink-300 rounded-full opacity-50 blur-xl" />
        </motion.div>

        {/* Infinite Love Message */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mt-12"
        >
          <p className="text-gray-500 italic">
            And these are just the beginning... I fall in love with you more every single day.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
