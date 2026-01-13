import React, { useEffect } from 'react';
import { RadialScrollGallery } from '../components/ui/portfolio-and-image-gallery';
import { ArrowUpRight, ExternalLink, Github } from 'lucide-react';
import { Badge } from '../components/ui/badge';
import { useNavigate } from 'react-router-dom';
import { useMobile } from '../hooks/useMobile';

const projects = [
  {
    id: 1,
    title: "AI-Powered Portfolio",
    description: "Interactive portfolio with terminal interface and AI features",
    tech: ["React", "Framer Motion", "Node.js"],
    image: "/images/projects/portfolio-preview.png",
    github: "https://github.com/harsh-kakadiya1/portfolio",
    live: "https://harsh-kakadiya.vercel.app/",
    status: "completed",
    category: "Web Development"
  },
  {
    id: 2,
    title: "StyleMe - Fashion Stylist",
    description: "StyleMe is a Flutter-based mobile application designed to be your personal fashion assistant.",
    tech: ["Flutter", "Dart"],
    image: "/images/projects/styleme-preview.png",
    github: "https://github.com/harsh-kakadiya1/StyleMe--Your-Personal-AI-Fashion-Stylist",
    live: "https://drive.google.com/file/d/1cEGu5loU0iYGm8pfTZFS5jb9EX4E9Pbe/view?usp=drivesdk",
    status: "in-progress",
    category: "Mobile App"
  },
  {
    id: 3,
    title: "DataMimic.io",
    description: "Advanced Synthetic Data Generation & No-Code EDA/Pre-processing Platform",
    tech: ["Python", "Flask", "Pandas", "NumPy", "Scikit-learn", "Faker", "Bootstrap 5", "JavaScript"],
    image: "/images/projects/datamimic-preview.png",
    github: "https://github.com/harsh-kakadiya1/DataMimic.io",
    live: "https://datamimic-io.onrender.com/",
    status: "completed",
    category: "AI/ML"
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
    category: "Web Development"
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
    category: "AI/ML"
  },
  {
    id: 6,
    title: "nyayasetu.AI ",
    description: "NyayaSetu AI is designed to demystify legal documents. It provides multi-language insights, students, and small business owners to interpret and act on their legal documents confidently—without needing a lawyer for the initial review.",
    tech: ["React 19","TypeScript","Vite 6","Gemini 2.5 Flash"],
    image: "/images/projects/nyayasetu.ai-preview.png",
    github: "https://github.com/harsh-kakadiya1/nyayasetu.AI",
    live: "https://nyaya-setu-ai.netlify.app/",
    status: "completed",
    category: "AI/ML"
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
    category: "Computer Vision"
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
    category: "Web Development"
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
    category: "AI/ML"
  },
];

export default function Work() {
  const navigate = useNavigate();
  const { isMobile } = useMobile();

  // Scroll to top when page loads
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, []);

  // Redirect to projects page on mobile
  useEffect(() => {
    if (isMobile) {
      navigate('/projects', { replace: true });
    }
  }, [isMobile, navigate]);

  const handleItemSelect = (index) => {
    const project = projects[index];
    if (project.live && project.live !== '#') {
      window.open(project.live, '_blank', 'noopener,noreferrer');
    }
  };

  // Don't render on mobile
  if (isMobile) {
    return null;
  }

  return (
    <div className="min-h-screen text-white overflow-hidden">
      <div className="h-[300px] flex flex-col items-center justify-center space-y-4 pt-8">
        <div className="space-y-1 text-center">
          <span className="text-[10px] font-bold tracking-widest text-gray-400 uppercase">
            Portfolio
          </span>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tighter">
            My <span className="text-cyan-400">Work</span>
          </h1>
          <p className="text-gray-400 text-sm md:text-base mt-2 max-w-md">
            Scroll to explore my projects
          </p>
        </div>
        <div className="animate-bounce text-gray-500 text-xs">↓ Scroll</div>
      </div>

      <RadialScrollGallery
        className="!min-h-[600px]"
        baseRadius={isMobile ? 320 : 500}
        mobileRadius={250}
        visiblePercentage={50}
        scrollDuration={2000}
        onItemSelect={handleItemSelect}
      >
        {(hoveredIndex) =>
          projects.map((project, index) => {
            const isActive = hoveredIndex === index;
            return (
              <div 
                key={project.id} 
                className="group relative w-[200px] h-[280px] sm:w-[240px] sm:h-[320px] overflow-hidden rounded-xl bg-black/50 border border-white/20 shadow-lg backdrop-blur-sm mx-2"
              >
                <div className="absolute inset-0 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className={`h-full w-full object-cover transition-transform duration-700 ease-out ${
                      isActive ? 'scale-110 blur-0' : 'scale-100 blur-[1px] grayscale-[30%]'
                    }`}
                    onError={(e) => {
                      // Fallback to a placeholder if image fails to load
                      e.target.src = `https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=400&q=80`;
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-70" />
                </div>

                <div className="absolute inset-0 flex flex-col justify-between p-4">
                  <div className="flex justify-between items-start">
                    <Badge 
                      variant="secondary" 
                      className="text-[10px] px-2 py-0 bg-black/80 backdrop-blur text-cyan-400 border-cyan-400/30"
                    >
                      {project.category}
                    </Badge>
                    <div className={`w-6 h-6 rounded-full bg-cyan-500/20 text-cyan-400 flex items-center justify-center transition-all duration-500 border border-cyan-400/30 ${
                      isActive ? 'opacity-100 rotate-0' : 'opacity-0 -rotate-45'
                    }`}>
                      <ArrowUpRight size={12} />
                    </div>
                  </div>

                  <div className={`transition-transform duration-500 ${isActive ? 'translate-y-0' : 'translate-y-2'}`}>
                    <h3 className="text-xl font-bold leading-tight text-white mb-1">{project.title}</h3>
                    <p className="text-xs text-gray-300 mb-2 line-clamp-2">{project.description}</p>
                    
                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-1 mb-2">
                      {project.tech.slice(0, 3).map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="bg-cyan-500/10 text-cyan-400 px-1.5 py-0.5 text-[9px] rounded border border-cyan-500/20"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.tech.length > 3 && (
                        <span className="text-[9px] text-gray-400 px-1.5 py-0.5">
                          +{project.tech.length - 3}
                        </span>
                      )}
                    </div>

                    {/* Status */}
                    <div className={`h-0.5 bg-cyan-400 mt-2 transition-all duration-500 ${
                      isActive ? 'w-full opacity-100' : 'w-0 opacity-0'
                    }`} />
                    
                    {/* Action buttons */}
                    <div className={`flex gap-2 mt-3 transition-all duration-500 ${
                      isActive ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
                    }`}>
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="flex-1 bg-black/40 backdrop-blur-sm border border-white/20 text-white px-2 py-1.5 rounded-lg text-xs font-medium hover:bg-black/60 transition-all flex items-center justify-center gap-1"
                        >
                          <Github size={12} />
                          Code
                        </a>
                      )}
                      {project.live && project.live !== '#' && (
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="flex-1 bg-cyan-500/20 backdrop-blur-sm border border-cyan-400/50 text-cyan-400 px-2 py-1.5 rounded-lg text-xs font-medium hover:bg-cyan-500/30 transition-all flex items-center justify-center gap-1"
                        >
                          <ExternalLink size={12} />
                          Live
                        </a>
                      )}
                    </div>
                  </div>
                </div>

                {/* Status indicator */}
                <div className="absolute top-2 right-2">
                  <span className={`${
                    project.status === 'completed' 
                      ? 'bg-green-500/20 text-green-400 border-green-500/30' 
                      : 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30'
                  } px-1.5 py-0.5 rounded-full text-[9px] font-medium border backdrop-blur-sm`}>
                    {project.status === 'completed' ? '✓' : '⏳'}
                  </span>
                </div>
              </div>
            );
          })
        }
      </RadialScrollGallery>

      <div className="h-[300px] flex items-center justify-center">
        <div className="text-center space-y-4">
          <h2 className="text-xl font-light tracking-widest uppercase text-gray-400">
            Explore More
          </h2>
          <button
            onClick={() => navigate('/projects')}
            className="bg-cyan-500/20 backdrop-blur-sm border border-cyan-400/50 text-cyan-400 hover:bg-cyan-500/30 hover:border-cyan-400/70 px-6 py-3 rounded-xl font-medium transition-all"
          >
            View All Projects
          </button>
        </div>
      </div>
    </div>
  );
}
