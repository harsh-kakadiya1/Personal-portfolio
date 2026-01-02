import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Snowflake } from 'lucide-react';
import { useMobile } from '../../hooks/useMobile';

export default function SnowToggle({ onToggle }) {
  const [isSnowing, setIsSnowing] = useState(false);
  const { isMobile } = useMobile();

  const handleToggle = () => {
    const newState = !isSnowing;
    setIsSnowing(newState);
    onToggle(newState);
  };

  // Don't show button on mobile
  if (isMobile) return null;

  return (
    <motion.button
      onClick={handleToggle}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`fixed bottom-8 left-8 z-50 
                 bg-black/30 backdrop-blur-sm 
                 border ${isSnowing ? 'border-cyan-400/70' : 'border-white/50'}
                 ${isSnowing ? 'text-cyan-400' : 'text-white'}
                 px-4 py-2 
                 rounded-full 
                 flex items-center gap-2
                 hover:bg-black/40 
                 hover:border-cyan-400/70
                 transition-all duration-300
                 shadow-lg
                 ${isSnowing ? 'shadow-cyan-500/20' : 'shadow-white/10'}`}
      aria-label="Toggle snow effect"
    >
      <Snowflake 
        className={`w-4 h-4 transition-transform duration-300 ${isSnowing ? 'animate-spin' : ''}`}
      />
      <span className="text-sm font-medium">Let it snow</span>
    </motion.button>
  );
}

