import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Navbar from '../components/navigation/Navbar';
import { useMobile } from '../hooks/useMobile';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const { isMobile } = useMobile();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await fetch('https://formspree.io/f/xwpnzgnq', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      
      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        throw new Error('Form submission failed');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const socialLinks = [
    { name: 'GitHub', url: 'https://github.com/harsh-kakadiya1', icon: 'M12 2C6.477 2 2 6.477 2 12c0 4.42 2.87 8.17 6.84 9.5.5.1.68-.22.68-.48v-1.7c-2.78.6-3.37-1.34-3.37-1.34-.46-.6-1.12-.75-1.12-.75-.9-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.9 1.52 2.36 1.08 2.93.83.1-.63.35-1.08.63-1.33-2.2-.24-4.52-1.1-4.52-4.9 0-1.08.38-1.97 1.03-2.67-.1-.24-.45-1.23.1-2.56 0 0 .84-.26 2.75 1.02.8-.22 1.65-.33 2.5-.33.85 0 1.7.11 2.5.33 1.9-1.28 2.75-1.02 2.75-1.02.55 1.33.2 2.32.1 2.56.65.7 1.03 1.59 1.03 2.67 0 3.8-2.32 4.66-4.52 4.9.36.3.68.92.68 1.85v2.75c0 .26.18.58.7.48C21.13 20.17 24 16.42 24 12c0-5.52-4.48-10-10-10z' },
    { name: 'LinkedIn', url: 'https://linkedin.com/in/harsh-kakadiya', icon: 'M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.05-1.85-3.05-1.85 0-2.14 1.45-2.14 2.95v5.67H9.35V9h3.4v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.28 2.37 4.28 5.45v6.29zM5.34 7.44c-1.15 0-2.08-.94-2.08-2.08 0-1.15.93-2.08 2.08-2.08 1.15 0 2.08.93 2.08 2.08 0 1.14-.93 2.08-2.08 2.08zM7.12 20.45H3.56V9h3.56v11.45zM22.23 0H1.77C.8 0 0 .8 0 1.77v20.46c0 .98.8 1.77 1.77 1.77h20.46c.98 0 1.77-.8 1.77-1.77V1.77C24 .8 23.2 0 22.23 0z' },
    { name: 'Instagram', url: 'https://instagram.com/hars.h_k', icon: 'M12 2.16c2.67 0 3.05.02 4.1.07 1.05.05 1.6.22 1.97.37.5.19.86.42 1.24.8s.61.74.8 1.24c.15.37.32.92.37 1.97.05 1.05.07 1.43.07 4.1s-.02 3.05-.07 4.1c-.05 1.05-.22 1.6-.37 1.97-.19.5-.42.86-.8 1.24s-.74.61-1.24.8c-.37.15-.92.32-1.97.37-1.05.05-1.43.07-4.1.07s-3.05-.02-4.1-.07c-1.05-.05-1.6-.22-1.97-.37-.5-.19-.86-.42-1.24-.8s-.61-.74-.8-1.24c-.15-.37-.32-.92-.37-1.97-.05-1.05-.07-1.43-.07-4.1s.02-3.05.07-4.1c.05-1.05.22-1.6.37-1.97.19-.5.42-.86.8-1.24s.74-.61 1.24-.8c.37-.15.92-.32 1.97-.37 1.05-.05 1.43-.07 4.1-.07zm0 5.54c-1.8 0-3.26 1.46-3.26 3.26s1.46 3.26 3.26 3.26 3.26-1.46 3.26-3.26-1.46-3.26-3.26-3.26zm0 5.38c-1.17 0-2.12-.95-2.12-2.12s.95-2.12 2.12-2.12 2.12.95 2.12 2.12-.95 2.12-2.12 2.12zm6.54-5.54c0 .42-.34.76-.76.76s-.76-.34-.76-.76.34-.76.76-.76.76.34.76.76z' },
    { name: 'Email', url: 'mailto:harshkakadiya128@gmail.com', icon: 'M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z' }
  ];

  return (
    <div className="min-h-screen relative overflow-hidden bg-white">
      <Navbar />
      
      <div className="relative z-10 container mx-auto px-4 py-24 pt-32">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-5xl mx-auto"
        >
          <div className="mb-12 border-4 border-black p-8 md:p-12">
            <h1 className={`${isMobile ? 'text-5xl' : 'text-7xl'} font-black text-black mb-4 uppercase tracking-tight leading-none`}>
              GET IN TOUCH
            </h1>
            <div className="w-32 h-1 bg-accent-red mb-6"></div>
            <p className="text-black font-bold text-lg max-w-2xl leading-relaxed">
              Have a project in mind or want to discuss opportunities? Reach out and let's create something amazing together.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Contact Form */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="border-4 border-black p-8 bg-white"
            >
              <h2 className="text-2xl font-black text-black mb-6 uppercase tracking-tight">MESSAGE</h2>
              
              {submitStatus === 'success' ? (
                <div className="border-4 border-black bg-accent-yellow text-black p-4 mb-6 font-bold">
                  ✓ Thank you! I&apos;ll respond soon.
                </div>
              ) : submitStatus === 'error' ? (
                <div className="border-4 border-black bg-accent-red text-white p-4 mb-6 font-bold">
                  Error! Please try again.
                </div>
              ) : null}
              
              <form 
                onSubmit={handleSubmit} 
                className="space-y-4"
                action="https://formspree.io/f/xwpnzgnq"
                method="POST"
              >
                <div>
                  <label htmlFor="name" className="block text-xs font-black uppercase tracking-wider text-black mb-2">
                    NAME
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white border-4 border-black text-black placeholder-gray-500 focus:outline-none font-bold"
                    placeholder="Your name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-xs font-black uppercase tracking-wider text-black mb-2">
                    EMAIL
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white border-4 border-black text-black placeholder-gray-500 focus:outline-none font-bold"
                    placeholder="your.email@example.com"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-xs font-black uppercase tracking-wider text-black mb-2">
                    MESSAGE
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-white border-4 border-black text-black placeholder-gray-500 focus:outline-none font-bold resize-none"
                    placeholder="Your message here..."
                  />
                </div>
                
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full py-3 px-6 bg-black text-white border-4 border-black font-black uppercase tracking-wider transition-all hover:bg-accent-red ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
                >
                  {isSubmitting ? 'SENDING...' : 'SEND'}
                </motion.button>
              </form>
            </motion.div>
            
            {/* Contact Info */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="flex flex-col gap-6"
            >
              {/* Info Card 1 */}
              <div className="border-4 border-black p-6 bg-accent-yellow">
                <h3 className="text-base font-black text-black mb-3 uppercase tracking-tight">EMAIL</h3>
                <a href="mailto:harshkakadiya128@gmail.com" className="text-black font-bold hover:underline break-all">
                  harshkakadiya128@gmail.com
                </a>
              </div>
              
              {/* Info Card 2 */}
              <div className="border-4 border-black p-6 bg-white">
                <h3 className="text-base font-black text-black mb-3 uppercase tracking-tight">LOCATION</h3>
                <p className="text-black font-bold">Surat, Gujarat, India</p>
              </div>
              
              {/* Social Links */}
              <div className="border-4 border-black p-6 bg-black text-white">
                <h3 className="text-base font-black text-white mb-4 uppercase tracking-tight">CONNECT</h3>
                <div className="flex flex-wrap gap-3">
                  {socialLinks.map((social) => (
                    <a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 py-2 bg-accent-red text-white border-2 border-white font-black text-xs uppercase tracking-wider hover:bg-white hover:text-black transition-all"
                      title={social.name}
                    >
                      {social.name.toUpperCase()}
                    </a>
                  ))}
                </div>
              </div>
              
              {/* CTA Card */}
              <a 
                href="https://calendly.com/harshkakadiya128" 
                target="_blank" 
                rel="noopener noreferrer"
                className="border-4 border-black p-6 bg-accent-red text-white font-black no-underline hover:bg-black hover:text-accent-red transition-all text-center block"
              >
                <div className="text-base uppercase tracking-tight mb-2">SCHEDULE A CALL</div>
                <div className="text-xs uppercase tracking-wider">Available for projects</div>
              </a>
            </motion.div>
          </div>
        </motion.div>
      </div>
      
    </div>
  );
}
