import React from 'react';
import { Terminal, Heart, Mail } from 'lucide-react';
import { PROFILE_INFO } from '../data/profileData';

export const Footer: React.FC = () => {
  return (
    <footer className="border-t border-slate-800/80 bg-[#090d13] py-8 text-slate-400 text-xs">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-lg bg-pink-500/10 border border-pink-500/20 flex items-center justify-center text-pink-400">
            <Terminal className="w-3.5 h-3.5" />
          </div>
          <span className="font-semibold text-slate-200">{PROFILE_INFO.name}</span>
          <span className="text-slate-600">|</span>
          <span>@{PROFILE_INFO.username}</span>
        </div>

        <div className="text-center sm:text-right font-mono text-[11px] text-slate-500">
          Crafted for high performance & scalable agentic workflows.
        </div>

      </div>
    </footer>
  );
};
