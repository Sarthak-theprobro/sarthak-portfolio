import React, { useState } from 'react';
import { X, Zap, Check, CheckCircle2, Rocket } from 'lucide-react';
import confetti from 'canvas-confetti';

interface MVPBookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface FeatureOption {
  id: string;
  name: string;
  days: number;
}

const FEATURE_OPTIONS: FeatureOption[] = [
  { id: 'auth', name: 'User Auth & RBAC Permissions', days: 1 },
  { id: 'payments', name: 'Stripe / Razorpay Idempotent Billing', days: 2 },
  { id: 'ai', name: 'LLM Multi-Model Prompt Pipeline', days: 2 },
  { id: 'db', name: 'Relational DB & Invariant Constraints', days: 1 },
  { id: 'email', name: 'Non-blocking Transactional Emails', days: 1 },
];

export const MVPBookingModal: React.FC<MVPBookingModalProps> = ({ isOpen, onClose }) => {
  const [selectedFeatures, setSelectedFeatures] = useState<string[]>(['auth', 'payments', 'ai', 'db']);
  const [appType, setAppType] = useState<string>('AI Web Application / SaaS');
  const [clientName, setClientName] = useState<string>('');
  const [clientEmail, setClientEmail] = useState<string>('');
  const [clientNotes, setClientNotes] = useState<string>('');
  const [isBooked, setIsBooked] = useState<boolean>(false);
  const [ticketId, setTicketId] = useState<string>('');

  if (!isOpen) return null;

  // Toggle feature selection
  const toggleFeature = (id: string) => {
    setSelectedFeatures((prev) =>
      prev.includes(id) ? prev.filter((f) => f !== id) : [...prev, id]
    );
  };

  // Calculate estimated turnaround
  const baseDays = 4;
  const additionalDays = selectedFeatures.reduce((acc, fId) => {
    const f = FEATURE_OPTIONS.find((opt) => opt.id === fId);
    return acc + (f ? f.days : 0);
  }, 0);
  const totalEstimatedDays = Math.min(Math.max(baseDays + Math.round(additionalDays * 0.7), 7), 14);

  // Submit and fire confetti
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const generatedTicket = 'MVP-TICKET-' + Math.floor(1000 + Math.random() * 9000);
    setTicketId(generatedTicket);
    setIsBooked(true);

    // Fire cyber celebration confetti
    confetti({
      particleCount: 120,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#06b6d4', '#8b5cf6', '#10b981', '#f43f5e'],
    });

    // Generate pre-filled email draft
    const featureNames = selectedFeatures
      .map((id) => FEATURE_OPTIONS.find((f) => f.id === id)?.name)
      .filter(Boolean)
      .join(', ');

    const emailSubject = encodeURIComponent(`[${generatedTicket}] 7-Day MVP Project Inquiry - ${clientName || 'Founder'}`);
    const emailBody = encodeURIComponent(
      `Hi Sarthak,\n\nI want to book an MVP development slot with you.\n\nProject Type: ${appType}\nTarget Timeline: ~${totalEstimatedDays} Days\nSelected Modules: ${featureNames}\nClient Name: ${clientName}\nClient Email: ${clientEmail}\n\nProject Scope & Notes:\n${clientNotes || 'Let us discuss on call.'}\n\nBest,\n${clientName}`
    );

    // Open user's default email client
    window.open(`mailto:sarthaksmn720@gmail.com?subject=${emailSubject}&body=${emailBody}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
      <div className="relative w-full max-w-2xl bg-[#090b13] border border-cyan-500/30 rounded-3xl shadow-[0_0_50px_rgba(6,182,212,0.2)] overflow-hidden font-mono">
        
        {/* Top Glow Bar */}
        <div className="h-1.5 w-full bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500" />

        {/* Header */}
        <div className="p-6 sm:p-8 flex items-center justify-between border-b border-white/5">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-cyan-500/10 border border-cyan-500/30">
              <Zap className="w-5 h-5 text-cyan-400" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-white tracking-wide">
                7-DAY PRODUCTION MVP TICKET
              </h3>
              <p className="text-xs text-gray-400">
                Configure scope & claim 1 of 3 free/low-cost founder slots.
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-xl bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body Content */}
        {!isBooked ? (
          <form onSubmit={handleSubmit} className="p-6 sm:p-8 space-y-6 max-h-[75vh] overflow-y-auto">
            
            {/* 1. App Type Selector */}
            <div>
              <label className="text-xs text-gray-300 font-bold uppercase tracking-wider mb-2 block">
                1. Select Product Architecture:
              </label>
              <select
                value={appType}
                onChange={(e) => setAppType(e.target.value)}
                className="w-full px-4 py-3 rounded-xl bg-[#0d101c] border border-white/10 text-white text-xs focus:outline-none focus:border-cyan-500"
              >
                <option value="AI Web Application / SaaS">AI Web Application / SaaS (Next.js + LLM APIs)</option>
                <option value="B2B Workflow Automation Tool">B2B Workflow & Document Automation Tool</option>
                <option value="Mobile Application (React Native)">Mobile Application (React Native / Expo)</option>
                <option value="Multi-Tenant Operations Dashboard">Multi-Tenant Operations & Booking Dashboard</option>
              </select>
            </div>

            {/* 2. Features Selector */}
            <div>
              <label className="text-xs text-gray-300 font-bold uppercase tracking-wider mb-2.5 block">
                2. Select Required Core Modules:
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs">
                {FEATURE_OPTIONS.map((f) => {
                  const isChecked = selectedFeatures.includes(f.id);
                  return (
                    <div
                      key={f.id}
                      onClick={() => toggleFeature(f.id)}
                      className={`p-3 rounded-xl border cursor-pointer transition-all flex items-center justify-between ${
                        isChecked
                          ? 'bg-cyan-950/40 border-cyan-500/50 text-cyan-200'
                          : 'bg-black/40 border-white/5 text-gray-400 hover:border-white/20'
                      }`}
                    >
                      <span>{f.name}</span>
                      <div className={`w-4 h-4 rounded border flex items-center justify-center ${
                        isChecked ? 'bg-cyan-500 border-cyan-500 text-black' : 'border-gray-600'
                      }`}>
                        {isChecked && <Check className="w-3 h-3 stroke-[3]" />}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* 3. Live Scope & Turnaround Estimate Box */}
            <div className="p-4 rounded-xl bg-gradient-to-r from-purple-950/40 to-cyan-950/40 border border-purple-500/30 flex items-center justify-between">
              <div>
                <span className="text-[10px] text-purple-300 font-bold uppercase">Estimated Turnaround</span>
                <p className="text-xl font-extrabold text-white">~{totalEstimatedDays} Days to Production</p>
              </div>
              <div className="text-right">
                <span className="text-[10px] text-cyan-300 font-bold uppercase">Target Stack</span>
                <p className="text-xs text-cyan-200">React • Node • MySQL/PG • AI</p>
              </div>
            </div>

            {/* 4. Founder Info */}
            <div className="space-y-3">
              <label className="text-xs text-gray-300 font-bold uppercase tracking-wider block">
                3. Your Details & Scope Brief:
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <input
                  type="text"
                  required
                  value={clientName}
                  onChange={(e) => setClientName(e.target.value)}
                  placeholder="Your Name / Founder"
                  className="w-full px-4 py-2.5 rounded-xl bg-[#0d101c] border border-white/10 text-white text-xs focus:outline-none focus:border-cyan-500"
                />
                <input
                  type="email"
                  required
                  value={clientEmail}
                  onChange={(e) => setClientEmail(e.target.value)}
                  placeholder="Your Work Email"
                  className="w-full px-4 py-2.5 rounded-xl bg-[#0d101c] border border-white/10 text-white text-xs focus:outline-none focus:border-cyan-500"
                />
              </div>
              <textarea
                rows={2}
                value={clientNotes}
                onChange={(e) => setClientNotes(e.target.value)}
                placeholder="Brief description of what you want built (or paste a link)..."
                className="w-full px-4 py-2.5 rounded-xl bg-[#0d101c] border border-white/10 text-white text-xs focus:outline-none focus:border-cyan-500"
              />
            </div>

            {/* Submit Action */}
            <button
              type="submit"
              className="w-full py-4 rounded-xl bg-gradient-to-r from-cyan-500 via-indigo-600 to-purple-600 text-white font-bold text-sm hover:brightness-110 shadow-[0_0_30px_rgba(6,182,212,0.4)] transition-all flex items-center justify-center gap-2 cursor-pointer active:scale-95"
            >
              <Rocket className="w-4 h-4" />
              LOCK MVP TICKET & CLAIM PARTNERSHIP SPOT
            </button>
          </form>
        ) : (
          /* Booked Confirmation Screen */
          <div className="p-8 sm:p-12 text-center space-y-6">
            <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 mx-auto flex items-center justify-center">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <div className="space-y-2">
              <span className="px-3 py-1 rounded-full bg-emerald-950/60 border border-emerald-500/30 text-emerald-300 text-xs font-bold">
                {ticketId} // CONFIRMED
              </span>
              <h4 className="text-2xl font-bold text-white pt-2">
                MVP Slot Reserved Successfully!
              </h4>
              <p className="text-xs text-gray-300 max-w-md mx-auto leading-relaxed">
                Your scope configuration has been formatted and your email client has opened. I will review your requirements and respond within 12 hours.
              </p>
            </div>

            <button
              onClick={onClose}
              className="px-6 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-bold cursor-pointer transition-all"
            >
              Close Window
            </button>
          </div>
        )}

      </div>
    </div>
  );
};