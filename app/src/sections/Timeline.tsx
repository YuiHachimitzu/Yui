import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Heart, Calendar } from 'lucide-react';

const timelineEvents = [
  {
    date: 'The Day We Met',
    title: 'First Encounter',
    description: 'That magical moment when our eyes first met. Little did we know, our lives were about to change forever. The universe aligned to bring us together.',
    image: '/timeline-1.jpg',
    side: 'left' as const,
  },
  {
    date: 'Our First Date',
    title: 'The Beginning',
    description: 'Nervous smiles, endless conversations, and that feeling of knowing this was something special. Coffee turned into dinner, dinner turned into dreams.',
    image: '/timeline-2.jpg',
    side: 'right' as const,
  },
  {
    date: 'Falling in Love',
    title: 'I Knew It Was You',
    description: 'Every moment spent together confirmed what my heart already knew. You became my favorite person, my safe place, my home.',
    image: '/timeline-3.jpg',
    side: 'left' as const,
  },
  {
    date: 'Our Journey Continues',
    title: 'Forever & Always',
    description: 'Through every adventure, every challenge, every joy - we grow stronger together. This is just the beginning of our beautiful forever.',
    image: '/timeline-4.jpg',
    side: 'right' as const,
  },
];

export default function Timeline() {
  return (
    <section id="timeline" className="py-20 sm:py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-64 h-64 bg-rose-200 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-200 rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 sm:mb-24"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <Calendar className="w-6 h-6 text-rose-500" />
            <span className="text-rose-500 font-medium tracking-wider uppercase text-sm">Our Journey</span>
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gradient mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
            Love Story Timeline
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Every love story is beautiful, but ours is my favorite. Here are the moments that made us "us."
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Center Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-rose-300 via-pink-400 to-purple-400 hidden md:block" />
          
          {/* Mobile Line */}
          <div className="absolute left-4 w-1 h-full bg-gradient-to-b from-rose-300 via-pink-400 to-purple-400 md:hidden" />

          {/* Timeline Events */}
          <div className="space-y-12 md:space-y-24">
            {timelineEvents.map((event, index) => (
              <TimelineItem key={index} event={event} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function TimelineItem({ event, index }: { event: typeof timelineEvents[0]; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const isLeft = event.side === 'left';

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.8, delay: index * 0.2 }}
      className={`relative flex flex-col md:flex-row items-center gap-8 ${
        isLeft ? 'md:flex-row' : 'md:flex-row-reverse'
      }`}
    >
      {/* Content Card */}
      <div className={`w-full md:w-5/12 ${isLeft ? 'md:text-right md:pr-12' : 'md:text-left md:pl-12'}`}>
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 sm:p-8 shadow-xl shadow-rose-100/50 border border-rose-100 hover:shadow-2xl hover:shadow-rose-200/50 transition-shadow duration-300">
          <div className={`flex items-center gap-2 mb-3 ${isLeft ? 'md:justify-end' : ''}`}>
            <Heart className="w-4 h-4 text-rose-500 fill-rose-500" />
            <span className="text-rose-500 font-medium text-sm">{event.date}</span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-3" style={{ fontFamily: 'Playfair Display, serif' }}>
            {event.title}
          </h3>
          <p className="text-gray-600 leading-relaxed">
            {event.description}
          </p>
        </div>
      </div>

      {/* Center Dot */}
      <div className="absolute left-4 md:left-1/2 md:-translate-x-1/2 z-10">
        <motion.div
          initial={{ scale: 0 }}
          animate={isInView ? { scale: 1 } : {}}
          transition={{ duration: 0.5, delay: index * 0.2 + 0.3 }}
          className="w-8 h-8 bg-gradient-to-br from-rose-400 to-pink-500 rounded-full flex items-center justify-center shadow-lg shadow-rose-400/50"
        >
          <Heart className="w-4 h-4 text-white fill-white" />
        </motion.div>
      </div>

      {/* Image */}
      <div className={`w-full md:w-5/12 pl-12 md:pl-0 ${isLeft ? 'md:pl-12' : 'md:pr-12'}`}>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: index * 0.2 + 0.2 }}
          className="relative group"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-rose-400 to-purple-500 rounded-2xl transform rotate-3 group-hover:rotate-6 transition-transform duration-300" />
          <img
            src={event.image}
            alt={event.title}
            className="relative rounded-2xl w-full h-64 sm:h-80 object-cover shadow-xl"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </motion.div>
      </div>
    </motion.div>
  );
}
