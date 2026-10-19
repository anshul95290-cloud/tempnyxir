"use client";

import React, { useState, useEffect } from "react";
import { Play, Pause, CheckCircle2, Lock, Sparkles, Globe, AlertTriangle } from "lucide-react";

interface Step {
  id: number;
  tag: string;
  title: string;
  summary: string;
  duration: number;
  whatHappens: string;
  outcome: string;
}

const steps: Step[] = [
  {
    id: 0,
    tag: "STEP 01 · DISTRIBUTION",
    title: "Deploy Branded Links Across All Channels",
    summary: "Unique tracking links distributed across Founder LinkedIn, cold email & DMs",
    duration: 6000,
    whatHappens:
      "Instead of pitching services or sending generic PDFs, your agency shares a custom diagnostic link (audit.[youragency].com) across LinkedIn posts, cold emails, and founder DMs.",
    outcome:
      "Cuts through outbound noise. DTC founders eagerly click an interactive tool instead of ignoring another commoditized agency pitch.",
  },
  {
    id: 1,
    tag: "STEP 02 · SCANNING",
    title: "Instant Store Scan & 3 Live Margin Leaks",
    summary: "Founder inputs store URL → Engine flags 3 real conversion bottlenecks in 5 seconds",
    duration: 6000,
    whatHappens:
      "The brand founder enters their Shopify URL. The engine immediately scans their frontend, variant flows, and cart economics to identify 3 verified revenue bottlenecks.",
    outcome:
      "Instant technical authority. The founder sees concrete margin leaks on their own store, proving your agency's value before any sales call.",
  },
  {
    id: 2,
    tag: "STEP 03 · CONVERSION",
    title: "Remediation Blueprint Gated for Discovery Call",
    summary: "Fix blueprint is compiled but locked until the confirmed strategy session",
    duration: 6000,
    whatHappens:
      "The diagnostic engine displays: 'Your 3-Step Remediation Blueprint is compiled. Your growth strategist will unlock and walk through it live on your confirmed call.'",
    outcome:
      "X+% Discovery Call Show-Up Rate. Founders show up with excitement to unlock their fix blueprint, eliminating call ghosting completely.",
  },
  {
    id: 3,
    tag: "STEP 04 · ONBOARDING",
    title: "Contract Signed & Instant Day-0 Slack Kickoff",
    summary: "Automated webhook dispatches verified baseline CAC, margins & targets into Slack",
    duration: 6000,
    whatHappens:
      "The moment the client signs, Nyxir automatically fires a complete Day-0 Executive Briefing into your agency Slack with baseline CAC, net contribution margin, and store bottlenecks.",
    outcome:
      "Zero onboarding friction. Account managers save 5+ hours of prep, and the Day-0 baseline is permanently locked to prevent client amnesia.",
  },
];

export default function ProductAVisualWorkflow() {
  const [currentStep, setCurrentStep] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (!isPlaying) return;

    const intervalTime = 50;
    const currentDuration = steps[currentStep].duration;
    const increment = (intervalTime / currentDuration) * 100;

    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          setCurrentStep((s) => (s + 1) % steps.length);
          return 0;
        }
        return prev + increment;
      });
    }, intervalTime);

    return () => clearInterval(timer);
  }, [isPlaying, currentStep]);

  const selectStep = (idx: number) => {
    setCurrentStep(idx);
    setProgress(0);
  };

  const active = steps[currentStep];

  return (
    <div className="rounded-3xl border border-[#e5e3dc] bg-white shadow-xl overflow-hidden transition-all">
      {/* Top Header & Playback Control Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 px-6 py-4 bg-[#fbfbfa] border-b border-[#e5e3dc]">
        <div className="flex items-center gap-3">
          <div className="h-8 w-8 rounded-lg bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-700">
            <Sparkles className="h-4 w-4" />
          </div>
          <div>
            <span className="text-xs font-mono font-bold text-slate-800 block">
              Product A · Interactive Visual Workflow
            </span>
            <span className="text-[11px] text-slate-500">
              How Your Agency Lands &amp; Onboards Clients with Custom Diagnostic Micro-SaaS
            </span>
          </div>
        </div>

        <div className="flex items-center gap-3 shrink-0">
          <div className="text-[11px] font-mono font-bold text-emerald-800 bg-emerald-50 px-2.5 py-1 rounded-md border border-emerald-100">
            STEP {currentStep + 1} OF 4
          </div>

          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-700 hover:text-black bg-white hover:bg-slate-100 border border-[#e5e3dc] px-3 py-1.5 rounded-lg shadow-2xs transition-all"
            aria-label={isPlaying ? "Pause workflow animation" : "Play workflow animation"}
          >
            {isPlaying ? (
              <>
                <Pause className="h-3.5 w-3.5 text-slate-600" />
                <span>Pause</span>
              </>
            ) : (
              <>
                <Play className="h-3.5 w-3.5 fill-current text-slate-600" />
                <span>Play</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* Main Interactive Stage Area */}
      <div className="p-6 sm:p-10 bg-gradient-to-b from-[#fbfbfa] to-white">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Column: Clear Story Explanation (What Happens & The Outcome) */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <span className="text-[11px] font-mono font-bold tracking-wider text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-md border border-emerald-100 inline-block mb-3">
                {active.tag}
              </span>
              <h3 className="text-2xl sm:text-3xl font-black text-[#0f0f0e] tracking-tight leading-snug">
                {active.title}
              </h3>
            </div>

            {/* What Happens Box */}
            <div className="p-4 rounded-2xl bg-[#f8f7f4] border border-[#e5e3dc] space-y-1.5">
              <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-500 block">
                ⚡ What Happens:
              </span>
              <p className="text-sm text-slate-700 leading-relaxed font-normal">
                {active.whatHappens}
              </p>
            </div>

            {/* The Outcome Box */}
            <div className="p-4 rounded-2xl bg-emerald-50/70 border border-emerald-200/80 space-y-1.5">
              <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-emerald-800 flex items-center gap-1.5">
                <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600" />
                <span>The Concrete Business Outcome:</span>
              </span>
              <p className="text-sm font-semibold text-emerald-950 leading-relaxed">
                {active.outcome}
              </p>
            </div>
          </div>

          {/* Right Column: Visual Flow Diagram Animation */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl border border-[#e5e3dc] bg-white p-6 sm:p-8 shadow-md relative min-h-[380px] flex flex-col justify-center">
              
              {/* DIAGRAM 1: Multi-Channel Link Deployment */}
              {currentStep === 0 && (
                <div className="space-y-6 animate-fade-in">
                  <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                    <span className="text-xs font-mono text-slate-400 font-bold uppercase">
                      Inbound Channel Distribution
                    </span>
                    <span className="text-xs font-mono text-emerald-700 font-bold bg-emerald-50 px-2 py-0.5 rounded">
                      Live Telemetry Active
                    </span>
                  </div>

                  {/* Visual Node Flow */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    <div className="p-3.5 rounded-xl border border-slate-200 bg-[#f8f7f4] text-center space-y-2">
                      <div className="text-2xl">💼</div>
                      <div className="text-xs font-bold text-slate-900">Founder LinkedIn</div>
                      <div className="text-[11px] font-mono text-slate-500 bg-white p-1 rounded border border-slate-200 truncate">
                        ?ref=li-founder
                      </div>
                      <div className="text-[10px] font-bold text-emerald-700">Highest LTV Clients</div>
                    </div>

                    <div className="p-3.5 rounded-xl border border-slate-200 bg-[#f8f7f4] text-center space-y-2">
                      <div className="text-2xl">✉️</div>
                      <div className="text-xs font-bold text-slate-900">Cold Outbound</div>
                      <div className="text-[11px] font-mono text-slate-500 bg-white p-1 rounded border border-slate-200 truncate">
                        ?ref=cold-email
                      </div>
                      <div className="text-[10px] font-bold text-slate-600">High Volume Traffic</div>
                    </div>

                    <div className="p-3.5 rounded-xl border border-slate-200 bg-[#f8f7f4] text-center space-y-2">
                      <div className="text-2xl">💬</div>
                      <div className="text-xs font-bold text-slate-900">Founder DMs</div>
                      <div className="text-[11px] font-mono text-slate-500 bg-white p-1 rounded border border-slate-200 truncate">
                        ?ref=dm-sequence
                      </div>
                      <div className="text-[10px] font-bold text-emerald-700">Fast 5-Day Cycles</div>
                    </div>
                  </div>

                  {/* Flow Arrow into Diagnostic Micro-SaaS */}
                  <div className="flex items-center justify-center gap-2 text-xs font-mono text-slate-400">
                    <span className="h-0.5 w-12 bg-slate-200" />
                    <span>TRAFFIC FLOWS INTO YOUR BESPOKE ASSET</span>
                    <span className="h-0.5 w-12 bg-slate-200" />
                  </div>

                  <div className="p-4 rounded-xl border-2 border-emerald-400 bg-emerald-50/50 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <Globe className="h-5 w-5 text-emerald-700" />
                      <div>
                        <span className="text-xs font-mono font-bold text-slate-900 block">
                          audit.[youragency].com
                        </span>
                        <span className="text-[11px] text-slate-600">
                          White-labeled diagnostic micro-SaaS with your agency branding
                        </span>
                      </div>
                    </div>
                    <span className="text-xs font-bold text-emerald-800 bg-emerald-100 px-2.5 py-1 rounded-md font-mono">
                      100% DFY
                    </span>
                  </div>
                </div>
              )}

              {/* DIAGRAM 2: Instant URL Scan & 3 Leaks Found */}
              {currentStep === 1 && (
                <div className="space-y-5 animate-fade-in">
                  <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
                    <div className="flex items-center justify-between text-xs font-mono text-slate-500">
                      <span>Prospect Enters Store URL</span>
                      <span className="text-emerald-700 font-bold flex items-center gap-1.5">
                        <span className="h-2 w-2 rounded-full bg-emerald-500 animate-ping" />
                        Scan Complete (3.8s)
                      </span>
                    </div>
                    <div className="flex items-center gap-2 bg-white p-2 rounded-lg border border-slate-200 font-mono text-xs text-slate-800">
                      <Globe className="h-4 w-4 text-slate-400" />
                      <span className="text-emerald-700 font-bold">https://lumora-botanicals.com</span>
                    </div>
                  </div>

                  <span className="text-xs font-mono uppercase text-slate-500 font-bold block">
                    🔍 3 Store Leaks Immediately Identified:
                  </span>

                  <div className="space-y-2">
                    <div className="p-3 rounded-xl bg-rose-50 border border-rose-200/80 flex items-center justify-between text-xs">
                      <div className="flex items-center gap-2 text-rose-950 font-semibold">
                        <AlertTriangle className="h-4 w-4 text-rose-600 shrink-0" />
                        <span>1. Mobile Variant Selector Drop-off</span>
                      </div>
                      <span className="font-mono font-bold text-rose-700 bg-rose-100/80 px-2 py-0.5 rounded">
                        -$6,200/mo Leak
                      </span>
                    </div>

                    <div className="p-3 rounded-xl bg-rose-50 border border-rose-200/80 flex items-center justify-between text-xs">
                      <div className="flex items-center gap-2 text-rose-950 font-semibold">
                        <AlertTriangle className="h-4 w-4 text-rose-600 shrink-0" />
                        <span>2. Subscription Toggle Checkout Friction</span>
                      </div>
                      <span className="font-mono font-bold text-rose-700 bg-rose-100/80 px-2 py-0.5 rounded">
                        -$4,800/mo Leak
                      </span>
                    </div>

                    <div className="p-3 rounded-xl bg-rose-50 border border-rose-200/80 flex items-center justify-between text-xs">
                      <div className="flex items-center gap-2 text-rose-950 font-semibold">
                        <AlertTriangle className="h-4 w-4 text-rose-600 shrink-0" />
                        <span>3. Free Shipping Threshold Gap</span>
                      </div>
                      <span className="font-mono font-bold text-rose-700 bg-rose-100/80 px-2 py-0.5 rounded">
                        -$3,100/mo Leak
                      </span>
                    </div>
                  </div>
                </div>
              )}

              {/* DIAGRAM 3: Blueprint Gated for Discovery Call */}
              {currentStep === 2 && (
                <div className="space-y-5 animate-fade-in">
                  <div className="rounded-2xl border-2 border-emerald-400 bg-emerald-50/40 p-6 relative">
                    <div className="flex items-start gap-4">
                      <div className="h-12 w-12 rounded-xl bg-emerald-600 text-white flex items-center justify-center shrink-0 shadow-xs">
                        <Lock className="h-6 w-6" />
                      </div>
                      <div className="space-y-1">
                        <span className="text-[10px] font-mono uppercase text-emerald-800 bg-emerald-100 px-2 py-0.5 rounded font-bold inline-block">
                          GATED REMEDIATION BLUEPRINT
                        </span>
                        <h4 className="text-base font-bold text-slate-900">
                          Custom Fix Plan Compiled &amp; Locked
                        </h4>
                        <p className="text-xs text-slate-600 leading-relaxed">
                          &ldquo;Your custom 3-step remediation blueprint is compiled. Your growth strategist will unlock and walk through this live on your confirmed call.&rdquo;
                        </p>
                      </div>
                    </div>

                    {/* Locked Blurred Steps Mock */}
                    <div className="mt-4 space-y-2 filter blur-[2px] opacity-60 select-none pointer-events-none text-xs font-mono">
                      <div className="p-2.5 bg-white rounded border border-slate-200">
                        Step 1: Dynamic 1-Click Variant Switcher Implementation
                      </div>
                      <div className="p-2.5 bg-white rounded border border-slate-200">
                        Step 2: Bundled Subscription Retention Mechanics
                      </div>
                    </div>

                    <div className="mt-5 pt-3 border-t border-emerald-200 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs font-mono">
                      <span className="text-slate-800 font-bold">
                        📅 Strategy Session: Confirmed
                      </span>
                      <span className="text-emerald-800 font-bold bg-white px-2.5 py-1 rounded-md border border-emerald-200">
                        Show-Up Probability: X+%
                      </span>
                    </div>
                  </div>
                </div>
              )}

              {/* DIAGRAM 4: Automated Day-0 Slack Kickoff */}
              {currentStep === 3 && (
                <div className="space-y-4 animate-fade-in">
                  <div className="flex items-center justify-between pb-2 border-b border-slate-100 text-xs font-mono">
                    <span className="text-emerald-700 font-bold flex items-center gap-1.5">
                      <CheckCircle2 className="h-4 w-4" />
                      <span>CONTRACT SIGNED ✓</span>
                    </span>
                    <span className="text-slate-400">AUTOMATED DISPATCH</span>
                  </div>

                  <div className="rounded-xl border border-slate-200 bg-[#f8f7f4] p-4 text-xs font-mono space-y-3">
                    <div className="flex items-center justify-between pb-2 border-b border-slate-200">
                      <div className="flex items-center gap-1.5 font-bold text-slate-800">
                        <span className="text-emerald-600">#</span>
                        <span>client-kickoff-briefings</span>
                      </div>
                      <span className="text-[10px] text-slate-400">Instant Webhook</span>
                    </div>

                    <div className="space-y-1.5 text-slate-700 text-[11px]">
                      <div>
                        <span className="text-slate-400">Client:</span> <strong className="text-slate-900">Lumora Botanicals</strong>
                      </div>
                      <div>
                        <span className="text-slate-400">Acquisition Source:</span> <span className="text-emerald-700 font-bold">Founder LinkedIn (Link #04)</span>
                      </div>
                      <div className="p-2 bg-white rounded border border-slate-200 space-y-1">
                        <div className="flex justify-between">
                          <span className="text-slate-500">Day-0 Baseline Revenue:</span>
                          <span className="text-slate-900 font-bold">$48,000 / mo</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-slate-500">Day-0 Blended CAC:</span>
                          <span className="text-amber-700 font-bold">$44.20</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-slate-500">90-Day Target:</span>
                          <span className="text-emerald-700 font-bold">&lt;$32.00 CAC</span>
                        </div>
                      </div>
                    </div>

                    <div className="pt-2 border-t border-slate-200 text-[10px] text-emerald-800 font-bold flex justify-between">
                      <span>Account Manager Prep Saved: 5.5 Hours</span>
                      <span>LEDGER LOCKED</span>
                    </div>
                  </div>
                </div>
              )}

            </div>
          </div>
        </div>
      </div>

      {/* Bottom Step Pills / Timeline Selector */}
      <div className="px-6 py-4 bg-[#fbfbfa] border-t border-[#e5e3dc]">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 sm:gap-3">
          {steps.map((s, idx) => {
            const isCurrent = currentStep === idx;
            return (
              <button
                key={s.id}
                onClick={() => selectStep(idx)}
                className={`text-left p-3 rounded-xl border transition-all ${
                  isCurrent
                    ? "bg-white border-emerald-400 shadow-xs"
                    : "bg-[#f8f7f4] border-[#e5e3dc] hover:border-slate-300 opacity-70 hover:opacity-100"
                }`}
              >
                {/* Progress bar inside card */}
                <div className="w-full bg-slate-200 h-1 rounded-full overflow-hidden mb-2">
                  <div
                    className="h-full bg-emerald-500 transition-all duration-75"
                    style={{
                      width: isCurrent ? `${progress}%` : currentStep > idx ? "100%" : "0%",
                    }}
                  />
                </div>
                <div className="text-[11px] font-mono font-bold text-slate-900 truncate">
                  0{idx + 1}. {s.title.split(" ")[0]} {s.title.split(" ")[1]}
                </div>
                <div className="text-[10px] text-slate-500 truncate">
                  {s.summary}
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
