"use client";

import React from "react";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { LINKS } from "@/config/links";

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-12 pb-20 md:pt-20 md:pb-32 bg-[#fafaf9] border-b border-slate-200/80">
      {/* Subtle architectural grid pattern */}
      <div className="absolute inset-0 -z-10 bg-grid-pattern opacity-60" />

      <div className="mx-auto max-w-[1280px] px-6 sm:px-8">
        <div className="max-w-4xl mx-auto text-center">
          {/* Subtle unboxed metadata kicker */}
          <div className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-teal-800 bg-teal-50 border border-teal-200/80 rounded-full px-4 py-1.5 mb-6 animate-fade-in-up">
            <span className="font-bold">DFY AI Infrastructure</span>
            <span aria-hidden="true">·</span>
            <span>Built for E-Com Agencies</span>
            <span aria-hidden="true">·</span>
            <span className="text-teal-900 font-bold">We Never Run Ads</span>
          </div>

          {/* Punchy Headline */}
          <h1 className="text-4xl font-black tracking-tight text-slate-900 sm:text-5xl md:text-6xl lg:text-7xl leading-[1.08] animate-fade-in-up mb-6">
            Own the Software <br className="hidden sm:inline" />
            <span className="bg-gradient-to-r from-teal-700 via-teal-600 to-slate-800 bg-clip-text text-transparent">
              Brands Can’t Replace.
            </span>
          </h1>

          {/* Punchy Subhead */}
          <p className="mx-auto max-w-2xl text-lg sm:text-xl text-slate-600 leading-relaxed mb-8 md:mb-10 animate-fade-in-up font-normal">
            Custom acquisition tools to win clients (Product A). Profit intelligence to keep them (Product B). Built exclusively for e-commerce performance agencies.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up mb-14">
            <a
              href={LINKS.primaryCta}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex h-13 items-center justify-center rounded-xl bg-slate-900 px-8 text-base font-bold text-white shadow-lg hover:bg-slate-800 hover:-translate-y-0.5 transition-all duration-200"
            >
              Start 14-Day Pilot
              <ArrowRight className="ml-2.5 h-4 w-4" />
            </a>

            <a
              href={LINKS.liveDemo}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex h-13 items-center justify-center rounded-xl border border-slate-300 bg-white/90 backdrop-blur-sm px-7 text-base font-semibold text-slate-700 hover:text-slate-900 hover:border-slate-400 hover:bg-white transition-all duration-200"
            >
              Try Live Demo
              <ArrowUpRight className="ml-2 h-4 w-4 text-teal-600" />
            </a>
          </div>
        </div>

        {/* Visual Dual-Pillar Split Bridge */}
        <div className="max-w-5xl mx-auto rounded-2xl border border-slate-200/90 bg-white p-6 sm:p-8 shadow-xl shadow-slate-200/50 animate-fade-in-up">
          <div className="grid grid-cols-1 lg:grid-cols-11 gap-6 items-center">
            {/* Column 1: Product A */}
            <div className="lg:col-span-5 rounded-xl border border-teal-200/70 bg-teal-50/40 p-6 relative hover:border-teal-300 transition-colors">
              <div className="flex items-center justify-between mb-4">
                <span className="text-[11px] font-bold uppercase tracking-wider text-teal-700">
                  PRODUCT A: GET CLIENTS
                </span>
                <span className="text-xs font-semibold text-teal-900 bg-teal-100/80 px-2 py-0.5 rounded">
                  Acquisition Plane
                </span>
              </div>
              <h3 className="text-xl font-black text-slate-900 mb-2">
                Custom Micro-SaaS Tool
              </h3>
              <p className="text-sm text-slate-600 mb-4 leading-relaxed">
                White-labeled diagnostic tool built on your frameworks that turns cold traffic into locked discovery calls.
              </p>
              <div className="space-y-2 pt-2 border-t border-teal-200/50 text-xs font-medium text-slate-700">
                <div className="flex items-center gap-2">
                  <div className="h-1.5 w-1.5 rounded-full bg-teal-600" />
                  <span><strong>85%+ Call Show-Rates</strong> via locked fix blueprints</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="h-1.5 w-1.5 rounded-full bg-teal-600" />
                  <span><strong>1-Click Slack Briefing</strong> with Day-0 baselines</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="h-1.5 w-1.5 rounded-full bg-teal-600" />
                  <span>Multi-channel links across LinkedIn, DMs, & email</span>
                </div>
              </div>
            </div>

            {/* Middle: Mutual Bridge Flow */}
            <div className="lg:col-span-1 flex flex-col items-center justify-center text-center py-2 lg:py-0">
              <div className="hidden lg:flex flex-col items-center gap-3">
                <div className="text-[10px] uppercase font-mono font-bold text-slate-400 rotate-90 my-2">
                  FEEDS
                </div>
                <div className="w-10 h-0.5 bg-slate-300" />
                <div className="text-[10px] uppercase font-mono font-bold text-teal-600 rotate-90 my-2">
                  PROVES
                </div>
              </div>
              <div className="lg:hidden flex items-center justify-center gap-3 text-xs font-semibold text-slate-500 py-1">
                <span>Day-0 Baselines Feed Product B</span>
                <span>·</span>
                <span>Net Cash Locks Retainers</span>
              </div>
            </div>

            {/* Column 2: Product B */}
            <div className="lg:col-span-5 rounded-xl border border-amber-200/70 bg-amber-50/30 p-6 relative hover:border-amber-300 transition-colors">
              <div className="flex items-center justify-between mb-4">
                <span className="text-[11px] font-bold uppercase tracking-wider text-amber-700">
                  PRODUCT B: KEEP CLIENTS
                </span>
                <span className="text-xs font-semibold text-amber-900 bg-amber-100/80 px-2 py-0.5 rounded">
                  Delivery Plane
                </span>
              </div>
              <h3 className="text-xl font-black text-slate-900 mb-2">
                Score Ads Before Spend
              </h3>
              <p className="text-sm text-slate-600 mb-4 leading-relaxed">
                Pre-flight creative scoring and live Slack circuit-breakers connecting ad tests to verified Shopify net cash.
              </p>
              <div className="space-y-2 pt-2 border-t border-amber-200/50 text-xs font-medium text-slate-700">
                <div className="flex items-center gap-2">
                  <div className="h-1.5 w-1.5 rounded-full bg-amber-600" />
                  <span><strong>Stop Meta Budget Burn</strong> with instant Slack alerts</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="h-1.5 w-1.5 rounded-full bg-amber-600" />
                  <span><strong>Prove Net Shopify Cash</strong> vs. high refund rates</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="h-1.5 w-1.5 rounded-full bg-amber-600" />
                  <span>Destroy Month-2 amnesia with Day-0 proof reports</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
