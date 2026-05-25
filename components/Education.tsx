
import React from 'react';
import { EDUCATION } from '../constants';

const Education: React.FC = () => {
  // Helper to dynamically choose icons based on academic level
  const getAcademicIcon = (degree: string) => {
    const deg = degree.toLowerCase();
    if (deg.includes("secondary") || deg.includes("class")) {
      return "fa-solid fa-school text-indigo-400";
    }
    return "fa-solid fa-graduation-cap text-sky-400";
  };

  // Helper to dynamically style scores as highlight badges
  const renderScoreBadge = (score: string) => {
    const isCGPA = score.toLowerCase().includes("cgpa");
    if (isCGPA) {
      return (
        <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-bold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
          <i className="fa-solid fa-award text-[10px]"></i> {score}
        </span>
      );
    }
    return (
      <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-bold bg-sky-500/10 text-sky-400 border border-sky-500/20">
        <i className="fa-solid fa-chart-simple text-[10px]"></i> {score}
      </span>
    );
  };

  return (
    <section id="education" className="py-24 px-4 scroll-mt-24 bg-slate-900/20">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
            Academic <span className="gradient-text">Journey</span>
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto text-sm">
            Educational background and fundamental courseworks that shape my engineering principles.
          </p>
        </div>
        
        <div className="space-y-12 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-sky-500 before:via-indigo-500/40 before:to-transparent">
          {EDUCATION.map((edu, idx) => (
            <div key={idx} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
              {/* Timeline Icon Node */}
              <div className="flex items-center justify-center w-10 h-10 rounded-full border border-slate-700/80 bg-slate-900 shadow-md shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 group-hover:border-sky-400 group-hover:shadow-[0_0_12px_rgba(56,189,248,0.3)] transition-all duration-300 z-10">
                <i className={getAcademicIcon(edu.degree)}></i>
              </div>
              
              {/* Content Card */}
              <div className="w-[calc(100%-4rem)] md:w-[45%] glass-card p-6 md:p-7 rounded-[2rem] border border-white/5 hover:border-sky-500/25 hover:shadow-[0_0_30px_rgba(56,189,248,0.06)] hover:scale-[1.015] hover:-translate-y-0.5 transition-all duration-300">
                <div className="flex flex-col mb-3">
                  <span className="text-sky-400 font-bold text-xs uppercase tracking-wider flex items-center gap-1.5 mb-1.5">
                    <i className="fa-regular fa-calendar-days text-[11px]"></i> {edu.duration}
                  </span>
                  <h3 className="text-xl font-bold text-white group-hover:text-sky-400 transition-colors duration-300 leading-tight">
                    {edu.degree}
                  </h3>
                </div>
                
                <div className="text-slate-200 font-semibold text-sm mb-1">{edu.institution}</div>
                <div className="text-slate-400 text-xs mb-4 flex flex-wrap items-center gap-2">
                  <span>{edu.location}</span>
                  <span>•</span>
                  {renderScoreBadge(edu.score)}
                </div>
                
                {edu.coursework && edu.coursework.length > 0 && (
                  <div className="pt-4 border-t border-white/5">
                    <div className="text-[10px] uppercase font-bold text-slate-500 tracking-wider mb-2">Core Focus</div>
                    <div className="flex flex-wrap gap-1.5">
                      {edu.coursework.map((course, i) => (
                        <span key={i} className="text-[10px] font-medium text-slate-300 bg-slate-800/80 hover:bg-slate-700/50 hover:text-sky-300 border border-white/5 hover:border-sky-500/10 px-2.5 py-1 rounded-md transition-all duration-200">
                          {course}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
