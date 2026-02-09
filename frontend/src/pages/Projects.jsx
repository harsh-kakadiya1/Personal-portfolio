import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/navigation/Navbar';
import { useMobile } from '../hooks/useMobile';
import { useProjectModal } from '../contexts/ProjectModalContext';
import BackToTop from '../components/ui/BackToTop';
import { X } from 'lucide-react';

export default function Projects() {
  const [mousePosition, setMousePosition] = useState({ x: 50, y: 50 });
  const [selectedProject, setSelectedProject] = useState(null);
  const { isMobile, isTablet } = useMobile();
  const { setIsProjectModalOpen } = useProjectModal();
  const navigate = useNavigate();

  const openModal = (project) => {
    setSelectedProject(project);
    setIsProjectModalOpen(true);
  };
  const closeModal = () => {
    setSelectedProject(null);
    setIsProjectModalOpen(false);
  };

  // Mouse tracking for parallax effect (disabled on mobile for performance)
  useEffect(() => {
    if (isMobile) return;
    
    const handleMouseMove = (e) => {
      const x = (e.clientX / window.innerWidth) * 7;
      const y = (e.clientY / window.innerHeight) * 7;
      setMousePosition({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [isMobile]);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [selectedProject]);

  const projects = [
    {
      id: 12,
      title: "Thoondil — AI Chatbot for Fish Sellers & Consumers",
      description: "Multi-language AI-powered chatbot for the Thoondil app, assisting fish consumers and retailers. Designed and developed as AI Developer at Thoondil Fish Services.",
      tech: ["AI", "Chatbot", "Python"],
      image: "/images/projects/thoondil.png",
      github: "#",
      live: "https://drive.google.com/drive/folders/1HoQNg2ymLnAKkZA5Z6tl2ueHGnKZ5F7k?usp=sharing",
      liveLabel: "View my work",
      status: "completed",
      badge: "Professional",
      moreAbout: "Role: AI Developer\nCompany: Thoondil Fish Services, Moongilthuraipattu, Tamil Nadu, India (Remote)\nDuration: Sep 2025 – Dec 2025 (4 months)\n\nDesign and development of a multi-language AI-powered chatbot to assist fish consumers and retailers within the Thoondil app. Real product currently in development; my contribution covers the full design and build of the chatbot experience.\n\nBackend developed in Node.js and connected to the Flutter app."
    },
    {
      id: 3,
      title: "DataMimic.io",
      description: "DataMimic.io is a comprehensive data platform combining synthetic data generation with advanced EDA and preprocessing tools for developers, researchers, and data scientists.",
      tech: ["Python", "Flask", "Pandas", "NumPy", "Scikit-learn", "Faker", "Bootstrap 5", "JavaScript"],
      image: "/images/projects/datamimic-preview.png",
      github: "https://github.com/harsh-kakadiya1/DataMimic.io",
      live: "https://datamimic-io.onrender.com/",
      status: "completed",
      moreAbout: "DataMimic.io is the ultimate data science platform that revolutionizes how you work with data. We've created a seamless ecosystem where synthetic data generation meets advanced exploratory data analysis (EDA) and intelligent preprocessing – all in one powerful, intuitive interface.\n\nBuilt for the modern data professional, DataMimic.io eliminates the complexity of juggling multiple tools and platforms. Whether you're prototyping machine learning models, conducting research, or building production applications, our platform accelerates your workflow from data creation to insights."
    },
    {
      id: 11,
      title: "MetaFlow: Metadata-Driven AI Agent for ML Pipeline Designing",
      description: "Build an AI agent that reads dataset metadata to architect, write, and execute a complete ML pipeline.",
      tech: ["Python", "Pandas", "NumPy", "LangChain", "Pydantic", "Flask"],
      image: "/images/projects/metaflow.png",
      github: "#",
      live: "#",
      status: "in-progress",
      moreAbout: "• Automate the transition from a raw CSV to a runnable .ipynb notebook.\n• Reason through metadata (not raw rows) to ensure data privacy and statistical accuracy.\n• Provide a \"Self-Correcting\" feedback loop where the agent audits its own code before delivery."
    },
    {
      id: 6,
      title: "nyayasetu.AI ",
      description: "NyayaSetu AI is designed to demystify legal documents. It provides multi-language insights, students, and small business owners to interpret and act on their legal documents confidently—without needing a lawyer for the initial review.",
      tech: ["React 19","TypeScript","Vite 6","Gemini 2.5 Flash"],
      image: "/images/projects/nyayasetu.ai-preview.png",
      github: "https://github.com/harsh-kakadiya1/nyayasetu.AI",
      live: "https://nyayasetu-ai.vercel.app/",
      status: "completed",
      moreAbout: "Instant summaries — Get plain-language summaries of complex legal documents in seconds. No more struggling with legal jargon.\n\nAI-powered risk analysis — Identify potential risks, unusual terms, and key clauses automatically using advanced AI algorithms.\n\nClause breakdown — See original and simplified versions of important contract clauses with detailed explanations.\n\nAccessible for everyone — Designed for both legal professionals and everyday users with an intuitive, user-friendly interface."
    },
    {
      id: 10,
      title: "The JARVIS - Personal AI Agent for the Laptop",
      description: "A personal AI agent for your laptop that performs routine tasks, helps with productivity, and provides day-to-day assistance.",
      tech: ["Python", "AI", "Automation"],
      image: "/images/projects/jarvis.png",
      github: "#",
      live: "https://www.linkedin.com/posts/harsh-kakadiya_aiagent-personalai-jarvis-activity-7362175889553485824-gPAD?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEU9MpABA9XLjqwwCkwuFC5otNvJzf2xdo4",
      status: "completed",
      moreAbout: "JARVIS is like an IoT-enabled Alexa for your laptop—it does what you say, right on your machine.\n\n• Routine & productivity: Handles day-to-day tasks, writes emails and applications on command.\n• Media control: Generate images and see them instantly; play any YouTube video by saying \"play this\"; navigate next/previous while browsing photos in the gallery.\n• System control: Open any file or play any video stored on your laptop with voice.\n• Real-time answers: Get live weather, stock prices, or any real-time question answered on the spot.\n• Memory: Remembers the conversation so you can have a continuous, context-aware assistant experience."
    },
    {
      id: 2,
      title: "StyleMe - Fashion Stylist",
      description: "StyleMe is a Flutter-based mobile application designed to be your personal fashion assistant, Organize and manage your clothing items in one place.",
      tech: ["Flutter", "Dart"],
      image: "/images/projects/styleme-preview.png",
      github: "https://github.com/harsh-kakadiya1/StyleMe--Your-Personal-AI-Fashion-Stylist",
      live: "https://drive.google.com/file/d/1cEGu5loU0iYGm8pfTZFS5jb9EX4E9Pbe/view?usp=drivesdk",
      status: "completed",
      moreAbout: "Release history\n• v0.1.0 — Simple basic app with core styling features.\n• v0.1.1 — Calendar/scheduler for planning and saving outfits.\n• v0.1.2 — Enhanced profile with tags and favorites.\n\nFeatures\n• Wardrobe management — Organize and manage your clothing items in one place.\n• Outfit pairing — Create and save perfect outfit combinations.\n• Calendar scheduling — Plan your outfits in advance for any day or event.\n• Profile & preferences — Customize your style profile and preferences.\n• Favorites & tags — Mark favorite outfits and organize them with tags."
    },
    {
      id: 1,
      title: "personal portfolio",
      description: "my personal portfolio website with interactive portfolio with modern UI and smooth animation styles, responsive design, project showcase and resume, contact me section and more features.",
      tech: ["React", "Framer Motion", "Node.js"],
      image: "/images/projects/portfolio-preview.png",
      github: "https://github.com/harsh-kakadiya1/portfolio", 
      live: "https://harsh-kakadiya.vercel.app/",
      status: "completed",
      moreAbout: ""
    },
    {
      id: 5,
      title: "INFINITE-WIKI",
      description: "An AI-powered encyclopedia application that generates encyclopedia-style definitions and ASCII art visualizations for any topic using Google's Gemini 2.5 Flash API.",
      tech: ["React 19","TypeScript","Vite 6","Gemini 2.5 Flash"],
      image: "/images/projects/infinite-wiki-preview.png",
      github: "https://github.com/harsh-kakadiya1/INFINITE-WIKI",
      live: "https://infinite-wikipedia.netlify.app/",
      status: "completed",
      moreAbout: ""
    },
    {
      id: 4,
      title: "Arthiik invoice management",
      description: "Arthiik is a web-based invoice generator application built with Next.js, TypeScript, React. It provides an easy way to create and manage professional invoices.",
      tech: ["Next.js","TypeScript","React","Shadcn UI","TailwindCSS"],
      image: "/images/projects/arthiik-preview.png",
      github: "https://github.com/harsh-kakadiya1/Arthik-invoice-management",
      live: "#",
      status: "in-progress",
      moreAbout: ""
    },
      {
        id: 7,
        title: "Hand Gesture Filter",
        description: "This Python application uses your webcam and hand gestures to apply real-time image filters to a selected region of the video feed.",
        tech: ["Python","OpenCV","MediaPipe","NumPy"],
        image: "/images/projects/hand-gesture-filter-preview.png",
        github: "https://github.com/harsh-kakadiya1/computer-vision/tree/main/Vision-Gestures",
        live: "https://www.linkedin.com/posts/harsh-kakadiya_python-computervision-handtracking-activity-7367994305652744192-lGPR?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEU9MpABA9XLjqwwCkwuFC5otNvJzf2xdo4",
        status: "completed",
        moreAbout: ""
      },
      {
        id: 9,
        title: "Machine Learning Projects",
        description: "Vast collection of ML projects for data analysis and model evaluation and comparison for different datasets. it is made for learning and understanding the machine learning models",
        tech: ["Python","NumPy","Pandas","Matplotlib","Scikit-learn"],
        image: "/images/projects/ml-project-preview.png",
        github: "https://github.com/harsh-kakadiya1/Machine-Learning-projects",
        live: "#",
        status: "in-progress",
        moreAbout: ""
      },
      {
        id: 8,
        title: "Face Recognition Studio",
        description: "Face Recognition Studio is a modern, responsive web UI for an AI-powered face matching and recognition system.",
        tech: ["HTML5","CSS3","Vanilla JavaScript"],
        image: "/images/projects/face-recognition-studio-preview.png",
        github: "https://github.com/harsh-kakadiya1/FaceReco-Studio",
        live: "https://facerec-studio.netlify.app/home",
        status: "completed",
        moreAbout: ""
      },
  ];

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Navigation Bar */}
      <Navbar />
      
      {/* Main Content */}
      <div className={`relative z-10 container mx-auto ${isMobile ? 'px-3 py-16 pt-20' : 'px-4 py-24 pt-32'}`}>
        
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className={`text-center ${isMobile ? 'mb-12' : 'mb-20'}`}
        >
          <h1 className={`${isMobile ? 'text-4xl' : 'text-6xl md:text-8xl'} font-bold text-white ${isMobile ? 'mb-4' : 'mb-6'}`}>
            My <span className="text-cyan-400">Projects</span>
          </h1>
          <p className={`${isMobile ? 'text-lg' : 'text-2xl'} text-gray-300 ${isMobile ? 'max-w-sm' : 'max-w-3xl'} mx-auto leading-relaxed ${isMobile ? 'px-2' : ''}`}>
            A showcase of my technical journey and creative solutions
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className={`grid ${isMobile ? 'grid-cols-1 gap-6' : 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'} ${isMobile ? 'max-w-sm mx-auto' : ''}`}>
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              onClick={() => openModal(project)}
              className={`bg-black/30 backdrop-blur-sm border border-white/20 ${isMobile ? 'rounded-xl p-4' : 'rounded-2xl p-6'} hover:border-cyan-400/50 transition-all duration-300 group cursor-pointer`}
            >
              {/* Project Image */}
              <div className={`${isMobile ? 'h-40 mb-4' : 'h-48 mb-6'} bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-lg overflow-hidden relative`}>
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
                {/* Professional / Internship badge */}
                {project.badge && (
                  <div className={`absolute ${isMobile ? 'top-2 left-2' : 'top-3 left-3'}`}>
                    <span className="bg-blue-500/20 text-blue-400 border-blue-500/30 px-2 py-1 rounded-full text-xs font-medium border backdrop-blur-sm">
                      {project.badge}
                    </span>
                  </div>
                )}
                {/* Status Badge */}
                <div className={`absolute ${isMobile ? 'top-2 right-2' : 'top-3 right-3'}`}>
                  <span className={`${
                    project.status === 'completed' 
                      ? 'bg-green-500/20 text-green-400 border-green-500/30' 
                      : 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30'
                  } px-2 py-1 rounded-full text-xs font-medium border backdrop-blur-sm`}>
                    {project.status === 'completed' ? '✓ Completed' : '⏳ In Progress'}
                  </span>
                </div>
              </div>

              {/* Project Info - short description on card */}
              <div>
                <h3 className={`${isMobile ? 'text-lg' : 'text-xl'} font-bold text-white ${isMobile ? 'mb-2' : 'mb-3'} group-hover:text-cyan-400 transition-colors`}>
                  {project.title}
                </h3>
                <p className={`text-gray-300 ${isMobile ? 'text-sm mb-3 leading-relaxed' : 'text-base mb-4 leading-relaxed'}`}>
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className={`flex flex-wrap gap-2 ${isMobile ? 'mb-4' : 'mb-6'}`}>
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className={`bg-cyan-500/10 text-cyan-400 ${isMobile ? 'px-2 py-1 text-xs' : 'px-3 py-1 text-sm'} rounded-full border border-cyan-500/20 font-medium`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Buttons - stopPropagation so clicking them doesn't open modal */}
                <div className={`flex ${isMobile ? 'flex-col gap-2' : 'gap-4'}`}>
                  {project.github !== '#' && (
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      whileHover={{ scale: isMobile ? 1.02 : 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className={`${isMobile ? 'w-full py-2 text-sm' : 'flex-1 py-3 text-base'} bg-black/20 backdrop-blur-sm text-white px-4 rounded-lg font-medium transition-all hover:bg-black/40 border border-white/20 text-center flex items-center justify-center gap-2`}
                    >
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.268 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.699 1.028 1.595 1.028 2.688 0 3.848-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48A10.02 10.02 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                      </svg>
                      GitHub
                    </motion.a>
                  )}
                  {project.live !== '#' && (
                    <motion.a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      whileHover={{ scale: isMobile ? 1.02 : 1.05, boxShadow: "0 0 20px rgba(34, 211, 238, 0.3)" }}
                      whileTap={{ scale: 0.95 }}
                      className={`${isMobile ? 'w-full py-2 text-sm' : 'flex-1 py-3 text-base'} bg-cyan-500/20 backdrop-blur-sm border border-cyan-400/50 text-cyan-400 px-4 rounded-lg font-medium transition-all hover:bg-cyan-500/30 hover:border-cyan-400/70 hover:text-cyan-300 text-center flex items-center justify-center gap-2 group`}
                    >
                      <svg className="w-4 h-4 transition-transform group-hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                      {project.liveLabel || "Live Demo"}
                    </motion.a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Project detail modal - soft blur overlay */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-[100] flex items-center justify-center p-4"
              onClick={() => closeModal()}
            >
              {/* Soft blur backdrop */}
              <div className="absolute inset-0 bg-black/50 backdrop-blur-md" aria-hidden />
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.2 }}
                onClick={(e) => e.stopPropagation()}
                className={`relative w-full max-w-2xl max-h-[90vh] overflow-hidden rounded-2xl border border-white/20 bg-black/80 backdrop-blur-xl shadow-2xl flex flex-col ${isMobile ? 'max-h-[85vh]' : ''}`}
              >
                {/* Close button */}
                <button
                  onClick={() => closeModal()}
                  className="absolute top-4 right-4 z-10 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
                  aria-label="Close"
                >
                  <X className="w-5 h-5" />
                </button>

                {/* Scrollable content */}
                <div className="overflow-y-auto flex-1 p-6 pt-12">
                  {/* Hero image */}
                  <div className="h-48 md:h-56 rounded-xl overflow-hidden bg-gradient-to-br from-cyan-500/20 to-purple-500/20 mb-6">
                    <img
                      src={selectedProject.image}
                      alt={selectedProject.title}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div className="flex items-center gap-3 mb-4 flex-wrap">
                    <h2 className="text-2xl md:text-3xl font-bold text-white pr-10">
                      {selectedProject.title}
                    </h2>
                    {selectedProject.badge && (
                      <span className="shrink-0 px-3 py-1 rounded-full text-xs font-medium border bg-blue-500/20 text-blue-400 border-blue-500/30">
                        {selectedProject.badge}
                      </span>
                    )}
                    <span className={`shrink-0 px-3 py-1 rounded-full text-xs font-medium border ${
                      selectedProject.status === 'completed'
                        ? 'bg-green-500/20 text-green-400 border-green-500/30'
                        : 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30'
                    }`}>
                      {selectedProject.status === 'completed' ? '✓ Completed' : '⏳ In Progress'}
                    </span>
                  </div>

                  <p className="text-gray-300 text-base mb-6 leading-relaxed">
                    {selectedProject.description}
                  </p>

                  {/* Tech stack */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {selectedProject.tech.map((tech, i) => (
                      <span
                        key={i}
                        className="bg-cyan-500/10 text-cyan-400 px-3 py-1 text-sm rounded-full border border-cyan-500/20 font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* More about - only show when user has added detail */}
                  {selectedProject.moreAbout?.trim() && (
                    <div className="mb-6">
                      <h3 className="text-lg font-semibold text-cyan-400 mb-2">More about this project</h3>
                      <div className="text-gray-300 text-sm md:text-base leading-relaxed whitespace-pre-wrap">
                        {selectedProject.moreAbout}
                      </div>
                    </div>
                  )}

                  {/* Actions - GitHub & Live Demo */}
                  <div className={`flex ${isMobile ? 'flex-col gap-3' : 'gap-4'}`}>
                    {selectedProject.github !== '#' && (
                      <motion.a
                        href={selectedProject.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className={`${isMobile ? 'w-full py-3' : 'flex-1 py-3'} bg-black/40 border border-white/20 text-white px-4 rounded-xl font-medium text-center flex items-center justify-center gap-2 hover:bg-white/10 transition-colors`}
                      >
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                          <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.268 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.699 1.028 1.595 1.028 2.688 0 3.848-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48A10.02 10.02 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                        </svg>
                        GitHub
                      </motion.a>
                    )}
                    {selectedProject.live !== '#' && (
                      <motion.a
                        href={selectedProject.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.02, boxShadow: "0 0 20px rgba(34, 211, 238, 0.3)" }}
                        whileTap={{ scale: 0.98 }}
                        className={`${isMobile ? 'w-full py-3' : 'flex-1 py-3'} bg-cyan-500/20 border border-cyan-400/50 text-cyan-400 px-4 rounded-xl font-medium text-center flex items-center justify-center gap-2 hover:bg-cyan-500/30 transition-colors`}
                      >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                        {selectedProject.liveLabel || "Live Demo"}
                      </motion.a>
                    )}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* CTA Section */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className={`${isMobile ? 'mt-12' : 'mt-20'} text-center bg-black/30 backdrop-blur-sm border border-white/50 ${isMobile ? 'rounded-xl p-6' : 'rounded-2xl p-12'}`}
        >
          <h2 className={`${isMobile ? 'text-2xl' : 'text-4xl md:text-5xl'} font-bold text-white ${isMobile ? 'mb-3' : 'mb-6'}`}>
            Interested in <span className="text-cyan-400">Collaborating?</span>
          </h2>
          <p className={`${isMobile ? 'text-base mb-6' : 'text-xl mb-8'} text-gray-300 ${isMobile ? 'max-w-sm' : 'max-w-2xl'} mx-auto`}>
            Let's build something amazing together. I'm always open to new opportunities and exciting projects.
          </p>
          
          <motion.button
            onClick={() => navigate('/contact')}
            whileHover={{ 
              scale: isMobile ? 1.02 : 1.05, 
              boxShadow: "0 0 30px rgba(0, 212, 170, 0.4)" 
            }}
            whileTap={{ scale: 0.95 }}
            className={`bg-cyan-500/20 backdrop-blur-sm border border-cyan-400/50 text-cyan-400 hover:bg-cyan-500/30 hover:border-cyan-400/70 ${isMobile ? 'px-6 py-3 text-base' : 'px-8 py-4 text-lg'} rounded-xl font-bold transition-all`}
          >
            Get In Touch
          </motion.button>
        </motion.section>
      </div>
      
      <BackToTop />
    </div>
  );
}
