import React from 'react';
import { Briefcase, Calendar, MapPin, ChevronRight } from 'lucide-react';

interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  location: string;
  badge: string;
  description: string;
  achievements: string[];
}

const EXPERIENCES: ExperienceItem[] = [
  {
    role: 'Software Engineer',
    company: 'AIWorksheetPro',
    period: 'Aug 2026 – Present',
    location: 'Remote',
    badge: 'CORE ENGINEERING',
    description: 'Contributing to an EdTech AI platform across payments, subscriptions, MySQL database logic, and multi-model LLM generation pipelines.',
    achievements: [
      'Delivered multi-lingual curriculum routing across 4 AI generation tools (Lesson Planner, AI Tutor, Homework Helper, Quiz Generator).',
      'Engineered subscription lifecycle in Node.js/MySQL (plan_subscription_master), enforcing single-active-plan rules.',
      'Implemented idempotency guards in payment verification to prevent duplicate charges from retried webhooks.',
      'Reduced PR diff footprint by 88% down to 77 lines of clean business logic.',
    ],
  },
  {
    role: 'Shift Manager (Promoted from Desk Agent)',
    company: 'Kiotel Hospitality Pvt. Ltd.',
    period: 'Aug 2023 – Present',
    location: 'Surat, India',
    badge: 'OPERATIONS LEADERSHIP',
    description: 'Supervised a 50+ member operations team, establishing incident escalation SOPs and managing real-time issue resolution under strict customer SLAs.',
    achievements: [
      'Promoted to Shift Manager within 4 months based on problem-solving consistency, reliability, and leadership.',
      'Established operational SOPs that increased team operational throughput by 50%.',
      'Managed cross-functional communications with 100% SLA compliance.',
    ],
  },
  {
    role: 'Quality Assurance Engineer Intern',
    company: 'Webito Infotech',
    period: 'Nov 2024',
    location: 'Surat, India',
    badge: 'QA & TESTING',
    description: 'Executed functional, UI/UX, and API test cycles across core web applications in an Agile environment.',
    achievements: [
      'Identified and documented 20+ software defects across sprint cycles.',
      'Conducted regression testing and endpoint verification for API releases.',
    ],
  },
  {
    role: 'Customer Service Associate',
    company: 'Netizens Technologies',
    period: 'Jul 2022 – Aug 2023',
    location: 'Surat, India',
    badge: 'CLIENT OPERATIONS',
    description: 'Handled high-volume customer inquiries, billing resolutions, and dispute escalations for e-commerce channels.',
    achievements: [
      'Resolved complex billing disputes and order reconciliations for marketplace clients.',
    ],
  },
  {
    role: 'B.Tech in Electrical & Electronics Engineering',
    company: 'BIT Patna',
    period: '2017 – 2021',
    location: 'Patna, India',
    badge: 'EDUCATION',
    description: 'Rigorous engineering curriculum focusing on analytical systems, Data Structures & Algorithms, and DBMS.',
    achievements: [
      'Coursework: Data Structures & Algorithms, Object-Oriented Programming, Database Management Systems (DBMS).',
    ],
  },
];

export const ExperienceTimeline: React.FC = () => {
  return (
    <section id="experience" className="py-16 relative z-10 border-t border-white/5 bg-[#090b14]/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-purple-400 uppercase tracking-widest mb-2">
              <Briefcase className="w-3.5 h-3.5" />
              <span>CAREER TIMELINE</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              Experience & <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">Milestones</span>
            </h2>
          </div>
          <p className="text-xs font-mono text-gray-400 max-w-sm">
            From managing 50-person operations to building production backend systems.
          </p>
        </div>

        {/* Timeline Stack */}
        <div className="space-y-4">
          {EXPERIENCES.map((exp, idx) => (
            <div
              key={idx}
              className="p-5 sm:p-6 rounded-2xl glass-card border border-white/5 hover:border-cyan-500/30 transition-all group"
            >
              <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-2 mb-3">
                <div>
                  <div className="flex items-center gap-2.5 flex-wrap">
                    <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-cyan-300 transition-colors">
                      {exp.role}
                    </h3>
                    <span className="text-gray-400">@</span>
                    <span className="text-sm sm:text-base font-semibold text-cyan-400">{exp.company}</span>
                    <span className="text-[9px] font-mono px-2 py-0.5 rounded bg-purple-950/60 border border-purple-500/30 text-purple-300 font-bold">
                      {exp.badge}
                    </span>
                  </div>
                  <p className="text-xs font-mono text-gray-400 mt-1 flex items-center gap-3">
                    <span className="flex items-center gap-1"><Calendar className="w-3 h-3 text-gray-500" /> {exp.period}</span>
                    <span className="flex items-center gap-1"><MapPin className="w-3 h-3 text-gray-500" /> {exp.location}</span>
                  </p>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-gray-300 mb-3 max-w-3xl">
                {exp.description}
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-2 pt-3 border-t border-white/5 font-mono text-xs text-gray-300">
                {exp.achievements.map((ach, aIdx) => (
                  <div key={aIdx} className="flex items-start gap-1.5">
                    <ChevronRight className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                    <span>{ach}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};