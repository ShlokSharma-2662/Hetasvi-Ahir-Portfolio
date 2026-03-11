import React from 'react';
import { motion } from 'motion/react';
import { Briefcase, MapPin, Calendar } from 'lucide-react';
import { portfolioData } from '../constants';

const Experience = () => {
  return (
    <section id="experience" className="section-padding bg-bg-dark">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row gap-16">
          <div className="md:w-1/3">
            <h2 className="text-sm font-bold text-primary uppercase tracking-[0.3em] mb-4">Journey</h2>
            <h3 className="text-4xl font-bold text-white mb-6">Professional Experience</h3>
            <p className="text-slate-400 leading-relaxed">
              My career path as a software developer, focusing on building enterprise-grade applications and solving complex backend challenges.
            </p>
          </div>

          <div className="md:w-2/3">
            <div className="relative border-l-2 border-border-dark pl-8 ml-4 space-y-12">
              {portfolioData.experience.map((exp, idx) => (
                <motion.div
                  key={exp.company}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.2 }}
                  className="relative"
                >
                  {/* Dot */}
                  <div className="absolute -left-[41px] top-0 w-5 h-5 rounded-full bg-primary border-4 border-bg-dark shadow-sm" />
                  
                  <div className="bg-card-dark p-8 rounded-3xl border border-border-dark hover:shadow-md hover:shadow-primary/5 transition-all">
                    <div className="flex flex-wrap justify-between items-start gap-4 mb-6">
                      <div>
                        <h4 className="text-2xl font-bold text-white">{exp.role}</h4>
                        <div className="flex items-center gap-2 text-primary font-semibold mt-1">
                          <Briefcase size={16} />
                          {exp.company}
                        </div>
                      </div>
                      <div className="flex flex-col items-end gap-2 text-sm text-slate-500 font-medium">
                        <div className="flex items-center gap-1">
                          <Calendar size={14} />
                          {exp.period}
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin size={14} />
                          {exp.location}
                        </div>
                      </div>
                    </div>
                    
                    <ul className="space-y-3">
                      {exp.description.map((item, i) => (
                        <li key={i} className="flex gap-3 text-slate-400 leading-relaxed">
                          <span className="text-primary mt-1.5">•</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Education */}
            <div className="mt-20">
              <h4 className="text-2xl font-bold text-white mb-8">Education</h4>
              <div className="grid sm:grid-cols-2 gap-6">
                {portfolioData.education.map((edu, idx) => (
                  <motion.div
                    key={edu.institution}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="p-6 rounded-2xl bg-card-dark border border-border-dark"
                  >
                    <p className="text-sm font-bold text-primary mb-2">{edu.period}</p>
                    <h5 className="font-bold text-white mb-1">{edu.degree}</h5>
                    <p className="text-sm text-slate-500">{edu.institution}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
