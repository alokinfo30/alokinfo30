import React, { useState } from 'react';
import { 
  Mail, 
  Send, 
  Check, 
  Copy, 
  Sparkles, 
  MessageSquare,
  ArrowRight,
  Code2,
  Globe
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { PROFILE_INFO, SOCIAL_LINKS } from '../data/profileData';

interface ContactSectionProps {
  onOpenModal: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ onOpenModal }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(PROFILE_INFO.email);
    setCopied(true);
    confetti({
      particleCount: 50,
      spread: 70,
      origin: { y: 0.85 }
    });
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="contact" className="py-14 border-t border-slate-800/60 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
        
        {/* Section Pill */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-pink-500/10 text-pink-400 border border-pink-500/20 mb-4">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Collaborations & Engineering Leadership</span>
        </div>

        <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white mb-4">
          🤝 Let's Connect & Build Together
        </h2>

        <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto mb-8 leading-relaxed">
          If you're working on <strong className="text-pink-400">AI agents, distributed systems, Node.js platforms, cloud architecture</strong>, or <strong className="text-purple-400">modern full-stack applications</strong>, let's connect.
        </p>

        {/* Action Connect Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
          
          {/* Email Box */}
          <div className="p-5 rounded-2xl border border-slate-800 bg-[#0d1117]/90 flex flex-col items-center justify-between shadow-xl">
            <div className="w-12 h-12 rounded-xl bg-red-500/10 border border-red-500/20 flex items-center justify-center text-red-400 mb-3">
              <Mail className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-white text-base mb-1">Direct Email</h3>
            <p className="text-xs text-slate-400 font-mono mb-4 break-all">{PROFILE_INFO.email}</p>
            
            <div className="w-full flex gap-2">
              <a
                id="contact-email-mailto-btn"
                href={`mailto:${PROFILE_INFO.email}?subject=Collaboration%20Inquiry%20via%20Portfolio`}
                className="flex-1 py-2 px-3 bg-red-600 hover:bg-red-500 text-white rounded-xl text-xs font-semibold flex items-center justify-center gap-1 transition-colors"
              >
                <Send className="w-3 h-3" />
                <span>Send</span>
              </a>
              <button
                id="contact-copy-email-btn"
                onClick={handleCopy}
                className="p-2 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-xl border border-slate-700 transition-colors"
                title="Copy Email"
              >
                {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4 text-slate-300" />}
              </button>
            </div>
          </div>

          {/* GitHub Box */}
          <div className="p-5 rounded-2xl border border-slate-800 bg-[#0d1117]/90 flex flex-col items-center justify-between shadow-xl">
            <div className="w-12 h-12 rounded-xl bg-slate-800 border border-slate-700 flex items-center justify-center text-white mb-3">
              <Code2 className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-white text-base mb-1">GitHub Profile</h3>
            <p className="text-xs text-slate-400 font-mono mb-4">github.com/{PROFILE_INFO.username}</p>
            
            <a
              id="contact-github-visit-btn"
              href={PROFILE_INFO.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-2 px-3 bg-slate-800 hover:bg-slate-700 text-white rounded-xl text-xs font-semibold flex items-center justify-center gap-1.5 border border-slate-700 transition-colors"
            >
              <Code2 className="w-3.5 h-3.5" />
              <span>Follow on GitHub</span>
            </a>
          </div>

          {/* LinkedIn Box */}
          <div className="p-5 rounded-2xl border border-slate-800 bg-[#0d1117]/90 flex flex-col items-center justify-between shadow-xl">
            <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-[#0A66C2] mb-3">
              <Globe className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-white text-base mb-1">LinkedIn Network</h3>
            <p className="text-xs text-slate-400 font-mono mb-4">Alok Srivastava</p>
            
            <a
              id="contact-linkedin-connect-btn"
              href={PROFILE_INFO.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-2 px-3 bg-[#0A66C2] hover:bg-[#084e96] text-white rounded-xl text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors"
            >
              <Globe className="w-3.5 h-3.5" />
              <span>Connect on LinkedIn</span>
            </a>
          </div>

        </div>

        {/* Sparkles Graphic & Thanks for visiting */}
        <div className="pt-6 flex flex-col items-center justify-center">
          <img
            src="/sparkle.svg?v=1"
            alt="Sparkles"
            className="w-36 h-auto object-contain mx-auto mb-4 opacity-90"
          />
          <h3 className="text-lg font-bold text-slate-100 flex items-center gap-1.5">
            <span>⭐ Thanks for visiting!</span>
          </h3>
          <p className="text-sm font-semibold text-pink-400 mt-1">
            Keep Coding. Keep Growing.
          </p>
        </div>

      </div>
    </section>
  );
};
