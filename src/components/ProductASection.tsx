"use client";

import React, { useState } from "react";
import { Lock, ArrowUpRight } from "lucide-react";
import { LINKS } from "@/config/links";

export default function ProductASection() {
  const [selectedBrand, setSelectedBrand] = useState<"skincare" | "apparel">("skincare");

  const brandData = {
    skincare: {
      name: "Lumora Botanicals",
      rev: "$48,000 / mo",
      cac: "$44.20 Blended CAC",
      margin: "18.2% Net Margin",
      leaks: [
        {
          title: "Mobile SKU Variant Selector Drop-Off",
          leak: "38.4% Exit Rate",
          impact: "~$6,200/mo leaked revenue",
        },
        {
          title: "Above-The-Fold Subscription Toggle Friction",
          leak: "62% Cart Bounce",
          impact: "~$4,800/mo missed LTV",
        },
        {
          title: "Checkout Shipping Threshold Misalignment",
          leak: "24% Abandonment",
          impact: "~$3,100/mo unrecovered margin",
        },
      ],
      blueprint: [
        "Phase 1: Dynamic 1-Click Variant Switcher with Instant Sticky Cart",
        "Phase 2: Bundled Subscription Incentivizer with 90-Day Retention Hook",
        "Phase 3: Real-Time Tiered Free Shipping Progress Meter",
      ],
      slackBrief: {
        channel: "#client-onboarding",
        client: "Lumora Botanicals",
        source: "Founder LinkedIn Link (Link #2)",
        day0Cac: "$44.20",
        targetCac: "<$32.00",
        topPain: "Previous agency burned $6,000 testing TikTok with zero tracked sales.",
      },
    },
    apparel: {
      name: "Solace Activewear",
      rev: "$92,000 / mo",
      cac: "$52.80 Blended CAC",
      margin: "14.5% Net Margin",
      leaks: [
        {
          title: "PDP Size Guide Modal Interaction Failure",
          leak: "44.1% Exit Rate",
          impact: "~$11,400/mo returned or abandoned",
        },
        {
          title: "Mid-Funnel Cart Upsell Glitch on iOS Safari",
          leak: "51% Failure Rate",
          impact: "~$7,200/mo lost AOV",
        },
        {
          title: "Post-Purchase Email First-Session Latency",
          leak: "31% Drop-off",
          impact: "~$5,900/mo missed 2nd purchase",
        },
      ],
      blueprint: [
        "Phase 1: Inline Zero-Click Sizing Matcher with Fit Predictor",
        "Phase 2: Native Shopify One-Click Post-Purchase Cart Engine",
        "Phase 3: 48-Hour VIP Repeat Purchase SMS Automation",
      ],
      slackBrief: {
        channel: "#client-onboarding",
        client: "Solace Activewear",
        source: "Cold Outbound Email (Sequence #4)",
        day0Cac: "$52.80",
        targetCac: "<$38.00",
        topPain: "High return rates (28%) destroying contribution margin.",
      },
    },
  };

  const active = brandData[selectedBrand];

  return (
    <section id="product-a" className="py-20 md:py-28 bg-white border-b border-slate-200/80">
      <div className="mx-auto max-w-[1280px] px-6 sm:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-teal-700 bg-teal-50 border border-teal-200 px-3.5 py-1 rounded-full mb-3">
            <span>Product A · The Acquisition Plane</span>
          </div>
          <h2 className="text-3xl font-black tracking-tight text-slate-900 sm:text-4xl md:text-5xl mt-2 mb-4">
            Turn Cold Clicks Into High-Paying Clients
          </h2>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            Replace dead PDFs and free Loom audits with an uncopyable diagnostic micro-SaaS (`audit.[agency].com`). Attract prospects, lock in discovery calls, and capture Day-0 truth automatically.
          </p>
        </div>

        {/* Visual Pipeline Flow */}
        <div className="max-w-5xl mx-auto mb-16">
          <div className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400 mb-3 text-center sm:text-left">
            THE 5-STEP ACQUISITION ARCHITECTURE
          </div>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-3 p-4 bg-slate-50 border border-slate-200 rounded-xl">
            <div className="p-3 bg-white rounded-lg border border-slate-200/80">
              <span className="text-[10px] font-mono text-slate-400 block mb-1">01 / TRAFFIC</span>
              <span className="font-bold text-xs text-slate-900 block">Any Channel</span>
              <span className="text-[11px] text-slate-500">Email, LinkedIn, DMs</span>
            </div>
            <div className="p-3 bg-white rounded-lg border border-teal-200 bg-teal-50/30">
              <span className="text-[10px] font-mono text-teal-600 block mb-1">02 / DIAGNOSTIC</span>
              <span className="font-bold text-xs text-slate-900 block">Your Micro-SaaS</span>
              <span className="text-[11px] text-slate-500">3 Instant Store Leaks</span>
            </div>
            <div className="p-3 bg-white rounded-lg border border-slate-200/80">
              <span className="text-[10px] font-mono text-slate-400 block mb-1">03 / INCENTIVE</span>
              <span className="font-bold text-xs text-slate-900 block">Locked Blueprint</span>
              <span className="text-[11px] text-slate-500">Unlocks on the Call</span>
            </div>
            <div className="p-3 bg-white rounded-lg border border-teal-200 bg-teal-50/30">
              <span className="text-[10px] font-mono text-teal-600 block mb-1">04 / DISCOVERY</span>
              <span className="font-bold text-xs text-slate-900 block">85%+ Show Rate</span>
              <span className="text-[11px] text-slate-500">High Trust & Intent</span>
            </div>
            <div className="col-span-2 md:col-span-1 p-3 bg-white rounded-lg border border-slate-200/80">
              <span className="text-[10px] font-mono text-slate-400 block mb-1">05 / ONBOARDING</span>
              <span className="font-bold text-xs text-slate-900 block">Day-0 Slack Brief</span>
              <span className="text-[11px] text-slate-500">Zero Prep Handoff</span>
            </div>
          </div>
        </div>

        {/* 4 Feature Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          <div className="rounded-xl border border-slate-200 bg-[#fafaf9] p-6 hover:border-slate-300 transition-colors">
            <span className="font-mono text-xs font-bold text-teal-700 block mb-2">01 · RESEARCH</span>
            <h3 className="text-base font-bold text-slate-900 mb-2">Deep Research, Not AI Slop</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              We research your agency&apos;s specific niche, internal datasets, and frameworks so the tool positions your team as undeniable domain experts.
            </p>
          </div>

          <div className="rounded-xl border border-slate-200 bg-[#fafaf9] p-6 hover:border-slate-300 transition-colors">
            <span className="font-mono text-xs font-bold text-teal-700 block mb-2">02 · DISTRIBUTION</span>
            <h3 className="text-base font-bold text-slate-900 mb-2">Stand Out Everywhere</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Drop unique telemetry tracking links in cold emails, founder LinkedIn posts, and communities to track closed retainers by source.
            </p>
          </div>

          <div className="rounded-xl border border-slate-200 bg-[#fafaf9] p-6 hover:border-slate-300 transition-colors">
            <span className="font-mono text-xs font-bold text-teal-700 block mb-2">03 · COMMITMENT</span>
            <h3 className="text-base font-bold text-slate-900 mb-2">85%+ Call Show-Rate</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Store owners see their 3 leaked margin bottlenecks for free, but the custom fix blueprint unlocks only live with your strategist.
            </p>
          </div>

          <div className="rounded-xl border border-slate-200 bg-[#fafaf9] p-6 hover:border-slate-300 transition-colors">
            <span className="font-mono text-xs font-bold text-teal-700 block mb-2">04 · INSTITUTIONAL</span>
            <h3 className="text-base font-bold text-slate-900 mb-2">Instant Slack Onboarding</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              The second the contract signs, Nyxir fires a Day-0 executive brief into your internal Slack with verified baselines and zero rep prep.
            </p>
          </div>
        </div>

        {/* Interactive Live Diagnostic & Onboarding Simulator */}
        <div className="rounded-2xl border border-slate-200 bg-slate-900 text-white p-6 sm:p-10 shadow-2xl">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between pb-6 border-b border-slate-800 gap-4">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="h-2 w-2 rounded-full bg-emerald-400" />
                <span className="text-xs font-mono uppercase tracking-wider text-emerald-400 font-bold">
                  LIVE INTERACTIVE PROSPECT EXPERIENCE
                </span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold tracking-tight">
                audit.[your-agency].com Simulator
              </h3>
            </div>

            {/* Toggle Brand Selector */}
            <div className="flex items-center gap-2 bg-slate-800/80 p-1.5 rounded-lg border border-slate-700 text-xs">
              <span className="text-slate-400 font-medium px-2">Simulate Brand:</span>
              <button
                onClick={() => setSelectedBrand("skincare")}
                className={`px-3 py-1.5 rounded-md font-bold transition-all ${
                  selectedBrand === "skincare"
                    ? "bg-teal-500 text-slate-950 shadow-sm"
                    : "text-slate-300 hover:text-white"
                }`}
              >
                Lumora Botanicals ($48k/mo)
              </button>
              <button
                onClick={() => setSelectedBrand("apparel")}
                className={`px-3 py-1.5 rounded-md font-bold transition-all ${
                  selectedBrand === "apparel"
                    ? "bg-teal-500 text-slate-950 shadow-sm"
                    : "text-slate-300 hover:text-white"
                }`}
              >
                Solace Activewear ($92k/mo)
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-8">
            {/* Left: What the Prospect Sees on Screen */}
            <div className="lg:col-span-7 space-y-6">
              <div className="rounded-xl border border-slate-700 bg-slate-950/70 p-5">
                <div className="flex items-center justify-between pb-3 border-b border-slate-800 text-xs text-slate-400 font-mono">
                  <span>Target: {active.name}</span>
                  <span className="text-emerald-400 font-bold">Verified Day-0 Telemetry</span>
                </div>

                {/* Baseline Metrics Bar */}
                <div className="grid grid-cols-3 gap-3 py-4 text-center border-b border-slate-800">
                  <div>
                    <span className="text-[10px] text-slate-400 uppercase tracking-wider block">Monthly Gross</span>
                    <span className="font-bold text-sm sm:text-base text-white tabular-nums">{active.rev}</span>
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-400 uppercase tracking-wider block">Day-0 CAC</span>
                    <span className="font-bold text-sm sm:text-base text-amber-400 tabular-nums">{active.cac}</span>
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-400 uppercase tracking-wider block">Net Margin</span>
                    <span className="font-bold text-sm sm:text-base text-teal-400 tabular-nums">{active.margin}</span>
                  </div>
                </div>

                {/* 3 Exposed Leaks */}
                <div className="pt-4 space-y-3">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-300 block">
                    3 Identified Conversion Leaks (Exposed for Free)
                  </span>
                  {active.leaks.map((leak, idx) => (
                    <div
                      key={idx}
                      className="p-3 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-between text-xs"
                    >
                      <div>
                        <span className="font-bold text-slate-200 block">{leak.title}</span>
                        <span className="text-slate-400">{leak.impact}</span>
                      </div>
                      <span className="font-mono font-bold text-rose-400 bg-rose-950/40 border border-rose-800/40 px-2 py-1 rounded">
                        {leak.leak}
                      </span>
                    </div>
                  ))}
                </div>

                {/* The Locked Remediation Blueprint (The Show-Rate Lock) */}
                <div className="mt-5 rounded-xl border border-teal-500/40 bg-teal-950/30 p-5 relative overflow-hidden">
                  <div className="flex items-start gap-3">
                    <div className="h-9 w-9 rounded-lg bg-teal-500/20 border border-teal-500/40 flex items-center justify-center text-teal-400 shrink-0">
                      <Lock className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-teal-300">
                        Custom Remediation Blueprint (Locked)
                      </h4>
                      <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                        &ldquo;Your custom remediation blueprint is compiled. Your growth strategist will unlock and walk through this live on your confirmed call.&rdquo;
                      </p>
                    </div>
                  </div>

                  {/* Blurred Blueprint Lines */}
                  <div className="mt-4 filter blur-[3.5px] opacity-60 select-none space-y-2 pointer-events-none text-xs text-teal-200 font-mono">
                    {active.blueprint.map((line, idx) => (
                      <div key={idx} className="p-2 bg-slate-900/90 rounded border border-teal-700/50">
                        {line}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Right: What the Agency Gets in Slack on Signing */}
            <div className="lg:col-span-5 space-y-4">
              <div className="rounded-xl border border-slate-700 bg-slate-950 p-5">
                <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                  <span className="text-xs font-mono font-bold text-slate-300 flex items-center gap-1.5">
                    <span className="text-teal-400">#</span> {active.slackBrief.channel}
                  </span>
                  <span className="text-[10px] font-mono text-emerald-400 bg-emerald-950/60 border border-emerald-800/50 px-2 py-0.5 rounded">
                    DAY-0 SLACK DISPATCH
                  </span>
                </div>

                <div className="mt-4 space-y-3 text-xs leading-relaxed">
                  <div className="p-3 bg-slate-900 rounded-lg border border-slate-800">
                    <span className="text-slate-400 block text-[10px] uppercase font-mono">NEW CONTRACT SIGNED</span>
                    <span className="text-white font-bold text-sm">{active.slackBrief.client}</span>
                    <span className="text-slate-400 block text-[11px] mt-0.5">Source: {active.slackBrief.source}</span>
                  </div>

                  <div className="p-3 bg-slate-900 rounded-lg border border-slate-800 space-y-1.5 font-mono text-[11px]">
                    <div className="flex justify-between">
                      <span className="text-slate-400">Day-0 Baseline CAC:</span>
                      <span className="text-amber-400 font-bold">{active.slackBrief.day0Cac}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-400">90-Day Target CAC:</span>
                      <span className="text-emerald-400 font-bold">{active.slackBrief.targetCac}</span>
                    </div>
                    <div className="pt-2 border-t border-slate-800 text-slate-300">
                      <span className="text-slate-500 block text-[10px]">Primary Founder Pain Point:</span>
                      &ldquo;{active.slackBrief.topPain}&rdquo;
                    </div>
                  </div>

                  <div className="p-3 rounded-lg bg-teal-950/50 border border-teal-800/60 text-teal-200 text-xs">
                    <span className="font-bold block text-teal-300 mb-1">Account Manager Impact</span>
                    Zero kickoff prep required. Rep holds authoritative institutional data before the client even speaks.
                  </div>
                </div>
              </div>

              <div className="text-center pt-2">
                <a
                  href={LINKS.liveDemo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs text-teal-400 hover:text-teal-300 font-bold underline underline-offset-4"
                >
                  Explore real white-labeled node: market-client.vercel.app
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
