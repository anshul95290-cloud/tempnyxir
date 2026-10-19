"use client";

import React, { useState, useEffect } from "react";
import { Play, Pause, ShieldCheck, CheckCircle2, Bell, Zap, Lock } from "lucide-react";

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
    tag: "STEP 01 · SANITIZATION",
    title: "Read-Only Ingestion & Brand Privacy Plane",
    summary: "Meta, TikTok & Shopify webhooks connect via read-only APIs with complete brand privacy",
    duration: 6000,
    whatHappens:
      "Nyxir connects to client ad accounts and Shopify webhooks using 100% Read-Only APIs. An automated sanitizer scrubs all brand names and customer PII before any mathematical processing.",
    outcome:
      "Zero sensitive data taken. 100% brand privacy guaranteed while connecting creative spend directly to real net bank profit.",
  },
  {
    id: 1,
    tag: "STEP 02 · BENCHMARKING",
    title: "Cross-Brand Angle & Fatigue Radar",
    summary: "Maps 12 creative vectors across your portfolio & vertical to spot open runway",
    duration: 6000,
    whatHappens:
      "The engine tracks hook longevity and creative fatigue across your portfolio and vertical benchmarks—identifying which angles have 30d+ runway vs. angles that fatigue in 3 days.",
    outcome:
      "Stops wasted testing spend. Media buyers launch concepts backed by category data instead of subjective intuition.",
  },
  {
    id: 2,
    tag: "STEP 03 · INTERVENTION",
    title: "Live Slack Advantage+ Circuit Breaker",
    summary: "Alerts media buyers in real time when Meta dumps budget into repeat buyers or fatigue",
    duration: 6000,
    whatHappens:
      "When Meta's automated algorithms over-allocate budget to repeat buyers or fatiguing ads, an alert fires instantly into your agency's Slack with a 1-click corrective directive.",
    outcome:
      "Real-time budget protection. Media buyers fix auction traps before daily client ad spend is burned.",
  },
  {
    id: 3,
    tag: "STEP 04 · RETENTION",
    title: "Day-0 Pinned Proof Memos & Churn Lock",
    summary: "Anchors current net Shopify bank cash against signed Day-0 baseline metrics",
    duration: 6000,
    whatHappens:
      "Every reporting cycle, Nyxir generates a Pinned Proof Memo comparing current net bank profit, CAC, and return rates directly against the verified Day-0 baseline.",
    outcome:
      "Eliminates Month-2 client amnesia. Brands never churn because your agency proves exact incremental bank dollars and holds the cross-brand moat.",
  },
];

export default function ProductBVisualWorkflow() {
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
          <div className="h-8 w-8 rounded-lg bg-amber-50 border border-amber-200 flex items-center justify-center text-amber-700">
            <Zap className="h-4 w-4" />
          </div>
          <div>
            <span className="text-xs font-mono font-bold text-slate-800 block">
              Product B · Interactive Visual Workflow
            </span>
            <span className="text-[11px] text-slate-500">
              How Cross-Brand Economic Intelligence Protects Client Retainers &amp; Prevents Churn
            </span>
          </div>
        </div>

        <div className="flex items-center gap-3 shrink-0">
          <div className="text-[11px] font-mono font-bold text-amber-800 bg-amber-50 px-2.5 py-1 rounded-md border border-amber-100">
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
              <span className="text-[11px] font-mono font-bold tracking-wider text-amber-800 bg-amber-50 px-2.5 py-1 rounded-md border border-amber-100 inline-block mb-3">
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
            <div className="p-4 rounded-2xl bg-amber-50/70 border border-amber-200/80 space-y-1.5">
              <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-amber-800 flex items-center gap-1.5">
                <CheckCircle2 className="h-3.5 w-3.5 text-amber-600" />
                <span>The Concrete Business Outcome:</span>
              </span>
              <p className="text-sm font-semibold text-amber-950 leading-relaxed">
                {active.outcome}
              </p>
            </div>
          </div>

          {/* Right Column: Visual Flow Diagram Animation */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl border border-[#e5e3dc] bg-white p-6 sm:p-8 shadow-md relative min-h-[380px] flex flex-col justify-center">
              
              {/* DIAGRAM 1: Ingestion & Privacy Sanitizer */}
              {currentStep === 0 && (
                <div className="space-y-6 animate-fade-in">
                  <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                    <span className="text-xs font-mono text-slate-400 font-bold uppercase">
                      Read-Only Data Ingestion
                    </span>
                    <span className="text-xs font-mono text-emerald-700 font-bold bg-emerald-50 px-2 py-0.5 rounded">
                      Zero Campaign Mutation
                    </span>
                  </div>

                  {/* Sources Flowing to Scrubber */}
                  <div className="grid grid-cols-3 gap-2.5 text-center text-xs font-mono">
                    <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
                      <div className="text-xl">📊</div>
                      <span className="font-bold text-slate-900 block">Meta &amp; TikTok</span>
                      <span className="text-[10px] text-slate-500">Read-Only APIs</span>
                    </div>
                    <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
                      <div className="text-xl">🛍️</div>
                      <span className="font-bold text-slate-900 block">Shopify Stores</span>
                      <span className="text-[10px] text-slate-500">Orders &amp; Refunds</span>
                    </div>
                    <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
                      <div className="text-xl">🔍</div>
                      <span className="font-bold text-slate-900 block">Ad Libraries</span>
                      <span className="text-[10px] text-slate-500">Public Radar</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-center gap-2 text-xs font-mono text-slate-400">
                    <span className="h-0.5 w-12 bg-slate-200" />
                    <span>AUTOMATIC SANITIZATION LAYER</span>
                    <span className="h-0.5 w-12 bg-slate-200" />
                  </div>

                  {/* Scrubber Output */}
                  <div className="p-4 rounded-xl border-2 border-emerald-400 bg-emerald-50/50 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <ShieldCheck className="h-6 w-6 text-emerald-700 shrink-0" />
                      <div>
                        <span className="text-xs font-bold text-slate-900 block">
                          &ldquo;Data privacy is our most important motto.&rdquo;
                        </span>
                        <span className="text-[11px] text-slate-600">
                          Brand names, logos &amp; customer PII completely stripped
                        </span>
                      </div>
                    </div>
                    <span className="text-xs font-bold text-emerald-800 bg-emerald-100 px-2 py-0.5 rounded font-mono">
                      100% PRIVATE
                    </span>
                  </div>
                </div>
              )}

              {/* DIAGRAM 2: Cross-Brand Angle & Fatigue Radar */}
              {currentStep === 1 && (
                <div className="space-y-5 animate-fade-in">
                  <div className="flex items-center justify-between pb-2 border-b border-slate-100 text-xs font-mono">
                    <span className="text-slate-400 font-bold uppercase">Cross-Brand Creative Intelligence</span>
                    <span className="text-amber-700 font-bold bg-amber-50 px-2 py-0.5 rounded">
                      Category Runway Matrix
                    </span>
                  </div>

                  {/* 3 Creative Angles Status */}
                  <div className="space-y-2.5">
                    <div className="p-3 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center justify-between text-xs">
                      <div className="space-y-0.5">
                        <span className="font-bold text-emerald-950 block">Angle A: Founder Origin Story (Hybrid)</span>
                        <span className="text-[11px] text-emerald-700 font-mono">Shopify Net Margin: +24.8% · Low Refunds (3.2%)</span>
                      </div>
                      <span className="font-mono font-bold text-emerald-800 bg-white px-2.5 py-1 rounded border border-emerald-200">
                        32d+ Runway 🟢
                      </span>
                    </div>

                    <div className="p-3 rounded-xl bg-amber-50 border border-amber-200 flex items-center justify-between text-xs">
                      <div className="space-y-0.5">
                        <span className="font-bold text-amber-950 block">Angle B: Problem Demonstration UGC</span>
                        <span className="text-[11px] text-amber-700 font-mono">Shopify Net Margin: +18.1% · Average Refunds (6.8%)</span>
                      </div>
                      <span className="font-mono font-bold text-amber-800 bg-white px-2.5 py-1 rounded border border-amber-200">
                        14d Runway 🟡
                      </span>
                    </div>

                    <div className="p-3 rounded-xl bg-rose-50 border border-rose-200 flex items-center justify-between text-xs">
                      <div className="space-y-0.5">
                        <span className="font-bold text-rose-950 block">Angle C: Synthetic AI Avatar Push</span>
                        <span className="text-[11px] text-rose-700 font-mono">High Initial ROAS but 38% Refund Rate</span>
                      </div>
                      <span className="font-mono font-bold text-rose-800 bg-white px-2.5 py-1 rounded border border-rose-200">
                        Fatigued 🔴
                      </span>
                    </div>
                  </div>

                  <div className="p-3 bg-slate-50 border border-slate-200 rounded-xl text-center text-xs text-slate-600 font-mono">
                    💡 Media buyers stop guessing and produce concepts with 20+ days open runway.
                  </div>
                </div>
              )}

              {/* DIAGRAM 3: Live Slack Advantage+ Circuit Breaker */}
              {currentStep === 2 && (
                <div className="space-y-4 animate-fade-in">
                  <div className="flex items-center justify-between pb-2 border-b border-slate-100 text-xs font-mono">
                    <span className="text-amber-700 font-bold flex items-center gap-1.5">
                      <Bell className="h-4 w-4" />
                      <span>CIRCUIT-BREAKER TRIGGERED</span>
                    </span>
                    <span className="text-slate-400">SLACK INTEGRATION</span>
                  </div>

                  <div className="rounded-xl border border-amber-200 bg-amber-50/40 p-4 text-xs font-mono space-y-3">
                    <div className="flex items-center justify-between pb-2 border-b border-amber-200">
                      <div className="flex items-center gap-1.5 font-bold text-slate-900">
                        <span className="text-amber-600">#</span>
                        <span>media-buying-alerts</span>
                      </div>
                      <span className="text-[10px] text-amber-700 font-bold">1-Click Action Available</span>
                    </div>

                    <div className="space-y-1.5 text-slate-700 text-[11px]">
                      <div>
                        <span className="text-slate-400">Account:</span> <strong className="text-slate-900">Brand #08 (Skincare)</strong>
                      </div>
                      <div>
                        <span className="text-slate-400">Meta ASC Warning:</span> <span className="text-rose-700 font-bold">78% spend dumped to existing buyers</span>
                      </div>
                      <div className="p-2.5 bg-white rounded border border-amber-200 text-slate-800">
                        Recommended Action: Shift $450/day into Angle A (Founder Origin) to maintain &lt;$30 CAC.
                      </div>
                    </div>

                    <div className="pt-2 border-t border-amber-200 flex items-center justify-between">
                      <span className="text-[10px] text-slate-500">1-Click Execution:</span>
                      <button className="px-3 py-1 bg-amber-600 hover:bg-amber-700 text-white font-bold rounded text-xs transition-colors">
                        Apply Shift &amp; Log Trace ✓
                      </button>
                    </div>
                  </div>
                </div>
              )}

              {/* DIAGRAM 4: Day-0 Pinned Proof Memos & Churn Lock */}
              {currentStep === 3 && (
                <div className="space-y-4 animate-fade-in">
                  <div className="flex items-center justify-between pb-2 border-b border-slate-100 text-xs font-mono">
                    <span className="text-emerald-700 font-bold flex items-center gap-1.5">
                      <Lock className="h-4 w-4" />
                      <span>DAY-0 PINNED PROOF MEMO</span>
                    </span>
                    <span className="text-slate-400">MONTH-2 RETENTION LOCK</span>
                  </div>

                  <div className="rounded-xl border border-emerald-200 bg-emerald-50/40 p-4 text-xs font-mono space-y-3">
                    <div className="flex items-center justify-between pb-2 border-b border-emerald-200">
                      <span className="font-bold text-slate-900">Executive Performance Memo</span>
                      <span className="text-[10px] font-bold text-emerald-800 bg-white px-2 py-0.5 rounded border border-emerald-200">
                        VERIFIED BY SHOPIFY
                      </span>
                    </div>

                    <div className="grid grid-cols-2 gap-2 text-center">
                      <div className="p-2.5 bg-white rounded border border-slate-200">
                        <span className="text-[10px] text-slate-400 uppercase block">Day-0 Baseline Net Cash</span>
                        <span className="text-sm font-bold text-slate-700">$18,400 / mo</span>
                      </div>
                      <div className="p-2.5 bg-emerald-100/60 rounded border border-emerald-300">
                        <span className="text-[10px] text-emerald-800 uppercase block font-bold">Month 2 Verified Net Cash</span>
                        <span className="text-sm font-black text-emerald-900">$38,200 / mo (+107%)</span>
                      </div>
                    </div>

                    <div className="p-2 bg-white rounded border border-emerald-200 text-[11px] text-slate-700">
                      Proof Lock: Client founder sees exact net bank dollars added since kickoff. Zero reason to churn or question agency fees.
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
                    ? "bg-white border-amber-400 shadow-xs"
                    : "bg-[#f8f7f4] border-[#e5e3dc] hover:border-slate-300 opacity-70 hover:opacity-100"
                }`}
              >
                {/* Progress bar inside card */}
                <div className="w-full bg-slate-200 h-1 rounded-full overflow-hidden mb-2">
                  <div
                    className="h-full bg-amber-500 transition-all duration-75"
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
