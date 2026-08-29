import React from 'react';
import { 
  ExternalLink, 
  Sparkles, 
  ShieldCheck, 
  Gamepad2, 
  Briefcase, 
  GraduationCap,
  Layers,
  CheckCircle,
  ArrowUpRight,
  Code2
} from 'lucide-react';
import { FEATURED_PROJECTS } from '../data/profileData';

const projectIconMap: Record<string, React.ReactNode> = {
  compops: <ShieldCheck className="w-5 h-5 text-emerald-400" />,
  'gamebot-ai': <Gamepad2 className="w-5 h-5 text-pink-400" />,
  'omniserve-ai': <Briefcase className="w-5 h-5 text-blue-400" />,
  'studyos-ai': <GraduationCap className="w-5 h-5 text-purple-400" />
};

export const FeaturedProjects: React.FC = () => {
  return (
    <section id="projects" className="py-12 border-t border-slate-800/60">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-pink-500/10 border border-pink-500/20 flex items-center justify-center text-pink-400 font-bold text-lg">
              🚀
            </div>
            <div>
              <h2 className="text-2xl font-bold tracking-tight text-white">Featured Projects</h2>
              <p className="text-xs sm:text-sm text-slate-400">
                Flagship open-source systems, AI agents & distributed applications
              </p>
            </div>
          </div>

          <a
            id="all-github-repositories-btn"
            href="https://github.com/alokinfo30?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-pink-400 hover:text-pink-300 hover:underline"
          >
            <span>View all GitHub Repositories</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {FEATURED_PROJECTS.map((project) => (
            <div
              key={project.id}
              className="rounded-2xl border border-slate-800 bg-[#0d1117]/90 p-6 flex flex-col justify-between hover:border-slate-700 transition-all group shadow-xl relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-pink-500/5 to-purple-600/5 rounded-full blur-2xl pointer-events-none" />

              <div>
                {/* Card Title & Link */}
                <div className="flex items-center justify-between gap-2 mb-3">
                  <div className="flex items-center gap-2.5">
                    <div className="p-2 rounded-xl bg-slate-800/90 border border-slate-700/60">
                      {projectIconMap[project.id] || <Sparkles className="w-5 h-5 text-pink-400" />}
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white group-hover:text-pink-400 transition-colors flex items-center gap-1.5">
                        <span>{project.name}</span>
                      </h3>
                    </div>
                  </div>

                  <a
                    id={`project-link-${project.id}`}
                    href={project.repoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-slate-800 text-slate-300 hover:text-white hover:bg-slate-700 border border-slate-700/80 transition-colors"
                    title={`View ${project.name} on GitHub`}
                  >
                    <Code2 className="w-4 h-4" />
                  </a>
                </div>

                {/* Description */}
                <p className="text-sm text-slate-300 leading-relaxed mb-4">
                  {project.description}
                </p>

                {/* Stack Badges */}
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {project.stack.map((tech, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2.5 py-0.5 rounded-md text-xs font-mono font-medium bg-slate-800/90 text-pink-300 border border-pink-500/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Highlights */}
                <div className="space-y-1.5 border-t border-slate-800/80 pt-4 mb-4">
                  <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block mb-1">
                    Key Architectural Highlights:
                  </span>
                  {project.highlights.map((highlight, hIdx) => (
                    <div key={hIdx} className="flex items-start gap-2 text-xs text-slate-300">
                      <CheckCircle className="w-3.5 h-3.5 text-emerald-400 mt-0.5 flex-shrink-0" />
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Footer */}
              <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between">
                <span className="text-[11px] font-mono text-slate-500">Open Source Repository</span>
                <a
                  href={project.repoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-xs font-semibold text-slate-300 group-hover:text-pink-400 transition-colors"
                >
                  <span>Explore Source</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
