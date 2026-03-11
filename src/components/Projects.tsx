import React from 'react';
import { motion } from 'motion/react';
import { CheckCircle2 } from 'lucide-react';
import { portfolioData } from '../constants';

const Projects = () => {
  return (
    <section id="projects" className="section-padding bg-bg-dark">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm font-bold text-primary uppercase tracking-[0.3em] mb-4"
          >
            Portfolio
          </motion.h2>
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl font-bold text-white"
          >
            Featured Projects
          </motion.h3>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {portfolioData.projects.map((project, idx) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group bg-card-dark rounded-[2.5rem] overflow-hidden border border-border-dark shadow-sm hover:shadow-xl hover:shadow-primary/5 transition-all duration-500 flex flex-col"
            >
              <div className="p-8 flex-1 flex flex-col">
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map(t => (
                    <span key={t} className="text-[10px] font-bold uppercase tracking-widest px-3 py-1 bg-primary/10 text-primary rounded-full border border-primary/20">
                      {t}
                    </span>
                  ))}
                </div>
                
                <h4 className="text-2xl font-bold text-white mb-2">{project.title}</h4>
                <p className="text-sm font-medium text-slate-500 mb-4">{project.subtitle}</p>
                <p className="text-slate-400 mb-6 text-sm leading-relaxed">
                  {project.description}
                </p>

                <div className="space-y-3 mt-auto">
                  {project.features.map((feature, i) => (
                    <div key={i} className="flex items-start gap-3 text-sm text-slate-400">
                      <CheckCircle2 size={16} className="text-primary mt-0.5 shrink-0" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
