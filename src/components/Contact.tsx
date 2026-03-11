import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Send, Github, Linkedin } from 'lucide-react';
import { portfolioData } from '../constants';

const Contact = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormState({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setSubmitted(false), 5000);
    }, 1500);
  };

  const contactInfo = [
    { icon: Mail, label: 'Email', value: portfolioData.contact.email, href: `mailto:${portfolioData.contact.email}` },
    { icon: Phone, label: 'Phone', value: portfolioData.contact.phone, href: `tel:${portfolioData.contact.phone.replace(/\s/g, '')}` },
    { icon: MapPin, label: 'Location', value: portfolioData.contact.location, href: '#' },
  ];

  return (
    <section id="contact" className="section-padding bg-bg-dark">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-sm font-bold text-primary uppercase tracking-[0.3em] mb-4">Connect</h2>
            <h3 className="text-4xl font-bold text-white mb-8">Let's Discuss Your Next Project</h3>
            <p className="text-lg text-slate-400 mb-12 leading-relaxed">
              I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.
            </p>

            <div className="space-y-8 mb-12">
              {contactInfo.map((info) => (
                <a 
                  key={info.label}
                  href={info.href}
                  className="flex items-center gap-6 group"
                >
                  <div className="w-14 h-14 rounded-2xl bg-card-dark flex items-center justify-center text-slate-500 group-hover:bg-primary group-hover:text-bg-dark transition-all duration-300 border border-border-dark">
                    <info.icon size={24} />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-1">{info.label}</p>
                    <p className="text-lg font-bold text-white">{info.value}</p>
                  </div>
                </a>
              ))}
            </div>

            <div className="flex gap-4">
              <a href={portfolioData.contact.github} target="_blank" rel="noopener noreferrer" className="p-4 rounded-2xl bg-card-dark text-slate-400 hover:bg-primary hover:text-bg-dark transition-all border border-border-dark">
                <Github size={24} />
              </a>
              <a href={portfolioData.contact.linkedin} target="_blank" rel="noopener noreferrer" className="p-4 rounded-2xl bg-card-dark text-slate-400 hover:bg-primary hover:text-bg-dark transition-all border border-border-dark">
                <Linkedin size={24} />
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-card-dark p-10 rounded-[2.5rem] border border-border-dark"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-400 ml-1">Full Name</label>
                  <input 
                    required
                    type="text" 
                    placeholder="John Doe"
                    className="w-full px-6 py-4 rounded-2xl bg-bg-dark border border-border-dark text-white focus:border-primary focus:ring-4 focus:ring-primary/10 outline-none transition-all"
                    value={formState.name}
                    onChange={(e) => setFormState({...formState, name: e.target.value})}
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-400 ml-1">Email Address</label>
                  <input 
                    required
                    type="email" 
                    placeholder="john@example.com"
                    className="w-full px-6 py-4 rounded-2xl bg-bg-dark border border-border-dark text-white focus:border-primary focus:ring-4 focus:ring-primary/10 outline-none transition-all"
                    value={formState.email}
                    onChange={(e) => setFormState({...formState, email: e.target.value})}
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-400 ml-1">Subject</label>
                <input 
                  required
                  type="text" 
                  placeholder="Project Inquiry"
                  className="w-full px-6 py-4 rounded-2xl bg-bg-dark border border-border-dark text-white focus:border-primary focus:ring-4 focus:ring-primary/10 outline-none transition-all"
                  value={formState.subject}
                  onChange={(e) => setFormState({...formState, subject: e.target.value})}
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-400 ml-1">Message</label>
                <textarea 
                  required
                  rows={5}
                  placeholder="Tell me about your project..."
                  className="w-full px-6 py-4 rounded-2xl bg-bg-dark border border-border-dark text-white focus:border-primary focus:ring-4 focus:ring-primary/10 outline-none transition-all resize-none"
                  value={formState.message}
                  onChange={(e) => setFormState({...formState, message: e.target.value})}
                ></textarea>
              </div>

              <button 
                disabled={isSubmitting}
                className={`w-full py-5 rounded-2xl font-bold flex items-center justify-center gap-3 transition-all ${submitted ? 'bg-emerald-500 text-white' : 'bg-primary text-bg-dark hover:bg-primary-dark shadow-xl shadow-primary/20'}`}
              >
                {isSubmitting ? (
                  <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                ) : submitted ? (
                  <>Message Sent!</>
                ) : (
                  <>
                    Send Message
                    <Send size={20} />
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
