"use client";

import React, { useState, useEffect } from "react";
import { Play, Pause, ShieldAlert } from "lucide-react";

const scenes = [
  {
    id: 0,
    title: "01. True Ad Economic Accounting",
    subtitle: "Surface ROAS vs Real Shopify Net Bank Cash",
    duration: 5000,
  },
  {
    id: 1,
    title: "02. Pre-Flight 0–100 Gate",
    subtitle: "Stop Saturated Hooks Before Spending Budget",
    duration: 5000,
  },
  {
    id: 2,
    title: "03. Live Slack Circuit-Breaker",
    subtitle: "Break Advantage+ Traps & Log Decision Traces",
    duration: 5000,
  },
  {
    id: 3,
    title: "04. Monday Brief & Day-0 Proof",
    subtitle: "Next Winner Runway & Monthly Retention Memos",
    duration: 5000,
  },
];

export default function ProductBVideoDemo() {
  const [currentScene, setCurrentScene] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [progress, setProgress] = useState(0);
  const [actionLogged, setActionLogged] = useState(false);

  useEffect(() => {
    if (!isPlaying) return;

    const intervalTime = 50;
    const currentDuration = scenes[currentScene].duration;
    const increment = (intervalTime / currentDuration) * 100;

    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          setCurrentScene((s) => (s + 1) % scenes.length);
          setActionLogged(false);
          return 0;
        }
        return prev + increment;
      });
    }, intervalTime);

    return () => clearInterval(timer);
  }, [isPlaying, currentScene]);

  const selectScene = (idx: number) => {
    setCurrentScene(idx);
    setProgress(0);
    setActionLogged(false);
  };

  return (
    <div className="rounded-2xl border border-[#262624] bg-[#0F0F0E] text-[#F8F7F4] shadow-2xl overflow-hidden">
      {/* Top macOS/Linear Window Chrome */}
      <div className="flex items-center justify-between px-5 py-3.5 border-b border-[#262624] bg-[#141413]">
        <div className="flex items-center gap-2">
          <div className="h-3 w-3 rounded-full bg-[#333330] border border-[#444440]" />
          <div className="h-3 w-3 rounded-full bg-[#333330] border border-[#444440]" />
          <div className="h-3 w-3 rounded-full bg-[#333330] border border-[#444440]" />
          <span className="ml-3 text-[11px] font-mono text-slate-400">
            nyxir-economic-engine // Product B Live Architecture &amp; Action Demo
          </span>
        </div>

        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1.5 text-[10px] font-mono text-amber-400 bg-amber-950/60 border border-amber-800/80 px-2.5 py-0.5 rounded">
            <span className="h-1.5 w-1.5 rounded-full bg-amber-400 animate-pulse" />
            <span>SCENE {currentScene + 1}/4</span>
          </div>

          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className="flex items-center gap-1 text-[11px] font-mono font-bold text-slate-300 hover:text-white bg-[#222220] hover:bg-[#2c2c28] px-2.5 py-1 rounded transition-colors"
            aria-label={isPlaying ? "Pause demo" : "Play demo"}
          >
            {isPlaying ? (
              <>
                <Pause className="h-3 w-3" />
                <span>Pause</span>
              </>
            ) : (
              <>
                <Play className="h-3 w-3 fill-current" />
                <span>Play</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* Main Cinema Animation Stage */}
      <div className="relative min-h-[440px] sm:min-h-[480px] p-6 sm:p-8 flex items-center justify-center bg-grid-pattern-dark">
        {/* SCENE 1: True Ad Economic Accounting */}
        {currentScene === 0 && (
          <div className="w-full max-w-3xl space-y-5 animate-fade-in">
            <div className="flex items-center justify-between pb-3 border-b border-slate-800">
              <span className="text-xs font-mono uppercase text-slate-400">
                18 Agency Brands + Category Benchmark Pool (Ad Economic Accounting)
              </span>
              <span className="text-xs font-mono font-bold text-emerald-400">
                Shopify Webhook Sync: Active
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Fake Winner on Meta */}
              <div className="p-4 rounded-xl bg-[#141413] border border-rose-900/60 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-mono text-slate-300 font-bold">AD #A · 100% SYNTHETIC AI AVATAR</span>
                  <span className="text-[10px] font-mono text-rose-400 bg-rose-950 px-1.5 py-0.5 rounded font-bold">BURNING CASH</span>
                </div>
                <div className="p-2.5 bg-black/60 rounded border border-slate-800 flex justify-between font-mono text-xs">
                  <span className="text-slate-400">Surface Meta ROAS:</span>
                  <span className="text-emerald-400 font-bold">3.2x (Appears Scalable)</span>
                </div>
                <div className="space-y-1 font-mono text-[11px] text-slate-400">
                  <div className="flex justify-between">
                    <span>Shopify Verified Refunds:</span>
                    <span className="text-rose-400 font-bold">36.2% Return Rate</span>
                  </div>
                  <div className="flex justify-between">
                    <span>True Net Contribution:</span>
                    <span className="text-rose-400 font-bold">-4.2% Net Margin</span>
                  </div>
                  <div className="flex justify-between pt-1 border-t border-slate-800">
                    <span>Bank Outcome:</span>
                    <span className="text-rose-400 font-bold">-$4,180 Real Cash Drain</span>
                  </div>
                </div>
              </div>

              {/* Real Bank Winner */}
              <div className="p-4 rounded-xl bg-[#141413] border border-emerald-800/80 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-mono text-slate-300 font-bold">AD #B · HYBRID AI + HUMAN MACRO HOOK</span>
                  <span className="text-[10px] font-mono text-emerald-400 bg-emerald-950 px-1.5 py-0.5 rounded font-bold">PROVEN CASH</span>
                </div>
                <div className="p-2.5 bg-black/60 rounded border border-slate-800 flex justify-between font-mono text-xs">
                  <span className="text-slate-400">Surface Meta ROAS:</span>
                  <span className="text-slate-200 font-bold">2.7x (Looks Modest)</span>
                </div>
                <div className="space-y-1 font-mono text-[11px] text-slate-400">
                  <div className="flex justify-between">
                    <span>Shopify Verified Refunds:</span>
                    <span className="text-emerald-400 font-bold">4.1% Low Return Rate</span>
                  </div>
                  <div className="flex justify-between">
                    <span>True Net Contribution:</span>
                    <span className="text-emerald-400 font-bold">+28.4% Net Margin</span>
                  </div>
                  <div className="flex justify-between pt-1 border-t border-slate-800">
                    <span>Bank Outcome:</span>
                    <span className="text-emerald-400 font-bold">+$14,200 Verified Cash</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-3 bg-slate-900 border border-slate-800 rounded-lg text-xs text-slate-300 font-mono">
              System Insight: Synthetic avatars generate cheap clicks but erode brand equity and trigger catastrophic refund rates. Hybrid production preserves margin.
            </div>
          </div>
        )}

        {/* SCENE 2: Pre-Flight 0–100 Gate (Before Spend) */}
        {currentScene === 1 && (
          <div className="w-full max-w-2xl space-y-5 animate-fade-in">
            <div className="flex items-center justify-between pb-3 border-b border-slate-800">
              <span className="text-xs font-mono uppercase text-slate-400">
                System of Action 1: Pre-Flight Creative Gatekeeper
              </span>
              <span className="text-xs font-mono text-rose-400 font-bold">
                TEST BUDGET BLOCKED
              </span>
            </div>

            <div className="p-5 rounded-xl bg-[#141413] border border-slate-800 space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-[10px] font-mono text-slate-400 uppercase">Input Draft:</span>
                  <div className="text-sm font-mono font-bold text-white">Supplement_Doctor_Hook_v3.mp4</div>
                </div>
                <span className="text-xs font-mono font-bold px-2.5 py-1 rounded bg-rose-950 border border-rose-800 text-rose-400">
                  38 / 100 SATURATION RISK
                </span>
              </div>

              <div className="p-4 bg-black/60 rounded-lg border border-slate-800 font-mono text-xs space-y-2">
                <div className="flex justify-between">
                  <span className="text-slate-400">Hook Archetype:</span>
                  <span className="text-white">Whitecoat Doctor Stethoscope Reaction</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Vertical Angle Saturation:</span>
                  <span className="text-rose-400 font-bold">84% Saturated (14 competitor stores)</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Projected Fatigue Runway:</span>
                  <span className="text-rose-400 font-bold">&lt; 3 Days Before ROAS Collapse</span>
                </div>
              </div>

              <div className="p-3.5 bg-amber-950/40 border border-amber-900/60 rounded-lg text-xs font-mono text-amber-200">
                <strong>System Action Directive:</strong> Block ad launch. Swap 0–2s hook to Macro Cellular Zoom with 24+ days open runway before spending client budget.
              </div>

              <div className="text-[11px] font-mono text-emerald-400">
                ✓ Preserved $2,400 of client testing budget from saturated ad burn.
              </div>
            </div>
          </div>
        )}

        {/* SCENE 3: Live Slack Circuit-Breaker (During Spend) */}
        {currentScene === 2 && (
          <div className="w-full max-w-2xl space-y-4 animate-fade-in">
            <div className="flex items-center justify-between text-xs font-mono text-slate-400 pb-2 border-b border-slate-800">
              <span className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-amber-400" />
                <span>AUCTION CIRCUIT-BREAKER DETECTED</span>
              </span>
              <span className="text-amber-400 font-bold">REAL-TIME SLACK DIRECTIVE</span>
            </div>

            <div className="rounded-xl border border-slate-700 bg-[#161b22] p-5 font-mono text-xs space-y-3.5 shadow-xl">
              <div className="flex items-center justify-between pb-2 border-b border-slate-700">
                <div className="flex items-center gap-2 text-slate-200 font-bold">
                  <span className="text-amber-400">#</span>
                  <span>alerts-media-buyers</span>
                </div>
                <span className="text-[10px] text-slate-400">2:31 PM EST</span>
              </div>

              <div className="p-3 bg-amber-950/30 border border-amber-900/60 rounded-lg text-xs space-y-2">
                <div className="flex items-center gap-2 text-amber-300 font-bold">
                  <ShieldAlert className="h-4 w-4" />
                  <span>Meta Advantage+ Budget Concentration Trap</span>
                </div>
                <p className="text-slate-300 leading-relaxed text-[11px]">
                  Meta ASC has concentrated <strong>84% of daily spend ($1,840)</strong> into Creative #104 after 2:00 PM conversion dip. Repeat buyer frequency reached 4.2.
                </p>
                <div className="text-amber-200 text-[11px] bg-black/40 p-2 rounded border border-amber-800/40">
                  Directive: Cap Ad #104 daily budget to $200 and shift spend to Angle #3 (Cellular Mechanism).
                </div>
              </div>

              {/* 1-Click Action Buttons */}
              <div className="space-y-2 pt-1">
                <div className="flex items-center justify-between text-[10px] text-slate-400">
                  <span>MEDIA BUYER 1-CLICK RESOLUTION:</span>
                  <span className="text-teal-400 font-bold">LOGS EXPERT DECISION TRACE</span>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  <button
                    onClick={() => setActionLogged(true)}
                    className="py-2 px-3 rounded-lg bg-emerald-500 text-slate-950 font-bold text-xs hover:bg-emerald-400 transition-colors"
                  >
                    [Cap Spend &amp; Shift to Angle #3]
                  </button>
                  <button
                    onClick={() => setActionLogged(true)}
                    className="py-2 px-3 rounded-lg bg-slate-800 text-slate-200 border border-slate-700 font-bold text-xs hover:bg-slate-700 transition-colors"
                  >
                    [Kill Creative #104]
                  </button>
                </div>

                {actionLogged && (
                  <div className="p-2 bg-emerald-950/80 border border-emerald-800 rounded text-[11px] text-emerald-300 font-mono animate-fade-in">
                    ✓ Decision Trace Logged: Action taken + rationale stored. 7-day verified Shopify profit delta running in background.
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

        {/* SCENE 4: Monday Algorithmic Brief + Day-0 Proof Memo */}
        {currentScene === 3 && (
          <div className="w-full max-w-3xl space-y-5 animate-fade-in">
            <div className="flex items-center justify-between pb-3 border-b border-slate-800">
              <span className="text-xs font-mono uppercase text-slate-400">
                System of Action 3 &amp; 4: Monday Production Brief + Day-0 Retention Memo
              </span>
              <span className="text-xs font-mono text-emerald-400 font-bold">
                RETENTION ANCHOR: VERIFIED
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Monday Brief */}
              <div className="p-4 rounded-xl bg-[#141413] border border-slate-800 space-y-3 font-mono">
                <span className="text-[11px] font-bold text-amber-400 block">
                  ACTION 3 · MONDAY PRODUCTION BRIEF
                </span>
                <div className="p-2.5 bg-black/60 rounded border border-slate-800 space-y-1 text-[11px]">
                  <div>
                    <span className="text-slate-500">Next Category Winner:</span> <strong className="text-white">Cellular Mechanism</strong>
                  </div>
                  <div>
                    <span className="text-slate-500">Open Angle Runway:</span> <span className="text-emerald-400 font-bold">24+ Days</span>
                  </div>
                  <div>
                    <span className="text-slate-500">Recommended Format:</span> <span className="text-teal-300">Hybrid AI + Macro Cut</span>
                  </div>
                  <div>
                    <span className="text-slate-500">Best Offer Pairing:</span> <span className="text-amber-300">2-Bottle Subscription</span>
                  </div>
                </div>
                <p className="text-[10px] text-slate-400">
                  Zero blank-page creative director guesswork. Editors build directly to vertical runway data.
                </p>
              </div>

              {/* Day-0 Retention Proof Memo */}
              <div className="p-4 rounded-xl bg-[#141413] border border-emerald-800/80 space-y-3 font-mono">
                <span className="text-[11px] font-bold text-emerald-400 block">
                  ACTION 4 · DAY-0 RETENTION PROOF MEMO
                </span>
                <div className="p-2.5 bg-black/60 rounded border border-slate-800 space-y-1 text-[11px]">
                  <div className="flex justify-between">
                    <span className="text-slate-400">Day 0 (When Client Hired):</span>
                    <span className="text-amber-400 font-bold">$44.20 CAC | 18% Margin</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">Day 30 (Verified Shopify):</span>
                    <span className="text-emerald-400 font-bold">$33.10 CAC | 26.4% Margin</span>
                  </div>
                  <div className="flex justify-between pt-1 border-t border-slate-800">
                    <span className="text-slate-300 font-bold">Net Cash Added to Bank:</span>
                    <span className="text-emerald-400 font-bold">+$18,400.00</span>
                  </div>
                </div>
                <p className="text-[10px] text-emerald-300">
                  Destroys Month-2 amnesia. Client cannot dispute verified bank cash anchored to their signed Day-0 baseline.
                </p>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* 4-Chapter Progress Bar & Scene Switcher */}
      <div className="border-t border-[#262624] bg-[#141413] p-4 sm:p-5">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 sm:gap-3">
          {scenes.map((scene, idx) => {
            const isActive = currentScene === idx;
            return (
              <button
                key={scene.id}
                onClick={() => selectScene(idx)}
                className={`text-left p-3 rounded-lg border transition-all ${
                  isActive
                    ? "bg-[#1f1f1d] border-amber-500/80 shadow-xs"
                    : "bg-[#171716] border-[#2c2c28] hover:border-slate-700 opacity-70 hover:opacity-100"
                }`}
              >
                <div className="w-full bg-slate-800 h-1 rounded-full overflow-hidden mb-2">
                  <div
                    className="h-full bg-amber-400 transition-all duration-75"
                    style={{
                      width: isActive ? `${progress}%` : currentScene > idx ? "100%" : "0%",
                    }}
                  />
                </div>
                <div className="text-[11px] font-mono font-bold text-slate-200 truncate">
                  {scene.title}
                </div>
                <div className="text-[10px] text-slate-400 truncate">
                  {scene.subtitle}
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
