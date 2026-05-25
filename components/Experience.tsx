import React from 'react';
import { EXPERIENCE } from '../constants';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-24 px-4 scroll-mt-24">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
            Professional <span className="gradient-text">Experience</span>
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto text-sm">
            My career journey, core industry practices, and recent developer milestones.
          </p>
        </div>

        <div className="relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-sky-500 before:via-indigo-500/40 before:to-transparent">
          {EXPERIENCE.map((exp, idx) => (
            <div key={idx} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
              {/* Timeline Icon Node */}
              <div className="flex items-center justify-center w-10 h-10 rounded-full border border-slate-700/80 bg-slate-900 shadow-md shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 group-hover:border-sky-400 group-hover:shadow-[0_0_12px_rgba(56,189,248,0.3)] transition-all duration-300 z-10">
                <i className="fa-solid fa-briefcase text-sky-400 text-sm"></i>
              </div>

              {/* Experience Card */}
              <div className="w-[calc(100%-4rem)] md:w-[45%] glass-card p-6 md:p-8 rounded-[2rem] border border-white/5 hover:border-sky-500/25 hover:shadow-[0_0_30px_rgba(56,189,248,0.06)] hover:scale-[1.015] hover:-translate-y-0.5 transition-all duration-300">
                {/* Header */}
                <div className="flex flex-col mb-4">
                  <span className="text-sky-400 font-bold text-xs uppercase tracking-wider flex items-center gap-1.5 mb-1.5">
                    <i className="fa-regular fa-calendar-days text-[11px]"></i> {exp.duration}
                  </span>
                  <h3 className="text-2xl font-extrabold text-white group-hover:text-sky-400 transition-colors duration-300 leading-tight">
                    {exp.role}
                  </h3>
                  <div className="text-slate-200 font-bold text-base mt-1 flex items-center gap-1.5">
                    <i className="fa-solid fa-building text-slate-500 text-xs"></i> {exp.company}
                  </div>
                  <div className="text-slate-400 text-xs mt-1 flex items-center gap-1">
                    <i className="fa-solid fa-location-dot text-slate-500 text-[10px]"></i> {exp.location}
                  </div>
                </div>

                {/* Job Achievements */}
                <ul className="space-y-3 mb-6">
                  {exp.points.map((point, i) => (
                    <li key={i} className="flex gap-2.5 text-slate-350 text-sm leading-relaxed">
                      <i className="fa-solid fa-circle-check text-sky-500/80 mt-1 shrink-0 text-xs"></i>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>

                {/* Tech Pills */}
                {exp.technologies && exp.technologies.length > 0 && (
                  <div className="pt-4 border-t border-white/5">
                    <div className="text-[10px] uppercase font-bold text-slate-500 tracking-wider mb-2">Technologies Used</div>
                    <div className="flex flex-wrap gap-1.5">
                      {exp.technologies.map((tech, i) => (
                        <span
                          key={i}
                          className="px-2.5 py-1 text-[10px] font-bold text-sky-400 bg-sky-400/5 rounded-md border border-sky-400/10 hover:bg-sky-400/10 transition-colors"
                        >
                          {tech}
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

export default Experience;
