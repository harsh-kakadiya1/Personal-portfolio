import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { FileText } from 'lucide-react';
import { useMobile } from '../../hooks/useMobile';
import { useProjectModal } from '../../contexts/ProjectModalContext';
import { useResumeModal } from '../../contexts/ResumeModalContext';

export default function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();
  const { isMobile } = useMobile();
  const { isProjectModalOpen } = useProjectModal();
  const { setIsResumeModalOpen } = useResumeModal();

  const navItems = [
    { id: 'about', label: 'Harsh', icon: '◉', path: '/' },
    { id: 'projects', label: 'Projects', icon: '▲', path: '/projects' },
    { id: 'research', label: 'Research', icon: '▣', path: '/research' },
    { id: 'playground', label: 'Playground', icon: '◈', path: '/playground' },
    { id: 'contact', label: 'Contact', icon: '✉', path: '/contact' }
  ];

  const filteredNavItems = navItems;

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
    <nav className={`fixed ${isMobile ? 'top-2' : 'top-6'} left-1/2 transform -translate-x-1/2 z-50 transition-opacity duration-200 ${isProjectModalOpen ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
      <div className={`bg-black/30 backdrop-blur-sm border-2 border-white/50 ${isMobile ? 'px-2 py-1' : 'px-3 py-2'} shadow-2xl`}>
        <div className={`flex items-center ${isMobile ? 'gap-1' : 'gap-3'}`}>
          {filteredNavItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavigation(item.path)}
              className={`relative ${isMobile ? 'px-2 py-2' : 'px-4 py-2'} font-black ${isMobile ? 'text-xs' : 'text-sm'} transition-colors duration-300 uppercase tracking-wider ${
                currentPage === item.id
                  ? 'text-white bg-gray-800/40 border border-white/30'
                  : 'text-gray-400 hover:text-white hover:bg-gray-900/40'
              } ${isMobile ? 'min-w-[44px] min-h-[44px]' : ''}`}
            >
              {/* Active indicator */}
              {currentPage === item.id && (
                <div
                  className="absolute inset-0 bg-gray-700/20 border border-gray-600/50"
                />
              )}
              
              {/* Content */}
              <div className={`relative flex items-center ${isMobile ? 'justify-center' : 'gap-2'}`}>
                <span className={isMobile ? 'text-sm' : 'text-base'}>{item.icon}</span>
                <span className={`${isMobile ? 'hidden' : 'hidden sm:inline'}`}>{item.label}</span>
              </div>

              {/* Hover glow effect */}
              <div
                className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-300"
                style={{
                  boxShadow: currentPage === item.id 
                    ? "0 0 20px rgba(255, 255, 255, 0.2)" 
                    : "0 0 15px rgba(255, 255, 255, 0.1)"
                }}
              />
            </button>
          ))}
          
          {/* Resume Button */}
          <button
            onClick={() => setIsResumeModalOpen(true)}
            className={`relative ${isMobile ? 'px-2 py-2' : 'px-4 py-2'} font-black ${isMobile ? 'text-xs' : 'text-sm'} transition-colors duration-300 uppercase tracking-wider text-gray-400 hover:text-white hover:bg-gray-800/40 ${isMobile ? 'min-w-[44px] min-h-[44px]' : ''} flex items-center justify-center`}
          >
            <div className={`relative flex items-center justify-center ${isMobile ? '' : 'gap-2'}`}>
              <FileText className={isMobile ? 'w-[14px] h-[14px]' : 'w-4 h-4'} />
              <span className={`${isMobile ? 'hidden' : 'hidden sm:inline'}`}>Resume</span>
            </div>
            
            {/* Hover glow effect */}
            <div
              className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-300"
              style={{
                boxShadow: "0 0 15px rgba(255, 255, 255, 0.15)"
              }}
            />
          </button>
        </div>
      </div>
    </nav>
  );
}
