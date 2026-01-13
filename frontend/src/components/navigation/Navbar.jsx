import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { FileText } from 'lucide-react';
import { useMobile } from '../../hooks/useMobile';

export default function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();
  const { isMobile } = useMobile();

  const navItems = [
    { id: 'about', label: 'Harsh', icon: '◉', path: '/' },
    { id: 'work', label: 'Work', icon: '◉', path: '/work' },
    { id: 'projects', label: 'Projects', icon: '▲', path: '/projects' },
    { id: 'playground', label: 'Playground', icon: '◈', path: '/playground' },
    { id: 'contact', label: 'Contact', icon: '✉', path: '/contact' }
  ];

  // Filter out 'work' on mobile
  const filteredNavItems = isMobile ? navItems.filter(item => item.id !== 'work') : navItems;

  const getCurrentPage = () => {
    const currentPath = location.pathname;
    const currentItem = filteredNavItems.find(item => item.path === currentPath);
    return currentItem ? currentItem.id : 'about';
  };

  const handleNavigation = (path) => {
    navigate(path);
  };


  const currentPage = getCurrentPage();

  return (
    <nav className={`fixed ${isMobile ? 'top-2' : 'top-6'} left-1/2 transform -translate-x-1/2 z-50`}>
      <div className={`bg-black/30 backdrop-blur-sm border border-white/50 ${isMobile ? 'rounded-xl px-2 py-1' : 'rounded-2xl px-3 py-2'} shadow-2xl`}>
        <div className={`flex items-center ${isMobile ? 'gap-1' : 'gap-3'}`}>
          {filteredNavItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavigation(item.path)}
              className={`relative ${isMobile ? 'px-2 py-2' : 'px-4 py-2'} rounded-xl font-medium ${isMobile ? 'text-xs' : 'text-sm'} transition-colors duration-300 ${
                currentPage === item.id
                  ? 'text-cyan-400 bg-cyan-500/20'
                  : 'text-gray-300 hover:text-white hover:bg-white/10'
              } ${isMobile ? 'min-w-[44px] min-h-[44px]' : ''}`}
            >
              {/* Active indicator */}
              {currentPage === item.id && (
                <div
                  className="absolute inset-0 bg-cyan-500/10 rounded-xl border border-cyan-400/50"
                />
              )}
              
              {/* Content */}
              <div className={`relative flex items-center ${isMobile ? 'justify-center' : 'gap-2'}`}>
                <span className={isMobile ? 'text-sm' : 'text-base'}>{item.icon}</span>
                <span className={`${isMobile ? 'hidden' : 'hidden sm:inline'}`}>{item.label}</span>
              </div>

              {/* Hover glow effect */}
              <div
                className="absolute inset-0 rounded-xl opacity-0 hover:opacity-100 transition-opacity duration-300"
                style={{
                  boxShadow: currentPage === item.id 
                    ? "0 0 20px rgba(0, 212, 170, 0.4)" 
                    : "0 0 15px rgba(255, 255, 255, 0.2)"
                }}
              />
            </button>
          ))}
          
          {/* Resume Button */}
          <a
            href="/resume.pdf"
            download="Harsh_Kakadiya_Resume.pdf"
            className={`relative ${isMobile ? 'px-2 py-2' : 'px-4 py-2'} rounded-xl font-medium ${isMobile ? 'text-xs' : 'text-sm'} transition-colors duration-300 text-gray-300 hover:text-cyan-400 hover:bg-cyan-500/20 ${isMobile ? 'min-w-[44px] min-h-[44px]' : ''} flex items-center justify-center`}
          >
            <div className={`relative flex items-center justify-center ${isMobile ? '' : 'gap-2'}`}>
              <FileText className={isMobile ? 'w-[14px] h-[14px]' : 'w-4 h-4'} />
              <span className={`${isMobile ? 'hidden' : 'hidden sm:inline'}`}>Resume</span>
            </div>
            
            {/* Hover glow effect */}
            <div
              className="absolute inset-0 rounded-xl opacity-0 hover:opacity-100 transition-opacity duration-300"
              style={{
                boxShadow: "0 0 15px rgba(0, 212, 170, 0.3)"
              }}
            />
          </a>
        </div>
      </div>
    </nav>
  );
}
