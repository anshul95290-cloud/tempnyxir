"use client";

import React from "react";
import { ArrowRight, Clock, CheckCircle } from "lucide-react";
import { LINKS } from "@/config/links";

export default function PilotSection() {
  const steps = [
    {
      days: "Days 1–3",
      title: "Research & Map",
      desc: "We analyze your agency's niche, historical client data, sales bottlenecks, and creative frameworks to finalize your bespoke micro-SaaS concept.",
    },
    {
      days: "Days 4–10",
      title: "Custom Build",
      desc: "We design and code your white-labeled diagnostic engine (`audit.[agency].com`) and configure your pre-flight creative gate and Slack circuit-breaker alerts.",
    },
    {
      days: "Days 11–14",
      title: "Go Live & Test",
      desc: "Deploy telemetry links across your acquisition channels, test live prospect show-up rates, and run draft ads through the pre-flight gate with zero team disruption.",
    },
  ];

  return (
    <section id="pilot" className="py-20 md:py-32 bg-[#f8f7f4] border-b border-[#e5e3dc] relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />

      <div className="mx-auto max-w-[1280px] px-6 sm:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-amber-800 bg-amber-50/90 border border-amber-200/80 px-4 py-1.5 rounded-full mb-4">
            <Clock className="h-3.5 w-3.5 text-amber-700" />
            <span>Phase-0 Pilot Offer · Max 4 Partner Agencies / Month</span>
          </div>

          <h2 className="text-3xl font-black tracking-tight text-[#0f0f0e] sm:text-5xl mt-2 mb-4">
            Try Nyxir With Our 14-Day Pilot Program
          </h2>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            Zero disruption to your current team or ad workflows. We engineer and launch your custom acquisition &amp; cross-brand infrastructure before you commit to a long-term partnership.
          </p>
        </div>

        {/* 3-Step Roadmap */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-14">
          {steps.map((s, idx) => (
            <div
              key={idx}
              className="rounded-2xl border border-[#e5e3dc] bg-white p-7 shadow-xs relative group hover:border-emerald-300 transition-all flex flex-col justify-between"
            >
              <div>
                <span className="inline-block px-3 py-1 rounded-md bg-emerald-50 text-emerald-800 font-mono text-xs font-bold mb-4 border border-emerald-100">
                  {s.days}
                </span>
                <h3 className="text-lg font-bold text-[#0f0f0e] mb-2">
                  {s.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {s.desc}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-slate-100 flex items-center gap-2 text-xs font-semibold text-slate-500 font-mono">
                <CheckCircle className="h-4 w-4 text-emerald-600 shrink-0" />
                <span>100% Done-For-You by Nyxir</span>
              </div>
            </div>
          ))}
        </div>

        {/* Closing Action Banner */}
        <div className="max-w-3xl mx-auto rounded-3xl bg-[#0F0F0E] text-[#F8F7F4] p-8 sm:p-12 text-center shadow-xl border border-[#262624]">
          <h3 className="text-2xl sm:text-3xl font-black mb-3">
            Ready to Deploy Your AI Infrastructure Moat?
          </h3>
          <p className="text-slate-300 text-sm sm:text-base max-w-xl mx-auto mb-8 leading-relaxed">
            Schedule a focused 15-minute pilot call to see if your agency is a good fit for this month&apos;s 4 pilot onboarding slots.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={LINKS.primaryCta}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex h-13 items-center justify-center rounded-xl bg-emerald-500 px-8 text-base font-bold text-slate-950 shadow-md hover:bg-emerald-400 hover:-translate-y-0.5 transition-all duration-200"
            >
              Book Your 15-Min Pilot Call
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>

            <a
              href={LINKS.email}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex h-13 items-center justify-center rounded-xl border border-slate-700 bg-slate-900/80 px-6 text-sm font-semibold text-slate-300 hover:text-white hover:bg-slate-800 transition-colors"
            >
              Prefer email? Contact us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
