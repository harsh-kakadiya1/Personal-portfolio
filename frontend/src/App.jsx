import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { ProjectModalProvider } from './contexts/ProjectModalContext';
import { ResumeModalProvider } from './contexts/ResumeModalContext';
import Navbar from './components/navigation/Navbar';
import ScrollToTop from './components/ScrollToTop';
import { ThemeProvider } from './components/ui/theme-provider';
import CustomCursor from './components/ui/CustomCursor';
import { GooeyLoader } from './components/ui/loader-10';
import ResumeModal from './components/ResumeModal';
import About from './pages/About';
import Projects from './pages/Projects';
import Research from './pages/Research';
import Playground from './pages/Playground';
import Contact from './pages/Contact';

function App() {
  const [isLoading, setIsLoading] = useState(true);

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
            primaryColor="#ffffff" // white for brutalist theme
            secondaryColor="#666666" // gray
            borderColor="#1a1a1a" // dark gray
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
        <ResumeModalProvider>
          <ScrollToTop />
          <div className="min-h-screen bg-black text-white relative">
            {/* Brutalist Background - Simple Grid Pattern */}
            <div className="fixed inset-0 z-0 w-full h-full">
              <div className="absolute inset-0 bg-black"></div>
              {/* Grid pattern overlay for brutalist aesthetic */}
              <svg className="absolute inset-0 w-full h-full opacity-5" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                    <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="0.5"/>
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#grid)" />
              </svg>
            </div>

          <div className="relative z-10">
            <Navbar />
            <main className="pt-16 md:pt-20">
              <AnimatePresence mode="wait">
                <Routes>
                  <Route path="/" element={<About />} />
                  <Route path="/projects" element={<Projects />} />
                  <Route path="/research" element={<Research />} />
                  <Route path="/playground" element={<Playground />} />
                  <Route path="/contact" element={<Contact />} />
                </Routes>
              </AnimatePresence>
            </main>
            <CustomCursor />
            <ResumeModal />
          </div>
          </div>
        </ResumeModalProvider>
        </ProjectModalProvider>
      </Router>
    </ThemeProvider>
  );
}

export default App;