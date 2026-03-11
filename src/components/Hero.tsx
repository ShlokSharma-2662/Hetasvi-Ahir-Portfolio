import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Github, Linkedin, ArrowRight, Database, Server, Cloud, Code2 } from 'lucide-react';
import { portfolioData } from '../constants';

const Hero = () => {
  const [titleIndex, setTitleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  const floatingIcons = [
    { Icon: Database, color: 'text-emerald-500', delay: 0, x: '10%', y: '20%' },
    { Icon: Server, color: 'text-blue-500', delay: 0.5, x: '85%', y: '15%' },
    { Icon: Cloud, color: 'text-sky-500', delay: 1, x: '80%', y: '70%' },
    { Icon: Code2, color: 'text-purple-500', delay: 1.5, x: '15%', y: '75%' },
  ];

  useEffect(() => {
    const currentTitle = portfolioData.titles[titleIndex];
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (displayText.length < currentTitle.length) {
          setDisplayText(currentTitle.slice(0, displayText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        if (displayText.length > 0) {
          setDisplayText(displayText.slice(0, displayText.length - 1));
        } else {
          setIsDeleting(false);
          setTitleIndex((prev) => (prev + 1) % portfolioData.titles.length);
        }
      }
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, titleIndex]);

  return (
    <section id="home" className="min-h-screen flex items-center relative overflow-hidden bg-bg-dark">
      {/* Background Decoration */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/5 -skew-x-12 transform translate-x-1/4" />
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-primary/10 rounded-full blur-3xl opacity-20" />
      
      {/* Floating Icons */}
      {floatingIcons.map((item, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0 }}
          animate={{ 
            opacity: [0.2, 0.5, 0.2],
            y: [0, -20, 0],
            x: [0, 10, 0]
          }}
          transition={{ 
            duration: 5, 
            repeat: Infinity, 
            delay: item.delay,
            ease: "easeInOut"
          }}
          className={`absolute ${item.color} hidden md:block`}
          style={{ left: item.x, top: item.y }}
        >
          <item.Icon size={32} strokeWidth={1.5} />
        </motion.div>
      ))}

      <div className="container-custom relative z-10 px-6 flex flex-col lg:flex-row items-center gap-12">
        <div className="flex-1 max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block py-1 px-3 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-6 border border-primary/20">
              Available for new opportunities
            </span>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight leading-tight">
              Hi, I'm <span className="text-primary">{portfolioData.name}</span>
            </h1>
            <div className="h-12 md:h-16 mb-8">
              <p className="text-2xl md:text-4xl text-slate-400 font-medium">
                {displayText}
                <span className="animate-pulse text-primary">|</span>
              </p>
            </div>
            <p className="text-lg text-slate-400 mb-10 leading-relaxed max-w-2xl">
              A passionate Software Developer with 4+ years of experience in building robust backend systems. 
              Specializing in <span className="text-white font-semibold">Java, Spring Boot, and Microservices</span>.
            </p>

            <div className="flex flex-wrap gap-4 items-center">
              <motion.a
                href="#projects"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-primary text-bg-dark px-8 py-4 rounded-full font-bold flex items-center gap-2 shadow-xl shadow-primary/20 hover:bg-primary-dark transition-all"
              >
                View My Work
                <ArrowRight size={20} />
              </motion.a>
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-card-dark text-white border border-border-dark px-8 py-4 rounded-full font-bold hover:bg-slate-800 transition-all"
              >
                Get in Touch
              </motion.a>
              
              <div className="flex gap-4 ml-4">
                <a href={portfolioData.contact.github} target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-card-dark border border-border-dark text-slate-400 hover:text-primary hover:border-primary transition-all shadow-sm">
                  <Github size={24} />
                </a>
                <a href={portfolioData.contact.linkedin} target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-card-dark border border-border-dark text-slate-400 hover:text-primary hover:border-primary transition-all shadow-sm">
                  <Linkedin size={24} />
                </a>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Code Terminal Decoration */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="hidden lg:block flex-1 max-w-md w-full"
        >
          <div className="bg-card-dark border border-border-dark rounded-2xl shadow-2xl overflow-hidden transform rotate-2 hover:rotate-0 transition-transform duration-500">
            <div className="bg-slate-800/50 px-4 py-3 flex items-center gap-2 border-b border-border-dark">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-500/40" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/40" />
                <div className="w-3 h-3 rounded-full bg-green-500/40" />
              </div>
              <div className="text-[10px] text-slate-500 font-mono ml-2 uppercase tracking-widest">BackendService.java</div>
            </div>
            <div className="p-8 font-mono text-xs leading-relaxed">
              <div className="text-purple-400">@RestController</div>
              <div className="text-purple-400">@RequestMapping(<span className="text-emerald-400">"/api/v1"</span>)</div>
              <div className="text-blue-400">public class <span className="text-yellow-400">PortfolioController</span> {"{"}</div>
              <div className="pl-4">
                <div className="mt-2 text-slate-500">// Initialize high-performance backend</div>
                <div className="text-purple-400">@GetMapping(<span className="text-emerald-400">"/status"</span>)</div>
                <div className="text-blue-400">public <span className="text-yellow-400">ResponseEntity</span> {"<String>"} getStatus() {"{"}</div>
                <div className="pl-4">
                  <span className="text-purple-400">return</span> <span className="text-yellow-400">ResponseEntity</span>.ok(<span className="text-emerald-400">"System Online"</span>);
                </div>
                <div className="text-blue-400">{"}"}</div>
              </div>
              <div className="text-blue-400">{"}"}</div>
              
              <div className="mt-6 pt-6 border-t border-border-dark/50">
                <div className="flex items-center gap-2 text-emerald-500/70">
                  <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="text-[10px] uppercase tracking-tighter">Connection: Stable</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
