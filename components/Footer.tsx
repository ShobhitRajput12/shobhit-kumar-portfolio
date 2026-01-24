
import React from 'react';
import { PERSONAL_INFO } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="py-20 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-white mb-8">Let's <span className="gradient-text">Connect</span></h2>
        <p className="text-slate-400 mb-12 max-w-xl mx-auto">
          Currently looking for internship opportunities or full-time roles where I can contribute to exciting products and grow as a developer.
        </p>
        <div className="flex flex-col md:flex-row justify-center items-center gap-8 mb-16">
          <a href={`mailto:${PERSONAL_INFO.email}`} className="group flex items-center gap-3 text-slate-300 hover:text-white transition-colors">
            <div className="w-12 h-12 flex items-center justify-center rounded-full bg-slate-800 group-hover:bg-red-500/20 transition-all">
              <i className="fa-solid fa-envelope text-red-400"></i>
            </div>
            <span>{PERSONAL_INFO.email}</span>
          </a>
          <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noopener noreferrer" className="group flex items-center gap-3 text-slate-300 hover:text-white transition-colors">
            <div className="w-12 h-12 flex items-center justify-center rounded-full bg-slate-800 group-hover:bg-sky-500/20 transition-all">
              <i className="fa-brands fa-linkedin text-sky-400"></i>
            </div>
            <span>LinkedIn Profile</span>
          </a>
          <div className="flex items-center gap-3 text-slate-300">
            <div className="w-12 h-12 flex items-center justify-center rounded-full bg-slate-800">
              <i className="fa-solid fa-phone text-emerald-400"></i>
            </div>
            <span>{PERSONAL_INFO.phone}</span>
          </div>
        </div>
        <div className="pt-8 border-t border-slate-800/50 text-slate-500 text-sm">
          &copy; {new Date().getFullYear()} {PERSONAL_INFO.name}. Built with React & Tailwind CSS.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
