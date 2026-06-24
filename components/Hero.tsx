import React from "react";
import { PERSONAL_INFO } from "../constants";
import profileImg from "./assets/profile.jpg";

const Hero: React.FC = () => {
  return (
    <section id="about" className="pt-32 pb-20 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-14">

          {/* ✅ Left Photo (Premium UI) */}
          <div className="flex-shrink-0">
            <div className="relative rounded-3xl p-[2px] bg-gradient-to-br from-sky-400/70 via-sky-400/20 to-transparent shadow-2xl">
              <div className="rounded-3xl bg-white/5 backdrop-blur-md p-2 border border-white/10">
                <img
                  src={profileImg}
                  alt={PERSONAL_INFO.name}
                  className="w-64 h-72 md:w-80 md:h-80 rounded-2xl object-cover object-top shadow-lg hover:scale-[1.02] transition-transform duration-300"



                />
              </div>
            </div>
          </div>

          {/* ✅ Right Content */}
          <div className="flex-1 text-center md:text-left">

            <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 text-xs font-bold tracking-wider text-emerald-400 uppercase bg-emerald-500/10 rounded-full border border-emerald-500/20">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              Available for Opportunities
            </div>

            {/* ✅ Heading Left */}
            <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6 md:text-left tracking-tight">
              Hi, I'm <span className="gradient-text">{PERSONAL_INFO.name}</span>
            </h1>

            {/* ✅ Text + Buttons Down (mt-10) */}
            <div className="mt-10">
              {/* ✅ Paragraph Left Start */}
              <p className="text-lg md:text-xl text-slate-400 mb-8 max-w-3xl leading-relaxed text-left md:text-left mr-auto ml-0">
                I am a <span className="text-white font-semibold">{PERSONAL_INFO.title}</span> who builds scalable full-stack web applications and AI-driven platforms. With a strong foundation in complex algorithmic problem-solving, I specialize in crafting clean backend architectures and pixel-perfect, responsive user interfaces.
              </p>

              {/* ✅ Buttons Down */}
              <div className="flex flex-wrap justify-center md:justify-start gap-4">
                {PERSONAL_INFO.resume && (
                  <a
                    href={PERSONAL_INFO.resume}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-6 py-3 bg-sky-500 hover:bg-sky-600 text-white rounded-xl transition-all shadow-lg shadow-sky-500/20 active:scale-95 font-bold"
                  >
                    <i className="fa-solid fa-file-arrow-down text-white"></i> Resume
                  </a>
                )}

                <a
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-6 py-3 glass-card text-white rounded-xl hover:bg-white/10 transition-all border border-white/5"
                >
                  <i className="fa-brands fa-linkedin text-sky-400"></i> LinkedIn
                </a>

                <a
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-6 py-3 glass-card text-white rounded-xl hover:bg-white/10 transition-all border border-white/5"
                >
                  <i className="fa-brands fa-github text-slate-300"></i> GitHub
                </a>

                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="flex items-center gap-2 px-6 py-3 glass-card text-white rounded-xl hover:bg-white/10 transition-all border border-white/5"
                >
                  <i className="fa-solid fa-envelope text-red-400"></i> Email
                </a>
              </div>
            </div>

          </div>
        </div>

        {/* ✅ Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-4xl mt-14 mx-auto">
          <div className="p-6 glass-card rounded-2xl text-left hover:translate-y-[-4px] transition-transform">
            <div className="text-sky-400 text-2xl mb-2 font-bold">350+</div>
            <div className="text-white font-semibold">DSA Problems</div>
            <p className="text-sm text-slate-400">Solved on LeetCode & GFG</p>
          </div>

          <div className="p-6 glass-card rounded-2xl text-left hover:translate-y-[-4px] transition-transform">
            <div className="text-sky-400 text-2xl mb-2 font-bold">1495</div>
            <div className="text-white font-semibold">LeetCode Rating</div>
            <p className="text-sm text-slate-400">Competitive programming expert</p>
          </div>

          <div className="p-6 glass-card rounded-2xl text-left hover:translate-y-[-4px] transition-transform">
            <div className="text-sky-400 text-2xl mb-2 font-bold">127</div>
            <div className="text-white font-semibold">GFG Institute Rank</div>
            <p className="text-sm text-slate-400">Leading at Graphic Era</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;