import React, { useState, useEffect } from 'react';
import { Shield, Rocket, Layers, Users, ArrowRight, Check, Copy, Code2 } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './SocialIcons';

interface HeroProps {
  onOpenMVP?: () => void;
  onOpenModal?: () => void;
}

const ROLES = [
  'FULL-STACK SOFTWARE ENGINEER',
  'REACT, TYPESCRIPT & NODE.JS DEVELOPER',
  'OPERATIONS LEADER TURNED BUILDER',
  'AI-AUGMENTED SYSTEM ARCHITECT',
];

export const Hero: React.FC<HeroProps> = ({ onOpenMVP, onOpenModal }) => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [copied, setCopied] = useState(false);

  const handleAction = onOpenModal || onOpenMVP || (() => {});

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % ROLES.length);
    }, 2800);
    return () => clearInterval(interval);
  }, []);

  const copyEmail = () => {
    navigator.clipboard.writeText('sarthaksmn720@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="relative pt-28 pb-14 md:pt-32 md:pb-16 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Status Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/40 border border-emerald-500/30 mb-6 backdrop-blur-md">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          <span className="font-mono text-[11px] text-emerald-300 font-semibold tracking-wide">
            AVAILABLE FOR FULL-TIME ROLES, CONTRACTS & MVP BUILDS
          </span>
        </div>

        {/* Main Headline */}
        <div className="max-w-3xl space-y-4">
          <h1 className="text-2xl sm:text-4xl lg:text-[42px] font-bold tracking-tight text-white leading-tight">
            Hi, I’m Sarthak Suman. <br />
            <span className="text-gray-300">I build </span>
            <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              reliable software
            </span>
            <span className="text-gray-300"> that solves real problems.</span>
          </h1>

          {/* Rotating Role Engine */}
          <div className="flex items-center gap-2.5 font-mono text-xs sm:text-sm text-gray-300 h-8">
            <span className="text-cyan-400 font-bold">&gt;</span>
            <div className="px-2.5 py-0.5 rounded bg-black/60 border border-purple-500/30 text-purple-300 font-medium shadow-[0_0_12px_rgba(139,92,246,0.15)]">
              {ROLES[roleIndex]}
            </div>
          </div>

          <p className="text-xs sm:text-sm text-gray-300 leading-relaxed max-w-2xl">
            Electrical Engineering graduate from <strong className="text-white font-medium">BIT Patna ('21)</strong> with years of operational team leadership, now engineering production software at <span className="text-cyan-300 font-medium">AIWorksheetPro</span>. I focus on clean React/Next.js frontends, resilient Node/MySQL backends, and prompt-engineered AI workflows.
          </p>

          {/* Action CTAs */}
          <div className="pt-2 flex flex-wrap items-center gap-3">
            <button
              onClick={handleAction}
              className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 via-indigo-600 to-purple-600 text-white font-mono text-xs font-bold tracking-wider hover:brightness-110 shadow-[0_0_20px_rgba(6,182,212,0.25)] transition-all flex items-center gap-2 cursor-pointer active:scale-95"
            >
              LET’S WORK TOGETHER
              <ArrowRight className="w-3.5 h-3.5" />
            </button>

            <a
              href="#architecture"
              className="px-4 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-white font-mono text-xs font-medium hover:border-cyan-500/40 transition-all flex items-center gap-1.5"
            >
              <Code2 className="w-3.5 h-3.5 text-cyan-400" />
              VIEW CODE & SIMULATORS
            </a>

            {/* Copy Email Button */}
            <button
              onClick={copyEmail}
              className="px-3.5 py-2.5 rounded-xl bg-black/50 border border-gray-800 text-gray-300 hover:text-white hover:border-gray-700 font-mono text-xs flex items-center gap-1.5 transition-all cursor-pointer"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                  <span className="text-emerald-300">Email Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5 text-gray-400" />
                  <span>sarthaksmn720@gmail.com</span>
                </>
              )}
            </button>
          </div>

          {/* Social Proof Links */}
          <div className="pt-1 flex items-center gap-4 text-gray-400 text-xs font-mono">
            <a
              href="https://github.com/Sarthak-theprobro"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 hover:text-cyan-400 transition-colors"
            >
              <GithubIcon className="w-3.5 h-3.5" /> GitHub (@Sarthak-theprobro)
            </a>
            <span className="text-gray-700">•</span>
            <a
              href="https://linkedin.com/in/sarthak-suman-76226a17b"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 hover:text-purple-400 transition-colors"
            >
              <LinkedinIcon className="w-3.5 h-3.5" /> LinkedIn
            </a>
          </div>
        </div>

        {/* 4 Compact Strength Cards */}
        <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-3">
          <div className="p-4 rounded-xl glass-card border border-white/5 hover:border-cyan-500/30 transition-all">
            <div className="flex items-center justify-between">
              <span className="text-base sm:text-lg font-bold font-mono text-cyan-400">Full-Stack</span>
              <Layers className="w-4 h-4 text-cyan-500/50" />
            </div>
            <p className="mt-1 text-[11px] font-mono text-gray-300 uppercase tracking-wider font-semibold">End-to-End Build</p>
            <p className="text-[10px] text-gray-400 mt-0.5">React, Next.js, Node.js & SQL</p>
          </div>

          <div className="p-4 rounded-xl glass-card border border-white/5 hover:border-purple-500/30 transition-all">
            <div className="flex items-center justify-between">
              <span className="text-base sm:text-lg font-bold font-mono text-purple-400">Production</span>
              <Shield className="w-4 h-4 text-purple-500/50" />
            </div>
            <p className="mt-1 text-[11px] font-mono text-gray-300 uppercase tracking-wider font-semibold">Real Code Quality</p>
            <p className="text-[10px] text-gray-400 mt-0.5">Tested webhooks & clean PRs</p>
          </div>

          <div className="p-4 rounded-xl glass-card border border-white/5 hover:border-emerald-500/30 transition-all">
            <div className="flex items-center justify-between">
              <span className="text-base sm:text-lg font-bold font-mono text-emerald-400">Leadership</span>
              <Users className="w-4 h-4 text-emerald-500/50" />
            </div>
            <p className="mt-1 text-[11px] font-mono text-gray-300 uppercase tracking-wider font-semibold">50+ Team Ops</p>
            <p className="text-[10px] text-gray-400 mt-0.5">Daily updates & clear syncs</p>
          </div>

          <div className="p-4 rounded-xl glass-card border border-pink-500/30 transition-all">
            <div className="flex items-center justify-between">
              <span className="text-base sm:text-lg font-bold font-mono text-pink-400">Velocity</span>
              <Rocket className="w-4 h-4 text-pink-500/50" />
            </div>
            <p className="mt-1 text-[11px] font-mono text-gray-300 uppercase tracking-wider font-semibold">Fast Execution</p>
            <p className="text-[10px] text-gray-400 mt-0.5">Turning specs into working code</p>
          </div>
        </div>

      </div>
    </section>
  );
};