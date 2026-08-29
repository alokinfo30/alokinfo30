import React, { useState } from 'react';
import { 
  BarChart3, 
  Trophy, 
  Code2, 
  Activity, 
  Sparkles, 
  Play, 
  Pause, 
  RotateCcw,
  Layers,
  Flame,
  CheckCircle2
} from 'lucide-react';
import { SnakeGame } from './SnakeGame';

interface StatsShowcaseProps {
  darkMode: boolean;
}

export const StatsShowcase: React.FC<StatsShowcaseProps> = ({ darkMode }) => {
  const [showSnakeGame, setShowSnakeGame] = useState(false);

  return (
    <section id="stats" className="py-12 border-t border-slate-800/60">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-pink-500/10 border border-pink-500/20 flex items-center justify-center text-pink-400 font-bold text-lg">
              📊
            </div>
            <div>
              <h2 className="text-2xl font-bold tracking-tight text-white">GitHub Statistics & Activity</h2>
              <p className="text-xs sm:text-sm text-slate-400">
                Live performance metrics, language distribution, awards & contribution cadence
              </p>
            </div>
          </div>

          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-slate-900 border border-slate-800 text-xs font-mono text-slate-300">
            <Flame className="w-4 h-4 text-amber-400" />
            <span>High Impact Commits & PRs</span>
          </div>
        </div>

        {/* Stats & Languages Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          
          {/* GitHub Stats Card */}
          <div className="rounded-2xl border border-slate-800 bg-[#0d1117]/90 p-5 flex flex-col justify-between shadow-xl">
            <div className="flex items-center justify-between mb-4 pb-3 border-b border-slate-800/80">
              <div className="flex items-center gap-2">
                <BarChart3 className="w-4 h-4 text-pink-400" />
                <h3 className="text-sm font-bold text-slate-200 uppercase tracking-wider">
                  Overall Statistics
                </h3>
              </div>
              <span className="text-[11px] font-mono text-emerald-400">Verified @alokinfo30</span>
            </div>

            <div className="flex items-center justify-center py-2">
              <img
                src="/assets/images/stats.png?v=1"
                alt="GitHub statistics"
                className="w-full max-w-[480px] h-auto object-contain rounded-xl"
              />
            </div>
          </div>

          {/* Languages Breakdown Card */}
          <div className="rounded-2xl border border-slate-800 bg-[#0d1117]/90 p-5 flex flex-col justify-between shadow-xl">
            <div className="flex items-center justify-between mb-4 pb-3 border-b border-slate-800/80">
              <div className="flex items-center gap-2">
                <Code2 className="w-4 h-4 text-purple-400" />
                <h3 className="text-sm font-bold text-slate-200 uppercase tracking-wider">
                  Most Used Languages
                </h3>
              </div>
              <span className="text-[11px] font-mono text-purple-400">Polyglot Depth</span>
            </div>

            <div className="flex items-center justify-center py-2">
              <img
                src="/assets/images/langs.png?v=1"
                alt="Most used programming languages"
                className="w-full max-w-[480px] h-auto object-contain rounded-xl"
              />
            </div>
          </div>

        </div>

        {/* Trophies Row */}
        <div className="rounded-2xl border border-slate-800 bg-[#0d1117]/90 p-5 mb-8 shadow-xl">
          <div className="flex items-center justify-between mb-4 pb-3 border-b border-slate-800/80">
            <div className="flex items-center gap-2">
              <Trophy className="w-4 h-4 text-yellow-400" />
              <h3 className="text-sm font-bold text-slate-200 uppercase tracking-wider">
                GitHub Awards & Trophies
              </h3>
            </div>
            <span className="text-[11px] font-mono text-yellow-400">Top Tier Achievements</span>
          </div>

          <div className="flex items-center justify-center py-3 overflow-x-auto">
            <img
              src="/assets/images/trophies.png?v=1"
              alt="GitHub trophies"
              className="w-full max-w-[720px] h-auto object-contain rounded-xl min-w-[500px]"
            />
          </div>
        </div>

        {/* Contribution Activity Graph */}
        <div className="rounded-2xl border border-slate-800 bg-[#0d1117]/90 p-5 mb-8 shadow-xl">
          <div className="flex items-center justify-between mb-4 pb-3 border-b border-slate-800/80">
            <div className="flex items-center gap-2">
              <Activity className="w-4 h-4 text-pink-400" />
              <h3 className="text-sm font-bold text-slate-200 uppercase tracking-wider">
                Contribution Activity Graph
              </h3>
            </div>
            <span className="text-[11px] font-mono text-slate-400">Real-time Cadence</span>
          </div>

          <div className="flex items-center justify-center py-2 overflow-x-auto bg-[#090d13] rounded-xl p-3 border border-slate-800/60">
            <img
              src="https://github-readme-activity-graph.vercel.app/graph?username=alokinfo30&bg_color=0d1117&color=ff4db8&line=a855f7&point=ffffff&area=true&hide_border=true"
              alt="Alok Srivastava contribution activity graph"
              className="w-full max-w-[850px] h-auto object-contain rounded-lg min-w-[550px]"
              loading="lazy"
            />
          </div>
        </div>

        {/* Contribution Snake Animation & Minigame */}
        <div className="rounded-2xl border border-slate-800 bg-[#0d1117]/90 p-5 shadow-xl">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4 pb-3 border-b border-slate-800/80">
            <div className="flex items-center gap-2">
              <span className="text-lg">🐍</span>
              <h3 className="text-sm font-bold text-slate-200 uppercase tracking-wider">
                Contribution Snake Matrix
              </h3>
            </div>

            <div className="flex items-center gap-2">
              <button
                id="toggle-snake-game-btn"
                onClick={() => setShowSnakeGame(!showSnakeGame)}
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-semibold bg-pink-500/10 text-pink-400 hover:bg-pink-500/20 border border-pink-500/30 transition-colors"
              >
                {showSnakeGame ? (
                  <>
                    <Pause className="w-3.5 h-3.5" />
                    <span>View Snake Stream</span>
                  </>
                ) : (
                  <>
                    <Play className="w-3.5 h-3.5" />
                    <span>Play Interactive Snake</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {showSnakeGame ? (
            <div className="py-2">
              <SnakeGame />
            </div>
          ) : (
            <div className="flex items-center justify-center py-4 bg-[#090d13] rounded-xl p-3 border border-slate-800/60 overflow-x-auto">
              <picture>
                <source
                  media="(prefers-color-scheme: dark)"
                  srcSet="https://raw.githubusercontent.com/alokinfo30/alokinfo30/output/github-snake-dark.svg?v=1"
                />
                <source
                  media="(prefers-color-scheme: light)"
                  srcSet="https://raw.githubusercontent.com/alokinfo30/alokinfo30/output/github-snake.svg?v=1"
                />
                <img
                  src={darkMode 
                    ? "https://raw.githubusercontent.com/alokinfo30/alokinfo30/output/github-snake-dark.svg?v=1" 
                    : "https://raw.githubusercontent.com/alokinfo30/alokinfo30/output/github-snake.svg?v=1"
                  }
                  alt="GitHub contribution snake animation"
                  className="w-full max-w-[850px] h-auto object-contain min-w-[500px]"
                />
              </picture>
            </div>
          )}

          <div className="mt-3 text-center text-xs text-slate-500 font-mono">
            Automated daily via GitHub Actions (.github/workflows/github-snake.yml)
          </div>
        </div>

      </div>
    </section>
  );
};
