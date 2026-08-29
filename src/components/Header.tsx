import React from 'react';
import { 
  Mail, 
  Sun, 
  Moon, 
  Terminal, 
  Send,
  Sparkles,
  ExternalLink,
  Code2,
  Globe
} from 'lucide-react';
import { PROFILE_INFO } from '../data/profileData';

interface HeaderProps {
  darkMode: boolean;
  setDarkMode: (val: boolean) => void;
  onOpenContact: () => void;
}

export const Header: React.FC<HeaderProps> = ({ darkMode, setDarkMode, onOpenContact }) => {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur-md bg-[#090d13]/85 border-b border-slate-800/80 transition-colors">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        
        {/* Brand */}
        <button 
          id="nav-logo-btn"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} 
          className="flex items-center gap-3 text-left group focus:outline-none"
        >
          <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-pink-500 to-purple-600 p-[2px] shadow-lg shadow-pink-500/20 group-hover:scale-105 transition-transform">
            <div className="w-full h-full bg-[#0d1117] rounded-[10px] flex items-center justify-center">
              <Terminal className="w-4 h-4 text-pink-400" />
            </div>
          </div>
          <div>
            <div className="font-bold text-sm sm:text-base tracking-tight text-white group-hover:text-pink-400 transition-colors flex items-center gap-1.5">
              <span>{PROFILE_INFO.name}</span>
              <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-pulse" title="Available for Architect & AI Lead Collaborations" />
            </div>
            <div className="text-xs text-slate-400 hidden sm:block">@{PROFILE_INFO.username}</div>
          </div>
        </button>

        {/* Navigation links */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-300">
          <button id="nav-about-btn" onClick={() => scrollTo('about')} className="hover:text-pink-400 transition-colors">
            About
          </button>
          <button id="nav-skills-btn" onClick={() => scrollTo('tech-stack')} className="hover:text-pink-400 transition-colors">
            Tech Stack
          </button>
          <button id="nav-projects-btn" onClick={() => scrollTo('projects')} className="hover:text-pink-400 transition-colors">
            Projects
          </button>
          <button id="nav-stats-btn" onClick={() => scrollTo('stats')} className="hover:text-pink-400 transition-colors">
            GitHub Stats
          </button>
          <button id="nav-philosophy-btn" onClick={() => scrollTo('philosophy')} className="hover:text-pink-400 transition-colors">
            Philosophy
          </button>
        </nav>

        {/* Right actions */}
        <div className="flex items-center gap-2 sm:gap-3">
          <a
            id="nav-github-link"
            href={PROFILE_INFO.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800/80 transition-colors flex items-center gap-1 text-xs"
            title="GitHub Profile"
          >
            <Code2 className="w-4 h-4" />
            <span className="hidden lg:inline">GitHub</span>
          </a>

          <a
            id="nav-linkedin-link"
            href={PROFILE_INFO.linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-lg text-slate-400 hover:text-blue-400 hover:bg-slate-800/80 transition-colors flex items-center gap-1 text-xs"
            title="LinkedIn Profile"
          >
            <Globe className="w-4 h-4" />
            <span className="hidden lg:inline">LinkedIn</span>
          </a>

          <button
            id="theme-toggle-btn"
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 rounded-lg text-slate-400 hover:text-amber-400 hover:bg-slate-800/80 transition-colors"
            title={darkMode ? "Switch to light mode" : "Switch to dark mode"}
            aria-label="Toggle theme"
          >
            {darkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>

          <button
            id="nav-contact-cta-btn"
            onClick={onOpenContact}
            className="ml-1 sm:ml-2 flex items-center gap-1.5 px-3.5 py-1.5 text-xs sm:text-sm font-semibold rounded-lg bg-gradient-to-r from-pink-500 to-purple-600 text-white shadow-md hover:shadow-pink-500/25 hover:brightness-110 active:scale-95 transition-all"
          >
            <Send className="w-3.5 h-3.5" />
            <span>Connect</span>
          </button>
        </div>

      </div>
    </header>
  );
};
