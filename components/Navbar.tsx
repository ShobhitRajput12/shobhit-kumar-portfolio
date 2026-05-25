
import React from 'react';
import { PERSONAL_INFO } from '../constants';

const Navbar: React.FC = () => {
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const offset = 100; // Increased offset for better visual alignment
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      
      // Update URL hash without causing a jump
      window.history.pushState(null, '', `#${id}`);
    } else {
      console.warn(`Element with id "${id}" not found.`);
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-900/80 backdrop-blur-lg border-b border-slate-800/50">
      <div className="max-w-full mx-auto px-6 md:px-12">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0 group cursor-pointer" onClick={(e) => scrollToSection(e as any, 'about')}>
            <span className="text-2xl font-black gradient-text tracking-tighter uppercase">{PERSONAL_INFO.name}</span>
            <span className="text-slate-500 text-xs block font-medium -mt-1 tracking-widest group-hover:text-sky-400 transition-colors uppercase">Portfolio</span>
          </div>
          
            <div className="hidden md:block">
              <div className="flex items-center space-x-1">
                {[
                  { name: 'About', id: 'about' },
                  { name: 'Experience', id: 'experience' },
                  { name: 'Skills', id: 'skills' },
                  { name: 'Education', id: 'education' },
                  { name: 'Projects', id: 'projects' },
                  { name: 'Certifications', id: 'certifications' },
                ].map((item) => (
                  <a 
                    key={item.id}
                    href={`#${item.id}`} 
                    onClick={(e) => scrollToSection(e, item.id)}
                    className="text-slate-400 hover:text-white px-4 py-2 rounded-lg text-sm font-semibold transition-all hover:bg-white/5"
                  >
                    {item.name}
                  </a>
                ))}

                {/* ✅ Buttons Wrapper with Independent Spacing Gap */}
                <div className="flex items-center gap-6 ml-6">
                  {PERSONAL_INFO.resume && (
                    <a 
                      href={PERSONAL_INFO.resume}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-slate-800/80 hover:bg-slate-700 text-white border border-slate-700/60 hover:border-sky-500/30 px-6 py-2.5 rounded-full text-sm font-bold transition-all shadow-lg active:scale-95 flex items-center gap-1.5"
                    >
                      <i className="fa-solid fa-file-arrow-down text-sky-400"></i> Resume
                    </a>
                  )}
                  <a 
                    href="#contact" 
                    onClick={(e) => scrollToSection(e, 'contact')}
                    className="bg-sky-500 hover:bg-sky-600 text-white px-6 py-2.5 rounded-full text-sm font-bold transition-all shadow-lg shadow-sky-500/25 active:scale-95"
                  >
                    Contact
                  </a>
                </div>
              </div>
            </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
