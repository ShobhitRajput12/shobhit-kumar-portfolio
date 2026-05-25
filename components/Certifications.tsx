import React from 'react';
import { CERTIFICATIONS } from '../constants';

const Certifications: React.FC = () => {
  return (
    <section id="certifications" className="py-20 scroll-mt-20 border-t border-slate-800/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* ✅ Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight">
            <span className="gradient-text">Certifications</span>
          </h2>
          <p className="mt-4 text-slate-400 text-base md:text-lg max-w-xl mx-auto">
            Professional credentials, academic specializations, and validated tech stack achievements.
          </p>
        </div>

        {/* ✅ Grid Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {CERTIFICATIONS.map((cert, index) => (
            <div 
              key={index}
              className="group relative rounded-2xl p-[1px] bg-gradient-to-b from-white/5 to-transparent hover:from-sky-500/30 transition-all duration-300 shadow-xl"
            >
              {/* Glass Inner Card */}
              <div className="h-full rounded-2xl bg-slate-900/60 backdrop-blur-md p-6 border border-white/5 hover:bg-slate-900/80 transition-colors flex flex-col justify-between">
                
                <div>
                  {/* Top Icon & Date */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="h-12 w-12 rounded-xl bg-slate-800/60 flex items-center justify-center border border-white/10 group-hover:border-sky-500/20 transition-all duration-300">
                      <i className={`${cert.icon || 'fa-solid fa-award text-sky-400'} text-xl`}></i>
                    </div>
                    <span className="text-xs font-bold text-slate-500 uppercase tracking-widest bg-slate-800/40 px-2.5 py-1 rounded-full border border-slate-800/60">
                      {cert.date}
                    </span>
                  </div>

                  {/* Title & Issuer */}
                  <h3 className="text-lg font-bold text-white mb-1 group-hover:text-sky-400 transition-colors duration-200">
                    {cert.title}
                  </h3>
                  <p className="text-sm font-semibold text-slate-400 mb-4">
                    {cert.issuer}
                  </p>
                </div>

                {/* Bottom credential detail if present */}
                {cert.credentialId && (
                  <div className="mt-4 pt-4 border-t border-slate-800/60 flex items-center justify-between">
                    <span className="text-xs font-medium text-slate-500 tracking-wider font-mono">
                      ID: {cert.credentialId}
                    </span>
                    {cert.credentialUrl && (
                      <a 
                        href={cert.credentialUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs font-bold text-sky-400 hover:text-sky-300 flex items-center gap-1 group-hover:underline transition-all"
                      >
                        Verify <i className="fa-solid fa-arrow-up-right-from-square text-[10px]"></i>
                      </a>
                    )}
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

export default Certifications;
