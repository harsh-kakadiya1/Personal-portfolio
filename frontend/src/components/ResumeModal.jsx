import React from 'react';
import { motion } from 'framer-motion';
import { useResumeModal } from '../contexts/ResumeModalContext';

export default function ResumeModal() {
  const { isResumeModalOpen, setIsResumeModalOpen } = useResumeModal();
  const resumeVersion = import.meta.env.VITE_RESUME_VERSION || '2026-04-07';
  const resumeUrl = `/resume.pdf?v=${encodeURIComponent(resumeVersion)}`;

  if (!isResumeModalOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        className="bg-black/90 backdrop-blur-sm border border-white/20 rounded-2xl p-6 max-w-5xl w-full max-h-[90vh] overflow-hidden"
      >
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-white text-2xl font-bold">Resume Preview</h3>
          <button
            onClick={() => setIsResumeModalOpen(false)}
            className="text-white hover:text-cyan-400 text-2xl font-bold transition-colors"
          >
            ×
          </button>
        </div>
        <div className="w-full h-[70vh] mb-4">
          <iframe
            src={resumeUrl}
            className="w-full h-full border border-white/20 rounded-lg"
            title="Resume Preview"
          />
        </div>
        <div className="text-center">
          <motion.a
            href={resumeUrl}
            download="Harsh_Kakadiya_Resume.pdf"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-cyan-500/20 backdrop-blur-sm border border-cyan-400/50 text-cyan-400 px-6 py-3 rounded-xl font-bold text-lg transition-all hover:bg-cyan-500/30 hover:border-cyan-400/70 inline-block"
          >
            Download Resume
          </motion.a>
        </div>
      </motion.div>
    </div>
  );
}