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
      <div className="border-4 border-black p-6 mb-8 bg-white">
        <div className="animate-pulse space-y-4">
          <div className="h-6 bg-black/10 w-1/4"></div>
          <div className="space-y-2">
            <div className="h-16 bg-black/10"></div>
            <div className="h-16 bg-black/10"></div>
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
      className="border-4 border-black p-6 mb-8 bg-accent-yellow"
    >
      <h3 className="text-xl font-black text-black mb-6 uppercase tracking-tight">
        HIGHLIGHTS
      </h3>
      
      <div className="space-y-3">
        {highlights.map((highlight, index) => (
          <motion.div
            key={highlight.id}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className="flex items-center gap-3 p-4 bg-white border-3 border-black hover:bg-accent-red hover:text-white transition-all duration-300"
          >
            {/* Icon */}
            <div className="flex-shrink-0 w-10 h-10 bg-black border-2 border-black flex items-center justify-center">
              <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            </div>
            
            {/* Content */}
            <div className="flex-1 flex items-center justify-between">
              <div>
                <h4 className="text-black font-black text-sm uppercase tracking-tight">
                  {highlight.name}
                </h4>
                <p className="text-xs text-black/70">{highlight.description}</p>
              </div>
              
              {/* Badge */}
              {highlight.badge && (
                <div className="px-3 py-1 bg-black text-white border-2 border-black font-black text-xs uppercase tracking-wider">
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

