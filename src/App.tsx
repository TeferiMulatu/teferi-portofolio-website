import React from 'react';
import { motion } from 'framer-motion';
import { ThemeProvider, useTheme } from './context/ThemeContext';
import { ContactForm } from './components/ContactForm';
import { 
  Layers, 
  Sun, 
  Moon, 
  Mail, 
  ArrowUpRight, 
  Database, 
  Cpu, 
  Globe 
} from 'lucide-react';

interface Project {
  title: string;
  description: string;
  tags: string[];
}

const AppContent: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  const springTransition = { type: 'spring', stiffness: 150, damping: 20 } as const;
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: springTransition }
  } as const;

  const hoverAnimation = {
    y: -6,
    scale: 1.015,
    transition: springTransition
  };

  const coreSkills: string[] = [
    'MongoDB', 'Express', 'React', 'Node.js', 
    'TypeScript', 'Next.js', 'Tailwind CSS v4', 'Framer Motion'
  ];

  const projects: Project[] = [
    {
      title: 'Online Auction Management System',
      description: 'Graduation project that handles safe, real-time bidding and user login verification.',
      tags: ['React', 'Node.js', 'Express', 'MongoDB', 'Socket.io']
    },
    {
      title: 'Task manager For Developers',
      description: 'High-performance webpage that shows clean interface parts, animations, and strong data state tracking.',
      tags: ['React', 'TypeScript', 'Tailwind v4', 'Framer Motion']
    }
  ];

  return (
    <div className="min-h-screen relative selection:bg-indigo-500/30 selection:text-indigo-200">
      {/* Navbar Container */}
      <nav className="fixed top-0 left-0 right-0 z-40 bg-white/70 dark:bg-canvas-bg-dark/70 backdrop-blur-md border-b border-border-line-light dark:border-border-line-dark transition-colors duration-300">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2 font-semibold tracking-tight text-slate-900 dark:text-text-main-dark">
            <Layers className="w-5 h-5 text-indigo-500" />
            <span>TM.dev</span>
          </div>
          
          <div className="flex items-center gap-4">
            <button 
              onClick={toggleTheme}
              className="p-2 rounded-xl border border-border-line-light dark:border-border-line-dark bg-card-bg-light dark:bg-card-bg-dark text-slate-700 dark:text-slate-300 hover:text-indigo-500 cursor-pointer transition-colors"
              aria-label="Toggle structural layout paint engine theme value"
            >
              {theme === 'light' ? <Moon className="w-4 h-4" /> : <Sun className="w-4 h-4" />}
            </button>
            <a 
              href="#contact" 
              className="px-4 py-2 text-sm font-medium text-white bg-slate-900 dark:bg-slate-100 dark:text-slate-900 rounded-xl hover:opacity-90 transition-opacity"
            >
              Let's Talk
            </a>
          </div>
        </div>
      </nav>

      {/* Main Structural Framework Canvas */}
      <main className="max-w-6xl mx-auto px-6 pt-32 pb-24">
        
        {/* Hero Section Container */}
        <section className="mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={springTransition}
            className="max-w-3xl"
          >
            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-indigo-50 text-indigo-600 dark:bg-indigo-500/10 dark:text-indigo-400 mb-4 border border-indigo-200/30 dark:border-indigo-500/20">
              Available for Full-Time Roles
            </span>
            <h1 className="text-4xl sm:text-6xl font-bold tracking-tight mb-6 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-700 dark:from-white dark:via-slate-200 dark:to-slate-400 bg-clip-text text-transparent">
              Teferi Mulatu
            </h1>
            <p className="text-xl font-medium text-indigo-600 dark:text-indigo-400 mb-4">
              Full-Stack Web Architect (MERN Stack Expert)
            </p>
            <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed max-w-2xl">
              I build modern web applications using the MERN stack. I focus on clean layouts, easy navigation, and smooth user interactions.
            </p>
          </motion.div>
        </section>

        {/* Bento Grid Architecture */}
        <motion.section 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {/* Bento Card: Engineering Core Capability Overview */}
          <motion.div
            variants={itemVariants}
            whileHover={hoverAnimation}
            className="md:col-span-2 p-6 sm:p-8 rounded-3xl bg-card-bg-light dark:bg-card-bg-dark/40 border border-border-line-light dark:border-border-line-dark flex flex-col justify-between transition-colors duration-300"
          >
            <div>
              <div className="p-3 bg-indigo-50 dark:bg-indigo-500/10 text-indigo-500 rounded-xl w-fit mb-6">
                <Cpu className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-slate-900 dark:text-text-main-dark">Core Tech Stack</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
                A verified layout set comprising modern frameworks and storage layers built to render responsive user interfaces.
              </p>
            </div>
            <div className="flex flex-wrap gap-2">
              {coreSkills.map((skill) => (
                <span 
                  key={skill}
                  className="px-3.5 py-1.5 text-xs font-medium rounded-lg bg-slate-50 dark:bg-canvas-bg-dark border border-border-line-light dark:border-border-line-dark text-slate-700 dark:text-slate-300 transition-colors"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Bento Card: Profiles & Handles */}
          <motion.div
            variants={itemVariants}
            whileHover={hoverAnimation}
            className="p-6 sm:p-8 rounded-3xl bg-card-bg-light dark:bg-card-bg-dark/40 border border-border-line-light dark:border-border-line-dark flex flex-col justify-between transition-colors duration-300"
          >
            <div>
              <div className="p-3 bg-slate-50 dark:bg-canvas-bg-dark border border-border-line-light dark:border-border-line-dark text-slate-700 dark:text-slate-300 rounded-xl w-fit mb-6">
                <Globe className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-slate-900 dark:text-text-main-dark">Connect</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                Find my ongoing open source contributions and professional history across platforms.
              </p>
            </div>
            
            <div className="space-y-2 mt-6">
              <a href="https://github.com" target="_blank" rel="noreferrer" className="flex items-center justify-between p-3 rounded-xl bg-slate-50 hover:bg-slate-100 dark:bg-canvas-bg-dark dark:hover:bg-slate-800/80 text-slate-700 dark:text-slate-300 transition-colors group">
                <div className="flex items-center gap-3">
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.008.069-.008 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                  </svg>
                  <span className="text-sm font-medium">GitHub</span>
                </div>
                <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="flex items-center justify-between p-3 rounded-xl bg-slate-50 hover:bg-slate-100 dark:bg-canvas-bg-dark dark:hover:bg-slate-800/80 text-slate-700 dark:text-slate-300 transition-colors group">
                <div className="flex items-center gap-3">
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                  <span className="text-sm font-medium">LinkedIn</span>
                </div>
                <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
            </div>
          </motion.div>

          {/* Bento Card: Project 1 */}
          <motion.div
            variants={itemVariants}
            whileHover={hoverAnimation}
            className="p-6 sm:p-8 rounded-3xl bg-card-bg-light dark:bg-card-bg-dark/40 border border-border-line-light dark:border-border-line-dark flex flex-col justify-between md:col-span-1 transition-colors duration-300"
          >
            <div>
              <div className="text-xs font-mono text-indigo-500 mb-3 tracking-widest uppercase font-semibold">Deployment 01</div>
              <h4 className="text-xl font-bold mb-3 text-slate-900 dark:text-text-main-dark">{projects[0].title}</h4>
              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
                {projects[0].description}
              </p>
            </div>
            <div className="flex flex-wrap gap-1.5">
              {projects[0].tags.map(t => (
                <span key={t} className="px-2 py-1 text-[11px] font-mono rounded bg-slate-100 dark:bg-canvas-bg-dark text-slate-600 dark:text-slate-400 transition-colors">{t}</span>
              ))}
            </div>
          </motion.div>

          {/* Bento Card: Project 2 */}
          <motion.div
            variants={itemVariants}
            whileHover={hoverAnimation}
            className="p-6 sm:p-8 rounded-3xl bg-card-bg-light dark:bg-card-bg-dark/40 border border-border-line-light dark:border-border-line-dark flex flex-col justify-between md:col-span-2 transition-colors duration-300"
          >
            <div>
              <div className="text-xs font-mono text-indigo-500 mb-3 tracking-widest uppercase font-semibold">Deployment 02</div>
              <h4 className="text-xl font-bold mb-3 text-slate-900 dark:text-text-main-dark">{projects[1].title}</h4>
              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
                {projects[1].description}
              </p>
            </div>
            <div className="flex flex-wrap gap-1.5">
              {projects[1].tags.map(t => (
                <span key={t} className="px-2 py-1 text-[11px] font-mono rounded bg-slate-100 dark:bg-canvas-bg-dark text-slate-600 dark:text-slate-400 transition-colors">{t}</span>
              ))}
            </div>
          </motion.div>

          {/* Bento Card: Interactive Pipeline Forms Area */}
          <motion.div
            id="contact"
            variants={itemVariants}
            className="md:col-span-3 p-6 sm:p-8 rounded-3xl bg-card-bg-light dark:bg-card-bg-dark/40 border border-border-line-light dark:border-border-line-dark grid grid-cols-1 md:grid-cols-5 gap-8 items-start scroll-mt-24 transition-colors duration-300"
          >
            <div className="md:col-span-2">
              <div className="p-3 bg-indigo-50 dark:bg-indigo-500/10 text-indigo-500 rounded-xl w-fit mb-6">
                <Mail className="w-5 h-5" />
              </div>
              <h3 className="text-2xl font-bold mb-3 text-slate-900 dark:text-text-main-dark">Let's Work Together</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                Have a project in mind, a full-time role, or a technical problem you need solved? Drop your details below to send a message straight to my inbox.
              </p>
            </div>
            <div className="md:col-span-3 w-full">
              <ContactForm />
            </div>
          </motion.div>
        </motion.section>
      </main>

      {/* Persistent Canvas Footer Layout */}
      <footer className="border-t border-border-line-light dark:border-border-line-dark py-8 transition-colors duration-300">
        <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 dark:text-slate-400">
          <p>© 2026 Teferi Mulatu. All rights reserved.</p>
          <p>Engineered via Vite + React SPA + Tailwind v4 Architecture.</p>
        </div>
      </footer>
    </div>
  );
};

export default function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}