import React from 'react';
import { User, Shield, Award, Cpu, CheckCircle2, Heart } from 'lucide-react';

export const AboutStory: React.FC = () => {
  return (
    <section id="about" className="py-16 relative z-10 border-t border-white/5 bg-[#08090e]/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 uppercase tracking-widest mb-2">
              <User className="w-3.5 h-3.5" />
              <span>BACKGROUND & PHILOSOPHY</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              My Journey: From <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">Operations to Code</span>
            </h2>
          </div>
          <p className="text-xs font-mono text-gray-400 max-w-sm">
            How managing teams of 50+ people shaped my disciplined approach to writing clean, reliable software.
          </p>
        </div>

        {/* 2-Column Story */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          
          {/* Left Narrative Card */}
          <div className="lg:col-span-7 p-6 sm:p-8 rounded-3xl glass-card border border-cyan-500/20 flex flex-col justify-between space-y-4">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-950/60 border border-purple-500/30 text-xs font-mono text-purple-300">
                <Heart className="w-3 h-3 text-purple-400" />
                <span>HOW I THINK AS A DEVELOPER</span>
              </div>

              <h3 className="text-lg sm:text-xl font-bold text-white leading-snug">
                I don’t just write code—I build software that stays reliable when real people use it.
              </h3>

              <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                Before transitioning into software engineering, I spent years in operations management, supervising <strong className="text-white">teams of 50+ people</strong> under strict customer SLAs. That background gave me three practical advantages:
              </p>

              <div className="space-y-2.5 pt-1 text-xs text-gray-300 font-mono">
                <div className="flex items-start gap-2.5 p-2.5 rounded-xl bg-black/40 border border-white/5">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                  <span><strong className="text-white">Accountability & Communication:</strong> I value daily async updates, honest timelines, and listening closely to what clients and users actually need.</span>
                </div>

                <div className="flex items-start gap-2.5 p-2.5 rounded-xl bg-black/40 border border-white/5">
                  <CheckCircle2 className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
                  <span><strong className="text-white">Real-World Invariants:</strong> At AIWorksheetPro, I solved critical subscription concurrency issues and payment double-charges because I test for unexpected user actions.</span>
                </div>

                <div className="flex items-start gap-2.5 p-2.5 rounded-xl bg-black/40 border border-white/5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span><strong className="text-white">Electrical Engineering Roots (BIT Patna '21):</strong> I approach software like circuits: every signal must flow cleanly, with proper fuses (error boundaries) so nothing breaks.</span>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-white/5 flex items-center justify-between font-mono text-xs text-gray-400">
              <span>SARTHAK SUMAN</span>
              <span className="text-cyan-400">SURAT, INDIA</span>
            </div>
          </div>

          {/* Right Column: 3 Practical Principles */}
          <div className="lg:col-span-5 space-y-4 flex flex-col justify-between">
            <div className="p-5 rounded-2xl bg-[#0b0e1a] border border-white/10 hover:border-cyan-500/40 transition-all space-y-2">
              <div className="flex items-center justify-between">
                <span className="font-mono text-[11px] text-cyan-400 font-bold uppercase">Principle 01</span>
                <Shield className="w-4 h-4 text-cyan-400" />
              </div>
              <h4 className="text-sm font-bold text-white">Idempotency & Safety</h4>
              <p className="text-xs text-gray-400 leading-relaxed">
                Network requests lag and webhooks retry. Logic should always ensure payments and state changes never execute twice.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-[#0b0e1a] border border-white/10 hover:border-purple-500/40 transition-all space-y-2">
              <div className="flex items-center justify-between">
                <span className="font-mono text-[11px] text-purple-400 font-bold uppercase">Principle 02</span>
                <Cpu className="w-4 h-4 text-purple-400" />
              </div>
              <h4 className="text-sm font-bold text-white">Non-Blocking Error Boundaries</h4>
              <p className="text-xs text-gray-400 leading-relaxed">
                External tools (like emails or third-party APIs) must never crash the primary checkout or core user flow.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-[#0b0e1a] border border-white/10 hover:border-emerald-500/40 transition-all space-y-2">
              <div className="flex items-center justify-between">
                <span className="font-mono text-[11px] text-emerald-400 font-bold uppercase">Principle 03</span>
                <Award className="w-4 h-4 text-emerald-400" />
              </div>
              <h4 className="text-sm font-bold text-white">Clean, Surgical Git PRs</h4>
              <p className="text-xs text-gray-400 leading-relaxed">
                Writing clean commits without formatting clutter makes code review effortless and keeps codebases easy to maintain.
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};