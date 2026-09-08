import React, { useState } from 'react';
import { Terminal, Mail, ArrowUpRight, Zap, Copy, Check, Sparkles, MapPin } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './SocialIcons';

interface FooterProps {
  onOpenMVP?: () => void;
  onOpenModal?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenMVP, onOpenModal }) => {
  const [copied, setCopied] = useState(false);

  const handleAction = onOpenModal || onOpenMVP || (() => {});

  const copyEmail = () => {
    navigator.clipboard.writeText('sarthaksmn720@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <footer id="mvp-builder" className="relative z-10 border-t border-white/5 bg-[#07080d]">
      
      {/* Warm Connection Banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
        <div className="p-8 sm:p-14 rounded-3xl bg-gradient-to-b from-[#111422] to-[#0a0c16] border border-cyan-500/30 relative overflow-hidden shadow-[0_0_50px_rgba(6,182,212,0.15)] text-center space-y-6">
          
          <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/60 border border-cyan-500/40 text-xs font-mono text-cyan-300">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span>OPEN FOR OPPORTUNITIES & COLLABORATIONS</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-white max-w-2xl mx-auto leading-tight">
            Have a Project in Mind or an Open Role? <br />
            <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-500 bg-clip-text text-transparent">Let's Build Together.</span>
          </h2>

          <p className="text-sm sm:text-base text-gray-300 max-w-xl mx-auto leading-relaxed">
            Whether you're looking for a full-stack engineer for your team, or a technical partner to help build an MVP, I'd love to chat.
          </p>

          <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={handleAction}
              className="px-8 py-4 rounded-xl bg-gradient-to-r from-cyan-500 via-indigo-600 to-purple-600 text-white font-mono text-sm font-bold tracking-wider hover:brightness-110 shadow-[0_0_30px_rgba(6,182,212,0.3)] transition-all flex items-center gap-2.5 cursor-pointer active:scale-95"
            >
              <Zap className="w-4 h-4 fill-white" />
              START A CONVERSATION
            </button>

            <button
              onClick={copyEmail}
              className="px-6 py-4 rounded-xl bg-black/60 border border-white/10 text-gray-300 hover:text-white font-mono text-xs flex items-center gap-2 transition-all cursor-pointer"
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4 text-emerald-400" />
                  <span className="text-emerald-300">Email Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4 text-gray-400" />
                  <span>sarthaksmn720@gmail.com</span>
                </>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Footer Info */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 border-t border-white/5">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <Terminal className="w-5 h-5 text-cyan-400" />
              <span className="font-mono font-bold text-white text-base">SARTHAK SUMAN</span>
            </div>
            <p className="text-xs text-gray-400 font-mono flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-purple-400" /> Surat, India // Global Remote
            </p>
            <p className="text-[11px] text-gray-500">
              BIT Patna Alumnus (EEE) • Full-Stack & AI Systems
            </p>
          </div>

          <div className="flex items-center justify-start md:justify-center gap-6 font-mono text-xs">
            <a
              href="https://github.com/Sarthak-theprobro"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-gray-400 hover:text-cyan-400 transition-colors"
            >
              <GithubIcon className="w-4 h-4" /> GitHub <ArrowUpRight className="w-3 h-3" />
            </a>
            <a
              href="https://linkedin.com/in/sarthak-suman-76226a17b"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-gray-400 hover:text-purple-400 transition-colors"
            >
              <LinkedinIcon className="w-4 h-4" /> LinkedIn <ArrowUpRight className="w-3 h-3" />
            </a>
            <a
              href="mailto:sarthaksmn720@gmail.com"
              className="flex items-center gap-1 text-gray-400 hover:text-pink-400 transition-colors"
            >
              <Mail className="w-4 h-4" /> Email <ArrowUpRight className="w-3 h-3" />
            </a>
          </div>

          <div className="text-left md:text-right font-mono text-xs text-gray-500 space-y-1">
            <p className="text-gray-400">SARTHAK.DEV // BUILT WITH CARE</p>
            <p className="text-[11px]">© 2026 Sarthak Suman. All rights reserved.</p>
          </div>

        </div>
      </div>

    </footer>
  );
};