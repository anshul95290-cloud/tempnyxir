"use client";

import React, { useState, useEffect } from "react";
import { Play, Pause, Lock } from "lucide-react";

const scenes = [
  {
    id: 0,
    title: "01. Multi-Channel Telemetry",
    subtitle: "Deploy Tracking Links to Closed Contracts",
    duration: 5000,
  },
  {
    id: 1,
    title: "02. Live Store Scan & 3 Leaks",
    subtitle: "Verified Day-0 Telemetry & Margin Traps",
    duration: 5000,
  },
  {
    id: 2,
    title: "03. The 85%+ Show-Rate Lock",
    subtitle: "Gated Blueprint Unlocks on Strategy Call",
    duration: 5000,
  },
  {
    id: 3,
    title: "04. Day-0 Slack Kickoff",
    subtitle: "Automated Executive Briefing on Signature",
    duration: 5000,
  },
];

export default function ProductAVideoWalkthrough() {
  const [currentScene, setCurrentScene] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [progress, setProgress] = useState(0);

  // Auto-play timer
  useEffect(() => {
    if (!isPlaying) return;

    const intervalTime = 50;
    const currentDuration = scenes[currentScene].duration;
    const increment = (intervalTime / currentDuration) * 100;

    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          setCurrentScene((s) => (s + 1) % scenes.length);
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
            audit.[apex-agency].com · Product A Interactive Video Walkthrough
          </span>
        </div>

        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1.5 text-[10px] font-mono text-emerald-400 bg-emerald-950/60 border border-emerald-800/80 px-2.5 py-0.5 rounded">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span>SCENE {currentScene + 1}/4</span>
          </div>

          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className="flex items-center gap-1 text-[11px] font-mono font-bold text-slate-300 hover:text-white bg-[#222220] hover:bg-[#2c2c28] px-2.5 py-1 rounded transition-colors"
            aria-label={isPlaying ? "Pause walkthrough" : "Play walkthrough"}
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

      {/* Main Video Animation Screen Area */}
      <div className="relative min-h-[420px] sm:min-h-[460px] p-6 sm:p-8 flex items-center justify-center bg-grid-pattern-dark">
        {/* SCENE 1: Multi-Channel Telemetry Deployment */}
        {currentScene === 0 && (
          <div className="w-full max-w-3xl space-y-5 animate-fade-in">
            <div className="flex items-center justify-between pb-3 border-b border-slate-800">
              <span className="text-xs font-mono text-slate-400 uppercase tracking-wider">
                Telemetry Link Network (Live Inbound Tracking)
              </span>
              <span className="text-xs font-mono font-bold text-emerald-400">
                Active Telemetry Node: Active
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-[#141413] border border-slate-800 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-mono text-teal-400 font-bold">LINK 01 · FOUNDER LINKEDIN</span>
                  <span className="text-[10px] font-mono text-emerald-400 bg-emerald-950 px-1.5 py-0.5 rounded">HIGH LTV</span>
                </div>
                <div className="text-xs font-mono text-slate-300 bg-black/60 p-2 rounded border border-slate-800 break-all">
                  audit.apexagency.com?ref=inbound-li-04
                </div>
                <div className="pt-2 border-t border-slate-800/80 text-xs text-slate-400 space-y-1 font-mono">
                  <div className="flex justify-between">
                    <span>Audits Initiated:</span>
                    <span className="text-white font-bold">14 stores</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Discovery Calls:</span>
                    <span className="text-emerald-400 font-bold">6 booked (85% show rate)</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Signed Retainers:</span>
                    <span className="text-white font-bold">3 closed (5-day cycle)</span>
                  </div>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-[#141413] border border-slate-800 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-mono text-teal-400 font-bold">LINK 02 · COLD EMAIL OUTBOUND</span>
                  <span className="text-[10px] font-mono text-slate-400 bg-slate-900 px-1.5 py-0.5 rounded">QUALIFYING</span>
                </div>
                <div className="text-xs font-mono text-slate-300 bg-black/60 p-2 rounded border border-slate-800 break-all">
                  audit.apexagency.com?ref=cold-sequence-09
                </div>
                <div className="pt-2 border-t border-slate-800/80 text-xs text-slate-400 space-y-1 font-mono">
                  <div className="flex justify-between">
                    <span>Audits Initiated:</span>
                    <span className="text-white font-bold">42 stores</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Discovery Calls:</span>
                    <span className="text-emerald-400 font-bold">8 booked (88% show rate)</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Signed Retainers:</span>
                    <span className="text-white font-bold">2 closed (21-day cycle)</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-3 bg-emerald-950/40 border border-emerald-800/60 rounded-lg text-xs text-emerald-300 font-mono flex items-center justify-between">
              <span>Attribution Truth: Founder LinkedIn converts high-retaining DTC brands at 4x velocity vs cold lists.</span>
              <span className="font-bold">Telemetric Record: Logged</span>
            </div>
          </div>
        )}

        {/* SCENE 2: Live Store Scan & 3 Leaked Margin Bottlenecks */}
        {currentScene === 1 && (
          <div className="w-full max-w-3xl space-y-5 animate-fade-in">
            <div className="p-4 rounded-xl bg-[#141413] border border-slate-800 space-y-3">
              <div className="flex items-center justify-between text-xs font-mono text-slate-400">
                <span>Target Store Diagnostic</span>
                <span className="text-emerald-400 font-bold flex items-center gap-1.5">
                  <span className="h-2 w-2 rounded-full bg-emerald-400 animate-ping" />
                  SCANNING COMPLETE
                </span>
              </div>
              <div className="flex items-center gap-3">
                <div className="flex-1 bg-black/80 border border-slate-700 rounded-lg px-3 py-2 text-xs font-mono text-emerald-300">
                  https://lumora-botanicals.com
                </div>
                <span className="text-xs font-bold text-slate-900 bg-emerald-400 px-3 py-2 rounded-lg font-mono">
                  VERIFIED
                </span>
              </div>
            </div>

            {/* Baseline Telemetry Bar */}
            <div className="grid grid-cols-3 gap-3 p-3.5 bg-black/50 border border-slate-800 rounded-xl text-center font-mono">
              <div>
                <span className="text-[10px] text-slate-500 uppercase block">Monthly Revenue</span>
                <span className="text-sm sm:text-base font-bold text-white">$48,000 / mo</span>
              </div>
              <div>
                <span className="text-[10px] text-slate-500 uppercase block">Day-0 Blended CAC</span>
                <span className="text-sm sm:text-base font-bold text-amber-400">$44.20 CAC</span>
              </div>
              <div>
                <span className="text-[10px] text-slate-500 uppercase block">Net Margin</span>
                <span className="text-sm sm:text-base font-bold text-emerald-400">18.2% Contribution</span>
              </div>
            </div>

            {/* 3 Red Warning Leaks */}
            <div className="space-y-2.5">
              <span className="text-xs font-mono uppercase text-slate-400 font-bold block">
                3 Critical Conversion Bottlenecks Exposed:
              </span>
              <div className="p-2.5 rounded-lg bg-rose-950/30 border border-rose-900/60 flex items-center justify-between text-xs">
                <span className="text-slate-200 font-semibold">1. Mobile SKU Variant Selector Drop-Off</span>
                <span className="font-mono font-bold text-rose-400">-38.4% Exit Rate (~$6,200/mo Leak)</span>
              </div>
              <div className="p-2.5 rounded-lg bg-rose-950/30 border border-rose-900/60 flex items-center justify-between text-xs">
                <span className="text-slate-200 font-semibold">2. Above-Fold Subscription Toggle Friction</span>
                <span className="font-mono font-bold text-rose-400">-62% Cart Bounce (~$4,800/mo Leak)</span>
              </div>
              <div className="p-2.5 rounded-lg bg-rose-950/30 border border-rose-900/60 flex items-center justify-between text-xs">
                <span className="text-slate-200 font-semibold">3. Free Shipping Threshold Misalignment</span>
                <span className="font-mono font-bold text-rose-400">-24% Abandonment (~$3,100/mo Leak)</span>
              </div>
            </div>
          </div>
        )}

        {/* SCENE 3: The 85%+ Show-Rate Blueprint Lock */}
        {currentScene === 2 && (
          <div className="w-full max-w-2xl space-y-6 animate-fade-in">
            <div className="rounded-2xl border border-teal-500/50 bg-[#121a18] p-6 relative overflow-hidden shadow-xl">
              <div className="flex items-start gap-4">
                <div className="h-11 w-11 rounded-xl bg-teal-500/20 border border-teal-500/40 flex items-center justify-center text-teal-400 shrink-0">
                  <Lock className="h-6 w-6" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-mono uppercase text-teal-400 bg-teal-950 px-2 py-0.5 rounded font-bold">
                      GATED REMEDIATION BLUEPRINT
                    </span>
                    <span className="text-[10px] font-mono text-emerald-400">CONFIRMED DISCOVERY CALL</span>
                  </div>
                  <h4 className="text-lg font-bold text-white mt-1">
                    Custom Store Fix Blueprint Compiled
                  </h4>
                  <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                    &ldquo;Your custom 3-step remediation blueprint is compiled. Your growth strategist will unlock and walk through this live on your confirmed call.&rdquo;
                  </p>
                </div>
              </div>

              {/* Blurred Locked Steps */}
              <div className="mt-5 space-y-2.5 filter blur-[3.5px] select-none opacity-50 pointer-events-none text-xs font-mono">
                <div className="p-3 bg-slate-900 rounded border border-teal-800">
                  Step 1: Dynamic 1-Click Variant Switcher with Instant Sticky Cart Deployment
                </div>
                <div className="p-3 bg-slate-900 rounded border border-teal-800">
                  Step 2: Bundled Subscription Incentivizer with 90-Day Retention Hook
                </div>
                <div className="p-3 bg-slate-900 rounded border border-teal-800">
                  Step 3: Real-Time Tiered Free Shipping Progress Meter Implementation
                </div>
              </div>

              {/* Live Status Overlay */}
              <div className="mt-6 pt-4 border-t border-teal-800/60 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs font-mono">
                <span className="text-teal-300 font-bold">
                  Strategy Session Confirmed · Thursday 2:00 PM EST
                </span>
                <span className="text-emerald-400 font-bold bg-emerald-950/80 px-2.5 py-1 rounded border border-emerald-800">
                  Show-Up Probability: 88.4%
                </span>
              </div>
            </div>
          </div>
        )}

        {/* SCENE 4: Automated Day-0 Executive Slack Kickoff */}
        {currentScene === 3 && (
          <div className="w-full max-w-2xl space-y-4 animate-fade-in">
            <div className="flex items-center justify-between text-xs font-mono text-slate-400 pb-2 border-b border-slate-800">
              <span className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-emerald-400" />
                <span>CONTRACT SIGNED ✓ · INSTANT DISPATCH</span>
              </span>
              <span className="text-emerald-400 font-bold">SLACK WEBHOOK EXECUTED</span>
            </div>

            <div className="rounded-xl border border-slate-700 bg-[#161b22] p-5 font-mono text-xs space-y-3.5 shadow-xl">
              <div className="flex items-center justify-between pb-2.5 border-b border-slate-700">
                <div className="flex items-center gap-2 text-slate-200">
                  <span className="text-teal-400 font-bold">#</span>
                  <span className="font-bold">client-kickoff-briefings</span>
                </div>
                <span className="text-[10px] text-slate-400">Today at 3:42 PM</span>
              </div>

              <div className="space-y-1.5 text-slate-300 text-[11px] leading-relaxed">
                <div>
                  <span className="text-slate-500">Client:</span> <strong className="text-white">Lumora Botanicals</strong>
                </div>
                <div>
                  <span className="text-slate-500">Acquisition Source:</span> <span className="text-teal-300">Founder LinkedIn (Link #04)</span>
                </div>
                <div className="p-2.5 bg-black/40 rounded border border-slate-800 space-y-1">
                  <div className="flex justify-between">
                    <span className="text-slate-400">Day-0 Baseline Revenue:</span>
                    <span className="text-white font-bold">$48,000 / mo</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">Day-0 Blended CAC:</span>
                    <span className="text-amber-400 font-bold">$44.20</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">Client 90-Day Target:</span>
                    <span className="text-emerald-400 font-bold">&lt;$32.00 CAC ($85k/mo target)</span>
                  </div>
                </div>
                <div>
                  <span className="text-slate-500">Top Stated Pain Point:</span> <span className="text-slate-200 italic">&ldquo;Previous agency burned $6,000 testing TikTok with zero tracked sales.&rdquo;</span>
                </div>
                <div>
                  <span className="text-slate-500">Pre-Identified Store Leak:</span> <span className="text-rose-300">Mobile SKU Variant selector drop-off (38.4%)</span>
                </div>
              </div>

              <div className="pt-2.5 border-t border-slate-800 text-[10px] text-emerald-400 font-sans flex items-center justify-between">
                <span>Account Manager Prep Saved: 5.5 Hours</span>
                <span className="font-mono font-bold">PERMANENT LEDGER LOCKED</span>
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
                    ? "bg-[#1f1f1d] border-emerald-500/80 shadow-xs"
                    : "bg-[#171716] border-[#2c2c28] hover:border-slate-700 opacity-70 hover:opacity-100"
                }`}
              >
                <div className="w-full bg-slate-800 h-1 rounded-full overflow-hidden mb-2">
                  <div
                    className="h-full bg-emerald-400 transition-all duration-75"
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
