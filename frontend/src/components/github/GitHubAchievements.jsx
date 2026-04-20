import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function GitHubAchievements({ username = 'harsh-kakadiya1' }) {
  const [highlights, setHighlights] = useState([]);
  const [loading, setLoading] = useState(true);

  // GitHub Highlights data
  // Note: GitHub doesn't have a public API for highlights
  // Update this array with your actual GitHub highlights
  // You can find your highlights on your GitHub profile page
  useEffect(() => {
    // TODO: Replace with your actual GitHub highlights
    // Check your GitHub profile for highlights like Developer Program, Pro, etc.
    const mockHighlights = [
      {
        id: 'developer-program',
        name: 'Developer Program Member',
        badge: null,
        description: 'Active member of GitHub Developer Program'
      },
      {
        id: 'pro',
        name: 'GitHub Pro',
        badge: {
          text: 'PRO',
          color: 'from-gray-700 to-gray-600',
          textColor: 'text-white'
        },
        description: 'GitHub Pro subscriber'
      }
    ];

    // Simulate API delay
    setTimeout(() => {
      setHighlights(mockHighlights);
      setLoading(false);
    }, 500);
  }, [username]);

  if (loading) {
    return (
      <div className="bg-black/30 backdrop-blur-sm border border-white/50 rounded-2xl p-6 mb-8">
        <div className="animate-pulse space-y-4">
          <div className="h-6 bg-white/10 rounded w-1/4"></div>
          <div className="space-y-3">
            <div className="h-16 bg-white/10 rounded-xl"></div>
            <div className="h-16 bg-white/10 rounded-xl"></div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="bg-black/30 backdrop-blur-sm border border-white/50 rounded-2xl p-6 mb-8"
    >
      <h3 className="text-2xl font-bold text-white mb-6">
        <span className="text-gray-300">Highlights</span>
      </h3>
      
      <div className="space-y-4">
        {highlights.map((highlight, index) => (
          <motion.div
            key={highlight.id}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            whileHover={{ x: 5 }}
            className="flex items-center gap-4 p-4 bg-black/20 rounded-xl border border-white/10 hover:border-gray-500/30 transition-all duration-300 group"
          >
            {/* Icon placeholder - using a simple geometric shape instead of emoji */}
            <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-gray-700/20 to-gray-600/20 rounded-lg flex items-center justify-center border border-gray-600/30 group-hover:border-gray-500/50 transition-all">
              <svg className="w-6 h-6 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            
            {/* Content */}
            <div className="flex-1 flex items-center justify-between">
              <div>
                <h4 className="text-white font-semibold group-hover:text-gray-300 transition-colors">
                  {highlight.name}
                </h4>
                <p className="text-sm text-gray-400">{highlight.description}</p>
              </div>
              
              {/* Badge */}
              {highlight.badge && (
                <div className={`
                  px-3 py-1 rounded-md
                  bg-gradient-to-r ${highlight.badge.color}
                  ${highlight.badge.textColor}
                  font-bold text-sm
                  shadow-lg
                  group-hover:scale-110
                  transition-transform duration-300
                `}>
                  {highlight.badge.text}
                </div>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

