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

          {/* Subheadline updated per request */}
          <p className="mx-auto max-w-2xl text-base sm:text-lg md:text-xl text-slate-600 leading-relaxed mb-8 md:mb-10 animate-fade-in-up font-medium">
            Build up an infrastructure that can make you irreplaceable.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up mb-16">
            <a
              href={LINKS.primaryCta}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex h-13 items-center justify-center rounded-xl bg-[#0f0f0e] px-8 text-base font-bold text-white shadow-md hover:bg-slate-800 hover:-translate-y-0.5 transition-all duration-200"
            >
              Get a Pilot
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
        <div className="max-w-6xl mx-auto rounded-2xl border border-[#e5e3dc] bg-white p-6 sm:p-8 shadow-xl shadow-slate-200/40 animate-fade-in-up">
          <div className="grid grid-cols-1 lg:grid-cols-11 gap-6 items-start">
            
            {/* Left Card: Product A */}
            <div className="lg:col-span-5 rounded-xl border border-emerald-200/80 bg-emerald-50/30 p-6 sm:p-7 relative hover:border-emerald-300 transition-colors flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-emerald-800">
                    PRODUCT A: ACQUIRE &amp; ONBOARD
                  </span>
                  <span className="text-xs font-semibold text-emerald-900 bg-emerald-100/90 px-2 py-0.5 rounded font-mono">
                    Client Journey Engine
                  </span>
                </div>
                
                <h3 className="text-xl font-bold text-[#0f0f0e] mb-1.5">
                  Agency Acquisition &amp; Client Journey Engine
                </h3>
                
                <p className="text-xs sm:text-sm font-bold text-emerald-950 mb-2 leading-snug">
                  Differentiate your agency. Improve close rates. Win better clients. Charge a premium.
                </p>
                
                <p className="text-xs sm:text-sm text-slate-600 mb-5 leading-relaxed">
                  A custom-researched, branded diagnostic micro-SaaS built around your agency&apos;s niche, expertise and frameworks—turning your expertise into an interactive prospect experience and connecting acquisition, sales, onboarding and ongoing proof of value.
                </p>

                <div className="space-y-3 pt-4 border-t border-emerald-200/60 text-xs text-slate-700">
                  <div className="flex items-start gap-2">
                    <div className="h-1.5 w-1.5 rounded-full bg-emerald-600 mt-1.5 shrink-0" />
                    <div>
                      <strong className="text-slate-900 block mb-0.5">Stand Out &amp; Get Discovered</strong>
                      <span className="text-slate-600 leading-relaxed block">
                        Differentiate your agency with a branded diagnostic prospects can actually use. Showcase your expertise beyond another website, pitch deck or generic sales promise, with opportunities to improve visibility across AI-driven discovery.
                      </span>
                    </div>
                  </div>

                  <div className="flex items-start gap-2">
                    <div className="h-1.5 w-1.5 rounded-full bg-emerald-600 mt-1.5 shrink-0" />
                    <div>
                      <strong className="text-slate-900 block mb-0.5">Convert More Opportunities Into Clients</strong>
                      <span className="text-slate-600 leading-relaxed block">
                        Give prospects a reason to engage with your expertise before the sales call. Track every acquisition channel through booked calls and closed retainers to understand what improves conversion and which sources bring the most valuable clients.
                      </span>
                    </div>
                  </div>

                  <div className="flex items-start gap-2">
                    <div className="h-1.5 w-1.5 rounded-full bg-emerald-600 mt-1.5 shrink-0" />
                    <div>
                      <strong className="text-slate-900 block mb-0.5">Win Better Clients &amp; Charge More</strong>
                      <span className="text-slate-600 leading-relaxed block">
                        Capture prospect pain points, expectations and growth goals early. Understand which client profiles and acquisition channels lead to stronger commercial opportunities, helping you focus on better-fit prospects.
                      </span>
                    </div>
                  </div>

                  <div className="flex items-start gap-2">
                    <div className="h-1.5 w-1.5 rounded-full bg-emerald-600 mt-1.5 shrink-0" />
                    <div>
                      <strong className="text-slate-900 block mb-0.5">Onboard Faster &amp; Eliminate Lost Context</strong>
                      <span className="text-slate-600 leading-relaxed block">
                        Carry sales conversations, client expectations, pain points and Day-0 baselines into structured onboarding—reducing repetitive questions, manual handoffs and account-manager preparation.
                      </span>
                    </div>
                  </div>

                  <div className="flex items-start gap-2">
                    <div className="h-1.5 w-1.5 rounded-full bg-emerald-600 mt-1.5 shrink-0" />
                    <div>
                      <strong className="text-slate-900 block mb-0.5">Prove Value &amp; Strengthen Retention</strong>
                      <span className="text-slate-600 leading-relaxed block">
                        Track client progress against their starting point through recurring performance audits and relevant category benchmarks.
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Center Animated Bi-Directional Bridge */}
            <div className="lg:col-span-1 flex flex-col items-center justify-center text-center py-4 lg:py-16">
              <div className="hidden lg:flex flex-col items-center gap-2">
                <span className="text-[9px] font-mono font-bold text-slate-400 rotate-90 my-4 tracking-widest whitespace-nowrap">
                  DAY-0 BASELINES
                </span>
                <svg className="w-8 h-20" viewBox="0 0 32 80" fill="none">
                  <path
                    d="M16 4V76"
                    stroke="#10b981"
                    strokeWidth="2"
                    strokeDasharray="4 4"
                    className="animate-flow-dash"
                  />
                  <polygon points="16,78 12,70 20,70" fill="#10b981" />
                  <polygon points="16,2 12,10 20,10" fill="#f59e0b" />
                </svg>
                <span className="text-[9px] font-mono font-bold text-amber-600 rotate-90 my-4 tracking-widest whitespace-nowrap">
                  NET CASH PROOF
                </span>
              </div>
              <div className="lg:hidden flex flex-col items-center justify-center gap-1 text-[11px] font-mono font-bold text-slate-500 py-2 border-y border-slate-200 w-full">
                <span className="text-emerald-700">DAY-0 BASELINES FEED PRODUCT B ───►</span>
                <span className="text-amber-700">◄─── VERIFIED AD ECONOMICS LOCK RETENTION</span>
              </div>
            </div>

            {/* Right Card: Product B */}
            <div className="lg:col-span-5 rounded-xl border border-amber-200/80 bg-amber-50/20 p-6 sm:p-7 relative hover:border-amber-300 transition-colors flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-amber-800">
                    PRODUCT B: DELIVER &amp; RETAIN
                  </span>
                  <span className="text-xs font-semibold text-amber-900 bg-amber-100/90 px-2 py-0.5 rounded font-mono">
                    Delivery Action Plane
                  </span>
                </div>
                
                <h3 className="text-xl font-bold text-[#0f0f0e] mb-1.5">
                  Cross-Brand Intelligence &amp; Delivery Action Plane
                </h3>
                
                <p className="text-xs sm:text-sm font-bold text-amber-950 mb-2 leading-snug">
                  Make better delivery decisions across every brand you manage.
                </p>
                
                <p className="text-xs sm:text-sm text-slate-600 mb-5 leading-relaxed">
                  NYXIR connects performance signals, market intelligence and real Shopify economics to help your team spot risks earlier, act on opportunities, improve delivery across accounts, and demonstrate the value of your agency.
                </p>

                <div className="space-y-3 pt-4 border-t border-amber-200/60 text-xs text-slate-700">
                  <div className="flex items-start gap-2">
                    <div className="h-1.5 w-1.5 rounded-full bg-amber-600 mt-1.5 shrink-0" />
                    <div>
                      <strong className="text-slate-900 block mb-0.5">Cross-Brand Intelligence</strong>
                      <span className="text-slate-600 leading-relaxed block">
                        Learn from performance across your brand portfolio. Identify patterns, benchmark results, spot emerging risks and uncover opportunities that a single ad account cannot reveal.
                      </span>
                    </div>
                  </div>

                  <div className="flex items-start gap-2">
                    <div className="h-1.5 w-1.5 rounded-full bg-amber-600 mt-1.5 shrink-0" />
                    <div>
                      <strong className="text-slate-900 block mb-0.5">True Ad Economics</strong>
                      <span className="text-slate-600 leading-relaxed block">
                        Understand what actually drives profit—not just reported ROAS. Connect creative and production decisions to customer acquisition costs, refunds, contribution margin and customer lifetime value.
                      </span>
                    </div>
                  </div>

                  <div className="flex items-start gap-2">
                    <div className="h-1.5 w-1.5 rounded-full bg-amber-600 mt-1.5 shrink-0" />
                    <div>
                      <strong className="text-slate-900 block mb-0.5">Intelligence That Drives Action</strong>
                      <span className="text-slate-600 leading-relaxed block">
                        Turn signals into next steps: pre-launch creative assessments, actionable delivery alerts, clearer production briefs and proof-of-value reports that show clients what your work delivers.
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
