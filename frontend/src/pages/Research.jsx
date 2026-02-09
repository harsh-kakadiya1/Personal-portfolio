import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from '../components/navigation/Navbar';
import { useMobile } from '../hooks/useMobile';
import BackToTop from '../components/ui/BackToTop';
import { FileText, ExternalLink, X } from 'lucide-react';

export default function Research() {
  const { isMobile } = useMobile();
  const [pdfViewerUrl, setPdfViewerUrl] = useState(null);

  useEffect(() => {
    if (pdfViewerUrl) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = '';
    return () => { document.body.style.overflow = ''; };
  }, [pdfViewerUrl]);

  const researchItems = [
    {
      id: 1,
      title: "A real-time intelligent video surveillance framework for automated violence detection using advanced deep learning architectures",
      description: "Automatic detection of violent incidents is important for providing immediate public safety response. In this paper,an advanced violence detection system is introduced which employs pose based spatiotemporal features as well as a CNN-LSTM deep learning approach that leverages Attention mechanisms.",
      year: "2025",
      type: "Paper",
      status: "completed",
      pdf: "/Violance_detection.pdf",
      venue: ""
    },
    {
      id: 2,
      title: "Effectiveness of Metadata-Driven Decisions in ML Pipeline Design",
      description: "Metadata-driven Automated Machine Learning (AutoML) extends conventional pipeline search by leveraging dataset descriptions, meta-features, and data-catalog information to accelerate model discovery, improve transferability, and enhance interpretability. While metadata priors and meta-learning reduce search time and cold-start overhead, existing systems often underreport computational complexity and lack cohesive agent-based orchestration.",
      year: "2026",
      type: "Paper",
      status: "in-progress",
      venue: ""
    },
    // Add more entries. Use pdf: "/file.pdf" for in-portfolio viewer, or link: "https://..." for external.
  ];

  return (
    <div className="min-h-screen relative overflow-hidden">
      <Navbar />

      <div className={`relative z-10 container mx-auto ${isMobile ? 'px-3 py-16 pt-20' : 'px-4 py-24 pt-32'}`}>
        {/* Hero */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className={`text-center ${isMobile ? 'mb-12' : 'mb-20'}`}
        >
          <h1 className={`${isMobile ? 'text-4xl' : 'text-6xl md:text-8xl'} font-bold text-white ${isMobile ? 'mb-4' : 'mb-6'}`}>
            My <span className="text-cyan-400">Research</span>
          </h1>
          <p className={`${isMobile ? 'text-lg' : 'text-2xl'} text-gray-300 ${isMobile ? 'max-w-sm' : 'max-w-3xl'} mx-auto leading-relaxed ${isMobile ? 'px-2' : ''}`}>
            Papers, publications, and research contributions
          </p>
        </motion.div>

        {/* Research list */}
        <div className={`max-w-4xl mx-auto ${isMobile ? 'space-y-6' : 'space-y-8'}`}>
          {researchItems.map((item, index) => (
            <motion.article
              key={item.id}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative bg-black/30 backdrop-blur-sm border border-white/20 rounded-2xl p-6 hover:border-cyan-400/50 transition-all duration-300"
            >
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-3">
                <h2 className={`${isMobile ? 'text-lg' : 'text-xl'} font-bold text-white group-hover:text-cyan-400`}>
                  {item.title}
                </h2>
                <span className="text-cyan-400/90 text-sm font-medium shrink-0">
                  {item.year}
                  {item.type && ` · ${item.type}`}
                </span>
              </div>
              {item.venue && (
                <p className="text-gray-400 text-sm mb-2">{item.venue}</p>
              )}
              <p className="text-gray-300 text-base leading-relaxed mb-4">
                {item.description}
              </p>
              {item.pdf && (
                <button
                  type="button"
                  onClick={() => setPdfViewerUrl(item.pdf)}
                  className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 text-sm font-medium"
                >
                  <FileText className="w-4 h-4" />
                  Read paper
                </button>
              )}
              {!item.pdf && item.link && item.link !== '#' && (
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 text-sm font-medium"
                >
                  <ExternalLink className="w-4 h-4" />
                  Read / View
                </a>
              )}
              {item.status && (
                <div className="absolute bottom-4 right-4">
                  <span className={`px-2 py-1 rounded-full text-xs font-medium border ${
                    item.status === 'completed'
                      ? 'bg-green-500/20 text-green-400 border-green-500/30'
                      : 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30'
                  }`}>
                    {item.status === 'completed' ? '✓ Completed' : '⏳ In Progress'}
                  </span>
                </div>
              )}
            </motion.article>
          ))}
        </div>

        {researchItems.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-16 text-gray-400"
          >
            <FileText className="w-16 h-16 mx-auto mb-4 opacity-50" />
            <p className="text-lg">Research entries will appear here.</p>
            <p className="text-sm mt-2">Edit the <code className="text-cyan-400/80">researchItems</code> array in <code className="text-cyan-400/80">src/pages/Research.jsx</code> to add your papers and publications.</p>
          </motion.div>
        )}
      </div>

      {/* PDF viewer modal – read in portfolio, no download link */}
      <AnimatePresence>
        {pdfViewerUrl && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex flex-col bg-black/95"
          >
            <div className="flex items-center justify-between px-4 py-3 border-b border-white/20 bg-black/50 shrink-0">
              <span className="text-white font-medium">Read paper</span>
              <button
                type="button"
                onClick={() => setPdfViewerUrl(null)}
                className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
                aria-label="Close"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="flex-1 min-h-0 w-full">
              <iframe
                title="PDF viewer"
                src={`${pdfViewerUrl}#toolbar=0`}
                className="w-full h-full border-0"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <BackToTop />
    </div>
  );
}
