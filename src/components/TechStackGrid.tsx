import React, { useState, useMemo } from 'react';
import { 
  Server, 
  Layout, 
  Brain, 
  Network, 
  Database, 
  Cloud, 
  CheckCircle2, 
  Shield, 
  Users, 
  Search,
  Filter,
  Sparkles,
  Layers
} from 'lucide-react';
import { SKILL_CATEGORIES } from '../data/profileData';

const categoryIconMap: Record<string, React.ReactNode> = {
  Server: <Server className="w-4 h-4 text-emerald-400" />,
  Layout: <Layout className="w-4 h-4 text-blue-400" />,
  Brain: <Brain className="w-4 h-4 text-pink-400" />,
  Network: <Network className="w-4 h-4 text-purple-400" />,
  Database: <Database className="w-4 h-4 text-amber-400" />,
  Cloud: <Cloud className="w-4 h-4 text-cyan-400" />,
  CheckCircle2: <CheckCircle2 className="w-4 h-4 text-teal-400" />,
  Shield: <Shield className="w-4 h-4 text-rose-400" />,
  Users: <Users className="w-4 h-4 text-indigo-400" />
};

export const TechStackGrid: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const totalSkillsCount = useMemo(() => {
    return SKILL_CATEGORIES.reduce((acc, cat) => acc + cat.skills.length, 0);
  }, []);

  const filteredCategories = useMemo(() => {
    return SKILL_CATEGORIES.map(category => {
      if (selectedCategory !== 'all' && category.id !== selectedCategory) {
        return null;
      }
      
      const filteredSkills = category.skills.filter(skill => 
        skill.toLowerCase().includes(searchQuery.toLowerCase())
      );

      if (searchQuery.trim() && filteredSkills.length === 0) {
        return null;
      }

      return {
        ...category,
        skills: filteredSkills
      };
    }).filter(Boolean);
  }, [selectedCategory, searchQuery]);

  return (
    <section id="tech-stack" className="py-12 border-t border-slate-800/60">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div>
            <div className="flex items-center gap-3 mb-1">
              <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400 font-bold text-lg">
                🧠
              </div>
              <div>
                <h2 className="text-2xl font-bold tracking-tight text-white">Core Technology Stack</h2>
                <p className="text-xs sm:text-sm text-slate-400">
                  Comprehensive skill matrix spanning architecture, AI, backend, cloud & data
                </p>
              </div>
            </div>
          </div>

          {/* Search bar */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              id="skill-search-input"
              type="text"
              placeholder="Search technologies..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-[#0d1117] border border-slate-800 rounded-xl pl-9 pr-4 py-2 text-sm text-slate-100 placeholder-slate-500 focus:outline-none focus:border-pink-500/50 focus:ring-1 focus:ring-pink-500/50 transition-all"
            />
          </div>
        </div>

        {/* Category Pills Filter */}
        <div className="flex items-center gap-2 overflow-x-auto pb-3 mb-6 scrollbar-none">
          <button
            id="filter-all-skills"
            onClick={() => setSelectedCategory('all')}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all flex items-center gap-1.5 ${
              selectedCategory === 'all'
                ? 'bg-gradient-to-r from-pink-500 to-purple-600 text-white shadow-md shadow-pink-500/20'
                : 'bg-slate-900/80 text-slate-400 hover:text-white border border-slate-800 hover:bg-slate-800'
            }`}
          >
            <Layers className="w-3.5 h-3.5" />
            <span>All Technologies ({totalSkillsCount})</span>
          </button>

          {SKILL_CATEGORIES.map(cat => (
            <button
              key={cat.id}
              id={`filter-cat-${cat.id}`}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-3 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all flex items-center gap-1.5 ${
                selectedCategory === cat.id
                  ? 'bg-pink-500 text-white shadow-md'
                  : 'bg-slate-900/80 text-slate-400 hover:text-white border border-slate-800 hover:bg-slate-800'
              }`}
            >
              {categoryIconMap[cat.iconName]}
              <span>{cat.name}</span>
            </button>
          ))}
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredCategories.map((category) => {
            if (!category) return null;
            return (
              <div
                key={category.id}
                className="rounded-2xl border border-slate-800/90 bg-[#0d1117]/80 p-5 hover:border-slate-700 transition-all flex flex-col justify-between group shadow-lg"
              >
                <div>
                  <div className="flex items-center gap-2.5 mb-2">
                    <div className="p-1.5 rounded-lg bg-slate-800 border border-slate-700/60">
                      {categoryIconMap[category.iconName]}
                    </div>
                    <h3 className="text-base font-bold text-slate-100 group-hover:text-pink-400 transition-colors">
                      {category.name}
                    </h3>
                  </div>

                  {category.description && (
                    <p className="text-xs text-slate-400 mb-4 leading-relaxed line-clamp-2">
                      {category.description}
                    </p>
                  )}

                  {/* Skills badges */}
                  <div className="flex flex-wrap gap-1.5">
                    {category.skills.map((skill, sIdx) => (
                      <span
                        key={sIdx}
                        className="inline-flex items-center px-2.5 py-1 rounded-lg text-xs font-mono font-medium bg-slate-800/80 text-slate-200 border border-slate-700/50 hover:border-pink-500/50 hover:text-pink-300 hover:bg-slate-800 transition-colors"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-800/60 flex items-center justify-between text-[11px] text-slate-500 font-mono">
                  <span>{category.skills.length} skills listed</span>
                  <span className="text-pink-400/80 font-sans font-medium">Enterprise Grade</span>
                </div>
              </div>
            );
          })}
        </div>

        {filteredCategories.length === 0 && (
          <div className="text-center py-12 rounded-2xl border border-dashed border-slate-800 bg-slate-900/20">
            <p className="text-slate-400 text-sm">No technologies match "{searchQuery}" in this category.</p>
            <button
              onClick={() => { setSearchQuery(''); setSelectedCategory('all'); }}
              className="mt-3 px-3 py-1.5 text-xs text-pink-400 hover:underline"
            >
              Reset filters
            </button>
          </div>
        )}

      </div>
    </section>
  );
};
