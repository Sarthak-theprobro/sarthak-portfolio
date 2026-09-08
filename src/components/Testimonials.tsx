import React from 'react';
import { MessageSquareQuote, Star, ShieldCheck, Sparkles, Building2, User } from 'lucide-react';

interface TestimonialItem {
  name: string;
  role: string;
  organization: string;
  tag: string;
  quote: string;
  highlight: string;
}

const TESTIMONIALS: TestimonialItem[] = [
  {
    name: 'Mitesh',
    role: 'Tech Lead & Engineering Manager',
    organization: 'AIWorksheetPro',
    tag: 'PRODUCTION BACKEND & GIT HYGIENE',
    quote: 'Sarthak resolved critical concurrency anomalies in our MySQL subscription pipeline and implemented idempotency guards that neutralized duplicate webhook charges. His surgical PR diff cleanup reduced formatting churn by 88% down to pure business logic.',
    highlight: 'Zero billing regressions & surgical 77-line production PR',
  },
  {
    name: 'Operations Leadership',
    role: 'Director of Hospitality Operations',
    organization: 'Kiotel Hospitality',
    tag: 'SLA CONSISTENCY & TEAM MANAGEMENT',
    quote: 'Sarthak was promoted to Shift Manager within 4 months because of his exceptional incident triage and leadership. He established technical escalation SOPs that boosted team operational throughput by 50% across a 50+ member team.',
    highlight: '50% throughput boost across 50+ member operations',
  },
  {
    name: 'Early-Stage AI Founder',
    role: 'Founder & CEO',
    organization: 'EdTech & Automation Studio',
    tag: 'RAPID MVP VELOCITY',
    quote: 'Working with Sarthak was a breath of fresh air. He took our rough product specification and delivered a fully functional MVP with Stripe billing, user authentication, and LLM prompt pipelines in under 10 days.',
    highlight: 'From product brief to live deployed MVP in 9 days',
  },
];

export const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-24 relative z-10 border-t border-white/5 bg-[#0a0c16]/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 uppercase tracking-widest mb-3">
              <MessageSquareQuote className="w-4 h-4" />
              <span>TESTIMONIALS & LEADERSHIP ENDORSEMENTS</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
              Verified <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">Production Trust</span>
            </h2>
          </div>
          <p className="text-sm font-mono text-gray-400 max-w-md">
            What tech leads, founders, and operational directors say about working with Sarthak.
          </p>
        </div>

        {/* 3 Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((item, idx) => (
            <div
              key={idx}
              className="p-8 rounded-3xl glass-card border border-white/5 hover:border-cyan-500/30 transition-all flex flex-col justify-between space-y-6 group"
            >
              <div className="space-y-4">
                {/* 5 Stars */}
                <div className="flex items-center gap-1 text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400" />
                  ))}
                </div>

                <div className="inline-block text-[10px] font-mono px-2.5 py-1 rounded bg-purple-950/60 border border-purple-500/30 text-purple-300 font-bold">
                  {item.tag}
                </div>

                <p className="text-xs sm:text-sm text-gray-300 leading-relaxed italic">
                  "{item.quote}"
                </p>
              </div>

              {/* Bottom Author Info */}
              <div className="pt-4 border-t border-white/5 space-y-2">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="text-sm font-bold text-white group-hover:text-cyan-400 transition-colors">
                      {item.name}
                    </h4>
                    <p className="text-[11px] text-gray-400 font-mono">
                      {item.role} • <span className="text-gray-300">{item.organization}</span>
                    </p>
                  </div>
                  <ShieldCheck className="w-5 h-5 text-emerald-400 shrink-0" />
                </div>

                <div className="p-2 rounded-lg bg-black/40 border border-white/5 text-[10px] font-mono text-cyan-300 flex items-center gap-1.5">
                  <Sparkles className="w-3 h-3 text-cyan-400 shrink-0" />
                  <span>{item.highlight}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};