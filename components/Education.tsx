
import React from 'react';
import { EDUCATION } from '../constants';

const Education: React.FC = () => {
  return (
    <section id="education" className="py-20 px-4 scroll-mt-24">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
          Academic <span className="gradient-text">Journey</span>
        </h2>
        <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-sky-500 before:via-slate-800 before:to-transparent">
          {EDUCATION.map((edu, idx) => (
            <div key={idx} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
              {/* Icon */}
              <div className="flex items-center justify-center w-10 h-10 rounded-full border border-slate-700 bg-slate-900 text-sky-500 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                <i className="fa-solid fa-graduation-cap"></i>
              </div>
              {/* Content */}
              <div className="w-[calc(100%-4rem)] md:w-[45%] glass-card p-6 rounded-2xl border border-white/5">
                <div className="flex flex-col mb-1">
                  <span className="text-sky-400 font-bold">{edu.duration}</span>
                  <h3 className="text-xl font-bold text-white">{edu.degree}</h3>
                </div>
                <div className="text-slate-300 font-medium">{edu.institution}</div>
                <div className="text-slate-400 text-sm mb-4">{edu.location} • <span className="text-emerald-400">{edu.score}</span></div>
                {edu.coursework && (
                  <div className="flex flex-wrap gap-2">
                    {edu.coursework.map((course, i) => (
                      <span key={i} className="text-[10px] uppercase font-semibold text-slate-500 bg-slate-800/50 px-2 py-1 rounded">
                        {course}
                      </span>
                    ))}
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
