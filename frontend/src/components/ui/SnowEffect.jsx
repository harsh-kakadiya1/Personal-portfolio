import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useMobile } from '../../hooks/useMobile';

export default function SnowEffect({ isActive }) {
  const [snowflakes, setSnowflakes] = useState([]);
  const [windowHeight, setWindowHeight] = useState(window.innerHeight);
  const { isMobile } = useMobile();

  useEffect(() => {
    const handleResize = () => {
      setWindowHeight(window.innerHeight);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (!isActive || isMobile) {
      setSnowflakes([]);
      return;
    }

    // Create snowflakes with different sizes
    const createSnowflake = (id) => {
      const size = Math.random() < 0.33 ? 'small' : Math.random() < 0.66 ? 'medium' : 'large';
      const sizeMap = {
        small: { width: '4px', height: '4px', opacity: 0.6 },
        medium: { width: '8px', height: '8px', opacity: 0.8 },
        large: { width: '12px', height: '12px', opacity: 1 }
      };

      return {
        id,
        left: Math.random() * 100,
        delay: Math.random() * 5,
        duration: 10 + Math.random() * 20, // 10-30 seconds
        size: sizeMap[size],
        drift: (Math.random() - 0.5) * 50 // Horizontal drift
      };
    };

    // Generate 50 snowflakes
    const flakes = Array.from({ length: 50 }, (_, i) => createSnowflake(i));
    setSnowflakes(flakes);
  }, [isActive]);

  if (!isActive || isMobile || snowflakes.length === 0) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-[5] overflow-hidden">
      {snowflakes.map((flake) => (
        <motion.div
          key={flake.id}
          className="absolute rounded-full bg-white"
          style={{
            left: `${flake.left}%`,
            width: flake.size.width,
            height: flake.size.height,
            opacity: flake.size.opacity,
            boxShadow: '0 0 2px rgba(255, 255, 255, 0.5)'
          }}
          initial={{
            y: -20,
            x: 0
          }}
          animate={{
            y: windowHeight + 20,
            x: flake.drift
          }}
          transition={{
            duration: flake.duration,
            delay: flake.delay,
            repeat: Infinity,
            ease: 'linear'
          }}
        />
      ))}
    </div>
  );
}

