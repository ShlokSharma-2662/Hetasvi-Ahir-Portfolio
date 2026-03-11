import React from 'react';
import { motion } from 'motion/react';
import { Download } from 'lucide-react';
import { portfolioData } from '../constants';

const About = () => {
  return (
    <section id="about" className="section-padding bg-bg-dark">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h2 className="text-sm font-bold text-primary uppercase tracking-[0.3em] mb-4">About Me</h2>
            <h3 className="text-4xl md:text-5xl font-bold text-white mb-8 leading-tight">
              Crafting Scalable Backend Solutions with Precision
            </h3>
            <p className="text-xl text-slate-400 mb-12 leading-relaxed">
              {portfolioData.summary}
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-16">
              {portfolioData.stats.map((stat) => (
                <div key={stat.label} className="text-center p-8 rounded-3xl bg-card-dark border border-border-dark hover:shadow-lg hover:shadow-primary/5 transition-all">
                  <p className="text-4xl font-bold text-primary mb-2">{stat.value}</p>
                  <p className="text-sm font-semibold text-slate-500 uppercase tracking-widest">{stat.label}</p>
                </div>
              ))}
            </div>

            <div className="flex flex-col md:flex-row gap-8 items-center justify-center">
              <button className="flex items-center gap-2 bg-primary text-bg-dark px-10 py-5 rounded-full font-bold hover:bg-primary-dark transition-all shadow-2xl shadow-primary/20">
                <Download size={22} />
                Download Resume
              </button>
              
              <div className="flex flex-wrap justify-center gap-8">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary border border-primary/20">
                    <span className="font-bold">01</span>
                  </div>
                  <div className="text-left">
                    <h4 className="font-bold text-white">Backend Excellence</h4>
                    <p className="text-sm text-slate-500">Expertise in Spring Boot</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary border border-primary/20">
                    <span className="font-bold">02</span>
                  </div>
                  <div className="text-left">
                    <h4 className="font-bold text-white">Agile Delivery</h4>
                    <p className="text-sm text-slate-500">Fast-paced Scrum practices</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
