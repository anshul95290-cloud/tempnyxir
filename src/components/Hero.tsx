"use client";

import React from "react";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { LINKS } from "@/config/links";

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-12 pb-20 md:pt-20 md:pb-32 bg-[#f8f7f4] border-b border-[#e5e3dc]">
      {/* Subtle architectural grid pattern */}
      <div className="absolute inset-0 -z-10 bg-grid-pattern opacity-60" />

      <div className="mx-auto max-w-[1280px] px-6 sm:px-8">
        <div className="max-w-4xl mx-auto text-center">
          {/* Top Pill Badge */}
          <div className="inline-flex items-center gap-2 text-xs font-mono font-bold tracking-wider text-emerald-800 bg-emerald-50/90 border border-emerald-200/80 rounded-full px-4 py-1.5 mb-6 animate-fade-in-up">
            <span>DFY AI DATA INFRASTRUCTURE</span>
            <span aria-hidden="true" className="text-emerald-400">·</span>
            <span>BUILT EXCLUSIVELY FOR E-COMMERCE AGENCIES</span>
          </div>

          {/* New H1 Headline */}
          <h1 className="text-4xl font-black tracking-tight text-[#0f0f0e] sm:text-5xl md:text-6xl lg:text-7xl leading-[1.08] animate-fade-in-up mb-6">
            The AI Infrastructure Layer <br className="hidden sm:inline" />
            <span className="font-serif italic font-normal text-slate-800">
              Brands Can’t Build In-House.
            </span>
          </h1>

          {/* New Subheadline */}
          <p className="mx-auto max-w-3xl text-base sm:text-lg md:text-xl text-slate-600 leading-relaxed mb-8 md:mb-10 animate-fade-in-up font-normal">
            We engineer your agency’s custom-researched acquisition &amp; onboarding pipeline (Product A) and cross-brand performance &amp; ad economics architecture (Product B)—so you win high-value retainers without discounting, align ad delivery with real bank outcomes, and make your agency impossible to replace.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up mb-16">
            <a
              href={LINKS.primaryCta}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex h-13 items-center justify-center rounded-xl bg-[#0f0f0e] px-8 text-base font-bold text-white shadow-md hover:bg-slate-800 hover:-translate-y-0.5 transition-all duration-200"
            >
              Book Your 14-Day Pilot Program
              <ArrowRight className="ml-2.5 h-4 w-4" />
            </a>

            <a
              href={LINKS.liveDemo}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex h-13 items-center justify-center rounded-xl border border-[#e5e3dc] bg-white px-7 text-base font-semibold text-slate-800 hover:text-black hover:border-slate-400 hover:shadow-xs transition-all duration-200"
            >
              Inspect Live Diagnostic Node
              <ArrowUpRight className="ml-2 h-4 w-4 text-emerald-600" />
            </a>
          </div>
        </div>

        {/* Two-Card Architecture Panel (Product A ↔ Product B) */}
        <div className="max-w-5xl mx-auto rounded-2xl border border-[#e5e3dc] bg-white p-6 sm:p-8 shadow-xl shadow-slate-200/40 animate-fade-in-up">
          <div className="grid grid-cols-1 lg:grid-cols-11 gap-6 items-center">
            {/* Left Card: Product A */}
            <div className="lg:col-span-5 rounded-xl border border-emerald-200/80 bg-emerald-50/30 p-6 relative hover:border-emerald-300 transition-colors">
              <div className="flex items-center justify-between mb-4">
                <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-emerald-800">
                  PRODUCT A: ACQUIRE &amp; ONBOARD
                </span>
                <span className="text-xs font-semibold text-emerald-900 bg-emerald-100/90 px-2 py-0.5 rounded font-mono">
                  Acquisition Pipeline
                </span>
              </div>
              <h3 className="text-xl font-bold text-[#0f0f0e] mb-2">
                Custom-Researched Diagnostic Micro-SaaS
              </h3>
              <p className="text-sm text-slate-600 mb-4 leading-relaxed">
                Engineered from deep research into your agency’s niche, internal frameworks, and benchmarks—turning multi-channel traffic into high-show-rate sales calls and automated Day-0 onboarding.
              </p>
              <div className="space-y-2.5 pt-3 border-t border-emerald-200/60 text-xs text-slate-700">
                <div className="flex items-start gap-2">
                  <div className="h-1.5 w-1.5 rounded-full bg-emerald-600 mt-1.5 shrink-0" />
                  <span>
                    <strong className="text-slate-900">Stand Out Across Every Channel</strong> via custom telemetry links for LinkedIn, cold email &amp; communities
                  </span>
                </div>
                <div className="flex items-start gap-2">
                  <div className="h-1.5 w-1.5 rounded-full bg-emerald-600 mt-1.5 shrink-0" />
                  <span>
                    <strong className="text-slate-900">85%+ Sales Call Show-Rates</strong> by exposing 3 live store leaks and locking the fix blueprint for the call
                  </span>
                </div>
                <div className="flex items-start gap-2">
                  <div className="h-1.5 w-1.5 rounded-full bg-emerald-600 mt-1.5 shrink-0" />
                  <span>
                    <strong className="text-slate-900">Instant Day-0 Slack Kickoff</strong> pushing baseline CAC, margins &amp; client expectations upon signature
                  </span>
                </div>
              </div>
            </div>

            {/* Center Animated Bi-Directional Bridge */}
            <div className="lg:col-span-1 flex flex-col items-center justify-center text-center py-3 lg:py-0">
              <div className="hidden lg:flex flex-col items-center gap-2">
                <span className="text-[9px] font-mono font-bold text-slate-400 rotate-90 my-3 tracking-widest whitespace-nowrap">
                  DAY-0 BASELINES
                </span>
                <svg className="w-8 h-16" viewBox="0 0 32 64" fill="none">
                  <path
                    d="M16 4V60"
                    stroke="#10b981"
                    strokeWidth="2"
                    strokeDasharray="4 4"
                    className="animate-flow-dash"
                  />
                  <polygon points="16,62 12,54 20,54" fill="#10b981" />
                  <polygon points="16,2 12,10 20,10" fill="#f59e0b" />
                </svg>
                <span className="text-[9px] font-mono font-bold text-amber-600 rotate-90 my-3 tracking-widest whitespace-nowrap">
                  NET CASH PROOF
                </span>
              </div>
              <div className="lg:hidden flex flex-col items-center justify-center gap-1 text-[11px] font-mono font-bold text-slate-500 py-2 border-y border-slate-200 w-full">
                <span className="text-emerald-700">DAY-0 BASELINES FEED PRODUCT B ───►</span>
                <span className="text-amber-700">◄─── VERIFIED AD ECONOMICS LOCK RETENTION</span>
              </div>
            </div>

            {/* Right Card: Product B */}
            <div className="lg:col-span-5 rounded-xl border border-amber-200/80 bg-amber-50/20 p-6 relative hover:border-amber-300 transition-colors">
              <div className="flex items-center justify-between mb-4">
                <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-amber-800">
                  PRODUCT B: DELIVER &amp; RETAIN
                </span>
                <span className="text-xs font-semibold text-amber-900 bg-amber-100/90 px-2 py-0.5 rounded font-mono">
                  Delivery &amp; Economic Plane
                </span>
              </div>
              <h3 className="text-xl font-bold text-[#0f0f0e] mb-2">
                Cross-Brand Benchmarking &amp; Ad Economic Accounting
              </h3>
              <p className="text-sm text-slate-600 mb-4 leading-relaxed">
                A cross-business intelligence and action architecture connecting multimodal creative vectors, ad auction behavior, and verified Shopify net cash across brands.
              </p>
              <div className="space-y-2.5 pt-3 border-t border-amber-200/60 text-xs text-slate-700">
                <div className="flex items-start gap-2">
                  <div className="h-1.5 w-1.5 rounded-full bg-amber-600 mt-1.5 shrink-0" />
                  <span>
                    <strong className="text-slate-900">Cross-Brand Benchmark Moat</strong> pooling performance intelligence across your agency portfolio &amp; vertical
                  </span>
                </div>
                <div className="flex items-start gap-2">
                  <div className="h-1.5 w-1.5 rounded-full bg-amber-600 mt-1.5 shrink-0" />
                  <span>
                    <strong className="text-slate-900">True Ad Economic Accounting</strong> pairing Human, Hybrid &amp; AI ads with Shopify net profit, refunds &amp; LTV
                  </span>
                </div>
                <div className="flex items-start gap-2">
                  <div className="h-1.5 w-1.5 rounded-full bg-amber-600 mt-1.5 shrink-0" />
                  <span>
                    <strong className="text-slate-900">System of Intelligence + Action</strong> driving pre-flight validation, live Slack circuit-breakers &amp; Day-0 proof memos
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
