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
    <nav className={`fixed ${isMobile ? 'top-3' : 'top-8'} left-1/2 transform -translate-x-1/2 z-50 transition-opacity duration-200 ${isProjectModalOpen ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
      <div className={`bg-white border-4 border-black ${isMobile ? 'px-1 py-1' : 'px-2 py-2'}`}>
        <div className={`flex items-center ${isMobile ? 'gap-0.5' : 'gap-1'}`}>
          {filteredNavItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavigation(item.path)}
              className={`relative ${isMobile ? 'px-2 py-2' : 'px-3 py-2'} font-black ${isMobile ? 'text-xs' : 'text-xs'} transition-all duration-200 uppercase tracking-widest ${
                currentPage === item.id
                  ? 'text-white bg-black border-2 border-black'
                  : 'text-black bg-white border-2 border-black hover:bg-black hover:text-white'
              }`}
            >
              <div className={`relative flex items-center ${isMobile ? 'justify-center' : 'gap-1'}`}>
                <span className={isMobile ? 'text-xs' : 'text-sm'}>{item.icon}</span>
                <span className={`${isMobile ? 'hidden' : 'hidden sm:inline text-xs'}`}>{item.label}</span>
              </div>
            </button>
          ))}
          
          {/* Resume Button */}
          <button
            onClick={() => setIsResumeModalOpen(true)}
            className={`relative ${isMobile ? 'px-2 py-2' : 'px-3 py-2'} font-black text-xs transition-all duration-200 uppercase tracking-widest text-black bg-yellow-300 border-2 border-black hover:bg-yellow-400`}
          >
            <div className={`relative flex items-center justify-center ${isMobile ? '' : 'gap-1'}`}>
              <FileText className={isMobile ? 'w-3 h-3' : 'w-4 h-4'} />
              <span className={`${isMobile ? 'hidden' : 'hidden sm:inline text-xs'}`}>CV</span>
            </div>
          </button>
        </div>
      </div>
    </nav>
  );
}
