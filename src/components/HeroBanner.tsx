import React, { useState } from 'react';
import { 
  Mail, 
  Check, 
  Copy, 
  Sparkles, 
  ExternalLink,
  Shield,
  Layers,
  Cpu,
  Code2,
  Globe
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { PROFILE_INFO, SOCIAL_LINKS } from '../data/profileData';

interface HeroBannerProps {
  darkMode: boolean;
  onOpenContact: () => void;
}

export const HeroBanner: React.FC<HeroBannerProps> = ({ darkMode, onOpenContact }) => {
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = (e: React.MouseEvent) => {
    e.preventDefault();
    navigator.clipboard.writeText(PROFILE_INFO.email);
    setCopiedEmail(true);
    confetti({
      particleCount: 40,
      spread: 60,
      origin: { y: 0.7 }
    });
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  return (
    <section className="relative overflow-hidden pt-4 pb-10">
      {/* Background ambient lighting */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-5xl h-72 bg-gradient-to-r from-pink-500/10 via-purple-600/15 to-blue-600/10 blur-3xl -z-10 pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        
        {/* Banner Graphic Frame */}
        <div className="relative rounded-2xl overflow-hidden border border-slate-800/80 bg-slate-900/60 shadow-2xl shadow-purple-950/20 group">
          <picture>
            <source
              media="(prefers-color-scheme: light)"
              srcSet={darkMode ? "/assets/images/banner.png?v=1" : "/assets/images/banner-light.png?v=1"}
            />
            <img
              src={darkMode ? "/assets/images/banner.png?v=1" : "/assets/images/banner-light.png?v=1"}
              alt="Alok Srivastava - Full-Stack Lead | Building Agentic AI Workflows"
              className="w-full h-auto object-cover transform group-hover:scale-[1.01] transition-transform duration-500"
            />
          </picture>
        </div>

        {/* Lanyard Developer Badge & Profile Headline Section */}
        <div className="mt-8 flex flex-col lg:flex-row items-center gap-8 justify-between">
          
          {/* Lanyard ID Badge graphic with interactive card styling */}
          <div className="relative flex-shrink-0 group">
            <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-pink-500 to-purple-600 opacity-30 group-hover:opacity-60 blur-md transition duration-300" />
            <div className="relative rounded-2xl overflow-hidden border border-slate-800 bg-[#0d1117] p-2 shadow-xl">
              <img
                src="/assets/images/lanyard.png?v=1"
                alt="Alok Srivastava Developer ID Badge"
                className="w-72 sm:w-80 h-auto object-contain rounded-xl transform group-hover:rotate-1 transition-transform duration-300"
              />
              <div className="mt-2 px-3 py-1.5 flex items-center justify-between text-xs text-slate-400 border-t border-slate-800">
                <span className="flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-emerald-400" />
                  Verified Identity
                </span>
                <span className="font-mono text-pink-400">@alokinfo30</span>
              </div>
            </div>
          </div>

          {/* Intro Information & Direct Connect Buttons */}
          <div className="flex-1 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-pink-500/10 text-pink-400 border border-pink-500/20 mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Full-Stack Lead & Systems Architect</span>
            </div>

            <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white mb-3">
              {PROFILE_INFO.name}
            </h1>

            <p className="text-base sm:text-lg text-slate-300 font-medium leading-relaxed mb-6 max-w-2xl">
              Building Agentic AI Workflows, High-Throughput Node.js Backends & Resilient Distributed Systems.
            </p>

            {/* Shield Badges & Social Links */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 mb-6">
              <a
                id="hero-github-badge"
                href="https://github.com/alokinfo30"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:scale-105 transition-transform"
                title="View GitHub Profile"
              >
                <img
                  src="https://img.shields.io/badge/GitHub-alokinfo30-181717?style=for-the-badge&logo=github"
                  alt="GitHub"
                  className="h-7 sm:h-8"
                />
              </a>

              <a
                id="hero-linkedin-badge"
                href="https://www.linkedin.com/in/alok-srivastava-77b9b460/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:scale-105 transition-transform"
                title="Connect on LinkedIn"
              >
                <img
                  src="https://img.shields.io/badge/LinkedIn-Alok%20Srivastava-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white"
                  alt="LinkedIn"
                  className="h-7 sm:h-8"
                />
              </a>

              <button
                id="hero-email-badge-btn"
                onClick={handleCopyEmail}
                className="hover:scale-105 transition-transform cursor-pointer focus:outline-none"
                title="Click to copy email address"
              >
                <img
                  src="https://img.shields.io/badge/Email-Contact-EA4335?style=for-the-badge&logo=gmail&logoColor=white"
                  alt="Email Contact"
                  className="h-7 sm:h-8"
                />
              </button>
            </div>

            {/* Profile Views & Email Copy status */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4">
              <div className="inline-block hover:scale-105 transition-transform">
                <img
                  src="https://komarev.com/ghpvc/?username=alokinfo30&label=PROFILE+VIEWS&color=ff4db8&style=for-the-badge"
                  alt="Profile views counter"
                  className="h-6 sm:h-7 rounded"
                />
              </div>

              <button
                id="copy-email-chip"
                onClick={handleCopyEmail}
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-mono text-slate-300 bg-slate-800/80 hover:bg-slate-700/80 border border-slate-700 transition-colors"
              >
                {copiedEmail ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    <span className="text-emerald-400">Email Copied to Clipboard!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5 text-pink-400" />
                    <span>{PROFILE_INFO.email}</span>
                  </>
                )}
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
