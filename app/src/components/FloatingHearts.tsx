import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface Heart {
  id: number;
  x: number;
  size: number;
  duration: number;
  delay: number;
  color: string;
}

export default function FloatingHearts() {
  const [hearts, setHearts] = useState<Heart[]>([]);

  useEffect(() => {
    const colors = ['text-rose-300', 'text-pink-300', 'text-purple-300', 'text-rose-200', 'text-pink-200'];
    const generatedHearts: Heart[] = [];
    
    for (let i = 0; i < 25; i++) {
      generatedHearts.push({
        id: i,
        x: Math.random() * 100,
        size: Math.random() * 20 + 10,
        duration: Math.random() * 10 + 8,
        delay: Math.random() * 10,
        color: colors[Math.floor(Math.random() * colors.length)],
      });
    }
    
    setHearts(generatedHearts);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {hearts.map((heart) => (
        <motion.div
          key={heart.id}
          initial={{ 
            y: '110vh', 
            opacity: 0,
            rotate: 0,
          }}
          animate={{ 
            y: '-10vh', 
            opacity: [0, 0.6, 0.6, 0],
            rotate: [0, 15, -15, 0],
          }}
          transition={{ 
            duration: heart.duration,
            delay: heart.delay,
            repeat: Infinity,
            ease: 'linear',
          }}
          style={{ 
            position: 'absolute',
            left: `${heart.x}%`,
          }}
        >
          <svg
            width={heart.size}
            height={heart.size}
            viewBox="0 0 24 24"
            fill="currentColor"
            className={heart.color}
          >
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
          </svg>
        </motion.div>
      ))}
    </div>
  );
}
