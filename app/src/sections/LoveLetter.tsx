import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Heart, Mail, Lock, Unlock } from 'lucide-react';

export default function LoveLetter() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section id="love-letter" className="py-20 sm:py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src="/love-letter-bg.jpg"
          alt="Love letter background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-rose-50/90 via-pink-50/80 to-purple-50/90" />
      </div>

      <div ref={ref} className="max-w-4xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <Mail className="w-6 h-6 text-rose-500" />
            <span className="text-rose-500 font-medium tracking-wider uppercase text-sm">From My Heart</span>
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gradient mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
            A Letter to You
          </h2>
        </motion.div>

        {/* Letter Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          {/* Envelope */}
          <div className={`relative transition-all duration-700 ${isOpen ? 'opacity-0 scale-95 pointer-events-none' : 'opacity-100'}`}>
            <div 
              onClick={() => setIsOpen(true)}
              className="cursor-pointer bg-gradient-to-br from-rose-100 to-pink-100 rounded-3xl p-8 sm:p-12 shadow-2xl shadow-rose-200/50 border-2 border-rose-200 hover:shadow-rose-300/50 transition-all duration-300 group"
            >
              <div className="text-center">
                <motion.div
                  animate={{ y: [0, -5, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-rose-400 to-pink-500 rounded-full mb-6 shadow-lg shadow-rose-400/50"
                >
                  <Lock className="w-10 h-10 text-white group-hover:hidden" />
                  <Unlock className="w-10 h-10 text-white hidden group-hover:block" />
                </motion.div>
                <h3 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-3" style={{ fontFamily: 'Playfair Display, serif' }}>
                  Open My Letter
                </h3>
                <p className="text-gray-600">Click to reveal my heart's message</p>
                <div className="mt-6 flex justify-center">
                  <Heart className="w-6 h-6 text-rose-400 fill-rose-400 animate-pulse" />
                </div>
              </div>
            </div>
          </div>

          {/* Opened Letter */}
          <div className={`absolute inset-0 transition-all duration-700 ${isOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-105 pointer-events-none'}`}>
            <div className="bg-white/95 backdrop-blur-sm rounded-3xl p-8 sm:p-12 shadow-2xl shadow-rose-200/50 border border-rose-100">
              {/* Letter Header */}
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-3">
                  <Heart className="w-6 h-6 text-rose-500 fill-rose-500" />
                  <span className="text-rose-500 font-medium">My Dearest Love</span>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-gray-400 hover:text-rose-500 transition-colors"
                >
                  Close
                </button>
              </div>

              {/* Letter Content */}
              <div className="space-y-6 text-gray-700 leading-relaxed" style={{ fontFamily: 'Playfair Display, serif' }}>
                <p className="text-xl sm:text-2xl italic text-rose-600">
                  "In all the world, there is no heart for me like yours. In all the world, there is no love for you like mine."
                </p>
                
                <p>
                  My Love,
                </p>
                
                <p>
                  As I sit down to write this letter to you, I find myself overwhelmed by the sheer magnitude of what I feel. 
                  Words seem insufficient to capture the depth of my love, the breadth of my gratitude, and the height of my admiration for you.
                </p>
                
                <p>
                  From the moment you entered my life, everything changed. Colors became brighter, music sounded sweeter, 
                  and every day became an adventure worth living. You are the first thought in my morning and the last 
                  whisper in my night.
                </p>
                
                <p>
                  I love the way you laugh, the way your eyes light up when you're excited, the way you care so deeply 
                  about the people you love. I love your strength, your kindness, your beautiful soul. I love how you 
                  make me want to be a better person every single day.
                </p>
                
                <p>
                  Through every challenge we've faced, through every joy we've shared, my love for you has only grown stronger. 
                  You are my partner, my best friend, my home. With you, I have found a love that I never knew existed.
                </p>
                
                <p>
                  I promise to love you fiercely, to support you endlessly, and to cherish every moment we have together. 
                  I promise to be there for you, to hold your hand through life's storms, and to celebrate every victory 
                  by your side.
                </p>
                
                <p>
                  Thank you for being you. Thank you for choosing me. Thank you for making my life infinitely more beautiful.
                </p>
                
                <p className="text-right">
                  Forever Yours,
                </p>
                <p className="text-right text-rose-600 font-semibold text-xl">
                  [Your Name]
                </p>
              </div>

              {/* Decorative Footer */}
              <div className="mt-8 pt-6 border-t border-rose-100 flex items-center justify-center gap-2">
                <Heart className="w-4 h-4 text-rose-400 fill-rose-400" />
                <Heart className="w-5 h-5 text-rose-500 fill-rose-500" />
                <Heart className="w-4 h-4 text-rose-400 fill-rose-400" />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
