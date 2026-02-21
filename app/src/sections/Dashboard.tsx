import { useRef, useState, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import { Clock, Calendar, Heart, Sparkles, Star } from 'lucide-react';
import Countdown from 'react-countdown';

// Set your anniversary date here
const ANNIVERSARY_DATE = new Date('2024-02-14'); // Change this to your actual anniversary
const NEXT_ANNIVERSARY = new Date('2025-02-14'); // Next anniversary to countdown to

const stats = [
  { label: 'Days Together', value: 0, icon: Calendar },
  { label: 'Memories Made', value: '∞', icon: Heart },
  { label: 'Laughs Shared', value: '∞', icon: Sparkles },
  { label: 'Kisses Given', value: '∞', icon: Heart },
];

export default function Dashboard() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [daysTogether, setDaysTogether] = useState(0);

  useEffect(() => {
    const today = new Date();
    const diffTime = Math.abs(today.getTime() - ANNIVERSARY_DATE.getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    setDaysTogether(diffDays);
  }, []);

  // Countdown renderer
  const countdownRenderer = ({ days, hours, minutes, seconds }: { days: number; hours: number; minutes: number; seconds: number }) => {
    return (
      <div className="grid grid-cols-4 gap-2 sm:gap-4">
        <TimeUnit value={days} label="Days" />
        <TimeUnit value={hours} label="Hours" />
        <TimeUnit value={minutes} label="Minutes" />
        <TimeUnit value={seconds} label="Seconds" />
      </div>
    );
  };

  return (
    <section id="dashboard" className="py-20 sm:py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-rose-100 via-pink-50 to-purple-100" />
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-rose-200 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-200 rounded-full blur-3xl" />
      </div>

      <div ref={ref} className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <Star className="w-6 h-6 text-rose-500" />
            <span className="text-rose-500 font-medium tracking-wider uppercase text-sm">Our World</span>
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gradient mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
            Our Dashboard
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A little corner of the internet dedicated to us and our beautiful journey together.
          </p>
        </motion.div>

        {/* Dashboard Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Countdown Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-2 bg-white/80 backdrop-blur-sm rounded-3xl p-6 sm:p-8 shadow-xl shadow-rose-100/50 border border-rose-100"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-rose-400 to-pink-500 rounded-xl flex items-center justify-center">
                <Clock className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-800" style={{ fontFamily: 'Playfair Display, serif' }}>
                  Countdown to Our Anniversary
                </h3>
                <p className="text-gray-500 text-sm">The next celebration of us</p>
              </div>
            </div>
            <Countdown date={NEXT_ANNIVERSARY} renderer={countdownRenderer} />
          </motion.div>

          {/* Days Together Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-gradient-to-br from-rose-400 to-pink-500 rounded-3xl p-6 sm:p-8 shadow-xl shadow-rose-400/30 text-white"
          >
            <div className="flex items-center gap-3 mb-4">
              <Calendar className="w-8 h-8" />
              <span className="text-rose-100 font-medium">Together Since</span>
            </div>
            <div className="text-5xl sm:text-6xl font-bold mb-2">{daysTogether}</div>
            <p className="text-rose-100 text-lg">Beautiful Days</p>
            <div className="mt-4 flex items-center gap-2">
              <Heart className="w-5 h-5 fill-white" />
              <span className="text-sm">And counting...</span>
            </div>
          </motion.div>

          {/* Love Quote Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-white/80 backdrop-blur-sm rounded-3xl p-6 sm:p-8 shadow-xl shadow-rose-100/50 border border-rose-100"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-purple-400 to-pink-400 rounded-xl flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-lg font-bold text-gray-800" style={{ fontFamily: 'Playfair Display, serif' }}>
                Quote of the Day
              </h3>
            </div>
            <blockquote className="text-gray-600 italic leading-relaxed">
              "I saw that you were perfect, and so I loved you. Then I saw that you were not perfect and I loved you even more."
            </blockquote>
            <p className="text-right text-rose-500 mt-3 text-sm">— Angelita Lim</p>
          </motion.div>

          {/* Memory of the Day */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="lg:col-span-2 bg-white/80 backdrop-blur-sm rounded-3xl p-6 sm:p-8 shadow-xl shadow-rose-100/50 border border-rose-100"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-amber-400 to-orange-400 rounded-xl flex items-center justify-center">
                <Star className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-lg font-bold text-gray-800" style={{ fontFamily: 'Playfair Display, serif' }}>
                Memory of the Moment
              </h3>
            </div>
            <div className="flex flex-col sm:flex-row gap-6">
              <div className="w-full sm:w-1/2">
                <img
                  src="/timeline-3.jpg"
                  alt="Memory"
                  className="w-full h-48 object-cover rounded-2xl"
                />
              </div>
              <div className="w-full sm:w-1/2 flex flex-col justify-center">
                <h4 className="text-xl font-semibold text-gray-800 mb-2" style={{ fontFamily: 'Playfair Display, serif' }}>
                  The Night We Danced
                </h4>
                <p className="text-gray-600 mb-4">
                  Under the twinkling lights, with music in the air and love in our hearts. 
                  That night, I knew I never wanted to dance with anyone else.
                </p>
                <div className="flex items-center gap-2 text-rose-500">
                  <Heart className="w-4 h-4 fill-rose-500" />
                  <span className="text-sm">Forever cherished</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Quick Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="bg-gradient-to-br from-purple-400 to-pink-500 rounded-3xl p-6 sm:p-8 shadow-xl shadow-purple-400/30 text-white"
          >
            <h3 className="text-lg font-bold mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
              Our Love Stats
            </h3>
            <div className="space-y-4">
              {stats.map((stat, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <stat.icon className="w-4 h-4" />
                    <span className="text-sm text-purple-100">{stat.label}</span>
                  </div>
                  <span className="font-bold text-xl">
                    {index === 0 ? daysTogether : stat.value}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function TimeUnit({ value, label }: { value: number; label: string }) {
  return (
    <div className="text-center">
      <div className="bg-gradient-to-br from-rose-400 to-pink-500 rounded-xl p-3 sm:p-4 mb-2">
        <span className="text-2xl sm:text-4xl font-bold text-white">
          {value.toString().padStart(2, '0')}
        </span>
      </div>
      <span className="text-xs sm:text-sm text-gray-600">{label}</span>
    </div>
  );
}
