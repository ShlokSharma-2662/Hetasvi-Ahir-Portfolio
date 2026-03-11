import React from 'react';
import { portfolioData } from '../constants';

const Footer = () => {
  return (
    <footer className="py-12 px-6 border-t border-border-dark bg-bg-dark">
      <div className="container-custom flex flex-col md:flex-row justify-between items-center gap-8">
        <div>
          <p className="text-2xl font-bold text-primary tracking-tighter mb-2">
            {portfolioData.name.split(' ')[0]}<span className="text-slate-500">.</span>
          </p>
          <p className="text-sm text-slate-500">
            © {new Date().getFullYear()} {portfolioData.name}. All rights reserved.
          </p>
        </div>

        <div className="flex gap-8">
          <a href="#about" className="text-sm font-medium text-slate-400 hover:text-primary transition-colors">About</a>
          <a href="#projects" className="text-sm font-medium text-slate-400 hover:text-primary transition-colors">Projects</a>
          <a href="#contact" className="text-sm font-medium text-slate-400 hover:text-primary transition-colors">Contact</a>
        </div>

        <div className="text-sm text-slate-600 italic">
          Built with React, Tailwind & Motion
        </div>
      </div>
    </footer>
  );
};

export default Footer;
