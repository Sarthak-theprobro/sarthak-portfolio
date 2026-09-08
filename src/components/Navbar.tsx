import React, { useState } from 'react';
import { Terminal, Zap, Menu, X } from 'lucide-react';

interface NavbarProps {
  onOpenModal?: () => void;
  onOpenMVP?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenModal, onOpenMVP }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleOpen = onOpenModal || onOpenMVP || (() => {});

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#08090d]/90 backdrop-blur-xl border-b border-white/5 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-3">
        
        {/* Brand / Logo */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="flex items-center gap-2.5 group cursor-pointer text-left shrink-0"
        >
          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-cyan-500/20 to-purple-500/20 border border-cyan-500/40 flex items-center justify-center group-hover:border-cyan-400 transition-all duration-300 shadow-[0_0_15px_rgba(6,182,212,0.2)]">
            <Terminal className="w-4 h-4 text-cyan-400 group-hover:scale-110 transition-transform" />
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <span className="font-mono text-sm tracking-wider font-bold text-white group-hover:text-cyan-400 transition-colors">
                SARTHAK.DEV
              </span>
              <span className="px-1 py-0.2 text-[9px] font-mono bg-purple-500/10 text-purple-400 border border-purple-500/30 rounded">
                v2.6
              </span>
            </div>
            <p className="text-[10px] font-mono text-gray-400">Full-Stack & AI Systems</p>
          </div>
        </button>

        {/* Desktop Navigation Links */}
        <nav className="hidden xl:flex items-center gap-5 text-[12px] font-medium tracking-wide text-gray-300">
          <button onClick={() => scrollToSection('systems')} className="hover:text-cyan-400 transition-colors cursor-pointer">
            Systems
          </button>
          <button onClick={() => scrollToSection('architecture')} className="hover:text-cyan-400 transition-colors cursor-pointer">
            Simulator
          </button>
          <button onClick={() => scrollToSection('packages')} className="text-emerald-400 font-bold hover:text-emerald-300 transition-colors cursor-pointer">
            Work With Me
          </button>
          <button onClick={() => scrollToSection('terminal')} className="hover:text-cyan-400 transition-colors cursor-pointer">
            Terminal
          </button>
          <button onClick={() => scrollToSection('about')} className="hover:text-cyan-400 transition-colors cursor-pointer">
            About
          </button>
          <button onClick={() => scrollToSection('experience')} className="hover:text-cyan-400 transition-colors cursor-pointer">
            Experience
          </button>
          <button onClick={() => scrollToSection('skills')} className="hover:text-cyan-400 transition-colors cursor-pointer">
            Skills
          </button>
          <button onClick={() => scrollToSection('testimonials')} className="hover:text-cyan-400 transition-colors cursor-pointer">
            Testimonials
          </button>
          <button onClick={() => scrollToSection('faq')} className="hover:text-cyan-400 transition-colors cursor-pointer">
            FAQ
          </button>
        </nav>

        {/* Right Side Controls */}
        <div className="hidden sm:flex items-center gap-2.5 shrink-0">
          <button
            onClick={handleOpen}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-emerald-950/40 border border-emerald-500/30 hover:border-emerald-400 hover:bg-emerald-900/40 transition-all shadow-[0_0_12px_rgba(16,185,129,0.15)] cursor-pointer group"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="text-[11px] font-mono text-emerald-300 font-bold tracking-wide group-hover:text-emerald-200">
              AVAILABLE FOR HIRE / MVP
            </span>
          </button>

          <button
            onClick={handleOpen}
            className="px-3.5 py-1.5 rounded-xl bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-mono text-xs font-bold tracking-wider hover:brightness-110 shadow-[0_0_20px_rgba(6,182,212,0.3)] transition-all flex items-center gap-1.5 cursor-pointer active:scale-95"
          >
            <Zap className="w-3.5 h-3.5 fill-white" />
            LET'S TALK
          </button>
        </div>

        {/* Mobile menu trigger */}
        <div className="xl:hidden flex items-center gap-2">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg bg-white/5 border border-white/10 text-gray-300 cursor-pointer"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-[#0c0e17] border-b border-white/10 px-6 py-6 space-y-3 text-sm font-medium">
          <button onClick={() => scrollToSection('systems')} className="block w-full text-left text-gray-300 hover:text-cyan-400 py-1">Systems</button>
          <button onClick={() => scrollToSection('architecture')} className="block w-full text-left text-gray-300 hover:text-cyan-400 py-1">Simulator Cockpit</button>
          <button onClick={() => scrollToSection('packages')} className="block w-full text-left text-emerald-400 font-bold py-1">Work With Me</button>
          <button onClick={() => scrollToSection('terminal')} className="block w-full text-left text-gray-300 hover:text-cyan-400 py-1">Developer CLI</button>
          <button onClick={() => scrollToSection('about')} className="block w-full text-left text-gray-300 hover:text-cyan-400 py-1">About Story</button>
          <button onClick={() => scrollToSection('experience')} className="block w-full text-left text-gray-300 hover:text-cyan-400 py-1">Experience Timeline</button>
          <button onClick={() => scrollToSection('skills')} className="block w-full text-left text-gray-300 hover:text-cyan-400 py-1">Skills Arsenal</button>
          <button onClick={() => scrollToSection('testimonials')} className="block w-full text-left text-gray-300 hover:text-cyan-400 py-1">Testimonials</button>
          <button onClick={() => scrollToSection('faq')} className="block w-full text-left text-gray-300 hover:text-cyan-400 py-1">FAQ</button>
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              handleOpen();
            }}
            className="w-full py-3 rounded-lg bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-mono text-xs font-bold flex items-center justify-center gap-2 mt-3 cursor-pointer"
          >
            <Zap className="w-4 h-4 fill-white" />
            START CONVERSATION
          </button>
        </div>
      )}
    </header>
  );
};