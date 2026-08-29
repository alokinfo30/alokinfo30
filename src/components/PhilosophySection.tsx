import React from 'react';
import { Sparkles, Terminal, Rocket, Repeat, BookOpen, Lightbulb } from 'lucide-react';
import { PROFILE_INFO } from '../data/profileData';

export const PhilosophySection: React.FC = () => {
  return (
    <section id="philosophy" className="py-14 border-t border-slate-800/60 relative overflow-hidden">
      
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-amber-500/10 via-pink-500/10 to-purple-600/10 blur-3xl -z-10 pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
        
        {/* Section Pill */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-amber-500/10 text-amber-400 border border-amber-500/20 mb-4">
          <Lightbulb className="w-3.5 h-3.5" />
          <span>Engineering Philosophy</span>
        </div>

        {/* Motto Headline */}
        <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-white mb-6 font-mono">
          <span className="text-pink-400">CODE</span> →{' '}
          <span className="text-purple-400">LEARN</span> →{' '}
          <span className="text-blue-400">BUILD</span> →{' '}
          <span className="text-emerald-400">REPEAT</span>
        </h2>

        {/* Sparkle SVG Animation */}
        <div className="flex items-center justify-center my-6">
          <div className="p-4 rounded-2xl bg-[#0d1117]/60 border border-slate-800/80 shadow-2xl backdrop-blur-sm max-w-[520px] w-full">
            <img
              src="/sparkle.svg?v=1"
              alt="Sparkle animation"
              className="w-full h-auto object-contain mx-auto"
            />
          </div>
        </div>

        {/* Core Principles Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8">
          <div className="p-5 rounded-2xl border border-slate-800 bg-[#0d1117]/80 hover:border-pink-500/40 transition-colors shadow-lg group">
            <div className="w-10 h-10 rounded-xl bg-pink-500/10 border border-pink-500/20 flex items-center justify-center mx-auto mb-3 text-pink-400 group-hover:scale-110 transition-transform">
              <Terminal className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-white text-base mb-1">Build systems that scale</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Designing distributed, low-latency architectures that endure exponential traffic growth without compromising reliability.
            </p>
          </div>

          <div className="p-5 rounded-2xl border border-slate-800 bg-[#0d1117]/80 hover:border-purple-500/40 transition-colors shadow-lg group">
            <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center mx-auto mb-3 text-purple-400 group-hover:scale-110 transition-transform">
              <Rocket className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-white text-base mb-1">Build AI that matters</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Orchestrating agentic models and RAG workflows that solve critical human bottlenecks with deterministic accuracy.
            </p>
          </div>

          <div className="p-5 rounded-2xl border border-slate-800 bg-[#0d1117]/80 hover:border-emerald-500/40 transition-colors shadow-lg group">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center mx-auto mb-3 text-emerald-400 group-hover:scale-110 transition-transform">
              <BookOpen className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-white text-base mb-1">Keep learning. Keep growing</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Cultivating relentless curiosity, rigorous code reviews, and active technical mentorship across engineering teams.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};
