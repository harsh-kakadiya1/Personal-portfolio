import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import Navbar from '../components/navigation/Navbar';
import GitHubHeatmap from '../components/github/GitHubHeatmap';
import GitHubAchievements from '../components/github/GitHubAchievements';
import BackToTop from '../components/ui/BackToTop';

export default function Playground() {
  const [activeTab, setActiveTab] = useState('overview');

  // Mock GitHub data - replace with actual API calls
  const githubStats = {
    user: {
      username: 'harsh-kakadiya1',
      name: 'Harsh Kakadiya',
      avatar: 'https://github.com/harsh-kakadiya1.png',
      bio: 'Maybe i am having your DATA 😉',
      followers: 14,
      following: 11,
      publicRepos: 30,
      stars: 40,
    },
    stats: {
      followers: 14,
      following: 11,
      stars: '40+',
      repositories: '30',
      contributions: '660+',
    },
    featuredRepos: [
      {
        name: 'AI-Agent-for-designing-ML-pipelines',
        description: 'AI Powered ML Pipeline Automation',
        stars: 2,
        forks: 0,
        language: 'python',
        url: 'https://github.com/juliKyada/AI-Agent-for-designing-ML-pipeline'
      },
      {
        name: 'DataMimic.io',
        description: 'Advanced Synthetic Data Generation & No-Code EDA/Pre-processing Platform',
        stars: 16,
        forks: 1,
        language: 'Python',
        url: 'https://github.com/harsh-kakadiya1/DataMimic.io'
      },
      {
        name: 'nyayasetu.AI',
        description: 'See Your Legal Documents Clearly. Understand Your Rights, Identify Risks, Take Action.',
        stars: 3,
        forks: 0,
        language: 'TypeScript',
        url: 'https://github.com/harsh-kakadiya1/nyayasetu.AI'
      },
    ]
  };

  const githubUsername = 'harsh-kakadiya1'; // Your GitHub username

  const tools = [
    {
      name: "VS CODE",
      description: "My coding sanctuary where ideas transform into reality",
      icon: "",
      color: "from-gray-600 to-gray-700"
    },
    {
      name: "CISCO PKT TRACER",
      description: "Network wizardry and infrastructure simulation mastery",
      icon: "",
      color: "from-gray-700 to-gray-600"
    },
    {
      name: "OVERLEAF",
      description: "LaTeX perfection for academic and technical documentation",
      icon: "",
      color: "from-green-500 to-green-600"
    },
    {
      name: "GITHUB",
      description: "Code collaboration hub and version control paradise",
      icon: "",
      color: "from-gray-500 to-gray-600"
    },
    {
      name: "GIT",
      description: "Time machine for code - track every brilliant change",
      icon: "",
      color: "from-orange-500 to-orange-600"
    },
    {
      name: "MONGODB",
      description: "NoSQL database magic for scalable data storage",
      icon: "",
      color: "from-emerald-500 to-emerald-600"
    },
    {
      name: "PYTHON",
      description: "The Swiss Army knife of programming languages",
      icon: "",
      color: "from-yellow-500 to-yellow-600"
    },
    {
      name: "POWER BI",
      description: "Transforming raw data into compelling visual stories and insights",
      icon: "",
      color: "from-amber-500 to-amber-600"
    },
    {
      name: "TABLEAU",
      description: "Crafting interactive and shareable data visualizations",
      icon: "",
      color: "from-gray-600 to-gray-700"
    },
    {
      name: "MENDELEY",
      description: "Reference management and academic research organization",
      icon: "",
      color: "from-red-500 to-red-600"
    },
    {
      name: "REACT",
      description: "Building interactive UIs with component-based architecture",
      icon: "",
      color: "from-gray-700 to-gray-800"
    },
    {
      name: "FLUTTER",
      description: "Cross-platform mobile framework for building beautiful native apps",
      icon: "",
      color: "from-gray-600 to-gray-700"
    },
    {
      name: "NODE.JS",
      description: "JavaScript runtime powering scalable backend solutions",
      icon: "",
      color: "from-green-400 to-green-500"
    },
    {
      name: "FLASK",
      description: "Lightweight Python web framework for rapid development",
      icon: "",
      color: "from-red-500 to-red-600"
    },
    {
      name: "UBUNTU",
      description: "Linux powerhouse for development and server deployment",
      icon: "",
      color: "from-gray-700 to-gray-800"
    },
    {
      name: "VERCEL",
      description: "Lightning-fast deployment platform for modern web apps",
      icon: "",
      color: "from-black to-gray-800"
    },
    {
      name: "NETLIFY",
      description: "Seamless continuous deployment and hosting solution",
      icon: "",
      color: "from-gray-700 to-gray-800"
    },
    {
      name: "RENDER",
      description: "Cloud platform for effortless app deployment and scaling",
      icon: "",
      color: "from-gray-600 to-gray-700"
    },
    {
      name: "RAILWAY",
      description: "Modern platform for deploying applications with zero configuration",
      icon: "",
      color: "from-gray-700 to-gray-900"
    },
    {
      name: "JAVA",
      description: "Enterprise-grade programming for robust applications",
      icon: "",
      color: "from-red-600 to-red-700"
    },
    {
      name: "ANDROID STUDIO",
      description: "Mobile app development IDE for Android ecosystem",
      icon: "",
      color: "from-green-600 to-green-700"
    },
    {
      name: "SPOTIFY",
      description: "Coding soundtrack curator - music fuels creativity",
      icon: "",
      color: "from-green-500 to-green-400"
    },
    {
      name: "NOTION",
      description: "All-in-one workspace for notes, planning, and organization",
      icon: "",
      color: "from-gray-600 to-gray-700"
    },
    {
      name: "POSTMAN",
      description: "API development and testing platform for seamless integration",
      icon: "",
      color: "from-gray-700 to-gray-800"
    }
  ];

  // Generate stable heatmap data once on component mount
  const heatmapData = useMemo(() => {
    const data = [];
    const now = new Date();
    
    for (let i = 0; i < 30; i++) {
      const date = new Date(now);
      date.setDate(now.getDate() - (29 - i));
      
      // Use a fixed seed for consistent random values
      const seed = new Date(date).toISOString().split('T')[0];
      const randomValue = Math.abs(seed.split('').reduce((a, b) => {
        a = ((a << 5) - a) + b.charCodeAt(0);
        return a & a;
      }, 0)) % 10;
      
      data.push({
        date: date.toISOString().split('T')[0],
        count: randomValue
      });
    }
    
    return data;
  }, []);

  // Function to get color based on count
  const getHeatmapColor = (count) => {
    if (count === 0) return 'bg-gray-800';
    if (count < 3) return 'bg-green-500/30';
    if (count < 6) return 'bg-green-500/60';
    return 'bg-green-500';
  };

  return (
    <div className="min-h-screen relative overflow-hidden bg-white">
      {/* Navigation Bar */}
      <Navbar />
      
      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-4 py-16 pt-32">
        {/* GitHub Stats Section */}
        <motion.section 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <div className="w-full max-w-8xl">
            <div className="border-4 border-black p-8 md:p-12 text-left bg-white">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-black mb-4 uppercase tracking-tight leading-none">
                GITHUB ACTIVITY
              </h1>
              <div className="w-32 h-1 bg-accent-red mb-6"></div>
              <p className="text-sm md:text-base text-black font-bold leading-relaxed max-w-2xl">
                My open-source contributions and development journey
              </p>
            </div>
          </div>
          <div className="mb-12"></div>

          {/* Profile Overview */}
          <div className="border-4 border-black bg-white mb-8 p-6 md:p-8">
            <div className="flex flex-col md:flex-row md:items-center gap-4">
              <div className="border-4 border-black bg-accent-yellow p-2 w-28 h-28 shrink-0 mx-auto md:mx-0">
                <img 
                  src={githubStats.user.avatar} 
                  alt={githubStats.user.name}
                  className="w-full h-full object-cover grayscale"
                />
              </div>
              <div className="flex-1 text-center md:text-left">
                <h2 className="text-3xl md:text-4xl font-black text-black uppercase tracking-tight leading-none">
                  {githubStats.user.name}
                </h2>
                <p className="text-xs font-black text-black uppercase tracking-wider mt-2">@{githubStats.user.username}</p>
                <div className="w-20 h-1 bg-accent-red my-4 mx-auto md:mx-0"></div>
                <p className="text-sm md:text-base text-black font-bold leading-relaxed max-w-xl mx-auto md:mx-0">
                  {githubStats.user.bio}
                </p>
              </div>
            </div>
          </div>

          {/* GitHub Achievements and Highlights */}
          <GitHubAchievements username={githubUsername} />

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            {Object.entries(githubStats.stats).map(([key, value], index) => (
              <motion.div
                key={key}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className={`border-4 border-black p-6 text-center ${index % 2 === 0 ? 'bg-white' : 'bg-accent-yellow'}`}
              >
                <div className="text-4xl font-black text-black mb-3">{value}</div>
                <div className="text-xs font-black text-black uppercase tracking-widest">
                  {key.replace(/([A-Z])/g, ' $1').trim()}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Contribution Heatmap */}
          <GitHubHeatmap username={githubUsername} />
          {/* Featured Repositories */}
          <div className="mb-12">
            <h3 className="text-3xl font-black text-black mb-6 uppercase tracking-tight">Featured Repos</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {githubStats.featuredRepos.map((repo, i) => (
                <motion.a
                  key={repo.name}
                  href={repo.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className={`block border-4 border-black p-6 transition-all ${i % 2 === 0 ? 'bg-white' : 'bg-accent-yellow'} hover:shadow-lg`}
                >
                  <div className="mb-3">
                    <h4 className="text-base font-black text-black uppercase tracking-tight mb-2">{repo.name}</h4>
                    <span className="inline-block px-3 py-1 text-xs bg-black text-white border-2 border-black font-black uppercase tracking-wider">
                      {repo.language}
                    </span>
                  </div>
                  <p className="text-black text-xs font-bold mb-4 line-clamp-2">{repo.description}</p>
                  <div className="flex items-center text-xs font-black text-black space-x-4">
                    <span className="flex items-center">
                      ⭐ {repo.stars}
                    </span>
                    <span className="flex items-center">
                      🔀 {repo.forks}
                    </span>
                  </div>
                </motion.a>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Tools Section */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-20"
        >
          <div className="w-full max-w-8xl">
            <div className="border-4 border-black p-8 md:p-12 text-left bg-white mb-12">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-black mb-4 uppercase tracking-tight leading-none">
                MY TOOLKIT
              </h1>
              <div className="w-32 h-1 bg-accent-red mb-6"></div>
              <p className="text-sm md:text-base text-black font-bold leading-relaxed max-w-2xl">
                The arsenal of tools and technologies that power my development journey
              </p>
            </div>
          </div>

          {/* Tools Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {tools.map((tool, index) => (
              <motion.div
                key={tool.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className={`border-4 border-black p-6 text-center transition-all hover:shadow-lg ${index % 2 === 0 ? 'bg-white' : 'bg-accent-yellow'}`}
              >
                {/* Icon */}
                <div className="text-5xl mb-4">
                  {tool.icon}
                </div>
                
                {/* Tool Name */}
                <h3 className="text-base font-black text-black mb-3 uppercase tracking-tight">
                  {tool.name}
                </h3>
                
                {/* Description */}
                <p className="text-black text-xs font-bold leading-relaxed">
                  {tool.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.section>
      </div>
      
      <BackToTop />
    </div>
  );
}
