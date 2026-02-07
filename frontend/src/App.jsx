import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { ProjectModalProvider } from './contexts/ProjectModalContext';
import Navbar from './components/navigation/Navbar';
import ScrollToTop from './components/ScrollToTop';
import { Component as AnimatedBackground } from './components/ui/raycast-animated-blue-background';
import { ThemeProvider } from './components/ui/theme-provider';
import CustomCursor from './components/ui/CustomCursor';
import { GooeyLoader } from './components/ui/loader-10';
import SnowEffect from './components/ui/SnowEffect';
import SnowToggle from './components/ui/SnowToggle';
import About from './pages/About';
import Projects from './pages/Projects';
import Playground from './pages/Playground';
import Contact from './pages/Contact';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [isSnowing, setIsSnowing] = useState(false);

  useEffect(() => {
    // Show loader for 4 seconds
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <ThemeProvider
        attribute="class"
        defaultTheme="dark"
        enableSystem
        disableTransitionOnChange
      >
        <div className="min-h-screen bg-black text-white flex items-center justify-center">
          <GooeyLoader
            primaryColor="#06b6d4" // cyan-400
            secondaryColor="#FFFFFF" // cyan-500
            borderColor="#1e293b" // slate-800
          />
        </div>
      </ThemeProvider>
    );
  }

  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="dark"
      enableSystem
      disableTransitionOnChange
    >
      <Router>
        <ProjectModalProvider>
          <ScrollToTop />
          <div className="min-h-screen bg-black text-white relative">
            {/* Global Animated Background - Covers All Pages */}
            <div className="fixed inset-0 z-0 w-full h-full">
              <AnimatedBackground />
              {/* Subtle overlay for better content readability */}
              <div className="absolute inset-0 bg-black/20"></div>
            </div>
            
            {/* Snow Effect - Behind all content */}
            <SnowEffect isActive={isSnowing} />
            
          <div className="relative z-10">
            <Navbar />
            <main className="pt-16 md:pt-20">
              <AnimatePresence mode="wait">
                <Routes>
                  <Route path="/" element={<About />} />
                  <Route path="/projects" element={<Projects />} />
                  <Route path="/playground" element={<Playground />} />
                  <Route path="/contact" element={<Contact />} />
                </Routes>
              </AnimatePresence>
            </main>
            <CustomCursor />
            <SnowToggle onToggle={setIsSnowing} />
          </div>
          </div>
        </ProjectModalProvider>
      </Router>
    </ThemeProvider>
  );
}

export default App;