import React from 'react';
import { 
  Bot, 
  Brain, 
  Network, 
  Server, 
  Layout, 
  Cloud, 
  Zap, 
  ShieldCheck, 
  GraduationCap,
  Sparkles,
  ArrowRight
} from 'lucide-react';
import { PROFILE_INFO } from '../data/profileData';

const iconMap: Record<string, React.ReactNode> = {
  Bot: <Bot className="w-5 h-5 text-pink-400" />,
  Brain: <Brain className="w-5 h-5 text-purple-400" />,
  Network: <Network className="w-5 h-5 text-blue-400" />,
  Server: <Server className="w-5 h-5 text-emerald-400" />,
  Layout: <Layout className="w-5 h-5 text-amber-400" />,
  Cloud: <Cloud className="w-5 h-5 text-cyan-400" />,
  Zap: <Zap className="w-5 h-5 text-yellow-400" />,
  ShieldCheck: <ShieldCheck className="w-5 h-5 text-rose-400" />,
  GraduationCap: <GraduationCap className="w-5 h-5 text-indigo-400" />,
};

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-12 border-t border-slate-800/60">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-xl bg-pink-500/10 border border-pink-500/20 flex items-center justify-center text-pink-400 font-bold text-lg">
            👋
          </div>
          <div>
            <h2 className="text-2xl font-bold tracking-tight text-white">About Me</h2>
            <p className="text-xs sm:text-sm text-slate-400">Engineering leadership & architectural philosophy</p>
          </div>
        </div>

        {/* Narrative Box */}
        <div className="rounded-2xl border border-slate-800 bg-[#0d1117]/90 p-6 sm:p-8 mb-8 backdrop-blur-sm shadow-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-pink-500/5 rounded-full blur-3xl pointer-events-none" />
          
          <p className="text-base sm:text-lg text-slate-200 leading-relaxed font-normal mb-6">
            I'm <strong className="text-white font-semibold">Alok Srivastava</strong>, a <strong className="text-pink-400 font-semibold">Senior Systems Architect & AI Lead</strong> focused on building scalable software systems, modern full-stack applications, and AI-powered engineering workflows.
          </p>

          <blockquote className="border-l-4 border-pink-500 pl-4 py-2 my-4 bg-pink-500/5 rounded-r-lg text-slate-300 font-medium italic text-sm sm:text-base">
            "Full-Stack Lead | Building Agentic AI Workflows, Node.js Backends & Distributed Systems"
          </blockquote>

          <p className="text-sm sm:text-base text-slate-400 mt-4 leading-relaxed">
            With deep expertise across full-stack engineering, generative AI orchestration, and cloud infrastructure, I design systems that handle massive scale while maintaining architectural clarity, developer velocity, and rigorous security posture.
          </p>
        </div>

        {/* Focus Areas Grid */}
        <div>
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-slate-200 flex items-center gap-2">
              <span>Key Areas of Focus & Specialization</span>
              <span className="text-xs px-2 py-0.5 rounded-full bg-slate-800 text-slate-400 font-mono">9 Domains</span>
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
            {PROFILE_INFO.focusAreas.map((area, idx) => (
              <div
                key={idx}
                className="flex items-center gap-3.5 p-3.5 rounded-xl border border-slate-800/80 bg-slate-900/40 hover:bg-slate-800/50 hover:border-pink-500/30 transition-all group"
              >
                <div className="p-2 rounded-lg bg-slate-800/90 border border-slate-700/60 group-hover:scale-110 transition-transform">
                  {iconMap[area.icon] || <Sparkles className="w-5 h-5 text-pink-400" />}
                </div>
                <span className="text-sm font-medium text-slate-200 group-hover:text-white transition-colors">
                  {area.label}
                </span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
