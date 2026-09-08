import React, { useState } from 'react';
import { Server, Database, ShieldCheck, Sparkles, CheckCircle2, Terminal, Cpu } from 'lucide-react';

interface PillarData {
  id: string;
  title: string;
  badge: string;
  icon: React.ElementType;
  accent: string;
  borderColor: string;
  description: string;
  tags: string[];
  keyHighlight: string;
}

const PILLARS: PillarData[] = [
  {
    id: 'backend',
    title: 'Backend & API Architecture',
    badge: 'NODE.JS / EXPRESS',
    icon: Server,
    accent: 'from-cyan-500 to-blue-600',
    borderColor: 'border-cyan-500/30',
    description: 'Building reliable RESTful APIs with clean routing, input validation, and isolated error boundaries.',
    tags: ['Node.js', 'Express.js', 'REST APIs', 'Async Queues', 'Nodemailer', 'Error Boundaries'],
    keyHighlight: 'Isolated third-party email latency in try/catch boundaries at AIWorksheetPro, guaranteeing 100% checkout completion.',
  },
  {
    id: 'database',
    title: 'Data Integrity & Schemas',
    badge: 'MYSQL & POSTGRES',
    icon: Database,
    accent: 'from-purple-500 to-indigo-600',
    borderColor: 'border-purple-500/30',
    description: 'Designing relational database schemas, indexes, and strict rules to keep data clean and uncorrupted.',
    tags: ['MySQL', 'PostgreSQL', 'Indexing', 'Schema Design', 'Data Constraints'],
    keyHighlight: 'Enforced Single-Active-Plan rules in MySQL (plan_subscription_master) to permanently prevent duplicate active plans.',
  },
  {
    id: 'payments',
    title: 'Payments & Webhooks',
    badge: 'STRIPE / RAZORPAY',
    icon: ShieldCheck,
    accent: 'from-emerald-500 to-teal-600',
    borderColor: 'border-emerald-500/30',
    description: 'Handling payment lifecycles, cryptographic webhook signatures, and protecting against double-billing.',
    tags: ['Stripe', 'Razorpay', 'HMAC-SHA256', 'Webhook Idempotency', 'JWT Auth'],
    keyHighlight: 'Implemented status-checking idempotency guards in payment controllers to neutralize duplicate webhook network retries.',
  },
  {
    id: 'ai-frontend',
    title: 'Modern Frontend & AI Workflows',
    badge: 'REACT & LLM APIS',
    icon: Sparkles,
    accent: 'from-pink-500 to-rose-600',
    borderColor: 'border-pink-500/30',
    description: 'Crafting responsive React/Next.js interfaces connected to prompt-engineered LLM pipelines.',
    tags: ['React.js', 'TypeScript', 'Tailwind CSS', 'LLM Prompting', 'Next.js'],
    keyHighlight: 'Routed multi-lingual curriculum generation across 4 educational AI tools at AIWorksheetPro.',
  },
];

export const Pillars: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('backend');
  const activePillar = PILLARS.find((p) => p.id === activeTab) || PILLARS[0];

  return (
    <section id="systems" className="py-16 relative z-10 border-t border-white/5">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 uppercase tracking-widest mb-2">
              <Terminal className="w-3.5 h-3.5" />
              <span>CORE TECHNICAL FOCUS</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              4 Foundations of <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Reliable Engineering</span>
            </h2>
          </div>
          <p className="text-xs font-mono text-gray-400 max-w-sm">
            Practical principles I apply to keep code clean, databases consistent, and applications snappy.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {PILLARS.map((pillar) => {
            const Icon = pillar.icon;
            const isSelected = activeTab === pillar.id;

            return (
              <div
                key={pillar.id}
                onClick={() => setActiveTab(pillar.id)}
                className={`group relative p-5 rounded-2xl cursor-pointer transition-all duration-300 border ${
                  isSelected 
                    ? `${pillar.borderColor} bg-white/[0.04] shadow-[0_0_20px_rgba(6,182,212,0.12)] ring-1 ring-cyan-400/30` 
                    : 'border-white/5 bg-[#0e111d]/70 hover:border-white/20'
                }`}
              >
                <div className={`h-1 w-8 rounded-full bg-gradient-to-r ${pillar.accent} mb-4`} />

                <div className="flex items-center justify-between mb-3">
                  <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 group-hover:scale-105 transition-transform">
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-[9px] font-mono tracking-wider px-2 py-0.5 rounded bg-black/40 border border-white/10 text-gray-400">
                    {pillar.badge}
                  </span>
                </div>

                <h3 className="text-base font-bold text-white mb-1.5 group-hover:text-cyan-300 transition-colors">
                  {pillar.title}
                </h3>
                <p className="text-xs text-gray-400 leading-relaxed line-clamp-3 mb-3">
                  {pillar.description}
                </p>

                <div className="flex flex-wrap gap-1 pt-2 border-t border-white/5">
                  {pillar.tags.slice(0, 3).map((tag) => (
                    <span key={tag} className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-white/5 text-gray-300">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Deep-Dive Highlight Box */}
        <div className="mt-6 p-5 sm:p-6 rounded-2xl glass-card border border-cyan-500/20">
          <div className="flex items-center gap-2 mb-3">
            <Cpu className="w-4 h-4 text-cyan-400" />
            <span className="text-xs font-mono text-cyan-300 tracking-wider font-semibold uppercase">
              REAL-WORLD APPLICATION // {activePillar.title}
            </span>
          </div>
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
            <div className="space-y-2 max-w-2xl">
              <p className="text-sm sm:text-base text-white font-medium">
                {activePillar.keyHighlight}
              </p>
              <div className="flex flex-wrap items-center gap-1.5 pt-1">
                <span className="text-xs font-mono text-gray-400">Tech:</span>
                {activePillar.tags.map((tag) => (
                  <span key={tag} className="text-[11px] font-mono px-2 py-0.5 rounded bg-cyan-950/60 border border-cyan-500/30 text-cyan-300">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 bg-emerald-950/40 border border-emerald-500/30 px-3 py-1.5 rounded-xl self-start lg:self-auto">
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>Production Tested</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};