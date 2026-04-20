import React, { useMemo } from 'react';
import { motion } from 'framer-motion';
import { SocialStories } from '../components/ui/social-stories';
import LogoLoop from '../components/ui/LogoLoop';
import BackToTop from '../components/ui/BackToTop';
import { useResumeModal } from '../contexts/ResumeModalContext';
import { SiReact, SiNextdotjs, SiTypescript, SiTailwindcss, SiNodedotjs, SiMongodb, SiPython, SiTensorflow, SiDocker, SiGit } from 'react-icons/si';

export default function About() {
  const { setIsResumeModalOpen } = useResumeModal();

  const education = [
    {
      degree: "Bachelor of Technology: Artificial Intelligence and Machine Learning",
      institution: "Charotar University of Science and Technology, Changa, Gujarat",
      year: "2023 - 2027 (Present)",
      description: "Specialized in AI-ML development, Data analytics, algorithms, problem-solving and modern web technologies."
    },
    {
      degree: "Higher Secondary Education",
      institution: "kaushal vidyabhavan, Surat, Gujarat",
      year: "2021 - 2023",
      description: "Completed 12th standard with focus on Mathematics. Developed strong analytical and problem-solving skills."
    },
    {
      degree: "Secondary Education",
      institution: "kaushal vidyabhavan, Surat, Gujarat",
      year: "2019 - 2021",
      description: "Completed 10th standard with excellent academic performance. Built foundation in core subjects."
    }
  ];

  const experience = [
    {
      role: "FoundingFull-Stack Developer & DevOps Lead",
      company: "Pharmacophore, India",
      period: "Mar 2025 - Present",
      description: "Built the company website from scratch and owned end-to-end technical direction for the startup, including architecture, UI implementation, deployment, hosting, domain setup, and production launch. Delivered and continue to maintain the live site with full-stack and DevOps ownership.",
      siteUrl: "https://pharmacophore.in/"
    },
    {
      role: "AI Developer",
      company: "Thoondil Fish Services, moongilthuraipattu, Tamil Nadu, India (Remote)",
      period: "Sep 2025 - Dec 2025 (4 months)",
      description: "Design and developing AI-powered chatbot to assist fish consumers and retailers within the Thoondil app."
    },
    {
      role: "Data Analyst",
      company: "Samatrix Consulting Private Limited, Gurugram, Haryana, India (Remote)",
      period: "May 2025 - Jun 2025 (2 months)",
      description: "I worked on Data Analysis projects involving the application of statistical techniques and tools."
    },
    {
      role: "Full Stack Developer",
      company: "Limpid Systems, Surat, Gujarat, India (On-Site)",
      period: "May 2025 - Jun 2025 (2 months)",
      description: "I gained hands-on experience with the MERN stack, finding great satisfaction in working with React and JavaScript."
    }
  ];

  const techLogos = [
    { node: <SiReact />, title: "React", href: "https://react.dev" },
    { node: <SiNextdotjs />, title: "Next.js", href: "https://nextjs.org" },
    { node: <SiTypescript />, title: "TypeScript", href: "https://www.typescriptlang.org" },
    { node: <SiTailwindcss />, title: "Tailwind CSS", href: "https://tailwindcss.com" },
    { node: <SiNodedotjs />, title: "Node.js", href: "https://nodejs.org" },
    { node: <SiMongodb />, title: "MongoDB", href: "https://www.mongodb.com" },
    { node: <SiPython />, title: "Python", href: "https://www.python.org" },
    { node: <SiTensorflow />, title: "TensorFlow", href: "https://www.tensorflow.org" },
    { node: <SiDocker />, title: "Docker", href: "https://www.docker.com" },
    { node: <SiGit />, title: "Git", href: "https://git-scm.com" },
  ];

  return (
    <div className="min-h-screen relative">
      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-4 py-24 pt-32 min-h-screen">
        
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          {/* Social Stories Profile Picture */}
          <div className="flex justify-center mb-8">
            <SocialStories 
              stories={useMemo(() => [
                {
                  id: "1",
                  platform: "linkedin",
                  mediaUrl: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80",
                  linkUrl: "https://www.linkedin.com/in/harsh-kakadiya",
                  caption: "Building AI-powered solutions and modern web applications",
                  duration: 5,
                },
                {
                  id: "2",
                  platform: "linkedin",
                  mediaUrl: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80",
                  linkUrl: "https://www.linkedin.com/in/harsh-kakadiya",
                  caption: "Passionate about Machine Learning and Computer Vision",
                  duration: 6,
                },
                {
                  id: "3",
                  platform: "GitHub",
                  mediaUrl: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&w=800&q=80",
                  linkUrl: "https://github.com/harsh-kakadiya1",
                  caption: "Check out my latest projects on GitHub!",
                  duration: 5,
                },
              ], [])}
              profile={useMemo(() => ({
                name: "Harsh Kakadiya",
                avatarUrl: "/images/projects/profile.png",
              }), [])}
              defaultDuration={5}
            />
          </div>
          
          {/* Interactive Name */}
          <div className="mb-8">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-none">
              <span className="text-white">Harsh </span>
              <span className="text-gray-300">Kakadiya</span>
            </h1>
          </div>
          
          <p className="text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
          AI Developer and Conversational AI & Chatbot Specialist passionate about creating innovative solutions that bridge technology and human needs
          </p>
        </motion.div>

        {/* About Me Section */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-20"
        >
          <div className="bg-black/40 border-2 border-white/20 p-8 md:p-12">
            <h2 className="text-3xl md:text-4xl font-black text-white mb-8 text-center uppercase tracking-tight">
              More <span className="text-gray-300">About Me</span>
            </h2>
            <div className="grid md:grid-cols-1 gap-8">
              <div>
                {/* Site Verification Code */}
                <div style={{ display: 'none' }}>
                  Impact-Site-Verification: dbf16cc8-66ad-4289-8598-d4ba255ec555
                </div>
                <p className="text-gray-300 text-lg leading-relaxed mb-6">
                  They say data is the new oil, and I'm a 3rd-year AI/ML student who's not 
                  afraid to get my hands dirty. I've spent my time wrangling messy datasets 
                  and coaxing insights out of them, proving that I'm fluent in both Python 
                  and the art of convincing a database to behave. 
                </p>
                <p className="text-gray-300 text-lg leading-relaxed mb-6">
                  My portfolio is a collection of my proudest moments—where I've built models 
                  that actually work, not just on paper. From predictive analytics to the 
                  occasional deep learning experiment, I'm here to turn complex problems into 
                  elegant, and sometimes surprisingly funny, solutions.
                </p>
                <p className="text-gray-300 text-lg leading-relaxed">
                  When I'm not coding, you'll find me exploring new technologies, contributing to open source projects, 
                  or listening to music that fuels my creativity.
                </p>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Education and Experience Centered */}
        <div className="max-w-4xl mx-auto space-y-16 mb-20">
          
          {/* Education Section */}
          <motion.section
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mb-20"
          >
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                My <span className="text-gray-300">Education</span>
              </h2>
              <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                My academic journey and continuous learning path in technology and web development.
              </p>
            </div>

            {/* Timeline Container */}
            <div className="relative max-w-6xl mx-auto">
              {/* Central Timeline Line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gray-600/30 hidden md:block"></div>
              <div className="absolute left-4 md:hidden h-full w-0.5 bg-gray-600/30"></div>
              
              {/* Timeline Items */}
              <div className="space-y-16">
                {education.map((edu, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 + index * 0.2 }}
                    className={`relative flex items-center ${
                      index % 2 === 0 ? 'md:justify-start justify-start' : 'md:justify-end justify-start'
                    }`}
                  >
                    {/* Timeline Dot */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gray-400 rounded-full border-4 border-black z-10 hidden md:block"></div>
                    <div className="absolute left-4 transform -translate-x-1/2 w-4 h-4 bg-gray-400 rounded-full border-4 border-black z-10 md:hidden"></div>
                    
                    {/* Content Card */}
                    <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:pr-8 pl-12 md:pl-0' : 'md:pl-8 pl-12'}`}>
                      <div className="bg-black/40 border-2 border-white/20 p-6 hover:border-white/40 transition-all duration-300">
                        <h3 className="text-xl font-black text-white mb-2 uppercase tracking-wide">{edu.degree}</h3>
                        <p className="text-gray-300 font-medium mb-1">{edu.institution}</p>
                        <p className="text-gray-400 text-sm mb-3">{edu.year}</p>
                        <p className="text-gray-300 text-sm leading-relaxed">{edu.description}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.section>

          {/* Experience Section */}
          <motion.section
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mb-20"
          >
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                My <span className="text-gray-300">Experience</span>
              </h2>
              <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                Professional journey and key projects that shaped my development skills.
              </p>
            </div>

            {/* Timeline Container */}
            <div className="relative max-w-6xl mx-auto">
              {/* Central Timeline Line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gray-600/30 hidden md:block"></div>
              <div className="absolute left-4 md:hidden h-full w-0.5 bg-gray-600/30"></div>
              
              {/* Timeline Items */}
              <div className="space-y-16">
                {experience.map((exp, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.8 + index * 0.2 }}
                    className={`relative flex items-center ${
                      index % 2 === 0 ? 'md:justify-start justify-start' : 'md:justify-end justify-start'
                    }`}
                  >
                    {/* Timeline Dot */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gray-400 rounded-full border-4 border-black z-10 hidden md:block"></div>
                    <div className="absolute left-4 transform -translate-x-1/2 w-4 h-4 bg-gray-400 rounded-full border-4 border-black z-10 md:hidden"></div>
                    
                    {/* Content Card */}
                    <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:pr-8 pl-12 md:pl-0' : 'md:pl-8 pl-12'}`}>
                      <div className="bg-black/40 border-2 border-white/20 p-6 hover:border-white/40 transition-all duration-300">
                        <h3 className="text-xl font-black text-white mb-2 uppercase tracking-wide">{exp.role}</h3>
                        <p className="text-gray-300 font-medium mb-1">{exp.company}</p>
                        <p className="text-gray-400 text-sm mb-3">{exp.period}</p>
                        <p className="text-gray-300 text-sm leading-relaxed mb-3">{exp.description}</p>
                        {exp.siteUrl && (
                          <motion.a
                            href={exp.siteUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.03 }}
                            whileTap={{ scale: 0.97 }}
                            className="inline-flex items-center gap-2 border border-gray-600/40 bg-gray-800/10 px-3 py-1.5 text-xs font-black text-gray-300 transition-colors hover:bg-gray-800/20 hover:border-gray-500/60 uppercase tracking-wider"
                          >
                            View Site
                          </motion.a>
                        )}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.section>
        </div>

        {/* Tech Stack Logo Loop Section */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mb-20 max-w-8xl mx-auto"
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Technologies I <span className="text-gray-300">Work With</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              A collection of tools and frameworks I use to build powerful applications
            </p>
          </div>
          
          <div className="bg-black/40 border-2 border-white/20 p-12 overflow-hidden w-full">
            <LogoLoop
              logos={techLogos}
              speed={50}
              direction="left"
              logoHeight={64}
              gap={60}
              hoverSpeed={0}
              scaleOnHover
              ariaLabel="Technology stack"
              className="text-gray-300"
            />
          </div>
        </motion.section>

        {/* CTA Section */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="text-center bg-black/40 border-2 border-white/20 p-12"
        >
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6 uppercase tracking-tight">
            Ready to Work <span className="text-gray-300">Together?</span>
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Let's create something amazing together. I'm always excited to take on new challenges and bring innovative ideas to life.
          </p>
          
          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-8">
            <motion.a
              href="https://calendly.com/harshkakadiya128"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ 
                scale: 1.05, 
                boxShadow: "0 0 30px rgba(107, 114, 128, 0.2)" 
              }}
              whileTap={{ scale: 0.95 }}
              className="bg-gray-800/20 border-2 border-gray-600/50 text-white px-8 py-4 font-black text-lg transition-all hover:bg-gray-800/40 hover:border-gray-500/70 inline-block text-center uppercase tracking-wide"
            >
              Hire Me
            </motion.a>
            <motion.button
              onClick={() => setIsResumeModalOpen(true)}
              whileHover={{ 
                scale: 1.05, 
                borderColor: '#d1d5db',
                color: '#d1d5db'
              }}
              whileTap={{ scale: 0.95 }}
              className="bg-black/20 backdrop-blur-sm border border-white/30 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all hover:bg-black/40 hover:border-white/50 inline-block text-center"
            >
              View Resume
            </motion.button>
          </div>

          {/* Availability Info */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-gray-400">
            <div className="flex items-center gap-2">
              <span className="text-green-400">🌍</span>
              <span>Available for remote work worldwide</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-gray-400">⚡</span>
              <span>Quick response time</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-gray-400">🕒</span>
              <span>Flexible availability</span>
            </div>
          </div>
        </motion.section>
      </div>
      
      <BackToTop />
    </div>
  );
}
