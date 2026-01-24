
import React from 'react';
import { PROJECTS } from '../constants';

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-24 px-4 scroll-mt-20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
            Personal <span className="gradient-text">Showcase</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            Real-world applications built with a focus on user experience and robust architecture.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {PROJECTS.map((project, idx) => (
            <div key={idx} className="group flex flex-col glass-card rounded-[2.5rem] overflow-hidden border border-white/10 hover:border-sky-500/30 transition-all duration-500">
              {/* Browser-like Frame */}
              <div className="bg-slate-800/50 p-3 flex gap-1.5 border-b border-white/5">
                <div className="w-2.5 h-2.5 rounded-full bg-red-500/40"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-amber-500/40"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/40"></div>
              </div>
              
              <div className="relative h-64 md:h-80 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a] via-transparent to-transparent"></div>
              </div>
              
              <div className="p-8 md:p-10 flex-grow flex flex-col">
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-sky-400 transition-colors">
                  {project.title}
                </h3>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, i) => (
                    <span key={i} className="px-2.5 py-1 text-[10px] font-bold text-sky-400 bg-sky-400/5 rounded-md border border-sky-400/10">
                      {tech}
                    </span>
                  ))}
                </div>

                <ul className="space-y-3 mb-8 flex-grow">
                  {project.points.map((point, i) => (
                    <li key={i} className="flex gap-3 text-slate-400 text-sm leading-relaxed">
                      <i className="fa-solid fa-circle-check text-sky-500 mt-1 shrink-0"></i>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex gap-4">
                  {project.liveUrl ? (
                    <a 
                      href={project.liveUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex-1 py-3.5 bg-sky-500 hover:bg-sky-600 text-white font-bold rounded-xl transition-all shadow-lg shadow-sky-500/20 text-center flex items-center justify-center gap-2"
                    >
                      View Live <i className="fa-solid fa-arrow-up-right-from-square text-xs"></i>
                    </a>
                  ) : (
                    <button className="flex-1 py-3.5 bg-slate-700 text-slate-400 font-bold rounded-xl cursor-not-allowed">
                      Coming Soon
                    </button>
                  )}
                  {project.githubUrl && (
                    <a 
                      href={project.githubUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="px-5 py-3.5 bg-slate-800 hover:bg-slate-700 text-white rounded-xl transition-all border border-slate-700 flex items-center justify-center gap-2"
                      title="View Source Code"
                    >
                      <i className="fa-brands fa-github text-xl"></i>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
