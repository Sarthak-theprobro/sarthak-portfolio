import React, { useState } from 'react';
import { GitPullRequest, CheckCircle2, AlertTriangle, Shield, Code2 } from 'lucide-react';

export const GitDiffInspector: React.FC = () => {
  const [viewMode, setViewMode] = useState<'clean' | 'noisy'>('clean');

  return (
    <section id="git-diff" className="py-24 relative z-10 border-t border-white/5 bg-[#080a12]/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 uppercase tracking-widest mb-3">
              <GitPullRequest className="w-4 h-4" />
              <span>PRODUCTION CODE HYGIENE // PR #496 AUDIT</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
              Surgical <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">Git Diff Optimization</span>
            </h2>
          </div>
          <p className="text-sm font-mono text-gray-400 max-w-md">
            Interactive demonstration showing how I eliminated 88% diff noise down to 77 lines of pure business logic for Tech Lead review.
          </p>
        </div>

        {/* Diff Control Switcher */}
        <div className="flex flex-wrap items-center justify-between gap-4 p-4 rounded-2xl bg-[#0d101d] border border-white/10 mb-8 font-mono text-xs">
          <div className="flex items-center gap-2">
            <span className="text-gray-400">Target Base Branch:</span>
            <span className="px-2.5 py-1 rounded bg-black/60 border border-white/10 text-cyan-300 font-bold">
              origin/main_v2
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setViewMode('clean')}
              className={`px-4 py-2 rounded-xl font-bold transition-all cursor-pointer flex items-center gap-2 ${
                viewMode === 'clean'
                  ? 'bg-emerald-500 text-black shadow-[0_0_15px_rgba(16,185,129,0.3)]'
                  : 'text-gray-400 hover:text-white bg-white/5'
              }`}
            >
              <CheckCircle2 className="w-4 h-4" />
              SURGICAL PR (77 LINES) [PRODUCTION]
            </button>

            <button
              onClick={() => setViewMode('noisy')}
              className={`px-4 py-2 rounded-xl font-bold transition-all cursor-pointer flex items-center gap-2 ${
                viewMode === 'noisy'
                  ? 'bg-rose-500 text-white shadow-[0_0_15px_rgba(244,63,94,0.3)]'
                  : 'text-gray-400 hover:text-white bg-white/5'
              }`}
            >
              <AlertTriangle className="w-4 h-4" />
              UNFILTERED NOISE (642 LINES) [REJECTED]
            </button>
          </div>
        </div>

        {/* Visual Code Window */}
        <div className="rounded-3xl bg-[#090b13] border border-cyan-500/20 overflow-hidden shadow-[0_0_40px_rgba(0,0,0,0.8)] font-mono text-xs">
          
          {/* Top Bar */}
          <div className="p-4 bg-[#0d101c] border-b border-white/5 flex items-center justify-between flex-wrap gap-2">
            <div className="flex items-center gap-2">
              <Code2 className="w-4 h-4 text-cyan-400" />
              <span className="text-white font-bold">
                {viewMode === 'clean' ? 'backend_v2/src/controllers/payment.controller.js' : 'backend_v2/src/**/* (6 files changed)'}
              </span>
            </div>
            <div className="flex items-center gap-3 text-[11px]">
              <span className={viewMode === 'clean' ? 'text-emerald-400 font-bold' : 'text-rose-400 font-bold'}>
                {viewMode === 'clean' ? '+77 lines / -0 noise' : '+642 lines / formatting churn'}
              </span>
              <span className="text-gray-600">|</span>
              <span className="text-cyan-300">Merged to origin/main_v2</span>
            </div>
          </div>

          {/* Code Viewer Body */}
          <div className="p-6 overflow-x-auto max-h-[420px] overflow-y-auto leading-relaxed">
            {viewMode === 'clean' ? (
              <pre className="text-gray-300 space-y-1">
                <span className="text-gray-500">// 1. IDEMPOTENCY GUARD: Neutralize duplicate webhooks & double-billing</span>{'\n'}
                <span className="text-emerald-400">+ if (order[0].status === 'completed') {'{'}</span>{'\n'}
                <span className="text-emerald-400">+   return res.json(getSuccessResponse({'{'} message: 'Payment already verified' {'}'}));</span>{'\n'}
                <span className="text-emerald-400">+ {'}'}</span>{'\n'}{'\n'}
                <span className="text-gray-500">// 2. MYSQL SINGLE-ACTIVE-PLAN INVARIANT GUARD</span>{'\n'}
                <span className="text-emerald-400">+ await db.query(</span>{'\n'}
                <span className="text-emerald-400">+   'UPDATE plan_subscription_master SET is_active = 0 WHERE user_id = ? AND is_active = 1 LIMIT 1',</span>{'\n'}
                <span className="text-emerald-400">+   [user_id]</span>{'\n'}
                <span className="text-emerald-400">+ );</span>{'\n'}{'\n'}
                <span className="text-gray-500">// 3. SYMMETRICAL RBAC TIER PRIVILEGE HANDLING</span>{'\n'}
                <span className="text-emerald-400">+ const isParent = plan.is_parent_plan ? 1 : 0;</span>{'\n'}
                <span className="text-emerald-400">+ const maxChildren = plan.is_parent_plan ? (plan.max_sub_users || 0) : 0;</span>{'\n'}
                <span className="text-emerald-400">+ await db.query(</span>{'\n'}
                <span className="text-emerald-400">+   'UPDATE product_users SET is_parent_account = ?, max_child_accounts = ? WHERE user_id = ?',</span>{'\n'}
                <span className="text-emerald-400">+   [isParent, maxChildren, user_id]</span>{'\n'}
                <span className="text-emerald-400">+ );</span>{'\n'}{'\n'}
                <span className="text-gray-500">// 4. NON-BLOCKING RESILIENT EMAIL BOUNDARY</span>{'\n'}
                <span className="text-emerald-400">+ try {'{'}</span>{'\n'}
                <span className="text-emerald-400">+   await mailer.sendMail({'{'} from: '"AI Worksheet Pro" &lt;contact@aiworksheetpro.com&gt;', to: user.email ... {'}'});</span>{'\n'}
                <span className="text-emerald-400">+ {'}'} catch (emailErr) {'{'}</span>{'\n'}
                <span className="text-emerald-400">+   console.warn('[SMTP] Latency logged, checkout preserved:', emailErr.message);</span>{'\n'}
                <span className="text-emerald-400">+ {'}'}</span>
              </pre>
            ) : (
              <pre className="text-rose-300 space-y-1">
                <span className="text-rose-400">- const status = "pending";</span>{'\n'}
                <span className="text-rose-400">+ const status = 'pending';</span>{'\n'}
                <span className="text-rose-400">- function verify ( a, b ) {'{'}</span>{'\n'}
                <span className="text-rose-400">+ function verify(a, b) {'{'}</span>{'\n'}
                <span className="text-rose-400">-   let user_id = req . body . userId</span>{'\n'}
                <span className="text-rose-400">+   let user_id = req.body.userId;</span>{'\n'}
                <span className="text-gray-600">// ... 636 more lines of quote changes, prettier indentation, and spacing churn ...</span>{'\n'}
                <span className="text-amber-400">⚠️ TECH LEAD FEEDBACK: "Reviewing 642 lines of formatting noise is impossible. Reset to origin/main_v2 and push only the pure business logic."</span>
              </pre>
            )}
          </div>

          {/* Outcome Footer */}
          <div className="p-4 bg-[#0d101c] border-t border-white/5 flex items-center justify-between flex-wrap gap-4 text-xs">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1.5 text-emerald-400">
                <CheckCircle2 className="w-4 h-4" />
                <span>88% Diff Footprint Reduction</span>
              </div>
              <div className="flex items-center gap-1.5 text-cyan-400">
                <Shield className="w-4 h-4" />
                <span>Zero Merge Conflicts</span>
              </div>
            </div>
            <span className="text-gray-400">Diagnosis: Git resets against origin/main_v2 executed surgically</span>
          </div>

        </div>

      </div>
    </section>
  );
};