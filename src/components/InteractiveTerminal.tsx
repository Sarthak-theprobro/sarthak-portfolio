import React, { useState, useRef } from 'react';
import { Terminal, CornerDownLeft, ExternalLink, Sparkles, FolderGit2 } from 'lucide-react';
import { GithubIcon } from './SocialIcons';

interface TerminalLine {
  id: string;
  type: 'input' | 'output' | 'system';
  content: string | React.ReactNode;
}

interface InteractiveTerminalProps {
  onOpenMVP: () => void;
}

export const InteractiveTerminal: React.FC<InteractiveTerminalProps> = ({ onOpenMVP }) => {
  const [inputVal, setInputVal] = useState('');
  const [history, setHistory] = useState<TerminalLine[]>([
    {
      id: 'init-1',
      type: 'system',
      content: 'SARTHAK_OS v2.6 // KERNEL INITIALIZED [CURATED SYSTEMS & PRODUCTION REPOSITORIES]',
    },
    {
      id: 'init-2',
      type: 'output',
      content: 'Type "projects" or click the pills below to inspect featured production repositories.',
    },
  ]);

  const terminalBodyRef = useRef<HTMLDivElement | null>(null);

  const scrollToBottomInternal = () => {
    if (terminalBodyRef.current) {
      terminalBodyRef.current.scrollTop = terminalBodyRef.current.scrollHeight;
    }
  };

  const handleCommand = (cmdText: string) => {
    const cleanCmd = cmdText.trim().toLowerCase();
    if (!cleanCmd) return;

    const newHistory: TerminalLine[] = [
      ...history,
      { id: Date.now() + '-in', type: 'input', content: cmdText },
    ];

    if (cleanCmd === 'clear') {
      setHistory([]);
      setInputVal('');
      return;
    }

    if (cleanCmd === 'help') {
      newHistory.push({
        id: Date.now() + '-out',
        type: 'output',
        content: (
          <div className="space-y-1.5 text-xs text-gray-300">
            <p className="text-cyan-400 font-bold">&gt; AVAILABLE SYSTEM COMMANDS:</p>
            <p><span className="text-purple-400 font-bold">projects</span> - View curated production repositories</p>
            <p><span className="text-purple-400 font-bold">skills</span> - Output the 4 core engineering pillars</p>
            <p><span className="text-purple-400 font-bold">audit</span> - Print AIWorksheetPro production audit summary</p>
            <p><span className="text-purple-400 font-bold">hire / mvp</span> - Launch the 7-Day MVP Booking Ticket</p>
            <p><span className="text-purple-400 font-bold">clear</span> - Clear terminal display</p>
          </div>
        ),
      });
    } else if (cleanCmd === 'projects') {
      newHistory.push({
        id: Date.now() + '-out',
        type: 'output',
        content: (
          <div className="space-y-3 text-xs">
            <p className="text-purple-400 font-bold flex items-center gap-1.5">
              <FolderGit2 className="w-4 h-4 text-purple-400" />
              CURATED PRODUCTION REPOSITORIES & SYSTEMS:
            </p>

            {/* Core Systems List */}
            <div className="space-y-2">
              <div className="p-2.5 rounded-lg bg-black/50 border border-white/5 space-y-1">
                <div className="flex items-center justify-between">
                  <span className="font-bold text-white">1. AIWorksheetPro (Production AI Engine)</span>
                  <span className="text-[10px] text-cyan-400 font-mono">Node.js • MySQL • Razorpay • LLM</span>
                </div>
                <p className="text-gray-400 text-[11px]">
                  Payment verification idempotency, single-active-plan invariants, and multi-lingual AI curriculum routing.
                </p>
              </div>

              <div className="p-2.5 rounded-lg bg-black/50 border border-white/5 space-y-1">
                <div className="flex items-center justify-between">
                  <a
                    href="https://github.com/Sarthak-theprobro/student-lead-crm-react-native"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-bold text-cyan-300 hover:underline flex items-center gap-1"
                  >
                    2. student-lead-crm-react-native <ExternalLink className="w-3 h-3" />
                  </a>
                  <span className="text-[10px] text-purple-400 font-mono">React Native • Expo</span>
                </div>
                <p className="text-gray-400 text-[11px]">
                  Enterprise mobile CRM with dynamic 0–100 weighted lead scoring algorithm and offline AsyncStorage.
                </p>
              </div>

              <div className="p-2.5 rounded-lg bg-black/50 border border-white/5 space-y-1">
                <div className="flex items-center justify-between">
                  <a
                    href="https://github.com/Sarthak-theprobro/mern-event-app-property-dashboard"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-bold text-emerald-300 hover:underline flex items-center gap-1"
                  >
                    3. mern-event-app-property-dashboard <ExternalLink className="w-3 h-3" />
                  </a>
                  <span className="text-[10px] text-emerald-400 font-mono">MERN Stack • RBAC</span>
                </div>
                <p className="text-gray-400 text-[11px]">
                  Multi-tenant real estate management platform with JWT authentication and multi-filter queries.
                </p>
              </div>

              <div className="p-2.5 rounded-lg bg-black/50 border border-white/5 space-y-1">
                <div className="flex items-center justify-between">
                  <a
                    href="https://github.com/Sarthak-theprobro/mern-event-app-portfolio-generator"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-bold text-pink-300 hover:underline flex items-center gap-1"
                  >
                    4. mern-event-app-portfolio-generator <ExternalLink className="w-3 h-3" />
                  </a>
                  <span className="text-[10px] text-pink-400 font-mono">Full-Stack MERN</span>
                </div>
                <p className="text-gray-400 text-[11px]">
                  Event registration, ticket generation, and dynamic portfolio creator platform.
                </p>
              </div>

              <div className="p-2.5 rounded-lg bg-black/50 border border-white/5 space-y-1">
                <div className="flex items-center justify-between">
                  <a
                    href="https://github.com/Sarthak-theprobro/student-scorecard"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-bold text-amber-300 hover:underline flex items-center gap-1"
                  >
                    5. student-scorecard <ExternalLink className="w-3 h-3" />
                  </a>
                  <span className="text-[10px] text-amber-400 font-mono">JavaScript • Analytics</span>
                </div>
                <p className="text-gray-400 text-[11px]">
                  Real-time educational grading and performance analytics calculator.
                </p>
              </div>

              <div className="p-2.5 rounded-lg bg-black/50 border border-white/5 space-y-1">
                <div className="flex items-center justify-between">
                  <span className="font-bold text-blue-300">6. sarthak-portfolio (SarthakOS Cockpit)</span>
                  <span className="text-[10px] text-blue-400 font-mono">React 19 • TypeScript • 3D Canvas</span>
                </div>
                <p className="text-gray-400 text-[11px]">
                  Ultra-futuristic developer cockpit with real-time 60 FPS particle physics and interactive simulators.
                </p>
              </div>
            </div>

            {/* GitHub Profile Direct Link */}
            <div className="pt-2 border-t border-white/5">
              <a
                href="https://github.com/Sarthak-theprobro"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 font-bold"
              >
                <GithubIcon className="w-4 h-4" /> View GitHub Profile (@Sarthak-theprobro) <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        ),
      });
    } else if (cleanCmd === 'skills') {
      newHistory.push({
        id: Date.now() + '-out',
        type: 'output',
        content: (
          <div className="space-y-2 text-xs">
            <p className="text-emerald-400 font-bold">&gt; 4 CORE ENGINEERING PILLARS:</p>
            <p>1. <strong className="text-white">Backend Architecture:</strong> Node.js, Express, Async Queues, Non-blocking SMTP.</p>
            <p>2. <strong className="text-white">Data Layer & Invariants:</strong> MySQL Schema Audits, Single-Active-Plan Invariants.</p>
            <p>3. <strong className="text-white">Payments & Webhooks:</strong> Razorpay/Stripe HMAC SHA-256 Idempotency.</p>
            <p>4. <strong className="text-white">AI Systems & Frontend:</strong> React, TypeScript, React Native (Expo), LLM Prompt Routing.</p>
          </div>
        ),
      });
    } else if (cleanCmd === 'audit') {
      newHistory.push({
        id: Date.now() + '-out',
        type: 'output',
        content: (
          <div className="space-y-1 text-xs text-cyan-300">
            <p className="text-white font-bold">&gt; AIWORKSHEETPRO PRODUCTION AUDIT SUMMARY:</p>
            <p>• Fixed MySQL multi-plan concurrency in `plan_subscription_master`.</p>
            <p>• Added `verifyPayment` idempotency guard blocking duplicate charges.</p>
            <p>• Isolated Nodemailer SMTP latency, achieving 100% checkout completion.</p>
            <p>• Reduced Git PR churn by 88% down to 77 lines of pure business logic.</p>
          </div>
        ),
      });
    } else if (cleanCmd === 'hire' || cleanCmd === 'mvp') {
      newHistory.push({
        id: Date.now() + '-out',
        type: 'output',
        content: <p className="text-emerald-400 font-bold">&gt; Launching 7-Day MVP Configurator...</p>,
      });
      setTimeout(() => onOpenMVP(), 500);
    } else {
      newHistory.push({
        id: Date.now() + '-out',
        type: 'output',
        content: (
          <p className="text-rose-400 text-xs">
            Command not recognized: "{cleanCmd}". Type <span className="underline font-bold">help</span> or click <span className="underline font-bold">projects</span>.
          </p>
        ),
      });
    }

    setHistory(newHistory);
    setInputVal('');
    setTimeout(scrollToBottomInternal, 50);
  };

  return (
    <section id="terminal" className="py-20 relative z-10 border-t border-white/5">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-950/40 border border-purple-500/30 text-xs font-mono text-purple-300">
            <Terminal className="w-3.5 h-3.5" />
            <span>DEVELOPER CLI INTERFACE</span>
          </div>
          <h2 className="text-3xl font-extrabold text-white">
            Interactive <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">Command Deck</span>
          </h2>
          <p className="text-xs font-mono text-gray-400">
            Query systems, audit production PRs, explore repositories, or trigger the 7-day MVP launch engine.
          </p>
        </div>

        {/* Terminal Window Box */}
        <div className="rounded-2xl bg-[#090b13] border border-white/10 shadow-[0_0_40px_rgba(0,0,0,0.8)] overflow-hidden">
          
          {/* Top Title Bar */}
          <div className="px-4 py-3 bg-[#0d101c] border-b border-white/5 flex items-center justify-between flex-wrap gap-2">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-rose-500/80"></div>
              <div className="w-3 h-3 rounded-full bg-amber-500/80"></div>
              <div className="w-3 h-3 rounded-full bg-emerald-500/80"></div>
              <span className="ml-2 font-mono text-xs text-gray-400 font-medium">
                bash // sarthak@systems-engine:~
              </span>
            </div>

            {/* Quick Command Shortcut Pills */}
            <div className="flex items-center gap-1.5 font-mono text-[11px]">
              <button onClick={() => handleCommand('help')} className="px-2 py-0.5 rounded bg-white/5 hover:bg-white/10 text-gray-300 cursor-pointer">help</button>
              <button onClick={() => handleCommand('projects')} className="px-2 py-0.5 rounded bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 hover:bg-cyan-500/30 cursor-pointer font-semibold">projects</button>
              <button onClick={() => handleCommand('skills')} className="px-2 py-0.5 rounded bg-white/5 hover:bg-white/10 text-gray-300 cursor-pointer">skills</button>
              <button onClick={() => handleCommand('audit')} className="px-2 py-0.5 rounded bg-white/5 hover:bg-white/10 text-purple-300 cursor-pointer">audit</button>
              <button onClick={() => handleCommand('hire')} className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 hover:bg-emerald-500/30 cursor-pointer font-bold">hire</button>
            </div>
          </div>

          {/* Terminal Screen Body */}
          <div ref={terminalBodyRef} className="p-5 font-mono text-xs space-y-3 min-h-[260px] max-h-[440px] overflow-y-auto">
            {history.map((item) => (
              <div key={item.id}>
                {item.type === 'system' && (
                  <div className="text-cyan-400/80 font-bold border-b border-cyan-500/20 pb-1">
                    {item.content}
                  </div>
                )}
                {item.type === 'input' && (
                  <div className="flex items-center gap-2 text-gray-300">
                    <span className="text-purple-400 font-bold">guest@sarthak.dev:~$</span>
                    <span className="text-white font-semibold">{item.content}</span>
                  </div>
                )}
                {item.type === 'output' && (
                  <div className="text-gray-300 pl-4 border-l border-white/10 py-0.5">
                    {item.content}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Input Prompt Footer */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleCommand(inputVal);
            }}
            className="p-3 bg-[#0d101c] border-t border-white/5 flex items-center gap-3"
          >
            <span className="text-purple-400 font-mono text-xs font-bold pl-2">guest@sarthak.dev:~$</span>
            <input
              type="text"
              value={inputVal}
              onChange={(e) => setInputVal(e.target.value)}
              placeholder="Type 'projects', 'skills', 'audit', or 'hire'..."
              className="flex-1 bg-transparent border-none text-white font-mono text-xs focus:outline-none placeholder-gray-600"
            />
            <button
              type="submit"
              className="p-1.5 rounded-lg bg-purple-600 hover:bg-purple-500 text-white cursor-pointer transition-colors"
            >
              <CornerDownLeft className="w-3.5 h-3.5" />
            </button>
          </form>

        </div>

      </div>
    </section>
  );
};