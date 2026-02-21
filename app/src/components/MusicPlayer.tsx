import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Music, Play, Pause, Volume2, VolumeX, Heart } from 'lucide-react';

// This is a visual music player component
// You can add your own audio file by placing it in the public folder and updating the audioSrc

export default function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // Note: Add your own audio file to the public folder and update this path
  const audioSrc = '/your-song.mp3'; // Replace with your actual song

  useEffect(() => {
    // Check if audio file exists
    fetch(audioSrc)
      .then(response => {
        if (!response.ok) {
          // Audio file doesn't exist, don't initialize player
          return;
        }
        audioRef.current = new Audio(audioSrc);
        audioRef.current.addEventListener('timeupdate', handleTimeUpdate);
        audioRef.current.addEventListener('loadedmetadata', handleLoadedMetadata);
        audioRef.current.addEventListener('ended', handleEnded);
      })
      .catch(() => {
        // Audio file doesn't exist
      });

    return () => {
      if (audioRef.current) {
        audioRef.current.removeEventListener('timeupdate', handleTimeUpdate);
        audioRef.current.removeEventListener('loadedmetadata', handleLoadedMetadata);
        audioRef.current.removeEventListener('ended', handleEnded);
        audioRef.current.pause();
      }
    };
  }, []);

  const handleTimeUpdate = () => {
    if (audioRef.current) {
      setCurrentTime(audioRef.current.currentTime);
    }
  };

  const handleLoadedMetadata = () => {
    if (audioRef.current) {
      setDuration(audioRef.current.duration);
    }
  };

  const handleEnded = () => {
    setIsPlaying(false);
    setCurrentTime(0);
  };

  const togglePlay = () => {
    if (!audioRef.current) return;
    
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play().catch(() => {
        // Autoplay blocked or no audio
      });
    }
    setIsPlaying(!isPlaying);
  };

  const toggleMute = () => {
    if (!audioRef.current) return;
    
    audioRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  // If no audio file, show a placeholder message
  const [hasAudio, setHasAudio] = useState(true);
  
  useEffect(() => {
    fetch(audioSrc).catch(() => setHasAudio(false));
  }, []);

  if (!hasAudio) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="fixed bottom-6 left-6 z-40"
      >
        <div 
          onClick={() => setIsExpanded(!isExpanded)}
          className="bg-white/90 backdrop-blur-md rounded-full px-4 py-3 shadow-lg shadow-rose-200/50 border border-rose-100 cursor-pointer flex items-center gap-3"
        >
          <div className="w-10 h-10 bg-gradient-to-br from-rose-400 to-pink-500 rounded-full flex items-center justify-center">
            <Music className="w-5 h-5 text-white" />
          </div>
          <AnimatePresence>
            {isExpanded && (
              <motion.div
                initial={{ width: 0, opacity: 0 }}
                animate={{ width: 'auto', opacity: 1 }}
                exit={{ width: 0, opacity: 0 }}
                className="overflow-hidden"
              >
                <p className="text-sm text-gray-600 whitespace-nowrap">
                  Add your song to /public/your-song.mp3
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="fixed bottom-6 left-6 z-40"
    >
      <div className="bg-white/90 backdrop-blur-md rounded-2xl shadow-lg shadow-rose-200/50 border border-rose-100 overflow-hidden">
        {/* Mini Player */}
        <div 
          onClick={() => setIsExpanded(!isExpanded)}
          className="flex items-center gap-3 p-3 cursor-pointer hover:bg-rose-50/50 transition-colors"
        >
          <div className="w-12 h-12 bg-gradient-to-br from-rose-400 to-pink-500 rounded-xl flex items-center justify-center relative overflow-hidden">
            <Music className="w-6 h-6 text-white" />
            {isPlaying && (
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
                className="absolute inset-0 bg-white/20"
              />
            )}
          </div>
          
          <div className="flex-1 min-w-0">
            <p className="font-semibold text-gray-800 text-sm truncate">Our Song</p>
            <p className="text-xs text-gray-500">
              {isPlaying ? 'Now Playing' : 'Click to play'}
            </p>
          </div>

          <button
            onClick={(e) => { e.stopPropagation(); togglePlay(); }}
            className="w-10 h-10 bg-rose-100 hover:bg-rose-200 rounded-full flex items-center justify-center transition-colors"
          >
            {isPlaying ? (
              <Pause className="w-5 h-5 text-rose-600" />
            ) : (
              <Play className="w-5 h-5 text-rose-600 ml-0.5" />
            )}
          </button>
        </div>

        {/* Expanded Player */}
        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="overflow-hidden"
            >
              <div className="px-4 pb-4 border-t border-rose-100">
                {/* Progress Bar */}
                <div className="mt-4">
                  <div className="h-1 bg-rose-100 rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-gradient-to-r from-rose-400 to-pink-500"
                      style={{ width: `${(currentTime / duration) * 100}%` }}
                    />
                  </div>
                  <div className="flex justify-between mt-1 text-xs text-gray-500">
                    <span>{formatTime(currentTime)}</span>
                    <span>{formatTime(duration)}</span>
                  </div>
                </div>

                {/* Controls */}
                <div className="flex items-center justify-center gap-4 mt-4">
                  <button
                    onClick={toggleMute}
                    className="w-10 h-10 hover:bg-rose-100 rounded-full flex items-center justify-center transition-colors"
                  >
                    {isMuted ? (
                      <VolumeX className="w-5 h-5 text-gray-600" />
                    ) : (
                      <Volume2 className="w-5 h-5 text-gray-600" />
                    )}
                  </button>

                  <button
                    onClick={togglePlay}
                    className="w-14 h-14 bg-gradient-to-br from-rose-400 to-pink-500 rounded-full flex items-center justify-center shadow-lg shadow-rose-400/30 hover:shadow-xl hover:shadow-rose-400/40 transition-shadow"
                  >
                    {isPlaying ? (
                      <Pause className="w-7 h-7 text-white" />
                    ) : (
                      <Play className="w-7 h-7 text-white ml-1" />
                    )}
                  </button>

                  <div className="w-10 h-10 flex items-center justify-center">
                    <Heart className="w-5 h-5 text-rose-400 fill-rose-400" />
                  </div>
                </div>

                {/* Message */}
                <p className="text-center text-sm text-gray-500 mt-4 italic">
                  "Every love song reminds me of you"
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}
