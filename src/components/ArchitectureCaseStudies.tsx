import React, { useState } from 'react';
import { Layers, Shield, Play, RefreshCw, CheckCircle2, Sliders, Lock, ExternalLink, Cpu } from 'lucide-react';
import { GithubIcon } from './SocialIcons';

export const ArchitectureCaseStudies: React.FC = () => {
  const [activeProject, setActiveProject] = useState<'aiworksheet' | 'crm' | 'mern'>('aiworksheet');

  // Interactive Simulator 1 State (AIWorksheetPro)
  const [simStep, setSimStep] = useState<number>(0);
  const [isSimulating, setIsSimulating] = useState<boolean>(false);

  // Interactive Simulator 2 State (Lead Scoring CRM)
  const [engagement, setEngagement] = useState<number>(85);
  const [emailRate, setEmailRate] = useState<number>(70);
  const [budgetFit, setBudgetFit] = useState<number>(90);

  // Interactive Simulator 3 State (RBAC MERN)
  const [currentRole, setCurrentRole] = useState<'admin' | 'manager' | 'tenant'>('admin');

  // Calculate Lead Score formula
  const computedLeadScore = Math.round((engagement * 0.4) + (emailRate * 0.3) + (budgetFit * 0.3));
  const leadTier = computedLeadScore >= 75 ? { label: 'HOT LEAD', color: 'text-rose-400', bg: 'bg-rose-950/60 border-rose-500/40' }
                 : computedLeadScore >= 45 ? { label: 'WARM LEAD', color: 'text-amber-400', bg: 'bg-amber-950/60 border-amber-500/40' }
                 : { label: 'COLD LEAD', color: 'text-cyan-400', bg: 'bg-cyan-950/60 border-cyan-500/40' };

  // Trigger AIWorksheetPro Flow Simulation
  const runSimulation = () => {
    setIsSimulating(true);
    setSimStep(1);
    setTimeout(() => setSimStep(2), 700);
    setTimeout(() => setSimStep(3), 1400);
    setTimeout(() => {
      setSimStep(4);
      setIsSimulating(false);
    }, 2100);
  };

  return (
    <section id="architecture" className="py-24 relative z-10 border-t border-white/5 bg-[#0a0c14]/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-purple-400 uppercase tracking-widest mb-3">
              <Layers className="w-4 h-4" />
              <span>PRODUCTION SYSTEMS & LIVE SIMULATORS</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
              Interactive <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">Architecture Cockpit</span>
            </h2>
          </div>
          <p className="text-sm font-mono text-gray-400 max-w-md">
            Live interactive simulators proving system architecture, algorithm logic, and database invariants.
          </p>
        </div>

        {/* Project Selector Navigation Pills */}
        <div className="flex flex-wrap items-center gap-3 p-1.5 rounded-2xl bg-black/60 border border-white/10 w-fit mb-12">
          <button
            onClick={() => setActiveProject('aiworksheet')}
            className={`px-5 py-2.5 rounded-xl font-mono text-xs font-bold transition-all cursor-pointer flex items-center gap-2 ${
              activeProject === 'aiworksheet'
                ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-[0_0_15px_rgba(6,182,212,0.3)]'
                : 'text-gray-400 hover:text-white'
            }`}
          >
            <Shield className="w-4 h-4" />
            AIWORKSHEETPRO // BILLING & AI ENGINE
          </button>

          <button
            onClick={() => setActiveProject('crm')}
            className={`px-5 py-2.5 rounded-xl font-mono text-xs font-bold transition-all cursor-pointer flex items-center gap-2 ${
              activeProject === 'crm'
                ? 'bg-gradient-to-r from-purple-500 to-pink-600 text-white shadow-[0_0_15px_rgba(139,92,246,0.3)]'
                : 'text-gray-400 hover:text-white'
            }`}
          >
            <Sliders className="w-4 h-4" />
            STUDENT CRM // 0-100 LEAD SCORER
          </button>

          <button
            onClick={() => setActiveProject('mern')}
            className={`px-5 py-2.5 rounded-xl font-mono text-xs font-bold transition-all cursor-pointer flex items-center gap-2 ${
              activeProject === 'mern'
                ? 'bg-gradient-to-r from-emerald-500 to-teal-600 text-white shadow-[0_0_15px_rgba(16,185,129,0.3)]'
                : 'text-gray-400 hover:text-white'
            }`}
          >
            <Lock className="w-4 h-4" />
            MERN PROPERTY PLATFORM // RBAC
          </button>
        </div>

        {/* CASE STUDY 1: AIWORKSHEETPRO */}
        {activeProject === 'aiworksheet' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Context & Architecture Info */}
            <div className="lg:col-span-6 space-y-6">
              <div className="p-8 rounded-2xl glass-card border border-cyan-500/20 space-y-6">
                <div className="flex items-center justify-between">
                  <span className="px-3 py-1 rounded-full text-xs font-mono bg-cyan-950/60 border border-cyan-500/40 text-cyan-300 font-semibold">
                    PRODUCTION ENGINE // LIVE SYSTEM
                  </span>
                  <span className="text-xs font-mono text-emerald-400 flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
                    4 PRs Shipped
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-white">
                  Payment Lifecycle, Single-Active-Plan Invariants & Multi-Lingual AI Routing
                </h3>

                <p className="text-sm text-gray-300 leading-relaxed">
                  Architected critical backend systems in Node.js and MySQL for an EdTech AI platform. Resolved concurrent active plan corruption, blocked duplicate webhook double-billing, and routed AI generation across 4 engines.
                </p>

                {/* Key Solutions Built */}
                <div className="space-y-3 pt-2">
                  <div className="flex items-start gap-3 text-xs text-gray-300">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                    <span><strong className="text-white">Single-Active-Plan Invariant:</strong> Automatic deactivation (`UPDATE is_active=0`) before inserting new plan tiers.</span>
                  </div>
                  <div className="flex items-start gap-3 text-xs text-gray-300">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                    <span><strong className="text-white">Idempotency Guard:</strong> Instant return on `order.status === 'completed'` neutralizing network retries.</span>
                  </div>
                  <div className="flex items-start gap-3 text-xs text-gray-300">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                    <span><strong className="text-white">Resilient SMTP Dispatch:</strong> Non-blocking email error boundaries guaranteeing 100% checkout completion.</span>
                  </div>
                </div>

                {/* Tech Pills */}
                <div className="flex flex-wrap gap-2 pt-4 border-t border-white/5">
                  {['Node.js', 'MySQL', 'Razorpay', 'HMAC-SHA256', 'LLM Routing', 'Git Hygiene'].map((t) => (
                    <span key={t} className="text-xs font-mono px-2.5 py-1 rounded bg-black/50 border border-white/10 text-gray-300">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Live Interactive Simulator Cockpit */}
            <div className="lg:col-span-6">
              <div className="p-8 rounded-2xl bg-[#090b13] border border-cyan-500/30 shadow-[0_0_30px_rgba(6,182,212,0.1)] space-y-6">
                <div className="flex items-center justify-between pb-4 border-b border-white/10">
                  <div className="flex items-center gap-2">
                    <Cpu className="w-5 h-5 text-cyan-400" />
                    <span className="font-mono text-xs text-white font-bold tracking-wider">
                      INTERACTIVE BILLING PIPELINE SIMULATOR
                    </span>
                  </div>
                  <button
                    onClick={runSimulation}
                    disabled={isSimulating}
                    className="px-4 py-1.5 rounded-lg bg-cyan-500 text-black font-mono text-xs font-bold hover:bg-cyan-400 transition-all flex items-center gap-1.5 cursor-pointer disabled:opacity-50"
                  >
                    {isSimulating ? <RefreshCw className="w-3.5 h-3.5 animate-spin" /> : <Play className="w-3.5 h-3.5 fill-black" />}
                    {isSimulating ? 'EXECUTING...' : 'TRIGGER PAYMENT'}
                  </button>
                </div>

                {/* Visual Pipeline Steps */}
                <div className="space-y-3 font-mono text-xs">
                  {/* Step 1 */}
                  <div className={`p-4 rounded-xl border transition-all ${
                    simStep >= 1 ? 'bg-cyan-950/30 border-cyan-500/50 text-cyan-200' : 'bg-black/30 border-white/5 text-gray-500'
                  }`}>
                    <div className="flex items-center justify-between">
                      <span className="font-bold">1. Webhook Signature & Idempotency Guard</span>
                      {simStep >= 1 && <span className="text-[10px] text-cyan-400 font-semibold">VERIFIED [200 OK]</span>}
                    </div>
                    <p className="text-[11px] text-gray-400 mt-1">
                      HMAC-SHA256 signature verified • Checks `order.status` to block duplicate billing.
                    </p>
                  </div>

                  {/* Step 2 */}
                  <div className={`p-4 rounded-xl border transition-all ${
                    simStep >= 2 ? 'bg-purple-950/30 border-purple-500/50 text-purple-200' : 'bg-black/30 border-white/5 text-gray-500'
                  }`}>
                    <div className="flex items-center justify-between">
                      <span className="font-bold">2. MySQL Invariant Deactivation</span>
                      {simStep >= 2 && <span className="text-[10px] text-purple-400 font-semibold">INVARIANT ENFORCED</span>}
                    </div>
                    <p className="text-[11px] text-gray-400 mt-1">
                      `UPDATE plan_subscription_master SET is_active=0` $\rightarrow$ Single active plan preserved.
                    </p>
                  </div>

                  {/* Step 3 */}
                  <div className={`p-4 rounded-xl border transition-all ${
                    simStep >= 3 ? 'bg-emerald-950/30 border-emerald-500/50 text-emerald-200' : 'bg-black/30 border-white/5 text-gray-500'
                  }`}>
                    <div className="flex items-center justify-between">
                      <span className="font-bold">3. Account Tier & Seat Allocation</span>
                      {simStep >= 3 && <span className="text-[10px] text-emerald-400 font-semibold">SEATS APPLIED</span>}
                    </div>
                    <p className="text-[11px] text-gray-400 mt-1">
                      Symmetrical upgrade/downgrade logic updates `is_parent_account` and `max_child_accounts`.
                    </p>
                  </div>

                  {/* Step 4 */}
                  <div className={`p-4 rounded-xl border transition-all ${
                    simStep >= 4 ? 'bg-pink-950/30 border-pink-500/50 text-pink-200' : 'bg-black/30 border-white/5 text-gray-500'
                  }`}>
                    <div className="flex items-center justify-between">
                      <span className="font-bold">4. Non-Blocking Email Dispatch</span>
                      {simStep >= 4 && <span className="text-[10px] text-pink-400 font-semibold">DELIVERED</span>}
                    </div>
                    <p className="text-[11px] text-gray-400 mt-1">
                      Receipt sent from `contact@aiworksheetpro.com` inside isolated try/catch boundary.
                    </p>
                  </div>
                </div>

                {/* Console Log Simulator Output */}
                <div className="p-3.5 rounded-lg bg-black/80 border border-white/10 font-mono text-[11px] text-emerald-400">
                  <span className="text-gray-500">// System Output:</span>
                  <div className="mt-1">
                    {simStep === 0 && <span className="text-gray-500">Click [TRIGGER PAYMENT] above to run live transaction flow.</span>}
                    {simStep === 1 && <span className="text-cyan-400">[200 OK] Order verified via cryptographic webhook hash.</span>}
                    {simStep === 2 && <span className="text-purple-400">[DB] Deactivated 1 previous active plan row. Inserted new Pro tier.</span>}
                    {simStep === 3 && <span className="text-emerald-400">[RBAC] Parent privileges configured: max_child_accounts = 5.</span>}
                    {simStep === 4 && <span className="text-pink-400">[SUCCESS] Receipt queued. Auto-login session token issued.</span>}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* CASE STUDY 2: STUDENT CRM 0-100 LEAD SCORER */}
        {activeProject === 'crm' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <div className="lg:col-span-6 space-y-6">
              <div className="p-8 rounded-2xl glass-card border border-purple-500/20 space-y-6">
                <span className="px-3 py-1 rounded-full text-xs font-mono bg-purple-950/60 border border-purple-500/40 text-purple-300 font-semibold">
                  MOBILE APPLICATION // REACT NATIVE & EXPO
                </span>

                <h3 className="text-2xl font-bold text-white">
                  Student CRM & Dynamic 0–100 Lead Analytics Scoring Algorithm
                </h3>

                <p className="text-sm text-gray-300 leading-relaxed">
                  Engineered an enterprise mobile CRM for educational counseling. Features dynamic lead scoring algorithms, offline-first local storage, and real-time Hot/Warm/Cold classification.
                </p>

                <div className="space-y-3 pt-2">
                  <div className="flex items-start gap-3 text-xs text-gray-300">
                    <CheckCircle2 className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
                    <span><strong className="text-white">Dynamic 0–100 Algorithm:</strong> Multi-variable weighted calculation (Engagement 40%, Interaction 30%, Budget 30%).</span>
                  </div>
                  <div className="flex items-start gap-3 text-xs text-gray-300">
                    <CheckCircle2 className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
                    <span><strong className="text-white">Offline Persistence:</strong> AsyncStorage sync ensures instant local access without network latency.</span>
                  </div>
                </div>

                <div className="pt-4 flex items-center gap-4">
                  <a
                    href="https://github.com/Sarthak-theprobro/student-lead-crm-react-native"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-xs font-mono text-purple-400 hover:text-purple-300 transition-colors"
                  >
                    <GithubIcon className="w-4 h-4" /> View Source on GitHub <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>

            {/* Interactive Lead Calculator Simulator */}
            <div className="lg:col-span-6">
              <div className="p-8 rounded-2xl bg-[#090b13] border border-purple-500/30 shadow-[0_0_30px_rgba(139,92,246,0.1)] space-y-6">
                <div className="flex items-center justify-between pb-4 border-b border-white/10">
                  <span className="font-mono text-xs text-white font-bold tracking-wider">
                    LIVE LEAD SCORE ALGORITHM SIMULATOR
                  </span>
                  <div className={`px-3 py-1 rounded-full border text-xs font-mono font-bold ${leadTier.bg} ${leadTier.color}`}>
                    {leadTier.label} ({computedLeadScore}/100)
                  </div>
                </div>

                {/* Sliders */}
                <div className="space-y-5 font-mono text-xs">
                  <div>
                    <div className="flex justify-between text-gray-300 mb-2">
                      <span>1. Student Engagement (Calls/Attended):</span>
                      <span className="text-purple-400 font-bold">{engagement}%</span>
                    </div>
                    <input
                      type="range"
                      min="0"
                      max="100"
                      value={engagement}
                      onChange={(e) => setEngagement(Number(e.target.value))}
                      className="w-full h-2 bg-gray-800 rounded-lg appearance-none cursor-pointer accent-purple-500"
                    />
                  </div>

                  <div>
                    <div className="flex justify-between text-gray-300 mb-2">
                      <span>2. Interaction Rate (Email Opens/Replies):</span>
                      <span className="text-pink-400 font-bold">{emailRate}%</span>
                    </div>
                    <input
                      type="range"
                      min="0"
                      max="100"
                      value={emailRate}
                      onChange={(e) => setEmailRate(Number(e.target.value))}
                      className="w-full h-2 bg-gray-800 rounded-lg appearance-none cursor-pointer accent-pink-500"
                    />
                  </div>

                  <div>
                    <div className="flex justify-between text-gray-300 mb-2">
                      <span>3. Program & Budget Compatibility:</span>
                      <span className="text-cyan-400 font-bold">{budgetFit}%</span>
                    </div>
                    <input
                      type="range"
                      min="0"
                      max="100"
                      value={budgetFit}
                      onChange={(e) => setBudgetFit(Number(e.target.value))}
                      className="w-full h-2 bg-gray-800 rounded-lg appearance-none cursor-pointer accent-cyan-500"
                    />
                  </div>
                </div>

                {/* Computed Output */}
                <div className="p-4 rounded-xl bg-black/60 border border-white/10 font-mono text-xs flex items-center justify-between">
                  <span className="text-gray-400">Calculated Lead Quality Index:</span>
                  <span className="text-2xl font-extrabold text-white">{computedLeadScore} <span className="text-xs text-gray-500">/ 100</span></span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* CASE STUDY 3: MERN PROPERTY DASHBOARD */}
        {activeProject === 'mern' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <div className="lg:col-span-6 space-y-6">
              <div className="p-8 rounded-2xl glass-card border border-emerald-500/20 space-y-6">
                <span className="px-3 py-1 rounded-full text-xs font-mono bg-emerald-950/60 border border-emerald-500/40 text-emerald-300 font-semibold">
                  FULL-STACK WEB PLATFORM // MERN STACK
                </span>

                <h3 className="text-2xl font-bold text-white">
                  Multi-Tenant Property Management & RBAC Booking Platform
                </h3>

                <p className="text-sm text-gray-300 leading-relaxed">
                  Engineered a multi-role web platform with JWT authentication, protected route middleware, and 15+ secured RESTful endpoints for real estate property administration.
                </p>

                <div className="space-y-3 pt-2">
                  <div className="flex items-start gap-3 text-xs text-gray-300">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span><strong className="text-white">Role-Based Access Control:</strong> Strict permission barriers between SuperAdmins, Property Managers, and Tenants.</span>
                  </div>
                  <div className="flex items-start gap-3 text-xs text-gray-300">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span><strong className="text-white">Complex Query Filtering:</strong> Multi-parameter MongoDB query optimizations for real-time occupancy tracking.</span>
                  </div>
                </div>

                <div className="pt-4 flex items-center gap-4">
                  <a
                    href="https://github.com/Sarthak-theprobro/mern-event-app-property-dashboard"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-xs font-mono text-emerald-400 hover:text-emerald-300 transition-colors"
                  >
                    <GithubIcon className="w-4 h-4" /> View Source on GitHub <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>

            {/* RBAC Role Simulator */}
            <div className="lg:col-span-6">
              <div className="p-8 rounded-2xl bg-[#090b13] border border-emerald-500/30 shadow-[0_0_30px_rgba(16,185,129,0.1)] space-y-6">
                <div className="flex items-center justify-between pb-4 border-b border-white/10">
                  <span className="font-mono text-xs text-white font-bold tracking-wider">
                    INTERACTIVE RBAC PERMISSIONS INSPECTOR
                  </span>
                </div>

                {/* Role Switcher */}
                <div className="grid grid-cols-3 gap-2">
                  {(['admin', 'manager', 'tenant'] as const).map((role) => (
                    <button
                      key={role}
                      onClick={() => setCurrentRole(role)}
                      className={`py-2 rounded-lg font-mono text-xs font-bold uppercase transition-all cursor-pointer ${
                        currentRole === role
                          ? 'bg-emerald-500 text-black'
                          : 'bg-black/50 text-gray-400 hover:text-white border border-white/5'
                      }`}
                    >
                      {role}
                    </button>
                  ))}
                </div>

                {/* Permissions Matrix Output */}
                <div className="space-y-2.5 font-mono text-xs">
                  <div className="flex items-center justify-between p-3 rounded-lg bg-black/50 border border-white/5">
                    <span>Manage Global Billing & P&L:</span>
                    <span className={currentRole === 'admin' ? 'text-emerald-400 font-bold' : 'text-gray-600'}>
                      {currentRole === 'admin' ? 'GRANTED (RW)' : 'DENIED (403)'}
                    </span>
                  </div>
                  <div className="flex items-center justify-between p-3 rounded-lg bg-black/50 border border-white/5">
                    <span>Manage Unit Leases & Maintenance:</span>
                    <span className={currentRole !== 'tenant' ? 'text-emerald-400 font-bold' : 'text-gray-600'}>
                      {currentRole !== 'tenant' ? 'GRANTED (RW)' : 'DENIED (403)'}
                    </span>
                  </div>
                  <div className="flex items-center justify-between p-3 rounded-lg bg-black/50 border border-white/5">
                    <span>View Personal Lease & Pay Rent:</span>
                    <span className="text-emerald-400 font-bold">GRANTED (READ)</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};