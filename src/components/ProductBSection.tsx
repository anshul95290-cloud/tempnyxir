"use client";

import React, { useState } from "react";
import { ShieldAlert } from "lucide-react";

export default function ProductBSection() {
  const [activeAd, setActiveAd] = useState<"saturated" | "winner" | "ai">("saturated");
  const [slackAction, setSlackAction] = useState<string | null>(null);

  const adCases = {
    saturated: {
      title: "Doctor Reaction UGC (Supplements)",
      format: "Lo-Fi iPhone UGC",
      hook: "0-2s Whitecoat Doctor Reaction",
      saturation: "84% Saturated in Vertical",
      score: 38,
      status: "WARNING",
      badgeColor: "text-rose-400 bg-rose-950/60 border-rose-800",
      runway: "<3 Days Estimated Runway",
      recommendation:
        "Doctor reaction hooks are saturated across 12 competitor stores. Swap 0-2s hook for microscopic texture zoom before spending media budget.",
      savings: "Estimated $2,400 ad test spend preserved",
    },
    winner: {
      title: "Cellular Mechanism Split-Screen (Supplements)",
      format: "Hybrid (2D Animation + Real UGC)",
      hook: "0-2s Microscopic Cellular Reaction",
      saturation: "11% Open Angle Runway",
      score: 92,
      status: "CLEARED TO LAUNCH",
      badgeColor: "text-emerald-400 bg-emerald-950/60 border-emerald-800",
      runway: "24+ Days Estimated Runway",
      recommendation:
        "High novelty score. Recommended pairing: 2-Bottle Bundle with 60-day subscription offer.",
      savings: "Projected 3.8x Blended ROAS on first $5k test",
    },
    ai: {
      title: "100% Synthetic AI Avatar Script (Skincare)",
      format: "Synthetic AI Video + Synthetic TTS",
      hook: "AI Face Avatar Trend Breakdown",
      saturation: "62% Saturated",
      score: 46,
      status: "MARGIN CAUTION",
      badgeColor: "text-amber-400 bg-amber-950/60 border-amber-800",
      runway: "Low Retention Cohort",
      recommendation:
        "Synthetic avatars in this vertical generate cheap clicks ($0.42 CPC) but trigger 34% 30-day refund rates in Shopify. Switch to Hybrid mode.",
      savings: "Prevents high return rate margin erosion",
    },
  };

  const current = adCases[activeAd];

  return (
    <section id="product-b" className="py-20 md:py-28 bg-[#fafaf9] border-b border-slate-200/80">
      <div className="mx-auto max-w-[1280px] px-6 sm:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-amber-800 bg-amber-50 border border-amber-200 px-3.5 py-1 rounded-full mb-3">
            <span>Product B · The Delivery & Retention Plane</span>
          </div>
          <h2 className="text-3xl font-black tracking-tight text-slate-900 sm:text-4xl md:text-5xl mt-2 mb-4">
            Stop Ad Burn & Prove Real Bank Profit
          </h2>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            Meta Advantage+ routinely burns client spend on fatiguing ads. Product B scores draft creatives before launch, breaks algorithm traps with live Slack alerts, and connects ad spend directly to verified Shopify net profit.
          </p>
        </div>

        {/* Visual Delivery Flow */}
        <div className="max-w-5xl mx-auto mb-16">
          <div className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400 mb-3 text-center sm:text-left">
            THE 5-STEP DELIVERY & RETENTION TIMELINE
          </div>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-3 p-4 bg-white border border-slate-200 rounded-xl">
            <div className="p-3 bg-slate-50 rounded-lg border border-slate-200/80">
              <span className="text-[10px] font-mono text-slate-400 block mb-1">STEP 1</span>
              <span className="font-bold text-xs text-slate-900 block">Draft Ad</span>
              <span className="text-[11px] text-slate-500">Before Spending $1</span>
            </div>
            <div className="p-3 bg-amber-50/40 rounded-lg border border-amber-200">
              <span className="text-[10px] font-mono text-amber-700 block mb-1">STEP 2</span>
              <span className="font-bold text-xs text-slate-900 block">0–100 Score</span>
              <span className="text-[11px] text-slate-500">Angle Saturation Gate</span>
            </div>
            <div className="p-3 bg-slate-50 rounded-lg border border-slate-200/80">
              <span className="text-[10px] font-mono text-slate-400 block mb-1">STEP 3</span>
              <span className="font-bold text-xs text-slate-900 block">Slack Alerts</span>
              <span className="text-[11px] text-slate-500">Break Meta ASC Traps</span>
            </div>
            <div className="p-3 bg-amber-50/40 rounded-lg border border-amber-200">
              <span className="text-[10px] font-mono text-amber-700 block mb-1">STEP 4</span>
              <span className="font-bold text-xs text-slate-900 block">Monday Brief</span>
              <span className="text-[11px] text-slate-500">Next Winning Angle</span>
            </div>
            <div className="col-span-2 md:col-span-1 p-3 bg-slate-50 rounded-lg border border-slate-200/80">
              <span className="text-[10px] font-mono text-slate-400 block mb-1">STEP 5</span>
              <span className="font-bold text-xs text-slate-900 block">Monthly Proof</span>
              <span className="text-[11px] text-slate-500">Day-0 vs Day-30 Cash</span>
            </div>
          </div>
        </div>

        {/* 4 Feature Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          <div className="rounded-xl border border-slate-200 bg-white p-6 hover:border-slate-300 transition-colors">
            <span className="font-mono text-xs font-bold text-amber-700 block mb-2">01 · PRE-FLIGHT</span>
            <h3 className="text-base font-bold text-slate-900 mb-2">Score Ads Before Spend</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Junior buyers drop drafts into the gatekeeper before uploading to Meta. Catches 80%+ saturated angles before wasting client testing budget.
            </p>
          </div>

          <div className="rounded-xl border border-slate-200 bg-white p-6 hover:border-slate-300 transition-colors">
            <span className="font-mono text-xs font-bold text-amber-700 block mb-2">02 · CIRCUIT-BREAKER</span>
            <h3 className="text-base font-bold text-slate-900 mb-2">Stop Meta ASC Traps</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              When Meta dumps 80%+ budget into one ad or burns cash past midday conversion dips, Nyxir fires a 1-click circuit-breaker alert to Slack.
            </p>
          </div>

          <div className="rounded-xl border border-slate-200 bg-white p-6 hover:border-slate-300 transition-colors">
            <span className="font-mono text-xs font-bold text-amber-700 block mb-2">03 · PROFIT TRUTH</span>
            <h3 className="text-base font-bold text-slate-900 mb-2">Human vs. AI Economics</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Exposes which AI workflows make actual bank profit vs. which ones cause 30%+ Shopify refund rates.
            </p>
          </div>

          <div className="rounded-xl border border-slate-200 bg-white p-6 hover:border-slate-300 transition-colors">
            <span className="font-mono text-xs font-bold text-amber-700 block mb-2">04 · RETENTION</span>
            <h3 className="text-base font-bold text-slate-900 mb-2">Undeniable Proof Reports</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Pins verified Shopify net cash added against the client&apos;s exact Day-0 baseline—destroying Month-2 amnesia and locking in retainers.
            </p>
          </div>
        </div>

        {/* Interactive Delivery Plane Console */}
        <div className="rounded-2xl border border-slate-800 bg-slate-950 text-white p-6 sm:p-10 shadow-2xl">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between pb-6 border-b border-slate-800 gap-4">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="h-2 w-2 rounded-full bg-amber-400" />
                <span className="text-xs font-mono uppercase tracking-wider text-amber-400 font-bold">
                  INTERACTIVE SYSTEMS OF ACTION
                </span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold tracking-tight">
                Pre-Flight Gate & Live Slack Directives
              </h3>
            </div>

            {/* Test Creative Selector */}
            <div className="flex flex-wrap items-center gap-2 bg-slate-900 p-1.5 rounded-lg border border-slate-800 text-xs">
              <span className="text-slate-400 font-medium px-2">Test Ad Draft:</span>
              <button
                onClick={() => setActiveAd("saturated")}
                className={`px-3 py-1.5 rounded-md font-bold transition-all ${
                  activeAd === "saturated"
                    ? "bg-amber-500 text-slate-950 shadow-sm"
                    : "text-slate-300 hover:text-white"
                }`}
              >
                1. Doctor Reaction (Saturated)
              </button>
              <button
                onClick={() => setActiveAd("winner")}
                className={`px-3 py-1.5 rounded-md font-bold transition-all ${
                  activeAd === "winner"
                    ? "bg-emerald-500 text-slate-950 shadow-sm"
                    : "text-slate-300 hover:text-white"
                }`}
              >
                2. Cellular Mechanism (Winner)
              </button>
              <button
                onClick={() => setActiveAd("ai")}
                className={`px-3 py-1.5 rounded-md font-bold transition-all ${
                  activeAd === "ai"
                    ? "bg-teal-500 text-slate-950 shadow-sm"
                    : "text-slate-300 hover:text-white"
                }`}
              >
                3. Synthetic AI (High Refund)
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-8">
            {/* Left Box: Pre-Flight Gatekeeper Simulator */}
            <div className="lg:col-span-7 rounded-xl border border-slate-800 bg-slate-900/80 p-6 space-y-5">
              <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                <span className="text-xs font-mono uppercase text-slate-400">
                  Pre-Flight Creative Simulator (0-100)
                </span>
                <span className={`text-xs font-mono font-bold px-2 py-0.5 rounded border ${current.badgeColor}`}>
                  {current.status}
                </span>
              </div>

              <div className="flex items-center gap-6">
                <div className="h-24 w-24 rounded-xl border border-slate-700 bg-slate-950 flex flex-col items-center justify-center shrink-0">
                  <span className="text-xs text-slate-400 font-mono">Score</span>
                  <span className="text-3xl font-black tabular-nums text-white">
                    {current.score}
                  </span>
                  <span className="text-[10px] text-slate-500 font-mono">/ 100</span>
                </div>

                <div className="space-y-1 text-xs">
                  <h4 className="text-sm font-bold text-white">{current.title}</h4>
                  <div className="text-slate-400">Format: <span className="text-slate-200">{current.format}</span></div>
                  <div className="text-slate-400">Hook Archetype: <span className="text-slate-200">{current.hook}</span></div>
                  <div className="text-slate-400">Angle Saturation: <span className="text-amber-400 font-bold">{current.saturation}</span></div>
                </div>
              </div>

              <div className="p-4 rounded-lg bg-slate-950 border border-slate-800 text-xs space-y-2">
                <div className="text-slate-300 leading-relaxed font-sans">
                  <strong>System Directive:</strong> {current.recommendation}
                </div>
                <div className="pt-2 border-t border-slate-800 text-emerald-400 font-mono font-bold">
                  {current.savings}
                </div>
              </div>
            </div>

            {/* Right Box: Live Slack Circuit-Breaker Card */}
            <div className="lg:col-span-5 rounded-xl border border-slate-800 bg-slate-900 p-6 space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                <span className="text-xs font-mono font-bold text-slate-300 flex items-center gap-1.5">
                  <span className="text-amber-400">#</span> alerts-media-buyers
                </span>
                <span className="text-[10px] font-mono text-amber-400 bg-amber-950/60 border border-amber-800 px-2 py-0.5 rounded">
                  CIRCUIT-BREAKER
                </span>
              </div>

              <div className="p-3.5 bg-slate-950 rounded-lg border border-slate-800 text-xs space-y-2">
                <div className="flex items-center gap-2 text-rose-400 font-bold">
                  <ShieldAlert className="h-4 w-4" />
                  <span>Advantage+ Monopolization Trap</span>
                </div>
                <p className="text-slate-300 leading-relaxed text-[11px]">
                  Meta ASC has dumped <strong>84% of daily spend ($1,820)</strong> into Creative #104 after 2:30 PM conversion dip. Frequency among repeat buyers reached 4.1.
                </p>
                <div className="text-amber-300 font-mono text-[11px] bg-amber-950/40 p-2 rounded border border-amber-900/60">
                  Directive: Cap Ad #104 daily budget to $200 or activate Angle #3 (Cellular Mechanism).
                </div>
              </div>

              {/* 1-Click Action Buttons */}
              <div className="space-y-2 pt-1">
                <span className="text-[10px] uppercase font-mono text-slate-400 block">
                  1-Click Media Buyer Response:
                </span>
                <div className="grid grid-cols-3 gap-2">
                  <button
                    onClick={() => setSlackAction("executed")}
                    className={`py-2 px-1 text-center rounded-lg font-bold text-xs border transition-all ${
                      slackAction === "executed"
                        ? "bg-emerald-500 text-slate-950 border-emerald-400 shadow-sm"
                        : "bg-slate-800 text-slate-200 border-slate-700 hover:bg-slate-750"
                    }`}
                  >
                    [Executed]
                  </button>
                  <button
                    onClick={() => setSlackAction("scaled")}
                    className={`py-2 px-1 text-center rounded-lg font-bold text-xs border transition-all ${
                      slackAction === "scaled"
                        ? "bg-teal-500 text-slate-950 border-teal-400 shadow-sm"
                        : "bg-slate-800 text-slate-200 border-slate-700 hover:bg-slate-750"
                    }`}
                  >
                    [Scaled]
                  </button>
                  <button
                    onClick={() => setSlackAction("killed")}
                    className={`py-2 px-1 text-center rounded-lg font-bold text-xs border transition-all ${
                      slackAction === "killed"
                        ? "bg-rose-500 text-white border-rose-400 shadow-sm"
                        : "bg-slate-800 text-slate-200 border-slate-700 hover:bg-slate-750"
                    }`}
                  >
                    [Killed]
                  </button>
                </div>

                {/* Feedback trace message */}
                {slackAction && (
                  <div className="mt-2 p-2.5 bg-emerald-950/60 border border-emerald-800/80 rounded text-[11px] text-emerald-300 animate-fade-in">
                    ✓ Logged to Expert Decision Trace! Action ({slackAction}) registered. 7-day verified Shopify profit analysis running in background.
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
