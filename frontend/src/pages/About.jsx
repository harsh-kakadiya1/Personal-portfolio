import React, { useMemo } from 'react';
import { motion } from 'framer-motion';
import { SocialStories } from '../components/ui/social-stories';
import LogoLoop from '../components/ui/LogoLoop';
import BackToTop from '../components/ui/BackToTop';
import { SiReact, SiNextdotjs, SiTypescript, SiTailwindcss, SiNodedotjs, SiMongodb, SiPython, SiTensorflow, SiDocker, SiGit } from 'react-icons/si';

export default function About() {
  const contactLinks = [
    { label: 'Email', href: 'mailto:harshkakadiya128@gmail.com' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/harsh-kakadiya' },
    { label: 'GitHub', href: 'https://github.com/harsh-kakadiya1' },
    { label: 'Calendly', href: 'https://calendly.com/harshkakadiya128' },
  ];

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
    <div className="min-h-screen relative bg-white">
      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-4 py-16 pt-28 min-h-screen">
        
        {/* Hero Section - Centered Brutalist */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="mb-12 border-4 border-black p-8 md:p-16"
        >
          <div className="max-w-2xl mx-auto text-center">
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-black text-black leading-tight mb-4 tracking-tight">
              HARSH
            </h1>
            <h2 className="text-4xl md:text-5xl font-black text-accent-red leading-tight mb-6 tracking-tight">
              KAKADIYA
            </h2>
            <div className="w-24 h-1 bg-accent-red mb-8 mx-auto"></div>
            
            <p className="text-base md:text-lg font-bold text-black leading-relaxed mb-8">
              AI Developer and Conversational AI Specialist crafting innovative solutions at the intersection of technology and human needs.
            </p>
            
            <div className="flex gap-3 justify-center flex-wrap">
              <a href="https://www.linkedin.com/in/harsh-kakadiya" target="_blank" rel="noopener noreferrer"
                 className="px-4 py-2 bg-black text-white border-3 border-black font-black text-xs uppercase tracking-wider hover:bg-accent-red hover:text-black transition-all">
                LinkedIn
              </a>
              <a href="https://github.com/harsh-kakadiya1" target="_blank" rel="noopener noreferrer"
                 className="px-4 py-2 bg-white text-black border-3 border-black font-black text-xs uppercase tracking-wider hover:bg-accent-yellow transition-all">
                GitHub
              </a>
            </div>
          </div>
        </motion.div>

        {/* About Me Section */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-20"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
            {/* Card 1 */}
            <div className="border-4 border-black p-6 md:p-8 bg-white">
              <h3 className="text-lg font-black text-black mb-4 uppercase tracking-tight">DATA & AI</h3>
              <div className="w-8 h-1 bg-accent-red mb-4"></div>
              <p className="text-sm font-bold text-black leading-relaxed">
                3rd-year AI/ML student wrangling messy datasets and building models that work beyond paper.
              </p>
            </div>
            
            {/* Card 2 */}
            <div className="border-4 border-black p-6 md:p-8 bg-accent-yellow">
              <h3 className="text-lg font-black text-black mb-4 uppercase tracking-tight">DEVELOPMENT</h3>
              <div className="w-8 h-1 bg-black mb-4"></div>
              <p className="text-sm font-bold text-black leading-relaxed">
                Full-stack developer transforming complex problems into elegant, production-ready solutions.
              </p>
            </div>
            
            {/* Card 3 */}
            <div className="border-4 border-black p-6 md:p-8 bg-accent-red">
              <h3 className="text-lg font-black text-white mb-4 uppercase tracking-tight">INNOVATION</h3>
              <div className="w-8 h-1 bg-white mb-4"></div>
              <p className="text-sm font-bold text-white leading-relaxed">
                Exploring new tech, contributing to open source, and building AI-powered products at scale.
              </p>
            </div>
          </div>
          
          {/* Site Verification Code */}
          <div style={{ display: 'none' }}>
            Impact-Site-Verification: dbf16cc8-66ad-4289-8598-d4ba255ec555
          </div>
        </motion.section>

        {/* Education and Experience Centered */}
        <div className="space-y-20 mb-20">
          
          {/* Education Section */}
          <motion.section
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="mb-12 border-b-4 border-black pb-6">
              <h2 className="text-5xl md:text-6xl font-black text-black mb-2 uppercase tracking-tight">
                EDUCATION
              </h2>
              <div className="w-32 h-1 bg-accent-red"></div>
            </div>

            {/* Timeline Container */}
            <div className="space-y-4">
              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 + index * 0.15 }}
                  className="border-l-8 border-black pl-6 py-4"
                >
                  <h3 className="text-lg font-black text-black mb-1 uppercase tracking-wider">{edu.degree}</h3>
                  <p className="text-sm font-bold text-black mb-1">{edu.institution}</p>
                  <p className="text-xs font-bold text-gray-600 mb-3 uppercase tracking-wider">{edu.year}</p>
                  <p className="text-sm text-black leading-relaxed">{edu.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Experience Section */}
          <motion.section
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <div className="mb-12 border-b-4 border-accent-red pb-6">
              <h2 className="text-5xl md:text-6xl font-black text-black mb-2 uppercase tracking-tight">
                EXPERIENCE
              </h2>
              <div className="w-32 h-1 bg-black"></div>
            </div>

            {/* Timeline Container */}
            <div className="space-y-4">
              {experience.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 + index * 0.15 }}
                  className={`border-4 border-black p-6 ${index % 2 === 0 ? 'bg-white' : 'bg-accent-yellow'}`}
                >
                  <h3 className="text-lg font-black text-black mb-1 uppercase tracking-wider">{exp.role}</h3>
                  <p className="text-sm font-bold text-black mb-1">{exp.company}</p>
                  <p className="text-xs font-bold text-gray-600 mb-3 uppercase tracking-wider">{exp.period}</p>
                  <p className="text-sm text-black leading-relaxed mb-4">{exp.description}</p>
                  {exp.siteUrl && (
                    <motion.a
                      href={exp.siteUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-4 py-2 bg-black text-white border-3 border-black font-black text-xs uppercase tracking-wider hover:bg-accent-red transition-all"
                    >
                      View Site
                    </motion.a>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.section>
        </div>

        {/* Tech Stack Logo Loop Section */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mb-20"
        >
          <div className="mb-12 border-b-4 border-black pb-6">
            <h2 className="text-5xl md:text-6xl font-black text-black mb-2 uppercase tracking-tight">
              TECH STACK
            </h2>
            <div className="w-32 h-1 bg-accent-yellow"></div>
          </div>
          
          <div className="border-4 border-black p-12 overflow-hidden w-full bg-white">
            <LogoLoop
              logos={techLogos}
              speed={50}
              direction="left"
              logoHeight={64}
              gap={60}
              hoverSpeed={0}
              scaleOnHover
              ariaLabel="Technology stack"
              className="text-black"
            />
          </div>
        </motion.section>

        {/* CTA Section - Brutalist Grid */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {/* Left - Text */}
          <div className="border-4 border-black p-8 md:p-12 bg-black text-white">
            <h2 className="text-4xl md:text-5xl font-black mb-4 uppercase tracking-tight leading-tight">
              LET&apos;S WORK TOGETHER
            </h2>
            <p className="text-base font-bold leading-relaxed mb-6">
              I&apos;m always excited to take on new challenges and bring innovative ideas to life. Let&apos;s create something extraordinary.
            </p>
            <div className="flex flex-col gap-3">
              <motion.a
                href="https://calendly.com/harshkakadiya128"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-accent-red text-black border-3 border-black font-black text-sm uppercase tracking-wider hover:bg-black hover:text-accent-red transition-all text-center"
              >
                Schedule Call
              </motion.a>
              <motion.a
                href="/resume.pdf?v=2026-04-07"
                download="Harsh_Kakadiya_Resume.pdf"
                className="px-6 py-3 bg-accent-yellow text-black border-3 border-black font-black text-sm uppercase tracking-wider hover:bg-black hover:text-accent-yellow transition-all text-center"
              >
                Download CV
              </motion.a>
            </div>
          </div>

          {/* Right - Info Cards */}
          <div className="flex flex-col gap-4">
            <div className="border-4 border-black p-6 bg-accent-yellow">
              <h3 className="text-sm font-black text-black uppercase tracking-wider mb-2">AVAILABILITY</h3>
              <p className="text-base font-bold text-black">Remote work worldwide, flexible schedule, quick response time.</p>
            </div>
            <div className="border-4 border-black p-6 bg-white">
              <h3 className="text-sm font-black text-black uppercase tracking-wider mb-3">CONTACT</h3>
              <div className="flex flex-wrap gap-2">
                {contactLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target={link.href.startsWith('mailto:') ? '_self' : '_blank'}
                    rel={link.href.startsWith('mailto:') ? undefined : 'noopener noreferrer'}
                    className="px-3 py-2 bg-black text-white border-2 border-black font-black text-xs uppercase tracking-wider hover:bg-accent-red hover:text-black transition-all"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>

            {/* <a
              href="/resume.pdf?v=2026-04-07"
              download="Harsh_Kakadiya_Resume.pdf"
              className="border-4 border-black p-6 bg-black text-white font-black no-underline hover:bg-accent-red hover:text-black transition-all text-center block"
            >
              <div className="text-base uppercase tracking-tight mb-2">DOWNLOAD CV</div>
              <div className="text-xs uppercase tracking-wider">PDF resume</div>
            </a> */}
          </div>
        </motion.section>
      </div>
      
      <BackToTop />
    </div>
  );
}
