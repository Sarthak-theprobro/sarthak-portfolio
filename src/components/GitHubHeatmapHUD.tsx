import React, { useState, useEffect } from 'react';
import { MapPin, Briefcase, GraduationCap, CheckCircle2, Activity } from 'lucide-react';

export const GitHubHeatmapHUD: React.FC = () => {
  const [currentTime, setCurrentTime] = useState<string>('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const istTime = now.toLocaleTimeString('en-US', {
        timeZone: 'Asia/Kolkata',
        hour12: false,
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
      });
      setCurrentTime(istTime);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  // 32-week commit intensity representation
  const weeks = Array.from({ length: 32 }, (_, wIndex) => {
    return Array.from({ length: 7 }, (_, dIndex) => {
      const isRecent = wIndex > 20;
      const intensity = isRecent 
        ? ((wIndex * 3 + dIndex * 7) % 5)
        : ((wIndex * 2 + dIndex * 5) % 4);
      return intensity;
    });
  });

  const getColorClass = (level: number) => {
    switch (level) {
      case 0: return 'bg-neutral-800/40';
      case 1: return 'bg-emerald-950/70 border border-emerald-800/30';
      case 2: return 'bg-emerald-700/60';
      case 3: return 'bg-emerald-500/80';
      case 4: return 'bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.6)]';
      default: return 'bg-neutral-800/40';
    }
  };

  return (
    <section className="py-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* 4 Authentic Personal Context Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <div className="p-4 rounded-xl bg-neutral-900/70 border border-white/10 backdrop-blur-md hover:border-amber-500/40 transition-colors">
          <div className="flex items-center gap-2 text-amber-400 text-xs font-mono mb-1">
            <MapPin className="w-3.5 h-3.5" />
            <span>LOCATION & TIMEZONE</span>
          </div>
          <div className="text-xl sm:text-2xl font-mono font-bold text-white tracking-wider">
            {currentTime || '12:00:00'} <span className="text-xs text-gray-400 font-sans font-normal">IST</span>
          </div>
          <div className="text-[11px] text-emerald-400 font-medium flex items-center gap-1.5 mt-1">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
            <span>Surat, India (US/EU Async Ready)</span>
          </div>
        </div>

        <div className="p-4 rounded-xl bg-neutral-900/70 border border-white/10 backdrop-blur-md hover:border-cyan-500/40 transition-colors">
          <div className="flex items-center gap-2 text-cyan-400 text-xs font-mono mb-1">
            <Briefcase className="w-3.5 h-3.5" />
            <span>CURRENT EXPERIENCE</span>
          </div>
          <div className="text-base sm:text-lg font-bold text-white">AIWorksheetPro</div>
          <div className="text-[11px] text-gray-400 mt-1">Software Engineer (Node.js, MySQL, Razorpay)</div>
        </div>

        <div className="p-4 rounded-xl bg-neutral-900/70 border border-white/10 backdrop-blur-md hover:border-purple-500/40 transition-colors">
          <div className="flex items-center gap-2 text-purple-400 text-xs font-mono mb-1">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>ENGINEERING ROOTS</span>
          </div>
          <div className="text-base sm:text-lg font-bold text-white">BIT Patna '21</div>
          <div className="text-[11px] text-gray-400 mt-1">B.Tech in Electrical & Electronics</div>
        </div>

        <div className="p-4 rounded-xl bg-neutral-900/70 border border-white/10 backdrop-blur-md hover:border-emerald-500/40 transition-colors">
          <div className="flex items-center gap-2 text-emerald-400 text-xs font-mono mb-1">
            <CheckCircle2 className="w-3.5 h-3.5" />
            <span>AVAILABILITY</span>
          </div>
          <div className="text-base sm:text-lg font-bold text-emerald-300">Open to Opportunities</div>
          <div className="text-[11px] text-gray-400 mt-1">Full-time roles, contracts & MVP builds</div>
        </div>
      </div>

      {/* GitHub Shipping Velocity Activity Grid */}
      <div className="p-5 rounded-xl bg-neutral-900/60 border border-white/10 backdrop-blur-md">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 mb-4">
          <div className="flex items-center gap-2 text-xs font-mono text-gray-300">
            <Activity className="w-4 h-4 text-emerald-400" />
            <span className="font-semibold text-white">Daily Coding & Shipping Activity</span>
            <span className="text-gray-500">|</span>
            <span className="text-emerald-400 font-mono">1,180+ GitHub Contributions</span>
          </div>
          <div className="flex items-center gap-1.5 text-[10px] font-mono text-gray-400">
            <span>Less</span>
            <span className="w-2.5 h-2.5 rounded-sm bg-neutral-800" />
            <span className="w-2.5 h-2.5 rounded-sm bg-emerald-950 border border-emerald-800/40" />
            <span className="w-2.5 h-2.5 rounded-sm bg-emerald-700" />
            <span className="w-2.5 h-2.5 rounded-sm bg-emerald-500" />
            <span className="w-2.5 h-2.5 rounded-sm bg-emerald-400" />
            <span>More</span>
          </div>
        </div>

        {/* Heatmap Matrix */}
        <div className="overflow-x-auto pb-2">
          <div className="inline-flex gap-1 min-w-full justify-between">
            {weeks.map((week, wIdx) => (
              <div key={wIdx} className="flex flex-col gap-1">
                {week.map((level, dIdx) => (
                  <div
                    key={dIdx}
                    className={`w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-sm transition-all duration-200 hover:scale-125 ${getColorClass(level)}`}
                    title={`Commit intensity level: ${level}`}
                  />
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};