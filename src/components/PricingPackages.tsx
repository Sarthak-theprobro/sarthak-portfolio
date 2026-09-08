import React from 'react';
import { Check, ShieldCheck, ArrowRight, Cpu, Rocket, Wrench, MessageSquare, HeartHandshake } from 'lucide-react';

interface PricingPackagesProps {
  onOpenModal?: () => void;
  onOpenMVP?: () => void;
}

const collaborationModels = [
  {
    title: 'MVP Co-Building for Founders',
    roleType: 'Project-Based / Turnkey Build',
    tagline: 'Turn your product spec or wireframe into a live, deployable application.',
    idealFor: 'Early-stage founders who have a validated idea and need a dedicated technical builder.',
    deliverables: [
      'Modern Frontend in React / Next.js with responsive Tailwind UI',
      'Secure User Authentication & Session Guards (Google/Email Auth)',
      'Database Architecture with strict integrity constraints (PostgreSQL/MySQL)',
      'Payment Webhook integration (Stripe / Razorpay idempotency)',
      'AI / LLM API integration with streaming error boundaries',
      '100% Code & IP ownership transferred to your GitHub',
      '14-Day zero-cost post-launch bug warranty'
    ],
    ctaText: 'Discuss Your MVP Scope',
    accentColor: 'border-cyan-500/30 hover:border-cyan-500/60 bg-neutral-900/80',
    icon: Rocket
  },
  {
    title: 'Full-Stack & AI Engineering',
    roleType: 'Contract / Full-Time Role',
    tagline: 'Join your engineering team to ship features, build backends, and maintain high velocity.',
    idealFor: 'Startups and engineering teams looking for a hungry, disciplined builder with clean Git hygiene.',
    deliverables: [
      'End-to-End feature development across React, Node.js, and TypeScript',
      'Building robust RESTful APIs with non-blocking error boundaries',
      'Surgical Git PRs (clean review trees, zero diff noise)',
      'Prompt engineering & multi-model LLM routing pipelines',
      'Cross-functional communication honed through 50+ person ops leadership',
      'Available for US / EU / Asia timezone overlap (daily async Loom syncs)'
    ],
    ctaText: 'Explore Hiring / Contract',
    accentColor: 'border-emerald-500/60 shadow-[0_0_20px_rgba(16,185,129,0.1)] bg-emerald-950/20',
    icon: Cpu
  },
  {
    title: 'Backend & Reliability Audits',
    roleType: 'Fixed-Scope Investigation',
    tagline: 'Resolve critical payment bugs, database concurrency issues, and third-party API crashes.',
    idealFor: 'Founders with existing apps experiencing webhook dropouts, multi-plan state bugs, or slow APIs.',
    deliverables: [
      'Webhook idempotency audit (block duplicate charges & race conditions)',
      'Database schema & invariant enforcement (e.g. single-active-plan rules)',
      'Isolating third-party services (SMTP email, LLM APIs) with try/catch boundaries',
      'Query optimization and permission checking (RBAC matrix)',
      'Detailed diagnostic report + surgical PR patch ready to merge'
    ],
    ctaText: 'Request Technical Audit',
    accentColor: 'border-purple-500/30 hover:border-purple-500/60 bg-neutral-900/80',
    icon: Wrench
  }
];

export const PricingPackages: React.FC<PricingPackagesProps> = ({ onOpenModal, onOpenMVP }) => {
  const handleAction = onOpenModal || onOpenMVP || (() => {});

  return (
    <section id="packages" className="py-16 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto relative">
      {/* Ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="text-center mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono mb-3">
          <HeartHandshake className="w-3.5 h-3.5" />
          <span>COLLABORATION & ENGAGEMENT MODELS</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
          Let’s Build Something <span className="bg-gradient-to-r from-emerald-400 via-cyan-400 to-indigo-400 bg-clip-text text-transparent">Real & Reliable</span>
        </h2>
        <p className="text-gray-400 text-xs sm:text-sm max-w-xl mx-auto mt-2">
          No agency markups or vague promises. Just direct, transparent engineering collaboration with daily async updates, clean code, and zero ghosting.
        </p>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch">
        {collaborationModels.map((item, idx) => {
          const IconComponent = item.icon;
          return (
            <div
              key={idx}
              className={`relative rounded-2xl border p-6 flex flex-col justify-between backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 ${
                item.accentColor
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="p-2 rounded-lg bg-white/5 border border-white/10 text-emerald-400">
                    <IconComponent className="w-4 h-4" />
                  </div>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/5 border border-white/10 text-gray-300">
                    {item.roleType}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-white mb-1">{item.title}</h3>
                <p className="text-gray-400 text-xs min-h-[36px] mb-3">{item.tagline}</p>

                <div className="p-2.5 rounded-lg bg-black/40 border border-white/5 text-[10px] text-gray-300 mb-5">
                  <strong className="text-white">Best For: </strong>{item.idealFor}
                </div>

                <div className="mb-6">
                  <span className="text-[11px] font-mono text-emerald-400 uppercase tracking-wider font-semibold block mb-2">
                    Key Deliverables:
                  </span>
                  <ul className="space-y-2">
                    {item.deliverables.map((feat, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-2 text-xs text-gray-300">
                        <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <button
                onClick={handleAction}
                className="w-full py-2.5 px-4 rounded-xl font-bold text-xs bg-gradient-to-r from-cyan-500/20 to-emerald-500/20 hover:from-cyan-500/30 hover:to-emerald-500/30 border border-emerald-500/40 text-white flex items-center justify-center gap-1.5 transition-all cursor-pointer group"
              >
                <span>{item.ctaText}</span>
                <ArrowRight className="w-3.5 h-3.5 text-emerald-400 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          );
        })}
      </div>

      {/* Guarantees Banner */}
      <div className="mt-10 p-5 rounded-2xl bg-neutral-900/60 border border-white/10 grid grid-cols-1 md:grid-cols-3 gap-4 text-center md:text-left">
        <div className="flex items-center gap-3 justify-center md:justify-start">
          <div className="p-2.5 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-400">
            <MessageSquare className="w-4 h-4" />
          </div>
          <div>
            <h4 className="text-xs font-bold text-white">Daily Async Updates</h4>
            <p className="text-[11px] text-gray-400">Daily Loom screen recordings & Slack syncs.</p>
          </div>
        </div>

        <div className="flex items-center gap-3 justify-center md:justify-start">
          <div className="p-2.5 rounded-lg bg-cyan-500/10 border border-cyan-500/20 text-cyan-400">
            <ShieldCheck className="w-4 h-4" />
          </div>
          <div>
            <h4 className="text-xs font-bold text-white">100% Code Ownership</h4>
            <p className="text-[11px] text-gray-400">Clean GitHub repository transfer & documentation.</p>
          </div>
        </div>

        <div className="flex items-center gap-3 justify-center md:justify-start">
          <div className="p-2.5 rounded-lg bg-purple-500/10 border border-purple-500/20 text-purple-400">
            <ShieldCheck className="w-4 h-4" />
          </div>
          <div>
            <h4 className="text-xs font-bold text-white">14-Day Bug Warranty</h4>
            <p className="text-[11px] text-gray-400">Zero-cost post-launch bug fixes guaranteed.</p>
          </div>
        </div>
      </div>
    </section>
  );
};