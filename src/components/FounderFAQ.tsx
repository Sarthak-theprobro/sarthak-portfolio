import React, { useState } from 'react';
import { HelpCircle, ChevronDown } from 'lucide-react';

interface FAQItem {
  id: string;
  question: string;
  answer: string;
  badge: string;
}

const FAQS: FAQItem[] = [
  {
    id: 'collaboration',
    question: 'How do you collaborate and communicate during a project or job?',
    answer: 'I believe in complete transparency. Having managed operational teams under strict customer SLAs, I prioritize clear daily communication. You receive daily Loom screen recordings showing working software, plus direct access over Slack or WhatsApp for quick syncs.',
    badge: 'DAILY ASYNC DEMOS & SLACK',
  },
  {
    id: 'ownership',
    question: 'Who owns the code and intellectual property?',
    answer: 'You own 100% of the code, intellectual property, database schemas, and configuration files from day one. Everything is pushed cleanly to your GitHub repository with clear documentation.',
    badge: '100% CLIENT OWNERSHIP',
  },
  {
    id: 'support',
    question: 'What happens after code is delivered? Is there post-launch support?',
    answer: 'Yes! Every project includes a 14-day zero-cost warranty. If any unexpected bug or edge-case appears after launch, I fix it immediately at no extra charge.',
    badge: '14-DAY WARRANTY INCLUDED',
  },
  {
    id: 'stack',
    question: 'What is your core technical stack?',
    answer: 'My primary stack is React / Next.js (TypeScript) and Tailwind CSS on the frontend, Node.js / Express on the backend, and MySQL / PostgreSQL / Supabase for databases. I also integrate Stripe/Razorpay payment webhooks and LLM/AI prompt pipelines.',
    badge: 'MODERN FULL-STACK',
  },
  {
    id: 'timezones',
    question: 'How do you work with clients or teams across different timezones?',
    answer: 'I am based in Surat, India (IST), but I have structured working hours to overlap with US, European, and Asian working schedules. Daily async Loom updates ensure zero delays regardless of time differences.',
    badge: 'GLOBAL REMOTE READY',
  },
];

export const FounderFAQ: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>('collaboration');

  const toggleFAQ = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faq" className="py-24 relative z-10 border-t border-white/5 bg-[#090b14]/60">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/40 border border-cyan-500/30 text-xs font-mono text-cyan-300">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>COMMON QUESTIONS</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Frequently Asked <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Questions</span>
          </h2>
          <p className="text-sm font-mono text-gray-400">
            Straightforward answers about how I work, communicate, and deliver software.
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-4 font-mono">
          {FAQS.map((faq) => {
            const isOpen = openId === faq.id;

            return (
              <div
                key={faq.id}
                className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                  isOpen
                    ? 'bg-[#0e1222] border-cyan-500/40 shadow-[0_0_25px_rgba(6,182,212,0.1)]'
                    : 'bg-[#090b13]/80 border-white/5 hover:border-white/15'
                }`}
              >
                <button
                  onClick={() => toggleFAQ(faq.id)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 cursor-pointer"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-sm sm:text-base font-bold text-white tracking-wide">
                      {faq.question}
                    </span>
                  </div>
                  <div className="flex items-center gap-3 shrink-0">
                    <span className="hidden sm:inline-block text-[10px] px-2.5 py-1 rounded bg-black/50 border border-white/10 text-cyan-300">
                      {faq.badge}
                    </span>
                    <div className={`p-1.5 rounded-lg bg-white/5 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 text-cyan-400' : 'text-gray-400'
                    }`}>
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-2 border-t border-white/5 text-xs sm:text-sm text-gray-300 font-sans leading-relaxed">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};