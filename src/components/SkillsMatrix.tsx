import React from 'react';
import { Cpu, Terminal, Database, Code2, Sparkles, CheckCircle2, Zap } from 'lucide-react';

interface SkillCategory {
  category: string;
  badge: string;
  icon: React.ElementType;
  accent: string;
  skills: { name: string; context: string }[];
}

const SKILL_CATEGORIES: SkillCategory[] = [
  {
    category: 'Backend & Server Architecture',
    badge: 'CORE FOCUS',
    icon: Terminal,
    accent: 'border-cyan-500/30 text-cyan-400',
    skills: [
      { name: 'Node.js & Express.js', context: 'RESTful API endpoints, request validation, middleware' },
      { name: 'Payment Webhooks', context: 'Stripe & Razorpay HMAC cryptographic verification' },
      { name: 'Nodemailer & SMTP', context: 'Non-blocking email dispatch with isolated error boundaries' },
      { name: 'Authentication & RBAC', context: 'JWT tokens, Google Auth, role-based route guards' },
    ],
  },
  {
    category: 'Databases & Data Integrity',
    badge: 'TRANSACTIONAL SAFETY',
    icon: Database,
    accent: 'border-purple-500/30 text-purple-400',
    skills: [
      { name: 'MySQL (Relational)', context: 'Subscription lifecycles, single-active-plan invariants' },
      { name: 'PostgreSQL & Supabase', context: 'Relational schemas, foreign keys, row-level security' },
      { name: 'MongoDB & Mongoose', context: 'Document modeling, multi-criteria query filtering' },
      { name: 'Database Normalization', context: 'Eliminating data redundancy and race conditions' },
    ],
  },
  {
    category: 'Frontend & Mobile Engineering',
    badge: 'INTERACTIVE UI',
    icon: Code2,
    accent: 'border-emerald-500/30 text-emerald-400',
    skills: [
      { name: 'React.js & Next.js', context: 'Modern hooks, component lifecycle, SSR/CSR' },
      { name: 'TypeScript', context: 'Strict typing, interface contracts, safe state transitions' },
      { name: 'Tailwind CSS', context: 'Responsive glassmorphic UI, cyber themes, micro-interactions' },
      { name: 'React Native (Expo)', context: 'Cross-platform mobile apps with offline AsyncStorage' },
    ],
  },
  {
    category: 'AI & Developer Velocity',
    badge: 'MODERN WORKFLOW',
    icon: Sparkles,
    accent: 'border-pink-500/30 text-pink-400',
    skills: [
      { name: 'LLM Prompt Pipelines', context: 'Multi-lingual curriculum routing (AIWorksheetPro)' },
      { name: 'AI-Augmented Development', context: 'Using Cursor & Claude to accelerate execution 5x' },
      { name: 'Git & PR Hygiene', context: '88% diff reduction, clean rebasing, surgical commits' },
      { name: 'Deployment & CI/CD', context: 'Vercel, environment configuration, custom domains' },
    ],
  },
];

export const SkillsMatrix: React.FC = () => {
  return (
    <section id="skills" className="py-16 relative z-10 border-t border-white/5">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 uppercase tracking-widest mb-2">
              <Cpu className="w-3.5 h-3.5" />
              <span>TECHNICAL ARSENAL</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              Tools & Technologies <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">I Build With</span>
            </h2>
          </div>
          <p className="text-xs font-mono text-gray-400 max-w-sm">
            Technologies I use in production to build full-stack web applications and AI backends.
          </p>
        </div>

        {/* 4 Category Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {SKILL_CATEGORIES.map((cat, idx) => {
            const Icon = cat.icon;
            return (
              <div key={idx} className="p-6 rounded-2xl glass-card border border-white/5 space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <div className="p-2 rounded-lg bg-white/5 border border-white/10 text-cyan-400">
                      <Icon className="w-4 h-4" />
                    </div>
                    <h3 className="text-sm sm:text-base font-bold text-white font-mono">
                      {cat.category}
                    </h3>
                  </div>
                  <span className="text-[9px] font-mono px-2 py-0.5 rounded bg-black/40 border border-white/10 text-gray-400">
                    {cat.badge}
                  </span>
                </div>

                <div className="space-y-2.5 pt-1 font-mono">
                  {cat.skills.map((skill, sIdx) => (
                    <div key={sIdx} className="p-2.5 rounded-xl bg-black/30 border border-white/5 flex items-start gap-2.5 text-xs">
                      <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                      <div>
                        <span className="text-white font-semibold">{skill.name}</span>
                        <p className="text-[11px] text-gray-400 mt-0.5">{skill.context}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* The Human + AI Velocity Synergy Banner */}
        <div className="mt-6 p-5 rounded-2xl bg-neutral-900/60 border border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-purple-500/10 border border-purple-500/20 text-purple-400">
              <Zap className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-xs font-bold text-white">The AI-Augmented Advantage</h4>
              <p className="text-[11px] text-gray-400">
                Human architectural discipline (invariants, error handling, review hygiene) + AI tooling velocity = High-quality software delivered fast.
              </p>
            </div>
          </div>
          <span className="text-[10px] font-mono px-3 py-1 rounded-full bg-purple-950/60 border border-purple-500/30 text-purple-300 font-bold shrink-0">
            SPEED + ACCURACY
          </span>
        </div>

      </div>
    </section>
  );
};