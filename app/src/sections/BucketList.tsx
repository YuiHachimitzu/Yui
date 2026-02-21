import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { MapPin, Heart, Check, Plus, Plane, Mountain, Camera, Utensils, Music, Sparkles } from 'lucide-react';

const initialItems = [
  { id: 1, text: 'Watch the sunrise together at the beach', completed: true, icon: Camera },
  { id: 2, text: 'Take a road trip across the country', completed: false, icon: Plane },
  { id: 3, text: 'Cook a fancy dinner together', completed: true, icon: Utensils },
  { id: 4, text: 'Go stargazing in the mountains', completed: false, icon: Mountain },
  { id: 5, text: 'Dance in the rain', completed: false, icon: Music },
  { id: 6, text: 'Visit a foreign country together', completed: false, icon: Plane },
  { id: 7, text: 'Build a blanket fort and have a movie night', completed: true, icon: Sparkles },
  { id: 8, text: 'Write love letters to each other', completed: true, icon: Heart },
];

export default function BucketList() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [items, setItems] = useState(initialItems);
  const [newItem, setNewItem] = useState('');

  const toggleItem = (id: number) => {
    setItems(items.map(item => 
      item.id === id ? { ...item, completed: !item.completed } : item
    ));
  };

  const addItem = (e: React.FormEvent) => {
    e.preventDefault();
    if (newItem.trim()) {
      setItems([...items, {
        id: Date.now(),
        text: newItem.trim(),
        completed: false,
        icon: Heart,
      }]);
      setNewItem('');
    }
  };

  const completedCount = items.filter(item => item.completed).length;
  const progress = (completedCount / items.length) * 100;

  return (
    <section id="bucket-list" className="py-20 sm:py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-purple-50 via-pink-50 to-rose-50" />
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-purple-200 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-rose-200 rounded-full blur-3xl" />
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
            <MapPin className="w-6 h-6 text-rose-500" />
            <span className="text-rose-500 font-medium tracking-wider uppercase text-sm">Adventures Await</span>
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gradient mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
            Our Bucket List
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Dreams we want to chase together, adventures we want to share, and memories waiting to be made.
          </p>
        </motion.div>

        {/* Progress Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="bg-white/80 backdrop-blur-sm rounded-3xl p-6 sm:p-8 shadow-xl shadow-rose-100/50 border border-rose-100 mb-8"
        >
          <div className="flex items-center justify-between mb-4">
            <div>
              <h3 className="text-xl font-bold text-gray-800" style={{ fontFamily: 'Playfair Display, serif' }}>
                Our Progress
              </h3>
              <p className="text-gray-500 text-sm">
                {completedCount} of {items.length} dreams completed
              </p>
            </div>
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-rose-400 to-pink-500 flex items-center justify-center">
              <span className="text-white font-bold text-lg">{Math.round(progress)}%</span>
            </div>
          </div>
          
          {/* Progress Bar */}
          <div className="h-3 bg-rose-100 rounded-full overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              animate={isInView ? { width: `${progress}%` } : {}}
              transition={{ duration: 1, delay: 0.5 }}
              className="h-full bg-gradient-to-r from-rose-400 via-pink-500 to-purple-500 rounded-full"
            />
          </div>
        </motion.div>

        {/* Bucket List Items */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white/80 backdrop-blur-sm rounded-3xl p-6 sm:p-8 shadow-xl shadow-rose-100/50 border border-rose-100"
        >
          <div className="space-y-3">
            {items.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.3 + index * 0.05 }}
                onClick={() => toggleItem(item.id)}
                className={`flex items-center gap-4 p-4 rounded-xl cursor-pointer transition-all duration-300 ${
                  item.completed 
                    ? 'bg-rose-50 border-rose-200' 
                    : 'bg-gray-50 hover:bg-rose-50/50 border-transparent'
                } border`}
              >
                {/* Checkbox */}
                <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
                  item.completed 
                    ? 'bg-gradient-to-br from-rose-400 to-pink-500' 
                    : 'bg-white border-2 border-rose-200'
                }`}>
                  {item.completed && <Check className="w-5 h-5 text-white" />}
                </div>

                {/* Icon */}
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                  item.completed ? 'bg-rose-200' : 'bg-rose-100'
                }`}>
                  <item.icon className={`w-5 h-5 ${item.completed ? 'text-rose-600' : 'text-rose-400'}`} />
                </div>

                {/* Text */}
                <span className={`flex-1 text-lg ${
                  item.completed ? 'text-gray-400 line-through' : 'text-gray-700'
                }`}>
                  {item.text}
                </span>

                {/* Heart */}
                <Heart className={`w-5 h-5 transition-all duration-300 ${
                  item.completed ? 'text-rose-500 fill-rose-500' : 'text-rose-200'
                }`} />
              </motion.div>
            ))}
          </div>

          {/* Add New Item */}
          <form onSubmit={addItem} className="mt-6 pt-6 border-t border-rose-100">
            <div className="flex gap-3">
              <input
                type="text"
                value={newItem}
                onChange={(e) => setNewItem(e.target.value)}
                placeholder="Add a new dream..."
                className="flex-1 px-4 py-3 rounded-xl border border-rose-200 focus:border-rose-400 focus:outline-none focus:ring-2 focus:ring-rose-200 transition-all"
              />
              <button
                type="submit"
                className="px-6 py-3 bg-gradient-to-r from-rose-400 to-pink-500 text-white rounded-xl hover:shadow-lg hover:shadow-rose-400/30 transition-all flex items-center gap-2"
              >
                <Plus className="w-5 h-5" />
                <span className="hidden sm:inline">Add</span>
              </button>
            </div>
          </form>
        </motion.div>

        {/* Motivational Message */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center mt-8"
        >
          <p className="text-gray-500 italic">
            "The best adventures are the ones we share together."
          </p>
        </motion.div>
      </div>
    </section>
  );
}
