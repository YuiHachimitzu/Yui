import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Heart, Sparkles, Star } from 'lucide-react';

export default function Footer() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <footer id="footer" className="relative py-20 sm:py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-rose-100 via-pink-100 to-purple-100" />
      
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: Math.random() * 0.5 + 0.2 } : {}}
            transition={{ duration: 1, delay: i * 0.1 }}
            className="absolute"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          >
            <Heart 
              className="text-rose-300/30" 
              style={{ 
                width: `${Math.random() * 20 + 10}px`, 
                height: `${Math.random() * 20 + 10}px`,
                transform: `rotate(${Math.random() * 360}deg)`
              }} 
            />
          </motion.div>
        ))}
      </div>

      <div ref={ref} className="max-w-4xl mx-auto relative z-10">
        {/* Main Message */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          {/* Decorative Icon */}
          <motion.div
            initial={{ scale: 0 }}
            animate={isInView ? { scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex justify-center mb-8"
          >
            <div className="relative">
              <div className="w-20 h-20 bg-gradient-to-br from-rose-400 to-pink-500 rounded-full flex items-center justify-center shadow-xl shadow-rose-400/50">
                <Heart className="w-10 h-10 text-white fill-white" />
              </div>
              <motion.div
                animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0, 0.5] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute inset-0 w-20 h-20 bg-rose-400 rounded-full -z-10"
              />
            </div>
          </motion.div>

          {/* Title */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-4xl sm:text-5xl md:text-6xl font-bold text-gradient mb-6"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            Forever Yours
          </motion.h2>

          {/* Quote */}
          <motion.blockquote
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl sm:text-2xl text-gray-700 italic mb-8 leading-relaxed"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            "I have waited for this moment all my life - to love you, to be loved by you, 
            and to spend forever making you happy."
          </motion.blockquote>

          {/* Decorative Line */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : {}}
            transition={{ duration: 1, delay: 0.5 }}
            className="flex items-center justify-center gap-4 mb-8"
          >
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-rose-300" />
            <Sparkles className="w-5 h-5 text-rose-400" />
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-rose-300" />
          </motion.div>

          {/* Final Message */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-lg text-gray-600 mb-8"
          >
            Thank you for being the most beautiful chapter in my life story.
            <br />
            I love you today, tomorrow, and always.
          </motion.p>

          {/* Signature */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="text-2xl font-semibold text-rose-600"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            With all my love,
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-3xl font-bold text-gradient mt-2"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            [Your Name]
          </motion.div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-16 pt-8 border-t border-rose-200/50"
        >
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-gray-500">
              <Heart className="w-4 h-4 text-rose-400 fill-rose-400" />
              <span className="text-sm">Made with love for you</span>
            </div>
            
            <div className="flex items-center gap-2 text-gray-400 text-sm">
              <Star className="w-4 h-4" />
              <span>Our Love Story</span>
              <Star className="w-4 h-4" />
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
