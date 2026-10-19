"use client";

import React from "react";
import ProductBVideoDemo from "./ProductBVideoDemo";

export default function ProductBSection() {
  const pillars = [
    {
      num: "PILLAR 01",
      tag: "CROSS-BRAND BENCHMARKING ARCHITECTURE",
      subtitle: "The 3-Ring Network Moat (Day 1 to Category Scale)",
      body: "Breaks single-account silos across three rings: Ring 1 connects all 10–25 brands inside your own agency on Day 1 so every media buyer benefits from portfolio-wide tests and algorithm shifts. Ring 2 tracks competitor Ad Library hook survival (3d vs. 30d+ runway). Ring 3 unlocks an anonymized Cross-Agency Vertical Benchmark Pool with complete brand privacy and zero sensitive data exposure.",
    },
    {
      num: "PILLAR 02",
      tag: "DELIVERY PERFORMANCE & AD ECONOMIC ACCOUNTING",
      subtitle: "Creative Vectors ↔ Verified Bank Profit",
      body: "Connects 12 multimodal creative dimensions (hook archetype, narrative angle, pacing, offer structure) and production workflows (100% Human vs. Hybrid vs. Synthetic AI) directly to real Shopify order/refund webhooks—measuring First-Time CAC, Net Contribution Margin after refunds, exact Days-to-Fatigue, and 60/90-day LTV.",
    },
    {
      num: "PILLAR 03",
      tag: "SYSTEM OF INTELLIGENCE × SYSTEM OF ACTION",
      subtitle: "From Cross-Brand Telemetry to 1-Click Execution",
      body: "Passive analytics tools leave media buyers staring at charts after money is already lost. Product B fuses cross-brand economic intelligence directly with four weekly Systems of Action: Pre-Flight 0–100 creative validation before spend, live Slack Advantage+ circuit-breakers with 1-click decision trace logging, algorithmic Monday production briefs, and Day-0 pinned retention proof memos.",
    },
  ];

  return (
    <section id="product-b" className="py-20 md:py-28 bg-[#f8f7f4] border-b border-[#e5e3dc]">
      <div className="mx-auto max-w-[1280px] px-6 sm:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-mono font-bold tracking-wider text-amber-800 bg-amber-50/90 border border-amber-200/80 px-3.5 py-1 rounded-full mb-3">
            <span>Product B · Cross-Brand Delivery, Ad Economics &amp; Retention Architecture</span>
          </div>
          <h2 className="text-3xl font-black tracking-tight text-[#0f0f0e] sm:text-4xl md:text-5xl mt-2 mb-4 leading-tight">
            Cross-Brand Benchmarking Meets True Ad Economic Accounting.
          </h2>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            Product B is a cross-business architecture that connects multimodal creative patterns, live ad auction behavior, and verified Shopify financial outcomes across brands—uniting a deep System of Intelligence with a 1-click System of Action.
          </p>
        </div>

        {/* 3 Core Architectural Pillars (3-Column Spec Grid) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {pillars.map((p) => (
            <div
              key={p.num}
              className="rounded-2xl border border-[#e5e3dc] bg-white p-7 shadow-xs hover:border-amber-300 hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="font-mono text-xs font-bold text-amber-700 bg-amber-50 px-2 py-0.5 rounded">
                    {p.num}
                  </span>
                  <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest font-bold">
                    SPEC
                  </span>
                </div>
                <h3 className="font-mono text-xs font-bold uppercase tracking-wider text-slate-800 mb-1">
                  {p.tag}
                </h3>
                <h4 className="text-sm font-bold text-[#0f0f0e] mb-3">
                  {p.subtitle}
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {p.body}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Animated Multi-Layer SVG Architecture Flowchart */}
        <div className="max-w-5xl mx-auto mb-16 rounded-2xl border border-[#e5e3dc] bg-white p-6 sm:p-8 shadow-xs">
          <div className="flex items-center justify-between mb-6 pb-4 border-b border-slate-100">
            <div>
              <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-slate-400 block mb-1">
                PRODUCT B 3-LAYER ARCHITECTURE
              </span>
              <h4 className="text-sm sm:text-base font-bold text-[#0f0f0e]">
                Ingestion &amp; Sanitization → System of Intelligence → 4 Systems of Action
              </h4>
            </div>
            <span className="text-xs font-mono font-bold text-amber-600 flex items-center gap-1.5">
              <span className="h-2 w-2 rounded-full bg-amber-500 animate-pulse" />
              CROSS-BRAND CONTINUOUS SYNC
            </span>
          </div>

          <div className="space-y-4 font-mono text-xs">
            {/* Layer 1: Ingestion */}
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block mb-2">
                LAYER 1 · INGESTION &amp; PII SANITIZATION PLANE
              </span>
              <div className="flex flex-col md:flex-row items-center gap-2 text-slate-700 font-sans">
                <span className="p-2 bg-white rounded border border-slate-200 w-full md:w-auto text-center font-mono text-xs">
                  [Meta, TikTok, Google Read-Only APIs]
                </span>
                <span className="text-slate-400 font-mono">+</span>
                <span className="p-2 bg-white rounded border border-slate-200 w-full md:w-auto text-center font-mono text-xs">
                  [Competitor Ad Libraries]
                </span>
                <span className="text-slate-400 font-mono">+</span>
                <span className="p-2 bg-white rounded border border-slate-200 w-full md:w-auto text-center font-mono text-xs">
                  [Shopify Order &amp; Refund Webhooks]
                </span>
                <span className="text-amber-500 font-mono font-bold mx-1">──►</span>
                <span className="p-2 bg-amber-50 rounded border border-amber-200 text-amber-900 font-bold font-mono text-xs">
                  [PII &amp; Brand Scrubber (Names/Logos Stripped)]
                </span>
              </div>
            </div>

            {/* Connecting flow pulse */}
            <div className="flex justify-center text-slate-300 font-mono text-xs">
              ▼
            </div>

            {/* Layer 2: Intelligence */}
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block mb-2">
                LAYER 2 · CROSS-BRAND SYSTEM OF INTELLIGENCE
              </span>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3 font-sans text-xs">
                <div className="p-2.5 bg-white rounded border border-slate-200">
                  <strong className="block text-slate-900 font-mono text-[11px] mb-1">3-Ring Benchmark Pool</strong>
                  <span className="text-slate-500 text-[11px]">Agency Portfolio (Day 1) + Public Radar + Sovereign Vertical Benchmark Pool</span>
                </div>
                <div className="p-2.5 bg-white rounded border border-slate-200">
                  <strong className="block text-slate-900 font-mono text-[11px] mb-1">12-Dim Multimodal Vectors</strong>
                  <span className="text-slate-500 text-[11px]">Hook, angle, pacing paired directly with real Shopify net bank cash</span>
                </div>
                <div className="p-2.5 bg-white rounded border border-slate-200">
                  <strong className="block text-slate-900 font-mono text-[11px] mb-1">Human vs. AI Ledger</strong>
                  <span className="text-slate-500 text-[11px]">Identifies high-refund synthetic AI vs profit-generating hybrid ads</span>
                </div>
              </div>
            </div>

            {/* Connecting flow pulse */}
            <div className="flex justify-center text-slate-300 font-mono text-xs">
              ▼
            </div>

            {/* Layer 3: System of Action */}
            <div className="p-4 rounded-xl bg-amber-50/40 border border-amber-200/90">
              <span className="text-[10px] font-bold text-amber-800 uppercase tracking-wider block mb-2">
                LAYER 3 · 4 SYSTEMS OF ACTION (WEEKLY EXECUTION)
              </span>
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 font-sans text-xs">
                <div className="p-2.5 bg-white rounded border border-amber-200/80">
                  <span className="font-mono text-[10px] text-amber-700 font-bold block mb-0.5">ACTION 1 · BEFORE SPEND</span>
                  <strong className="text-slate-900 block text-xs">Pre-Flight 0–100 Gate</strong>
                  <span className="text-[11px] text-slate-500">Stops saturated hooks before launching</span>
                </div>
                <div className="p-2.5 bg-white rounded border border-amber-200/80">
                  <span className="font-mono text-[10px] text-amber-700 font-bold block mb-0.5">ACTION 2 · DURING SPEND</span>
                  <strong className="text-slate-900 block text-xs">Slack Circuit-Breakers</strong>
                  <span className="text-[11px] text-slate-500">1-click decision traces break Meta traps</span>
                </div>
                <div className="p-2.5 bg-white rounded border border-amber-200/80">
                  <span className="font-mono text-[10px] text-amber-700 font-bold block mb-0.5">ACTION 3 · NEXT CYCLE</span>
                  <strong className="text-slate-900 block text-xs">Monday Production Brief</strong>
                  <span className="text-[11px] text-slate-500">Points creators to open runway angles</span>
                </div>
                <div className="p-2.5 bg-white rounded border border-amber-200/80">
                  <span className="font-mono text-[10px] text-amber-700 font-bold block mb-0.5">ACTION 4 · CLIENT LOCK-IN</span>
                  <strong className="text-slate-900 block text-xs">Day-0 Retention Memos</strong>
                  <span className="text-[11px] text-slate-500">Pins current net cash vs. baseline</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* The New Animated Video Demonstration Component */}
        <div className="max-w-5xl mx-auto">
          <ProductBVideoDemo />
        </div>

      </div>
    </section>
  );
}
