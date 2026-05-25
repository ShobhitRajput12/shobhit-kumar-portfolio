
import React from 'react';
import { SKILLS } from '../constants';

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-24 bg-slate-900/50 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
            Technical <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto text-sm">
            Core strengths, languages, and modern web technologies that I use to design responsive platforms.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SKILLS.map((skillGroup, idx) => (
            <div 
              key={idx} 
              className="p-6 md:p-8 glass-card rounded-[2rem] border border-white/5 border-t-4 border-t-sky-500/30 hover:border-t-sky-400 hover:border-white/10 hover:shadow-[0_0_30px_rgba(56,189,248,0.05)] hover:scale-[1.015] hover:-translate-y-0.5 transition-all duration-300 group"
            >
              <h3 className="text-sky-400 group-hover:text-sky-300 font-bold mb-5 uppercase tracking-wider text-xs flex items-center gap-2">
                <i className="fa-solid fa-code text-[11px] text-sky-500/80"></i> {skillGroup.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {skillGroup.items.map((item, i) => (
                  <span 
                    key={i} 
                    className="px-3.5 py-1.5 bg-slate-800/60 hover:bg-sky-500/10 text-slate-350 hover:text-sky-300 text-xs font-semibold rounded-xl border border-slate-700/50 hover:border-sky-500/20 transition-all duration-200"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
