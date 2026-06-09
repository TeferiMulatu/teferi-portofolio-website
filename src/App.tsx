import React from 'react';
import { motion } from 'framer-motion';
import { ThemeProvider, useTheme } from './context/ThemeContext';
import { ContactForm } from './components/ContactForm';
import { 
  Layers, 
  Sun, 
  Moon, 
  Github, 
  Linkedin, 
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

  const springTransition = { type: 'spring', stiffness: 150, damping: 20 };
  
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
  };

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
      title: 'Dynamic Content Delivery Flow',
      description: 'High-performance webpage that shows clean interface parts, animations, and strong data state tracking.',
      tags: ['React', 'TypeScript', 'Tailwind v4', 'Framer Motion']
    }
  ];

  return (
    <div className="min-h-screen relative selection:bg-indigo-500/30 selection:text-indigo-200">
      {/* Navbar Container */}
      <nav className="fixed top-0 left-0 right-0 z-40 bg-white/70 dark:bg-slate-950/70 backdrop-blur-md border-b border-slate-200/60 dark:border-slate-800/60 transition-colors duration-300">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2 font-semibold tracking-tight text-slate-900 dark:text-white">
            <Layers className="w-5 h-5 text-indigo-500" />
            <span>TM.dev</span>
          </div>
          
          <div className="flex items-center gap-4">
            <button 
              onClick={toggleTheme}
              className="p-2 rounded-xl border border-slate-200/60 dark:border-slate-800/60 bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 hover:text-indigo-500 cursor-pointer transition-colors"
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
            className="md:col-span-2 p-6 sm:p-8 rounded-3xl bg-white dark:bg-slate-900/40 border border-slate-200/60 dark:border-slate-800/60 flex flex-col justify-between"
          >
            <div>
              <div className="p-3 bg-indigo-50 dark:bg-indigo-500/10 text-indigo-500 rounded-xl w-fit mb-6">
                <Cpu className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-slate-900 dark:text-slate-100">Technical Skillset Stack</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
                A verified layout set comprising modern frameworks and storage layers built to render responsive user interfaces.
              </p>
            </div>
            <div className="flex flex-wrap gap-2">
              {coreSkills.map((skill) => (
                <span 
                  key={skill}
                  className="px-3.5 py-1.5 text-xs font-medium rounded-lg bg-slate-50 dark:bg-slate-900 border border-slate-200/60 dark:border-slate-800/60 text-slate-700 dark:text-slate-300"
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
            className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-slate-900/40 border border-slate-200/60 dark:border-slate-800/60 flex flex-col justify-between"
          >
            <div>
              <div className="p-3 bg-slate-50 dark:bg-slate-900 border border-slate-200/60 dark:border-slate-800/60 text-slate-700 dark:text-slate-300 rounded-xl w-fit mb-6">
                <Globe className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-slate-900 dark:text-slate-100">Connect</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                Find my ongoing opensource contributions and write-ups across external platforms.
              </p>
            </div>
            
            <div className="space-y-2 mt-6">
              <a href="https://github.com" target="_blank" rel="noreferrer" className="flex items-center justify-between p-3 rounded-xl bg-slate-50 hover:bg-slate-100 dark:bg-slate-900 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 transition-colors group">
                <div className="flex items-center gap-3">
                  <Github className="w-4 h-4" />
                  <span className="text-sm font-medium">GitHub</span>
                </div>
                <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="flex items-center justify-between p-3 rounded-xl bg-slate-50 hover:bg-slate-100 dark:bg-slate-900 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 transition-colors group">
                <div className="flex items-center gap-3">
                  <Linkedin className="w-4 h-4" />
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
            className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-slate-900/40 border border-slate-200/60 dark:border-slate-800/60 flex flex-col justify-between md:col-span-1"
          >
            <div>
              <div className="text-xs font-mono text-indigo-500 mb-3 tracking-widest uppercase font-semibold">Deployment 01</div>
              <h4 className="text-xl font-bold mb-3 text-slate-900 dark:text-slate-100">{projects[0].title}</h4>
              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
                {projects[0].description}
              </p>
            </div>
            <div className="flex flex-wrap gap-1.5">
              {projects[0].tags.map(t => (
                <span key={t} className="px-2 py-1 text-[11px] font-mono rounded bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400">{t}</span>
              ))}
            </div>
          </motion.div>

          {/* Bento Card: Project 2 */}
          <motion.div
            variants={itemVariants}
            whileHover={hoverAnimation}
            className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-slate-900/40 border border-slate-200/60 dark:border-slate-800/60 flex flex-col justify-between md:col-span-2"
          >
            <div>
              <div className="text-xs font-mono text-indigo-500 mb-3 tracking-widest uppercase font-semibold">Deployment 02</div>
              <h4 className="text-xl font-bold mb-3 text-slate-900 dark:text-slate-100">{projects[1].title}</h4>
              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
                {projects[1].description}
              </p>
            </div>
            <div className="flex flex-wrap gap-1.5">
              {projects[1].tags.map(t => (
                <span key={t} className="px-2 py-1 text-[11px] font-mono rounded bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400">{t}</span>
              ))}
            </div>
          </motion.div>

          {/* Bento Card: Interactive Pipeline Forms Area */}
          <motion.div
            id="contact"
            variants={itemVariants}
            className="md:col-span-3 p-6 sm:p-8 rounded-3xl bg-white dark:bg-slate-900/40 border border-slate-200/60 dark:border-slate-800/60 grid grid-cols-1 md:grid-cols-5 gap-8 items-start scroll-mt-24"
          >
            <div className="md:col-span-2">
              <div className="p-3 bg-indigo-50 dark:bg-indigo-500/10 text-indigo-500 rounded-xl w-fit mb-6">
                <Mail className="w-5 h-5" />
              </div>
              <h3 className="text-2xl font-bold mb-3 text-slate-900 dark:text-slate-100">Start a Project</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                Fill out the secure communication contact card. Form payloads execute data delivery pipeline dispatches seamlessly across remote architecture nodes.
              </p>
            </div>
            <div className="md:col-span-3 w-full">
              <ContactForm />
            </div>
          </motion.div>
        </motion.section>
      </main>

      {/* Persistent Canvas Footer Layout */}
      <footer className="border-t border-slate-200/60 dark:border-slate-800/60 py-8 transition-colors duration-300">
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